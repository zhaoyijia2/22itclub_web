import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 60; 
// 🔥 关键：ISR缓存 60秒（性能提升最大）

export default async function Home() {
  const supabase = await createClient();

  const { data: settings } = await supabase
  .from("site_settings")
  .select("*")
  .eq("id", 1)
  .single();
  const { data: news } = await supabase
    .from("news")
    .select("id,title,date") // 🔥 只取需要字段（减少数据量）
    .order("id", { ascending: false }) // 🔥 用 id 排序更快
    .limit(6);

  return (
    <main className="pt-20">

      {/* Banner */}
      <section className="hidden md:block">
        <img
          src="/banner.jpg"
          className="w-full h-[520px] object-cover"
        />
      </section>

      <section className="block md:hidden">
        <img
          src="/banner.jpg"
          className="w-full"
        />
      </section>

      {/* 加入我们 */}
      <section className="py-12">
        <div className="flex justify-center">
          <Link
            href="/join"
            className="bg-red-900 text-white px-10 py-4 rounded-xl"
          >
            加入我们 →
          </Link>
        </div>
      </section>

      {/* 数据 */}
      <section className="bg-red-900 text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 text-center">
          <Data
  number={settings?.home_stat1_value ?? ""}
  text={settings?.home_stat1_name ?? ""}
/>

<Data
  number={settings?.home_stat2_value ?? ""}
  text={settings?.home_stat2_name ?? ""}
/>

<Data
  number={settings?.home_stat3_value ?? ""}
  text={settings?.home_stat3_name ?? ""}
/>

<Data
  number={settings?.home_stat4_value ?? ""}
  text={settings?.home_stat4_name ?? ""}
/>

<Data
  number={settings?.home_stat5_value ?? ""}
  text={settings?.home_stat5_name ?? ""}
/>

<Data
  number={settings?.home_stat6_value ?? ""}
  text={settings?.home_stat6_name ?? ""}
/>
        </div>
      </section>

      {/* 新闻 */}
      <section className="px-5 md:px-20 py-16">

        <div className="flex justify-between mb-10">
          <h2 className="text-4xl font-bold">新闻资讯</h2>
          <Link href="/news" className="text-gray-500">
            查看更多 →
          </Link>
        </div>

        <div className="space-y-5">

          {news?.map((item: any) => (
            <Link key={item.id} href={`/news/${item.id}`}>
              <div className="flex justify-between border-b pb-5 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-900 rounded-full" />
                  <p>{item.title}</p>
                </div>
                <span className="text-gray-400">{item.date}</span>
              </div>
            </Link>
          ))}

        </div>

      </section>
      {/* 友情链接 */}
      <section className="bg-gray-100 border-t py-10">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-6">
            友情链接
          </h2>

          <div className="flex flex-wrap gap-4">

            <a
              href="http://zysdesezx.m.lexiangcity.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                rounded-lg
                border
                bg-white
                px-6
                py-3
                hover:border-red-900
                hover:text-red-900
                transition
              "
            >
              学校官方网站 →
            </a>

          </div>

        </div>

      </section>
    </main>
  );
}

function Data({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div>
      <h3 className="text-4xl font-bold">{number}</h3>
      <p className="text-gray-200 mt-2">{text}</p>
    </div>
  );
}