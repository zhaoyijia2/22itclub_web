import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import GalleryForm from "../../GalleryForm";

export default async function EditGalleryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const supabase = await createClient();

  const { data: gallery, error } = await supabase
    .from("gallery")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !gallery) {
    notFound();
  }

  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        编辑图片
      </h1>

      <GalleryForm
        mode="edit"
        gallery={gallery}
      />

    </main>
  );
}