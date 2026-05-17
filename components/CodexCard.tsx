import clsx from "clsx";
import type { CodexDef } from "@/lib/codex";

interface CodexCardProps {
  codex: CodexDef;
  selected: boolean;
  onSelect: () => void;
}

/** Selectable Codex button — swatch tinted with the Codex primary color. */
export default function CodexCard({ codex, selected, onSelect }: CodexCardProps) {
  const isNone = codex.id === "none";
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      aria-label={`${codex.label} Codex`}
      title={codex.symbol}
      className={clsx(
        "flex flex-1 flex-col items-center gap-1.5 border px-2 py-2.5 transition-colors",
        selected
          ? "border-[var(--c)] bg-[#0d0a14]"
          : "border-hairline hover:border-muted",
      )}
      style={{ ["--c" as string]: isNone ? "#7A7080" : codex.shoe1 }}
    >
      <span
        className="h-4 w-4 border border-black/30"
        style={{
          background: isNone
            ? "#404040"
            : `linear-gradient(135deg, ${codex.shoe1} 50%, ${codex.shoe2} 50%)`,
        }}
        aria-hidden="true"
      />
      <span
        className={clsx(
          "font-mono text-[10px] tracking-data uppercase",
          selected ? "text-[#f0ece0]" : "text-muted",
        )}
      >
        {codex.label}
      </span>
    </button>
  );
}
