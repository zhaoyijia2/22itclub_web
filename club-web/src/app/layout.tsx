import "./globals.css";

export const metadata = {
  title: "遵义市22中学IT社",
  description: "社团官方网站",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}