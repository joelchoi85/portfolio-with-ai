"use client";

import { useEffect, useId, useState } from "react";

export default function Mermaid({ chart }: { chart: string }) {
  const id = "m" + useId().replace(/[^a-zA-Z0-9]/g, "");
  const [svg, setSvg] = useState("");

  useEffect(() => {
    let alive = true;
    import("mermaid").then(async ({ default: mermaid }) => {
      const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      mermaid.initialize({ startOnLoad: false, theme: dark ? "dark" : "neutral", fontFamily: "inherit" });
      const { svg } = await mermaid.render(id, chart);
      if (alive) setSvg(svg);
    });
    return () => {
      alive = false;
    };
  }, [chart, id]);

  // 그림이 그려지기 전에는 원문을 보여 줘 레이아웃이 비지 않게 한다
  return svg ? (
    <figure className="diagram" role="img" aria-label="구조도" dangerouslySetInnerHTML={{ __html: svg }} />
  ) : (
    <pre className="diagram-src">{chart}</pre>
  );
}
