import NewsForm from "../NewsForm";

export default function NewNewsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-8">
        发布新闻
      </h1>

      <NewsForm mode="create" />
    </main>
  );
}