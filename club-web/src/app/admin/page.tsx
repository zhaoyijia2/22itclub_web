import Link from "next/link";

export default function AdminPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-10">
        后台管理系统
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <Card
          title="新闻管理"
          desc="发布、编辑、删除新闻"
          href="/admin/news"
        />

        <Card
          title="社团风采"
          desc="上传奖项、合照等图片"
          href="/admin/gallery"
        />

        <Card
          title="网站设置"
          desc="修改Banner、联系方式"
          href="/admin/site"
        />

      </div>
    </>
  );
}

function Card({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 h-40 flex flex-col justify-between cursor-pointer">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p className="text-gray-500">
          {desc}
        </p>

      </div>
    </Link>
  );
}