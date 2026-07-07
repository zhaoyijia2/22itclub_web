import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NewsDetail({ params }: Props) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: news } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (!news) {
    notFound();
  }

  return (
    <main className="pt-28 pb-20 px-6">

      <div className="max-w-4xl mx-auto">

        <Link
          href="/news"
          className="text-red-900 hover:underline"
        >
          ← 返回新闻列表
        </Link>

        <h1 className="text-4xl font-bold mt-8">
          {news.title}
        </h1>

        <p className="text-gray-500 mt-3">
          发布时间：{news.date}
        </p>

        {news.cover && (
          <img
            src={news.cover}
            alt={news.title}
            className="w-full rounded-xl mt-8"
          />
        )}

        <article
          className="
            prose
            prose-lg
            max-w-none
            mt-10
            whitespace-pre-wrap
          "
        >
          {news.content}
        </article>

      </div>

    </main>
  );
}