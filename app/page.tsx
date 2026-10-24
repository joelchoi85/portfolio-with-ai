import Markdown from "@/components/Markdown";
import { readDoc } from "@/lib/content";

export default function Home() {
  const doc = readDoc("README.md");
  return <Markdown body={doc.body} file={doc.file} />;
}
