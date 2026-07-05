"use client";

import { useState } from "react";

const photos = [
  // ===== 我们的奖项 =====
  {
    title: "全国大学生竞赛一等奖",
    image: "/gallery/awards/1.jpg",
    type: "award",
  },
  {
    title: "优秀社团",
    image: "/gallery/awards/2.jpg",
    type: "award",
  },

  // ===== 我们的合照 =====
  {
    title: "2026届全体成员",
    image: "/gallery/group/1.jpg",
    type: "group",
  },
  {
    title: "春季招新合照",
    image: "/gallery/group/2.jpg",
    type: "group",
  },

  // ===== 其他 =====
  {
    title: "技术分享会",
    image: "/gallery/other/1.jpg",
    type: "other",
  },
  {
    title: "志愿服务",
    image: "/gallery/other/2.jpg",
    type: "other",
  },
];

export default function Gallery() {
  const [type, setType] = useState("all");

  const list =
    type === "all"
      ? photos
      : photos.filter((item) => item.type === type);

  return (
    <main className="pt-20">

      {/* Banner */}

      <section
        className="h-72 bg-red-900 flex items-center justify-center"
      >
        <h1 className="text-white text-5xl font-bold">
          社团风采
        </h1>
      </section>

      {/* 分类 */}

      <section className="py-12">

        <div className="flex justify-center gap-5 flex-wrap">

          <Button
            active={type === "all"}
            onClick={() => setType("all")}
          >
            全部
          </Button>

          <Button
            active={type === "award"}
            onClick={() => setType("award")}
          >
            我们的奖项
          </Button>

          <Button
            active={type === "group"}
            onClick={() => setType("group")}
          >
            我们的合照
          </Button>

          <Button
            active={type === "other"}
            onClick={() => setType("other")}
          >
            其他
          </Button>

        </div>

      </section>

      {/* 图片 */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

          {list.map((item) => (

            <div
              key={item.image}
              className="rounded-xl overflow-hidden shadow hover:shadow-xl duration-300 bg-white"
            >

              <img
                src={item.image}
                className="w-full h-64 object-cover"
                alt={item.title}
              />

              <div className="p-4">

                <h3 className="font-bold text-lg">

                  {item.title}

                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

function Button({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full transition ${
        active
          ? "bg-red-900 text-white"
          : "bg-gray-100 hover:bg-red-900 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}