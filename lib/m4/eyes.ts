// M4 eyes — SPEC.md §5.1 (Idle), §5.3 (Happy ^^), §5.X.3 (reading line).

import type { EyeExpression } from "../postures";
import { rect } from "./util";

export function m4Eyes(expr: EyeExpression, fill: string): string {
  if (expr === "reading") {
    // §5.X.3 — horizontal line 12×3 at y=72.
    return [rect(12, 72, 12, 3, fill), rect(116, 72, 12, 3, fill)].join("\n  ");
  }

  if (expr === "happy") {
    // §5.3 — Happy ^^, 3 rects per eye forming a pixel arc.
    return [
      rect(12, 74, 12, 6, fill), // base do arco esq
      rect(12, 68, 5, 6, fill), // ponto esq
      rect(19, 68, 5, 6, fill), // ponto dir
      rect(116, 74, 12, 6, fill), // base do arco dir
      rect(116, 68, 5, 6, fill),
      rect(123, 68, 5, 6, fill),
    ].join("\n  ");
  }

  // §5.1 — Idle, canonical 12×12 squares.
  return [rect(12, 68, 12, 12, fill), rect(116, 68, 12, 12, fill)].join("\n  ");
}
