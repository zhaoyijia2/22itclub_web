"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateSiteSettings } from "./actions";

type SiteSettings = {
  about_title: string;
  about_intro: string;
  about_content: string;

  join_title: string;
  join_content: string;
  join_link: string;

  president_name: string;
  president_class: string;
  president_phone: string;
  president_qq: string;

  vice_name: string;
  vice_class: string;
  vice_phone: string;
  vice_qq: string;

  club_address: string;
};

export default function SiteForm({
  settings,
}: {
  settings: SiteSettings;
}) {
  const router = useRouter();

  const [pending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        await updateSiteSettings(formData);

        alert("保存成功！");

        router.refresh();
      } catch (err: any) {
        alert(err.message);
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10"
    >
      {/* ================= 关于社团 ================= */}

      <section className="bg-white rounded-xl shadow p-8">

        <h2 className="text-2xl font-bold mb-6">
          关于社团
        </h2>

        <div className="space-y-6">

          <div>

            <label className="block font-semibold mb-2">
              页面标题
            </label>

            <input
              name="about_title"
              defaultValue={settings.about_title}
              required
              className="w-full border rounded-lg p-3"
            />

          </div>

          <div>

            <label className="block font-semibold mb-2">
              页面简介
            </label>

            <textarea
              rows={3}
              name="about_intro"
              defaultValue={settings.about_intro}
              className="w-full border rounded-lg p-3"
            />

          </div>

          <div>

            <label className="block font-semibold mb-2">
              正文
            </label>

            <textarea
              rows={10}
              name="about_content"
              defaultValue={settings.about_content}
              className="w-full border rounded-lg p-3"
            />

          </div>

        </div>

      </section>

      {/* ================= 加入我们 ================= */}

      <section className="bg-white rounded-xl shadow p-8">

        <h2 className="text-2xl font-bold mb-6">
          加入我们
        </h2>

        <div className="space-y-6">

          <div>

            <label className="block font-semibold mb-2">
              页面标题
            </label>

            <input
              name="join_title"
              defaultValue={settings.join_title}
              required
              className="w-full border rounded-lg p-3"
            />

          </div>

          <div>

            <label className="block font-semibold mb-2">
              页面内容
            </label>

            <textarea
              rows={8}
              name="join_content"
              defaultValue={settings.join_content}
              className="w-full border rounded-lg p-3"
            />

          </div>

          <div>

            <label className="block font-semibold mb-2">
              报名链接
            </label>

            <input
              type="url"
              name="join_link"
              defaultValue={settings.join_link}
              placeholder="https://example.com"
              className="w-full border rounded-lg p-3"
            />

          </div>

        </div>

      </section>

      {/* ================= 联系我们 ================= */}

      <section className="bg-white rounded-xl shadow p-8">

        <h2 className="text-2xl font-bold mb-8">
          联系我们
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="text-xl font-bold mb-5">
              正社长
            </h3>

            <div className="space-y-4">

              <input
                name="president_name"
                defaultValue={settings.president_name}
                placeholder="姓名"
                className="w-full border rounded-lg p-3"
              />

              <input
                name="president_class"
                defaultValue={settings.president_class}
                placeholder="班级"
                className="w-full border rounded-lg p-3"
              />

              <input
                name="president_phone"
                defaultValue={settings.president_phone}
                placeholder="联系电话"
                className="w-full border rounded-lg p-3"
              />

              <input
                name="president_qq"
                defaultValue={settings.president_qq}
                placeholder="QQ"
                className="w-full border rounded-lg p-3"
              />

            </div>

          </div>

          <div>

            <h3 className="text-xl font-bold mb-5">
              副社长
            </h3>

            <div className="space-y-4">

              <input
                name="vice_name"
                defaultValue={settings.vice_name}
                placeholder="姓名"
                className="w-full border rounded-lg p-3"
              />

              <input
                name="vice_class"
                defaultValue={settings.vice_class}
                placeholder="班级"
                className="w-full border rounded-lg p-3"
              />

              <input
                name="vice_phone"
                defaultValue={settings.vice_phone}
                placeholder="联系电话"
                className="w-full border rounded-lg p-3"
              />

              <input
                name="vice_qq"
                defaultValue={settings.vice_qq}
                placeholder="QQ"
                className="w-full border rounded-lg p-3"
              />

            </div>

          </div>

        </div>

        <div className="mt-8">

          <label className="block font-semibold mb-2">
            社团地址
          </label>

          <textarea
            rows={3}
            name="club_address"
            defaultValue={settings.club_address}
            className="w-full border rounded-lg p-3"
          />

        </div>

      </section>

      <section className="bg-white rounded-xl shadow p-8">

  <h2 className="text-2xl font-bold mb-8">
    首页数据
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {[1,2,3,4,5,6].map((i)=>(
      <div
        key={i}
        className="border rounded-xl p-5"
      >

        <h3 className="font-bold mb-4">
          数据{i}
        </h3>

        <input
          name={`home_stat${i}_name`}
          defaultValue={(settings as any)[`home_stat${i}_name`]}
          placeholder="名称"
          className="w-full border rounded-lg p-3 mb-3"
        />

        <input
          name={`home_stat${i}_value`}
          defaultValue={(settings as any)[`home_stat${i}_value`]}
          placeholder="数据"
          className="w-full border rounded-lg p-3"
        />

      </div>
    ))}

  </div>

</section>

      <div className="flex justify-end">

        <button
          type="submit"
          disabled={pending}
          className="
            bg-red-900 hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed text-white px-10 py-3 rounded-lg transition font-semibold
          "
        >
          {pending ? "保存中..." : "保存全部设置"}
        </button>

      </div>

    </form>
  );
}