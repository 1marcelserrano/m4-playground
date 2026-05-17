"use client";

import * as Slider from "@radix-ui/react-slider";
import * as Switch from "@radix-ui/react-switch";
import clsx from "clsx";
import CodexCard from "./CodexCard";
import { CODEXES, CODEX_IDS } from "@/lib/codex";
import { PALETTES, PALETTE_IDS } from "@/lib/palettes";
import { POSTURES, POSTURE_IDS } from "@/lib/postures";
import type { M4Options } from "@/lib/m4/svg";

interface ControlPanelProps {
  options: M4Options;
  onChange: (patch: Partial<M4Options>) => void;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 font-mono text-[11px] tracking-data uppercase text-muted">
      {children}
    </h2>
  );
}

function ToggleSwitch({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2">
      <Switch.Root
        checked={checked}
        onCheckedChange={onChange}
        aria-label={label}
        className={clsx(
          "relative h-5 w-9 shrink-0 border transition-colors",
          checked ? "border-rufous bg-rufous/30" : "border-hairline bg-void",
        )}
      >
        <Switch.Thumb
          className={clsx(
            "block h-3.5 w-3.5 transition-transform",
            checked ? "translate-x-4 bg-rufous" : "translate-x-0.5 bg-muted",
          )}
        />
      </Switch.Root>
      <span className="font-mono text-[10px] tracking-data uppercase text-[#cfc8be]">
        {label}
      </span>
    </label>
  );
}

export default function ControlPanel({ options, onChange }: ControlPanelProps) {
  return (
    <div className="flex flex-col gap-7">
      {/* 1 — Codex */}
      <section>
        <SectionLabel>1 · Codex</SectionLabel>
        <div className="flex gap-1.5">
          {CODEX_IDS.map((id) => (
            <CodexCard
              key={id}
              codex={CODEXES[id]}
              selected={options.codex === id}
              onSelect={() => onChange({ codex: id })}
            />
          ))}
        </div>
      </section>

      {/* 2 — Palette */}
      <section>
        <SectionLabel>2 · Palette</SectionLabel>
        <div className="flex gap-1.5">
          {PALETTE_IDS.map((id) => {
            const p = PALETTES[id];
            const selected = options.palette === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onChange({ palette: id })}
                aria-pressed={selected}
                className={clsx(
                  "flex min-w-0 flex-1 flex-col items-center gap-1.5 border px-1.5 py-2.5 transition-colors",
                  selected ? "border-rufous bg-[#0d0a14]" : "border-hairline hover:border-muted",
                )}
              >
                <span
                  className="h-4 w-4 border border-black/30"
                  style={{ background: p.swatch }}
                  aria-hidden="true"
                />
                <span
                  className={clsx(
                    "max-w-full truncate font-mono text-[10px] tracking-data uppercase",
                    selected ? "text-[#f0ece0]" : "text-muted",
                  )}
                >
                  {p.label}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3 — Posture */}
      <section>
        <SectionLabel>3 · Posture</SectionLabel>
        <div className="grid grid-cols-4 gap-1.5">
          {POSTURE_IDS.map((id) => {
            const selected = options.posture === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onChange({ posture: id })}
                aria-pressed={selected}
                className={clsx(
                  "min-w-0 truncate border px-1.5 py-2.5 font-mono text-[10px] tracking-data uppercase transition-colors",
                  selected
                    ? "border-rufous bg-[#0d0a14] text-[#f0ece0]"
                    : "border-hairline text-muted hover:border-muted",
                )}
              >
                {POSTURES[id].label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 4 — Toggles */}
      <section>
        <SectionLabel>4 · Toggles</SectionLabel>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <ToggleSwitch
            label="Shoes pattern"
            checked={options.showShoesPattern}
            onChange={(v) => onChange({ showShoesPattern: v })}
          />
          <ToggleSwitch
            label="Codex eyes"
            checked={options.codexEyes}
            onChange={(v) => onChange({ codexEyes: v })}
          />
          <ToggleSwitch
            label="Grid overlay"
            checked={options.showGrid}
            onChange={(v) => onChange({ showGrid: v })}
          />
          <ToggleSwitch
            label="Animations"
            checked={options.animationsEnabled}
            onChange={(v) => onChange({ animationsEnabled: v })}
          />
        </div>
      </section>

      {/* 5 — Size */}
      <section>
        <div className="mb-2 flex items-center justify-between">
          <SectionLabel>5 · Size</SectionLabel>
          <span className="font-mono text-[11px] tracking-data text-[#cfc8be]">
            {options.size}px
          </span>
        </div>
        <Slider.Root
          className="relative flex h-5 w-full touch-none items-center"
          min={24}
          max={400}
          step={8}
          value={[options.size]}
          onValueChange={([v]) => onChange({ size: v })}
          aria-label="M4 size in pixels"
        >
          <Slider.Track className="relative h-0.5 grow bg-hairline">
            <Slider.Range className="absolute h-full bg-rufous" />
          </Slider.Track>
          <Slider.Thumb className="block h-4 w-4 border border-rufous bg-void hover:bg-rufous focus:outline-none focus:ring-1 focus:ring-rufous" />
        </Slider.Root>
      </section>
    </div>
  );
}
