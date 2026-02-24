import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nqjnivtlnrarzapnxsri.supabase.co";
const supabaseAnonKey = "sb_publishable_xl4eV_1r_60JpdugXedVtg_-UjICTsf ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
