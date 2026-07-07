import { createClient } from "@/lib/supabase/server";

export default async function JoinPage() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("site_settings")
    .select("*")
    .eq("id", 1)
    .single();

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-8">
          {data?.join_title}
        </h1>

        <div
          className="
            whitespace-pre-wrap
            text-lg
            leading-9
            mb-12
          "
        >
          {data?.join_content}
        </div>

        {data?.join_link && (
          <a
            href={data.join_link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-red-900
              hover:bg-red-800
              text-white
              px-8
              py-4
              rounded-lg
              transition
            "
          >
            立即报名
          </a>
        )}

      </div>
    </main>
  );
}