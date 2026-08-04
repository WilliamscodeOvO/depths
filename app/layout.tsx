import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://williamscodeovo.github.io"),
  title: {
    default: "深处｜把一个问题想到底",
    template: "%s｜深处",
  },
  description: "关于判断、技术与生活的极简长文博客。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "深处",
    title: "深处｜把一个问题想到底",
    description: "关于判断、技术与生活的极简长文博客。",
    images: [
      {
        url: "/og.png",
        width: 1747,
        height: 909,
        alt: "深处：为什么信息越多，我们越难形成自己的判断",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "深处｜把一个问题想到底",
    description: "关于判断、技术与生活的极简长文博客。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
