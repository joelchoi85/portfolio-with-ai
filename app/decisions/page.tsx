import Link from "next/link";
import { listSlugs, readDoc } from "@/lib/content";

export const metadata = { title: "의사결정 기록" };

export default function Decisions() {
  const docs = listSlugs("decisions").map((slug) => ({ slug, ...readDoc(`decisions/${slug}.md`) }));
  return (
    <article className="prose">
      <h1>의사결정 기록</h1>
      <p>측정한 뒤 바꾼 것들입니다. 한 편에 맥락, 측정, 결정, 배운 것 순서로 한 쪽씩.</p>
      <ul className="cards">
        {docs.map((d) => (
          <li key={d.slug}>
            <Link href={`/decisions/${d.slug}`}>
              <span className="card-title">{d.title}</span>
              <span className="card-meta">{d.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
