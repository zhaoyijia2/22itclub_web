"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

function validate(title: string, content: string, date: string) {
  if (!title.trim()) {
    throw new Error("新闻标题不能为空");
  }

  if (!content.trim()) {
    throw new Error("新闻正文不能为空");
  }

  if (!date) {
    throw new Error("请选择发布日期");
  }
}

export async function createNews(formData: FormData) {
  const supabase = await createClient();

  const title = (formData.get("title") as string) ?? "";
  const content = (formData.get("content") as string) ?? "";
  const cover = (formData.get("cover") as string) ?? "";
  const date = (formData.get("date") as string) ?? "";

  validate(title, content, date);

  const { error } = await supabase
    .from("news")
    .insert([
      {
        title,
        content,
        cover,
        date,
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/news");
  revalidatePath("/admin/news");
}

export async function updateNews(data: {
  id: number;
  title: string;
  content: string;
  cover: string;
  date: string;
}) {
  const supabase = await createClient();

  validate(data.title, data.content, data.date);

  const { error } = await supabase
    .from("news")
    .update({
      title: data.title,
      content: data.content,
      cover: data.cover,
      date: data.date,
    })
    .eq("id", data.id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/news");
  revalidatePath("/admin/news");
  revalidatePath(`/news/${data.id}`);
}

export async function deleteNews(id: number) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("news")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/news");
  revalidatePath("/admin/news");
}