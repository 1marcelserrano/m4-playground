import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteFrame";
import { PALETTES, PALETTE_IDS } from "@/lib/palettes";
import { SHOE_STATES } from "@/lib/codex";

export const metadata: Metadata = {
  title: "Spec — M4 Playground",
  description: "M4 canonical palettes and the 9-state Codex Shoes table — SPEC v3.1.",
};

function Swatch({ hex }: { hex: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="inline-block h-3.5 w-3.5 border border-black/40"
        style={{ background: hex }}
      />
      <span className="font-mono text-[11px] tracking-data text-[#cfc8be]">{hex}</span>
    </span>
  );
}

const HEAD = "px-3 py-2 text-left font-mono text-[10px] tracking-data uppercase text-muted";
const CELL = "px-3 py-2 border-t border-hairline align-top";

export default function SpecPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-10 sm:px-8">
        <h1 className="font-display text-2xl font-bold tracking-tightest text-[#f0ece0]">
          Spec Reference
        </h1>
        <p className="mt-2 max-w-prose font-body text-[13px] leading-relaxed text-muted">
          Canonical values mirrored from the M4 SPEC v3.1. The playground reads
          these directly — what renders here is what renders in the SVG.
        </p>

        {/* Palettes */}
        <section className="mt-9">
          <h2 className="font-display text-base font-bold tracking-tightest text-[#f0ece0]">
            Palettes <span className="font-mono text-[11px] text-muted">SPEC §16 + §19</span>
          </h2>
          <div className="mt-3 overflow-x-auto border border-hairline">
            <table className="w-full border-collapse">
              <thead className="bg-[#0d0a14]">
                <tr>
                  <th className={HEAD}>Palette</th>
                  <th className={HEAD}>Background</th>
                  <th className={HEAD}>Body</th>
                  <th className={HEAD}>Legs</th>
                  <th className={HEAD}>Eyes</th>
                </tr>
              </thead>
              <tbody>
                {PALETTE_IDS.map((id) => {
                  const p = PALETTES[id];
                  return (
                    <tr key={id}>
                      <td className={CELL}>
                        <span className="font-mono text-[12px] tracking-data uppercase text-[#f0ece0]">
                          {p.label}
                        </span>
                      </td>
                      <td className={CELL}><Swatch hex={p.bg} /></td>
                      <td className={CELL}><Swatch hex={p.body} /></td>
                      <td className={CELL}><Swatch hex={p.legs} /></td>
                      <td className={CELL}><Swatch hex={p.eyes} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Codex Shoes */}
        <section className="mt-10">
          <h2 className="font-display text-base font-bold tracking-tightest text-[#f0ece0]">
            Codex Shoes — 9 states{" "}
            <span className="font-mono text-[11px] text-muted">SPEC §18.1</span>
          </h2>
          <div className="mt-3 overflow-x-auto border border-hairline">
            <table className="w-full border-collapse">
              <thead className="bg-[#0d0a14]">
                <tr>
                  <th className={HEAD}>State</th>
                  <th className={HEAD}>Primary (FL/FR)</th>
                  <th className={HEAD}>Depth (BL/BR)</th>
                  <th className={HEAD}>Use</th>
                </tr>
              </thead>
              <tbody>
                {SHOE_STATES.map((s) => (
                  <tr key={s.state}>
                    <td className={CELL}>
                      <span className="font-mono text-[12px] tracking-data uppercase text-[#f0ece0]">
                        {s.state}
                      </span>
                    </td>
                    <td className={CELL}><Swatch hex={s.primary} /></td>
                    <td className={CELL}><Swatch hex={s.depth} /></td>
                    <td className={`${CELL} font-body text-[12px] text-muted`}>{s.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Doc references */}
        <section className="mt-10">
          <h2 className="font-display text-base font-bold tracking-tightest text-[#f0ece0]">
            Canonical documents
          </h2>
          <ul className="mt-3 space-y-1.5 font-mono text-[12px] text-muted">
            <li>SPEC.md — M4 technical specification (v3.1)</li>
            <li>SPEC_V3.1_PATCH.md — reading posture, Codex palette, shoe patterns</li>
            <li>MOTION.md — SMIL timing parameters</li>
            <li>mscreative-site/DESIGN.md — Dark Academic Tech design system</li>
          </ul>
          <p className="mt-3 font-body text-[12px] text-muted">
            Source of truth: the private MSCREATIVESYSTEMS monorepo. This
            playground is a public showcase build of those documents.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
