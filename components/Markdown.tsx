import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { siteHref } from "@/lib/content";
import Mermaid from "./Mermaid";

export default function Markdown({ body, file }: { body: string; file: string }) {
  return (
    <article className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href = "", children }) => {
            const to = siteHref(href, file);
            return to.startsWith("/") ? (
              <Link href={to}>{children}</Link>
            ) : (
              <a href={to} target="_blank" rel="noreferrer">
                {children}
              </a>
            );
          },
          table: ({ children }) => (
            <div className="table-wrap">
              <table>{children}</table>
            </div>
          ),
          code: ({ className, children }) =>
            className === "language-mermaid" ? (
              <Mermaid chart={String(children)} />
            ) : (
              <code className={className}>{children}</code>
            ),
        }}
      >
        {body}
      </ReactMarkdown>
    </article>
  );
}
