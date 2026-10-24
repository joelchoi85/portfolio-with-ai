import type { Metadata } from "next";
import Markdown from "@/components/Markdown";
import { listSlugs, readDoc } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return listSlugs("projects").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = readDoc(`projects/${(await params).slug}.md`);
  return { title: doc.title.split(" — ")[0], description: doc.summary };
}

export default async function Page({ params }: Props) {
  const doc = readDoc(`projects/${(await params).slug}.md`);
  return <Markdown body={doc.body} file={doc.file} />;
}
