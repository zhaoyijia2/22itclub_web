import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata = {
title:"XX社团",
description:"社团官方网站"
};


export default function RootLayout({

children,

}:{

children:React.ReactNode

}){


return (

<html lang="zh-CN">


<body>


<Navbar />


{children}


</body>


</html>

)

}