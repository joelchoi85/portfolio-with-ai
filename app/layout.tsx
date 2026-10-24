import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "최중열 — MLOps / LLMOps", template: "%s · 최중열" },
  description: "모델을 직접 올리고, 숫자로 고르고, 사람 손 없이 돌아가게 만듭니다.",
};

const NAV = [
  { href: "/", label: "소개" },
  { href: "/projects/rfp-rag-system", label: "RFP RAG" },
  { href: "/projects/pill-detection", label: "알약 검출" },
  { href: "/projects/just-make-it", label: "Just Make It" },
  { href: "/decisions", label: "의사결정" },
  { href: "/resume", label: "이력서" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap"
        />
      </head>
      <body>
        <a className="skip" href="#main">
          본문으로 건너뛰기
        </a>
        <header className="site-header">
          <nav aria-label="주요 메뉴">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <a href="https://github.com/joelchoi85" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </footer>
      </body>
    </html>
  );
}
