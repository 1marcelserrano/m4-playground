// M4 SVG composer — turns a set of options into the canonical inline SVG.
// One function builds the markup; the playground both renders it and shows
// it verbatim in the XML viewer, so what you copy is exactly what you see.

import { CODEXES, type Codex } from "../codex";
import { BODY_ANIM } from "../motion";
import { PALETTES, type Palette } from "../palettes";
import { POSTURES, type Posture } from "../postures";
import { m4Antenna } from "./antenna";
import { m4Body } from "./body";
import { m4Eyes } from "./eyes";
import { m4Legs } from "./legs";
import { animateTransform } from "../motion";

export interface M4Options {
  palette: Palette;
  codex: Codex;
  posture: Posture;
  size: number;
  showShoesPattern: boolean;
  codexEyes: boolean;
  showGrid: boolean;
  animationsEnabled: boolean;
}

export const DEFAULT_M4: M4Options = {
  palette: "dark",
  codex: "none",
  posture: "idle",
  size: 240,
  showShoesPattern: true,
  codexEyes: false,
  showGrid: false,
  animationsEnabled: true,
};

const VIEW_W = 150;
const VIEW_H = 165;

/** Eye color resolution — SPEC §18.6.2 priority order. */
function resolveEyeColor(o: M4Options): string {
  const pal = PALETTES[o.palette];
  const post = POSTURES[o.posture];
  // Positional state wins over Codex.
  if (post.eyes === "reading") return pal.eyes;
  if (o.codexEyes && o.codex !== "none") {
    if (o.palette === "mono") return "#0C0C0C"; // monochrome wins
    if (o.palette === "orange") return "#FF3B00"; // physical convention wins
    return CODEXES[o.codex].eye;
  }
  return pal.eyes;
}

function gridOverlay(): string {
  const lines: string[] = [];
  for (let x = 0; x <= VIEW_W; x += 10) {
    lines.push(
      `<line x1="${x}" y1="0" x2="${x}" y2="${VIEW_H}" stroke="#7A7080" stroke-width="0.4" opacity="0.3"/>`,
    );
  }
  for (let y = 0; y <= VIEW_H; y += 10) {
    lines.push(
      `<line x1="0" y1="${y}" x2="${VIEW_W}" y2="${y}" stroke="#7A7080" stroke-width="0.4" opacity="0.3"/>`,
    );
  }
  return `<g aria-hidden="true">\n  ${lines.join("\n  ")}\n  </g>`;
}

/**
 * Build the full M4 SVG markup.
 * @param forXml  When true, omits the grid overlay and uses canonical
 *                width/height — the form shown in the XML viewer.
 */
export function buildM4Svg(o: M4Options, forXml = false): string {
  const pal = PALETTES[o.palette];
  const cdx = CODEXES[o.codex];
  const post = POSTURES[o.posture];
  const isNoCodex = o.codex === "none";

  const bodyAnimDef = post.bodyAnim ? BODY_ANIM[post.bodyAnim] : null;
  const animOn = o.animationsEnabled && !post.frozen;

  const bodyFill = pal.body;
  const eyeFill = resolveEyeColor(o);

  // --- Body group: body rects + eyes + antenna, moved as one ---------------
  const groupInner = [
    bodyAnimDef && animOn ? animateTransform(bodyAnimDef) : "",
    m4Body(bodyFill),
    m4Eyes(post.eyes, eyeFill),
    m4Antenna(post.antenna, bodyFill, animOn),
  ]
    .filter(Boolean)
    .join("\n  ");

  const groupOpen = post.frozen
    ? `<g transform="translate(${post.leanX}, 0)">` // §5.X — static lean
    : "<g>";

  // --- Legs ----------------------------------------------------------------
  const usePattern =
    o.showShoesPattern &&
    !isNoCodex &&
    cdx.pattern !== null &&
    o.palette !== "mono" && // §18.5.8 — never in Mono
    o.posture !== "reading"; // §18.5.8 — never in reading

  const legs = m4Legs({
    codex: cdx,
    isNoCodex,
    paletteLegs: pal.legs,
    usePattern,
    reading: o.posture === "reading",
    legMode: post.legMode,
    bodyAnim: bodyAnimDef,
    animationsEnabled: animOn,
  });

  // --- Accessibility -------------------------------------------------------
  const codexLabel = isNoCodex ? "" : `, ${cdx.label} Codex`;
  const title = `M4 mascot — ${post.label} posture, ${pal.label} palette${codexLabel}`;
  const desc =
    "Rect-only pixel-art mascot of MSCREATIVE.SYSTEMS, rendered per SPEC v3.1.";

  const width = forXml ? VIEW_W : o.size;
  const height = forXml ? VIEW_H : Math.round((o.size * VIEW_H) / VIEW_W);

  const grid = !forXml && o.showGrid ? gridOverlay() + "\n  " : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VIEW_W} ${VIEW_H}" width="${width}" height="${height}" shape-rendering="crispEdges" role="img" aria-label="${title}">
  <title>${title}</title>
  <desc>${desc}</desc>
  ${grid}${groupOpen}
  ${groupInner}
  </g>
  ${legs}
</svg>`;
}
