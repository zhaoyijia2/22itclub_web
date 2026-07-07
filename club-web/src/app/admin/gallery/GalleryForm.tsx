 "use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/ImageUploader";
import {
  createGallery,
  updateGallery,
} from "./actions";

type Gallery = {
  id?: number;
  title?: string;
  image?: string;
  category?: string;
};

export default function GalleryForm({
  mode,
  gallery,
}: {
  mode: "create" | "edit";
  gallery?: Gallery;
}) {

  const router = useRouter();

  const [title, setTitle] = useState(gallery?.title ?? "");
  const [image, setImage] = useState(gallery?.image ?? "");
  const [category, setCategory] = useState(
    gallery?.category ?? "award"
  );

  const [pending, startTransition] = useTransition();

  function submit() {

    startTransition(async () => {

      try {

        if (mode === "create") {

          const formData = new FormData();

          formData.append("title", title);
          formData.append("image", image);
          formData.append("category", category);

          await createGallery(formData);

        } else {

          await updateGallery({
            id: gallery!.id!,
            title,
            image,
            category,
          });

        }

        alert(mode === "create" ? "上传成功" : "修改成功");

        router.push("/admin/gallery");

        router.refresh();

      } catch (e: any) {

        alert(e.message);

      }

    });

  }

  return (

    <div className="bg-white rounded-xl shadow p-8 space-y-6">

      <div>

        <label className="block font-semibold mb-2">
          图片标题
        </label>

        <input
          className="w-full border rounded-lg p-3"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

      </div>

      <div>

        <label className="block font-semibold mb-2">
          分类
        </label>

        <select
          className="w-full border rounded-lg p-3"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        >

          <option value="award">
            我们的奖项
          </option>

          <option value="group">
            我们的合照
          </option>

          <option value="other">
            其他
          </option>

        </select>

      </div>

      <div>

        <label className="block font-semibold mb-2">
          上传图片
        </label>

        <ImageUploader
          value={image}
          onChange={setImage}
        />

      </div>

      <div className="flex gap-4">

        <button
          onClick={submit}
          disabled={pending}
          className="
            bg-red-900
            hover:bg-red-800
            text-white
            px-8
            py-3
            rounded-lg
            disabled:opacity-50
          "
        >
          {pending
            ? "处理中..."
            : mode === "create"
            ? "上传图片"
            : "保存修改"}
        </button>

        <button
          onClick={()=>router.back()}
          className="
            border
            px-8
            py-3
            rounded-lg
          "
        >
          返回
        </button>

      </div>

    </div>

  );

} 