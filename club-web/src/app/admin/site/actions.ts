"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function updateSiteSettings(formData: FormData) {
  const supabase = await createClient();

  // 先获取第一条设置记录
  const { data: setting, error: queryError } = await supabase
    .from("site_settings")
    .select("id")
    .limit(1)
    .single();

  if (queryError || !setting) {
    throw new Error("未找到网站设置记录");
  }

  const { error } = await supabase
    .from("site_settings")
    .update({
      about_title: formData.get("about_title") as string,
      about_intro: formData.get("about_intro") as string,
      about_content: formData.get("about_content") as string,

      join_title: formData.get("join_title") as string,
      join_content: formData.get("join_content") as string,
      join_link: formData.get("join_link") as string,

      president_name: formData.get("president_name") as string,
      president_class: formData.get("president_class") as string,
      president_phone: formData.get("president_phone") as string,
      president_qq: formData.get("president_qq") as string,

      vice_name: formData.get("vice_name") as string,
      vice_class: formData.get("vice_class") as string,
      vice_phone: formData.get("vice_phone") as string,
      vice_qq: formData.get("vice_qq") as string,

      club_address: formData.get("club_address") as string,

      updated_at: new Date().toISOString(),
    })
    .eq("id", setting.id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/site");
  revalidatePath("/about");
  revalidatePath("/join");
  revalidatePath("/contact");
}