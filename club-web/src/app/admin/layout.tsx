import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* 左侧菜单 */}

      <aside className="w-64 bg-white border-r shadow-sm">

        <div className="p-6 text-2xl font-bold border-b">

          社团后台

        </div>

        <nav className="flex flex-col p-4 space-y-2">

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

      </aside>

      {/* 内容 */}

      <main className="flex-1">

        {children}

      </main>

    </div>
  );
}