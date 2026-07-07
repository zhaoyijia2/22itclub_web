"use client";

import { useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ImageUploader({
  value,
  onChange,
}: {
  value: string;
  onChange: (url: string) => void;
}) {
  const supabase = createClient();

  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  async function upload(file: File) {
    try {
      setUploading(true);

      const ext = file.name.split(".").pop();

      const filename =
        Date.now() + "-" + Math.random().toString(36).slice(2) + "." + ext;

      const { error } = await supabase.storage
        .from("club")
        .upload(filename, file);

      if (error) throw error;

      const { data } = supabase.storage
        .from("club")
        .getPublicUrl(filename);

      onChange(data.publicUrl);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-4">

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="bg-red-900 text-white px-5 py-2 rounded-lg"
      >
        {uploading ? "上传中..." : "选择图片"}
      </button>

      <input
        ref={inputRef}
        type="file"
        hidden
        accept="image/*"
        onChange={(e) => {
          if (!e.target.files?.length) return;
          upload(e.target.files[0]);
        }}
      />

      {value && (
        <img
          src={value}
          alt=""
          className="rounded-lg border max-h-60"
        />
      )}
    </div>
  );
}