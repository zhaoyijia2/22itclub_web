import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { deleteGallery } from "./actions";

const categoryMap: Record<string, string> = {
  award: "我们的奖项",
  group: "我们的合照",
  other: "其他",
};

export default async function GalleryAdminPage() {
  const supabase = await createClient();

  const { data: gallery, error } = await supabase
    .from("gallery")
    .select("*")
    .order("id", { ascending: false });

  return (
    <main className="p-10">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-4xl font-bold">
              社团风采
            </h1>

            <p className="text-gray-500 mt-2">
              共 {gallery?.length ?? 0} 张图片
            </p>

          </div>

          <Link
            href="/admin/gallery/new"
            className="
              bg-red-900
              hover:bg-red-800
              text-white
              px-6
              py-3
              rounded-lg
              transition
            "
          >
            + 上传图片
          </Link>

        </div>

        {error && (
          <div className="text-red-500 mb-6">
            {error.message}
          </div>
        )}

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="px-6 py-4 text-left w-36">
                  图片
                </th>

                <th className="px-6 py-4 text-left">
                  标题
                </th>

                <th className="px-6 py-4 text-left w-40">
                  分类
                </th>

                <th className="px-6 py-4 text-center w-52">
                  操作
                </th>

              </tr>

            </thead>

            <tbody>

              {gallery?.map((item: any) => (

                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="px-6 py-4">

                    <div className="relative w-24 h-16 rounded overflow-hidden border">

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />

                    </div>

                  </td>

                  <td className="px-6 py-4">

                    <div className="font-medium">
                      {item.title}
                    </div>

                  </td>

                  <td className="px-6 py-4">

                    {categoryMap[item.category] ?? item.category}

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-3">

                      <Link
                        href={`/admin/gallery/edit/${item.id}`}
                        className="
                          px-3
                          py-1
                          rounded
                          bg-green-100
                          text-green-700
                          hover:bg-green-200
                        "
                      >
                        编辑
                      </Link>

                      <form
                        action={async () => {
                          "use server";
                          await deleteGallery(item.id);
                        }}
                      >
                        <button
                          className="
                            px-3
                            py-1
                            rounded
                            bg-red-100
                            text-red-700
                            hover:bg-red-200
                          "
                        >
                          删除
                        </button>
                      </form>

                    </div>

                  </td>

                </tr>

              ))}

              {gallery?.length === 0 && (

                <tr>

                  <td
                    colSpan={4}
                    className="text-center py-16 text-gray-400"
                  >
                    暂无图片
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
} 