import DeleteButton from "@/components/DeleteButton";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function NewsAdminPage() {
  const supabase = await createClient();
  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .order("date", { ascending: false });

  return (
    <main className="p-10">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          新闻管理
        </h1>

        <Link
          href="/admin/news/new"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          + 新建新闻
        </Link>

      </div>

      {error && (
        <div className="text-red-500">
          {error.message}
        </div>
      )}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-4">ID</th>

              <th className="text-left p-4">标题</th>

              <th className="text-left p-4">发布时间</th>

              <th className="text-center p-4">操作</th>

            </tr>

          </thead>

          <tbody>

            {news?.map((item) => (

              <tr
                key={item.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">
                  {item.id}
                </td>

                <td className="p-4">
                  {item.title}
                </td>

                <td className="p-4">
                  {item.date}
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/admin/news/${item.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      编辑
                    </Link>

                    <DeleteButton id={item.id} />

                  </div>

                </td>

              </tr>

            ))}

            {news?.length === 0 && (

              <tr>

                <td
                  colSpan={4}
                  className="text-center py-10 text-gray-400"
                >
                  暂无新闻
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </main>
  );
}