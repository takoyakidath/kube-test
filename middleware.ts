import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // レスポンスを取得または作成
  const response = NextResponse.next()

  // X-Robots-Tag ヘッダーを追加
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive")

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
