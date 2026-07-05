"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = [
    { name: "首页", href: "/" },
    { name: "关于社团", href: "/about" },
    { name: "最新活动", href: "/activity" },
    { name: "新闻资讯", href: "/news" },
    { name: "组织架构", href: "/structure" },
    { name: "成员介绍", href: "/member" },
    { name: "加入我们", href: "/join" },
    { name: "社团风采", href: "/gallery" },
    { name: "联系我们", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur shadow z-50">
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img
            src="/logo.png"
            alt="IT社团 Logo"
            width={50}
            height={50}
          />

          <div className="hidden sm:block">
            <h1 className="text-xl font-bold leading-none">
              IT社团
            </h1>

            <p className="text-xs text-gray-500 mt-1">
              Information Technology Club
            </p>
          </div>
        </Link>

        {/* PC导航 */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors duration-300 ${
                pathname === item.href
                  ? "text-red-900 font-semibold"
                  : "text-gray-700 hover:text-red-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 手机菜单按钮 */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* 手机菜单 */}
      {open && (
        <nav className="lg:hidden bg-white border-t shadow-md">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 border-b transition-colors ${
                pathname === item.href
                  ? "bg-red-900 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}