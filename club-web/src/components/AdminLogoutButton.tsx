"use client";

import { createClient } from "@/lib/supabase/client";

export default function AdminLogoutButton() {
  async function logout() {
    const supabase = createClient();

    await supabase.auth.signOut();

    window.location.href = "/admin/login";
  }

  return (
    <button
      onClick={logout}
      className="w-full rounded-lg bg-red-900 hover:bg-red-800 text-white py-2 transition"
    >
      退出登录
    </button>
  );
}