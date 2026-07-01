import Link from "next/link";


export default function Navbar(){

return (

<header
className="
fixed
top-0
left-0
w-full
h-20
bg-white
shadow-md
z-50
flex
items-center
justify-between
px-10
">


<div className="
flex
items-center
gap-4
">


<img
src="/logo.png"
className="
w-14
h-14
"
/>


<div>

<h1 className="
font-bold
text-xl
text-red-800
">

XX大学 XX社团

</h1>


<p className="
text-xs
text-gray-500
">

UNIVERSITY CLUB

</p>


</div>


</div>





<nav
className="
flex
gap-8
"
>


<Link href="/">
首页
</Link>


<Link href="/about">
社团概况
</Link>


<Link href="/structure">
组织架构
</Link>


<Link href="/activity">
活动展示
</Link>


<Link href="/news">
新闻动态
</Link>


<Link href="/member">
成员介绍
</Link>


<Link href="/join">
加入我们
</Link>


<Link href="/contact">
联系我们
</Link>


</nav>



</header>


)

}