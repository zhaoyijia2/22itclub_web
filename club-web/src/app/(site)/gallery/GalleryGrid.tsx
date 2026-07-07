"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";

type GalleryItem = {
  id: number;
  title: string;
  image: string;
};

export default function GalleryGrid({
  title,
  list,
}: {
  title: string;
  list: GalleryItem[];
}) {
  const [index, setIndex] = useState<number | null>(null);

  if (list.length === 0) return null;

  return (
    <section className="mb-16">

      <h2 className="text-3xl font-bold mb-8">
        {title}
      </h2>

      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        gap-6
      "
      >
        {list.map((item, i) => (

          <div
            key={item.id}
            onClick={() => setIndex(i)}
            className="
            cursor-pointer
            bg-white
            rounded-xl
            shadow
            overflow-hidden
            hover:shadow-xl
            transition
            duration-300
          "
          >

            <div className="relative aspect-[4/3]">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  hover:scale-105
                  transition
                  duration-300
                "
              />

            </div>

            <div className="p-4">

              <p className="font-semibold line-clamp-2">
                {item.title}
              </p>

            </div>

          </div>

        ))}
      </div>

      {index !== null && (

        <Lightbox
          images={list}
          index={index}
          onClose={() => setIndex(null)}
          onPrev={() =>
            setIndex((index - 1 + list.length) % list.length)
          }
          onNext={() =>
            setIndex((index + 1) % list.length)
          }
        />

      )}

    </section>
  );
}