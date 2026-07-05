export default function NewNewsPage() {
  return (
    <main className="min-h-screen bg-gray-100 pt-28 px-10 pb-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">

        <h1 className="text-3xl font-bold mb-8">
          新建新闻
        </h1>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 font-semibold">
              新闻标题
            </label>

            <input
              className="w-full border rounded-lg p-3"
              placeholder="请输入标题"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              新闻内容
            </label>

            <textarea
              className="w-full border rounded-lg p-3 h-60"
            />
          </div>

          <button
            className="bg-red-700 text-white px-6 py-3 rounded-lg"
          >
            发布新闻
          </button>

        </form>

      </div>
    </main>
  );
}