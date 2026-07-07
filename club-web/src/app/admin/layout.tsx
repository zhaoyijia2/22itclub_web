import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import AdminLogoutButton from "@/components/AdminLogoutButton";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gray-100 flex">

      <aside className="w-64 bg-white border-r shadow-sm flex flex-col">

        <div className="p-6 text-2xl font-bold border-b">
          社团后台
        </div>

        <nav className="flex flex-col p-4 space-y-2 flex-1">

          <Link
            href="/admin"
            className="rounded-lg px-4 py-3 hover:bg-red-50 hover:text-red-900"
          >
            🏠 仪表盘
          </Link>

          <Link
            href="/admin/news"
            className="rounded-lg px-4 py-3 hover:bg-red-50 hover:text-red-900"
          >
            📰 新闻管理
          </Link>

          <Link
            href="/admin/gallery"
            className="rounded-lg px-4 py-3 hover:bg-red-50 hover:text-red-900"
          >
            🖼 社团风采
          </Link>

          <Link
            href="/admin/site"
            className="rounded-lg px-4 py-3 hover:bg-red-50 hover:text-red-900"
          >
            ⚙ 网站设置
          </Link>

        </nav>

        <div className="border-t p-4">

          <div className="text-sm text-gray-500 mb-4">
            当前登录：
            <br />
            {user?.email ?? "未登录"}
          </div>

          <AdminLogoutButton />

        </div>

      </aside>

      <main className="flex-1">
        {children}
      </main>

    </div>
  );
}