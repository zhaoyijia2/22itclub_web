"use client";

import Image from "next/image";
import { useEffect } from "react";

type Props = {
  images: {
    image: string;
    title: string;
  }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: Props) {

  useEffect(() => {

    function handle(e: KeyboardEvent) {

      if (e.key === "Escape") onClose();

      if (e.key === "ArrowLeft") onPrev();

      if (e.key === "ArrowRight") onNext();

    }

    window.addEventListener("keydown", handle);

    return () =>
      window.removeEventListener("keydown", handle);

  }, [onClose, onPrev, onNext]);

  const item = images[index];

  if (!item) return null;

  return (

    <div
      className="
      fixed
      inset-0
      bg-black/90
      z-[999]
      flex
      items-center
      justify-center
    "
    >

      <button
        onClick={onClose}
        className="
          absolute
          top-6
          right-8
          text-white
          text-5xl
        "
      >
        ×
      </button>

      <button
        onClick={onPrev}
        className="
          absolute
          left-6
          text-white
          text-5xl
        "
      >
        ‹
      </button>

      <div
        className="
        relative
        w-[90vw]
        h-[80vh]
      "
      >

        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain"
        />

      </div>

      <button
        onClick={onNext}
        className="
          absolute
          right-6
          text-white
          text-5xl
        "
      >
        ›
      </button>

      <div
        className="
        absolute
        bottom-10
        text-white
        text-xl
      "
      >
        {item.title}
      </div>

    </div>

  );

}