"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function deleteNews(id: number) {
  const { error } = await supabase
    .from("news")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/news");
}