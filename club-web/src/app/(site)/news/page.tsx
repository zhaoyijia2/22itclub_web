import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function NewsPage() {
  const supabase = await createClient();

  const { data: news } = await supabase
    .from("news")
    .select("*")
    .order("date", { ascending: false });

  return (
    <main className="pt-28 pb-20 bg-gray-50 min-h-screen">

      <div className="max-w-6xl mx-auto px-5">

        <h1 className="text-4xl font-bold mb-2">
          新闻资讯
        </h1>

        <p className="text-gray-500 mb-10">
          IT 社团最新动态、活动通知、新闻资讯
        </p>

        {news?.length === 0 && (
          <div className="bg-white rounded-xl shadow p-12 text-center text-gray-500">
            暂无新闻
          </div>
        )}

        <div className="space-y-8">

          {news?.map((item: any) => (

            <Link
              key={item.id}
              href={`/news/${item.id}`}
            >

              <div
                className="
                bg-white
                rounded-xl
                shadow
                hover:shadow-xl
                duration-300
                overflow-hidden
                cursor-pointer
                md:flex
                "
              >

                {item.cover && (
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="
                    w-full
                    md:w-72
                    h-56
                    object-cover
                    "
                  />
                )}

                <div className="p-6 flex-1">

                  <h2 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h2>

                  <p
                    className="
                    text-gray-600
                    line-clamp-3
                    whitespace-pre-wrap
                    "
                  >
                    {item.content}
                  </p>

                  <div className="mt-6 flex justify-between items-center">

                    <span className="text-gray-400">
                      {item.date}
                    </span>

                    <span className="text-red-900 font-semibold">
                      查看详情 →
                    </span>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>
  );
}