import Link from "next/link";

export default function Admin() {
  return (
    <main className="min-h-screen bg-gray-100 pt-28 px-10 pb-10">
      <div className="max-w-6xl mx-auto">

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
            title="活动管理"
            desc="管理社团活动"
            href="/admin/activity"
          />

          <Card
            title="社团风采"
            desc="上传奖项、合照等图片"
            href="/admin/gallery"
          />

          <Card
            title="成员管理"
            desc="管理成员信息"
            href="/admin/member"
          />

          <Card
            title="网站设置"
            desc="修改Banner、联系方式"
            href="/admin/site"
          />

        </div>

      </div>
    </main>
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
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 h-40 flex flex-col justify-between">

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