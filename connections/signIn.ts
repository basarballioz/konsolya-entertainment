import { supabase } from "@/lib/supabaseClient";

export async function signInWithGoogle() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${siteUrl}`,
    },
  });

  if (error) console.error("Error signing in with Google:", error);
  if (data) console.log("Sign in with Google successful:", data);
}
