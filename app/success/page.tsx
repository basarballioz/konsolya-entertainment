"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import { signOut } from "@/connections/signOut";
import { useRouter } from 'next/navigation';
import { supabase } from "@/lib/supabaseClient";

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      console.log("USER INFO: ", user);
    };

    getUser();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    router.replace("/");
  };

  return (
    <>
      <Head>
        <title>Sign In Page | Your go-to destination for gaming excitement at home</title>
        <meta name="description" content="This is the Sign In Page for Konsolya.com" />
      </Head>

      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <p>Login Successful</p>

        <button onClick={handleSignOut}>Sign Out</button>
      </section>
    </>
  );
};

export default SuccessPage;
