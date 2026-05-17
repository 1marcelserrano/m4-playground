"use client";

import { useState } from "react";
import M4 from "@/components/M4";
import ControlPanel from "@/components/ControlPanel";
import XmlViewer from "@/components/XmlViewer";
import { SiteFooter, SiteHeader } from "@/components/SiteFrame";
import { PALETTES } from "@/lib/palettes";
import { DEFAULT_M4, buildM4Svg, type M4Options } from "@/lib/m4/svg";

export default function Home() {
  const [opts, setOpts] = useState<M4Options>(DEFAULT_M4);

  function update(patch: Partial<M4Options>) {
    setOpts((prev) => ({ ...prev, ...patch }));
  }

  const palette = PALETTES[opts.palette];
  const xml = buildM4Svg(opts, true);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="grid flex-1 lg:grid-cols-[2fr_3fr]">
        {/* Preview */}
        <section
          className="flex min-h-[320px] min-w-0 items-center justify-center overflow-auto p-8 lg:border-r lg:border-hairline"
          style={{ background: palette.bg }}
          aria-label="M4 preview"
        >
          <M4 {...opts} />
        </section>

        {/* Controls */}
        <section className="flex min-w-0 flex-col gap-7 p-6 sm:p-8">
          <div>
            <h1 className="font-display text-xl font-bold tracking-tightest text-[#f0ece0]">
              M4 Playground
            </h1>
            <p className="mt-1 font-body text-[13px] leading-relaxed text-muted">
              Render the M4 mascot live — 5 palettes, 4 Codex shoes, 8 canonical
              postures, SMIL motion straight from SPEC&nbsp;v3.1.
            </p>
          </div>

          <ControlPanel options={opts} onChange={update} />
          <XmlViewer xml={xml} />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
