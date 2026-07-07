"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/ImageUploader";
import { createNews, updateNews } from "./actions";

export type NewsFormData = {
  id?: number;
  title?: string;
  content?: string;
  cover?: string;
  date?: string;
};

export default function NewsForm({
  mode,
  news,
}: {
  mode: "create" | "edit";
  news?: NewsFormData;
}) {
  const router = useRouter();

  const [title, setTitle] = useState(news?.title ?? "");
  const [content, setContent] = useState(news?.content ?? "");
  const [cover, setCover] = useState(news?.cover ?? "");
  const [date, setDate] = useState(
    news?.date ??
      new Date().toISOString().slice(0, 10)
  );

  const [isPending, startTransition] = useTransition();

  function submit() {
    if (!title.trim()) {
      alert("请输入标题");
      return;
    }

    if (!content.trim()) {
      alert("请输入正文");
      return;
    }

    startTransition(async () => {
      try {
        if (mode === "create") {
          const formData = new FormData();

          formData.append("title", title);
          formData.append("content", content);
          formData.append("cover", cover);
          formData.append("date", date);

          await createNews(formData);
        } else {
          await updateNews({
            id: news!.id!,
            title,
            content,
            cover,
            date,
          });
        }

        alert(mode === "create" ? "发布成功" : "保存成功");

        router.push("/admin/news");

        router.refresh();
      } catch (e: any) {
        alert(e.message);
      }
    });
  }

  return (
    <div className="bg-white rounded-xl shadow p-8">

      <div className="space-y-6">

        <div>
          <label className="block font-semibold mb-2">
            新闻标题
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            发布时间
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            新闻封面
          </label>

          <ImageUploader
            value={cover}
            onChange={setCover}
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            新闻正文
          </label>

          <textarea
            rows={14}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="flex gap-4">

          <button
            onClick={submit}
            disabled={isPending}
            className="bg-red-900 text-white px-8 py-3 rounded-lg hover:bg-red-800 disabled:opacity-50"
          >
            {isPending
              ? "保存中..."
              : mode === "create"
              ? "发布新闻"
              : "保存修改"}
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="border px-8 py-3 rounded-lg"
          >
            返回
          </button>

        </div>

      </div>

    </div>
  );
}