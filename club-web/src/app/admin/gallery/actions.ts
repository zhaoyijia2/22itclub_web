"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function createGallery(formData: FormData) {
  const supabase = await createClient();

  const title = (formData.get("title") as string)?.trim();
  const image = (formData.get("image") as string)?.trim();
  const category = (formData.get("category") as string)?.trim();

  if (!title) throw new Error("请输入标题");
  if (!image) throw new Error("请上传图片");
  if (!category) throw new Error("请选择分类");

  const { error } = await supabase
    .from("gallery")
    .insert([
      {
        title,
        image,
        category,
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
}

export async function updateGallery(data: {
  id: number;
  title: string;
  image: string;
  category: string;
}) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("gallery")
    .update({
      title: data.title,
      image: data.image,
      category: data.category,
    })
    .eq("id", data.id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
}

export async function deleteGallery(id: number) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("gallery")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
}