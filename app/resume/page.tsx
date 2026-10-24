import Markdown from "@/components/Markdown";
import { readDoc } from "@/lib/content";

export const metadata = { title: "이력서" };

export default function Resume() {
  const doc = readDoc("resume/resume.md");
  return <Markdown body={doc.body} file={doc.file} />;
}
