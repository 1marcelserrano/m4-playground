// 4 operational Codex shoes — SPEC.md §16.5, §18.1, §18.5 (patterns), §18.6 (eyes).
// Colors copied literally from SPEC v3.1; do not invent values.

export type Codex = "none" | "neuro" | "style" | "design" | "execution";

export type PatternKind = "stripes" | "tricolor" | "checker" | "thick";

export const CODEX_IDS: Codex[] = ["none", "neuro", "style", "design", "execution"];

/** Deep Violet Void — used as accent inside Style/Execution patterns (§18.5). */
export const VOID = "#06060A";

export interface CodexDef {
  id: Codex;
  label: string;
  /** Shoe primary — front legs FL/FR (§18.1 col `shoe-{state}-1`). */
  shoe1: string;
  /** Shoe depth — back legs BL/BR (§18.1 col `shoe-{state}-2`). */
  shoe2: string;
  /** Codex eye color (§18.6.1). */
  eye: string;
  /** Pixel-art pattern applied to the shoes (§18.5). */
  pattern: PatternKind | null;
  /** Symbolic reading of the pattern (§18.5.1). */
  symbol: string;
}

export const CODEXES: Record<Codex, CodexDef> = {
  none: {
    id: "none",
    label: "None",
    // §18.1 — `neutral` state: default, no codex represented.
    shoe1: "#404040",
    shoe2: "#282828",
    eye: "#1A1410",
    pattern: null,
    symbol: "Neutral — no codex represented.",
  },
  neuro: {
    id: "neuro",
    label: "Neuro",
    shoe1: "#9C52F2", // Aconite Violet
    shoe2: "#B5FFC2", // Turquoise Green
    eye: "#9C52F2",
    pattern: "stripes",
    symbol: "Horizontal stripes — synaptic cadence, informational pulses.",
  },
  style: {
    id: "style",
    label: "Style",
    shoe1: "#DE4500", // English Red
    shoe2: "#FF616B", // Grenadine Pink
    eye: "#FF616B", // depth color, intentional (§18.6.1)
    pattern: "tricolor",
    symbol: "Mirrored vertical tricolor — high fashion, vertical gesture with depth.",
  },
  design: {
    id: "design",
    label: "Design",
    shoe1: "#008AA1", // Antwarp Blue
    shoe2: "#F5F5B8", // Sulpher Yellow
    eye: "#008AA1",
    pattern: "checker",
    symbol: "5×5 checker — foundation grid, modular architecture.",
  },
  execution: {
    id: "execution",
    label: "Execution",
    shoe1: "#C2612C", // Rufous Signal
    shoe2: VOID, // Deep Void
    eye: "#C2612C",
    pattern: "thick",
    symbol: "Thick stripes (pulse + beat) — operational rhythm.",
  },
};

/** Full 9-state Codex Shoes table (§18.1) — used by the /spec page. */
export const SHOE_STATES: { state: string; primary: string; depth: string; use: string }[] = [
  { state: "ms", primary: "#A89D80", depth: "#756750", use: "MSCREATIVE.SYSTEMS — parent system. Cream warm low-saturation." },
  { state: "fronteiristas", primary: "#D50C42", depth: "#F2FF26", use: "Fronteiristas editorial channel. Scarlet + Lemon Yellow." },
  { state: "oracle", primary: "#E8397A", depth: "#E87800", use: "Creative Oracle V20. Rose + burnt orange." },
  { state: "neuro", primary: "#9C52F2", depth: "#B5FFC2", use: "Neuro Codex. Aconite Violet + Turquoise Green." },
  { state: "style", primary: "#DE4500", depth: "#FF616B", use: "Style Codex. English Red + Grenadine Pink." },
  { state: "design", primary: "#008AA1", depth: "#F5F5B8", use: "Design Codex. Antwarp Blue + Sulpher Yellow." },
  { state: "execution", primary: "#C2612C", depth: "#06060A", use: "Execution Codex. Rufous Signal + Deep Void." },
  { state: "emblem", primary: "#E8C547", depth: "#B8941F", use: "Ceremonial state. Gold reserved for seals and institutional milestones." },
  { state: "neutral", primary: "#404040", depth: "#282828", use: "Default — no codex represented. Neutral grey." },
];
