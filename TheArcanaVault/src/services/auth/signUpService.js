import { supabase } from "../supabaseClient";

export const registerNewUser = async (email, password, username, zodiac) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        display_name: username,
        zodiac_sign: zodiac,
      },
    },
  });

  if (error) return { success: false, message: error.message };

  const { error: dbError } = await supabase.from("profiles").insert([
    {
      id: data.user.id,
      email: email,
      username: username,
      zodiac: zodiac,
    },
  ]);

  if (dbError) return { success: false, message: dbError.message };

  return { success: true, user: data.user };
};
