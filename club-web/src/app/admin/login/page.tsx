"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/browser";

export default function LoginPage() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);

  async function login(){

    if(loading) return;

    setLoading(true);

    const supabase = createClient();

    const { error } =
        await supabase.auth.signInWithPassword({

      email,
      password

    });

    if(error){

      alert(error.message);

      setLoading(false);

      return;

    }

    location.href="/admin";

  }

  return(

    <main className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-8">

          IT社团后台

        </h1>

        <div className="space-y-5">

          <input

            className="w-full border rounded-lg p-3"

            placeholder="管理员邮箱"

            value={email}

            onChange={(e)=>setEmail(e.target.value)}

          />

          <input

            type="password"

            className="w-full border rounded-lg p-3"

            placeholder="密码"

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

          />

          <button

            onClick={login}

            disabled={loading}

            className="w-full bg-blue-600 text-white py-3 rounded-lg"

          >

            {loading ? "登录中..." : "登录"}

          </button>

        </div>

      </div>

    </main>

  );

}