import type { Metadata } from "next";
import Link from "next/link";
import Markdown from "@/components/Markdown";
import { listSlugs, readDoc } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return listSlugs("decisions").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = readDoc(`decisions/${(await params).slug}.md`);
  return { title: doc.title, description: doc.summary };
}

export default async function Page({ params }: Props) {
  const doc = readDoc(`decisions/${(await params).slug}.md`);
  return (
    <>
      <p className="back">
        <Link href="/decisions">← 의사결정 목록</Link>
      </p>
      <Markdown body={doc.body} file={doc.file} />
    </>
  );
}
