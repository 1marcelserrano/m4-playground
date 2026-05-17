// 5 canonical palettes — SPEC.md §16 (Dark/Orange/Cream/Mono) + §19 (Nocturne).
// Values copied literally from the spec; do not edit without a spec change.

export type Palette = "dark" | "orange" | "cream" | "mono" | "nocturne";

export const PALETTE_IDS: Palette[] = ["dark", "orange", "cream", "mono", "nocturne"];

export interface PaletteDef {
  id: Palette;
  label: string;
  /** Preview / scene background. */
  bg: string;
  /** Card / surface inside the preview. */
  surface: string;
  /** M4 body fill. */
  body: string;
  /** Default leg fill when no Codex shoe is applied. */
  legs: string;
  /** Default eye fill. */
  eyes: string;
  /** Readable text color on top of `bg`. */
  text: string;
  /** Representative swatch shown on the selector button. */
  swatch: string;
}

export const PALETTES: Record<Palette, PaletteDef> = {
  // SPEC §16.1
  dark: {
    id: "dark",
    label: "Dark",
    bg: "#0C0C0C",
    surface: "#111111",
    body: "#FF3B00",
    legs: "#CC2E00",
    eyes: "#1A1410",
    text: "#F0ECE0",
    swatch: "#FF3B00",
  },
  // SPEC §16.2 — physical primary, body inverted to dark
  orange: {
    id: "orange",
    label: "Orange",
    bg: "#FF3B00",
    surface: "#E63500",
    body: "#0C0C0C",
    legs: "#000000",
    eyes: "#FF3B00",
    text: "#0C0C0C",
    swatch: "#FF3B00",
  },
  // SPEC §16.3 — stationery
  cream: {
    id: "cream",
    label: "Cream",
    bg: "#F4F0E8",
    surface: "#EAE4D6",
    body: "#FF3B00",
    legs: "#CC2E00",
    eyes: "#1A1410",
    text: "#1A1410",
    swatch: "#F4F0E8",
  },
  // SPEC §16.4 — embroidery / silk
  mono: {
    id: "mono",
    label: "Mono",
    bg: "#0C0C0C",
    surface: "#111111",
    body: "#F0ECE0",
    legs: "#888888",
    eyes: "#0C0C0C",
    text: "#F0ECE0",
    swatch: "#F0ECE0",
  },
  // SPEC §19.1 — Nocturne ambient
  nocturne: {
    id: "nocturne",
    label: "Nocturne",
    bg: "#0B1220",
    surface: "#121A2C",
    body: "#D97A5E",
    legs: "#A85F46",
    eyes: "#0B1220",
    text: "#E7EAF0",
    swatch: "#D97A5E",
  },
};
