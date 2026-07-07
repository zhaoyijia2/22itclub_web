import GalleryForm from "../GalleryForm";

export default function NewGalleryPage() {
  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        上传图片
      </h1>

      <GalleryForm mode="create" />

    </main>
  );
}