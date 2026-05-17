// M4 legs — 4 rects + Codex shoes + pixel-art patterns.
// SPEC.md §2.2 (coords), §5.X.3 (reading), §7 (motion), §18 (shoes + patterns).

import { VOID, type CodexDef } from "../codex";
import {
  type Anim,
  animateTransform,
  DANCE,
  STRIDE,
  TAP_FL,
  TAP_FR,
} from "../motion";
import type { LegMode } from "../postures";
import { rect } from "./util";

type LegId = "FL" | "BL" | "BR" | "FR";
interface Leg {
  id: LegId;
  x: number;
  y: number;
  w: number;
  h: number;
  side: "L" | "R";
  front: boolean;
}

/** §2.2 canonical leg geometry. */
const LEGS: Leg[] = [
  { id: "FL", x: 8, y: 100, w: 15, h: 30, side: "L", front: true },
  { id: "BL", x: 28, y: 100, w: 15, h: 22, side: "L", front: false },
  { id: "BR", x: 97, y: 100, w: 15, h: 22, side: "R", front: false },
  { id: "FR", x: 117, y: 100, w: 15, h: 30, side: "R", front: true },
];

/** §5.X.3 — reading posture nudges BL/BR 2px toward center. */
const READING_X: Partial<Record<LegId, number>> = { BL: 30, BR: 95 };

// --- Pattern generators (§18.5) --------------------------------------------

function stripes(leg: Leg, c1: string, c2: string): string[] {
  // §18.5.3 — 5px horizontal bands, alternating.
  const out: string[] = [];
  let cy = leg.y;
  let i = 0;
  while (cy < leg.y + leg.h) {
    const bh = Math.min(5, leg.y + leg.h - cy);
    out.push(rect(leg.x, cy, leg.w, bh, i % 2 === 0 ? c1 : c2));
    cy += 5;
    i++;
  }
  return out;
}

function tricolor(leg: Leg, c1: string, c2: string): string[] {
  // §18.5.4 — 3 vertical columns, mirrored between sides.
  const cols = leg.side === "L" ? [c1, c2, VOID] : [VOID, c2, c1];
  return cols.map((c, i) => rect(leg.x + i * 5, leg.y, 5, leg.h, c));
}

function checker(leg: Leg, c1: string, c2: string): string[] {
  // §18.5.5 — 5×5 checker, color alternates by (row + col).
  const out: string[] = [];
  let ry = leg.y;
  let row = 0;
  while (ry < leg.y + leg.h) {
    const rh = Math.min(5, leg.y + leg.h - ry);
    for (let col = 0; col < 3; col++) {
      out.push(rect(leg.x + col * 5, ry, 5, rh, (row + col) % 2 === 0 ? c1 : c2));
    }
    ry += 5;
    row++;
  }
  return out;
}

function thick(leg: Leg, c1: string): string[] {
  // §18.5.6 — pulse (8h, shoe-1) + beat (4h, void), alternating.
  const out: string[] = [];
  let cy = leg.y;
  let idx = 0;
  while (cy < leg.y + leg.h) {
    const isPulse = idx % 2 === 0;
    const want = isPulse ? 8 : 4;
    const bh = Math.min(want, leg.y + leg.h - cy);
    out.push(rect(leg.x, cy, leg.w, bh, isPulse ? c1 : VOID));
    cy += bh;
    idx++;
  }
  return out;
}

function patternRects(leg: Leg, codex: CodexDef): string[] {
  const c1 = codex.shoe1;
  const c2 = codex.shoe2;
  switch (codex.pattern) {
    case "stripes":
      return stripes(leg, c1, c2);
    case "tricolor":
      return tricolor(leg, c1, c2);
    case "checker":
      return checker(leg, c1, c2);
    case "thick":
      return thick(leg, c1);
    default:
      return [];
  }
}

// --- Per-leg motion (§7) ---------------------------------------------------

function legAnim(
  leg: LegId,
  mode: LegMode,
  bodyAnim: Anim | null,
  animationsEnabled: boolean,
): string {
  if (!animationsEnabled) return "";
  switch (mode) {
    case "follow":
      return bodyAnim ? animateTransform(bodyAnim) : "";
    case "tap":
      if (leg === "FL") return animateTransform(TAP_FL);
      if (leg === "FR") return animateTransform(TAP_FR);
      return "";
    case "walk": {
      // §7.3 — FL+BR phase A, FR+BL phase B.
      const begin = leg === "FL" || leg === "BR" ? "0s" : "0.25s";
      return animateTransform(STRIDE, { begin });
    }
    case "dance": {
      // §7.4 — sequential offsets FL → BL → BR → FR.
      const begins: Record<LegId, string> = {
        FL: "0s",
        BL: "0.125s",
        BR: "0.25s",
        FR: "0.375s",
      };
      return animateTransform(DANCE, { begin: begins[leg] });
    }
    default:
      return "";
  }
}

// --- Compose ---------------------------------------------------------------

export interface LegsOptions {
  codex: CodexDef;
  isNoCodex: boolean;
  /** Default leg fill from the active palette (used when no Codex). */
  paletteLegs: string;
  /** Render the pixel-art pattern instead of a solid shoe. */
  usePattern: boolean;
  /** Reading posture — applies the §5.X.3 leg offsets. */
  reading: boolean;
  legMode: LegMode;
  bodyAnim: Anim | null;
  animationsEnabled: boolean;
}

export function m4Legs(o: LegsOptions): string {
  return LEGS.map((base) => {
    const leg: Leg = o.reading
      ? { ...base, x: READING_X[base.id] ?? base.x }
      : base;

    const solidFill = o.isNoCodex
      ? o.paletteLegs
      : leg.front
        ? o.codex.shoe1
        : o.codex.shoe2;

    const body =
      o.usePattern && !o.isNoCodex && o.codex.pattern
        ? patternRects(leg, o.codex).join("")
        : rect(leg.x, leg.y, leg.w, leg.h, solidFill);

    const anim = legAnim(leg.id, o.legMode, o.bodyAnim, o.animationsEnabled);
    return `<g>${anim}${body}</g>`;
  }).join("\n  ");
}
