import { supabase } from "../supabaseClient";

export const loginUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    return {
      success: true,
      user: data.user,
      isAdmin: profile?.role === "admin",
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
