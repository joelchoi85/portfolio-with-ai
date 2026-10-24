import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

export type Doc = { file: string; title: string; summary: string; body: string };

export function readDoc(file: string): Doc {
  const raw = fs.readFileSync(path.join(ROOT, file), "utf8");
  // TODO 주석은 사이트에 보이지 않게 뺀다
  const body = raw.replace(/<!--[\s\S]*?-->\n?/g, "");
  const title = body.match(/^# (.+)$/m)?.[1].replace(/\*/g, "").trim() ?? file;
  const summary =
    body
      .split("\n")
      .find((l) => l.trim() && !l.startsWith("#") && !l.startsWith("|") && !l.startsWith("```"))
      ?.replace(/^>\s*/, "")
      .replace(/[*`]/g, "") ?? "";
  return { file, title, summary, body };
}

export function listSlugs(dir: string): string[] {
  return fs
    .readdirSync(path.join(ROOT, dir))
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .sort();
}

// 저장소 안 상대 링크(projects/x.md, ../README.md, decisions/)를 사이트 경로로 바꾼다
export function siteHref(href: string, fromFile: string): string {
  if (/^([a-z]+:|#)/i.test(href)) return href;
  const p = path.posix.normalize(path.posix.join(path.posix.dirname(fromFile), href));
  const clean = p.replace(/\.md$/, "").replace(/\/$/, "");
  if (clean === "README" || clean === ".") return "/";
  if (clean === "resume/resume") return "/resume";
  return "/" + clean;
}
