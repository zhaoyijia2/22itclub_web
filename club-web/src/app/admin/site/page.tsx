import { createClient } from "@/lib/supabase/server";
import SiteForm from "./SiteForm";

export default async function SitePage() {

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .limit(1)
    .single();

  if (error) {

    return (

      <main className="p-10">

        <div className="max-w-5xl mx-auto">

          <div className="bg-red-50 border border-red-200 rounded-xl p-8">

            <h1 className="text-3xl font-bold mb-4">

              网站设置

            </h1>

            <p className="text-red-600">

              未找到网站设置数据，请确认 site_settings 表中存在 id=1 的记录。

            </p>

          </div>

        </div>

      </main>

    );

  }

  return (

    <main className="p-10">

      <div className="max-w-5xl mx-auto">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">

            网站设置

          </h1>

          <p className="text-gray-500 mt-2">

            在这里统一管理关于社团、加入我们、联系我们页面。

          </p>

        </div>

        <SiteForm settings={data} />

      </div>

    </main>

  );

}