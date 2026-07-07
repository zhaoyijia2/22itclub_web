import { createClient } from "@/lib/supabase/server";

export default async function ContactPage() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("site_settings")
    .select("*")
    .eq("id", 1)
    .single();

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-12">
          联系我们
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold mb-6">
              正社长
            </h2>

            <p>姓名：{data?.president_name}</p>
            <p>班级：{data?.president_class}</p>
            <p>电话：{data?.president_phone}</p>
            <p>QQ：{data?.president_qq}</p>
          </div>

          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold mb-6">
              副社长
            </h2>

            <p>姓名：{data?.vice_name}</p>
            <p>班级：{data?.vice_class}</p>
            <p>电话：{data?.vice_phone}</p>
            <p>QQ：{data?.vice_qq}</p>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-8 mt-10">
          <h2 className="text-2xl font-bold mb-4">
            社团地址
          </h2>

          <p className="whitespace-pre-wrap">
            {data?.club_address}
          </p>
        </div>

      </div>
    </main>
  );
}