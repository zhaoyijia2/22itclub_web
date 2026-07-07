import { createClient } from "@/lib/supabase/server";
import GalleryGrid from "./GalleryGrid";

const categoryMap = {
  award: "我们的奖项",
  group: "我们的合照",
  other: "其他",
};

export default async function GalleryPage() {
  const supabase = await createClient();

  const { data: gallery } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  const awards = gallery?.filter((i) => i.category === "award") ?? [];
  const groups = gallery?.filter((i) => i.category === "group") ?? [];
  const others = gallery?.filter((i) => i.category === "other") ?? [];

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-12">
          社团风采
        </h1>

        <GalleryGrid
          title={categoryMap.award}
          list={awards}
        />

        <GalleryGrid
          title={categoryMap.group}
          list={groups}
        />

        <GalleryGrid
          title={categoryMap.other}
          list={others}
        />

      </div>
    </main>
  );
} 