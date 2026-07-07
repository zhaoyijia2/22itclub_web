import { createClient } from "@/lib/supabase/server";

export default async function AboutPage() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("site_settings")
    .select("*")
    .eq("id", 1)
    .single();

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-6">
          {data?.about_title}
        </h1>

        <p className="text-gray-500 text-lg mb-10">
          {data?.about_intro}
        </p>

        <article
          className="
            prose
            prose-lg
            max-w-none
            whitespace-pre-wrap
          "
        >
          {data?.about_content}
        </article>

      </div>
    </main>
  );
}