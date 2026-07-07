import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import NewsForm from "../../NewsForm";

export default async function EditNewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const supabase = await createClient();

  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !news) {
    notFound();
  }

  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        编辑新闻
      </h1>

      <NewsForm
        mode="edit"
        news={news}
      />

    </main>
  );
}