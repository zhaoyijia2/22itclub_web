"use client";

import { deleteNews } from "@/app/admin/news/actions";

export default function DeleteButton({
  id,
}: {
  id: number;
}) {
  return (
    <button
      className="text-red-600 hover:underline"
      onClick={async () => {
        const ok = confirm("确定删除这条新闻？");

        if (!ok) return;

        await deleteNews(id);

        location.reload();
      }}
    >
      删除
    </button>
  );
}