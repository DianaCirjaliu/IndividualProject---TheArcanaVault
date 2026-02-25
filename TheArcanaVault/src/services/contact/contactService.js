import { supabase } from "../supabaseClient";

export const sendContactMessage = async (formData) => {
  const { data, error } = await supabase
    .from("contact_messages")
    .insert([formData]);

  if (error) throw error;
  return data;
};
