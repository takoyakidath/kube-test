import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "Kubernetesテスト環境",
  description: "K8s勉強用の簡易リファレンス",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
