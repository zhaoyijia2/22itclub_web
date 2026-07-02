"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

  const [open,setOpen] = useState(false)

  const nav=[
    ["首页","/"],
    ["活动","/activity"],
    ["新闻","/news"],
    ["成员","/member"],
    ["关于","/about"]
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow">

      <div className="flex items-center justify-between px-5 py-4">

        {/* logo */}
        <div className="font-bold text-lg">
          IT社团
        </div>


        {/* pc菜单 */}
        <nav className="hidden md:flex gap-8">

          {
            nav.map(item=>(
              <Link 
              key={item[0]}
              href={item[1]}
              >
                {item[0]}
              </Link>
            ))
          }

        </nav>


        {/* 手机按钮 */}

        <button
        className="md:hidden"
        onClick={()=>setOpen(!open)}
        >
          ☰
        </button>

      </div>


      {/* 手机菜单 */}

      {
        open &&
        <nav className="md:hidden flex flex-col px-5 pb-5 gap-4">

          {
            nav.map(item=>(
              <Link 
              key={item[0]}
              href={item[1]}
              >
                {item[0]}
              </Link>
            ))
          }

        </nav>
      }


    </header>
  )
}