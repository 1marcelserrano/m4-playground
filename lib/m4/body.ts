// M4 body — 7 canonical rects. SPEC.md §2.2 (XML canônico completo).
// Coordinates copied literally; do not edit without a spec change.

import { rect } from "./util";

export function m4Body(fill: string): string {
  return [
    rect(8, 36, 22, 66, fill), // pilar esq
    rect(110, 36, 22, 66, fill), // pilar dir
    rect(8, 36, 42, 13, fill), // topo esq
    rect(90, 36, 42, 13, fill), // topo dir
    rect(30, 48, 18, 18, fill), // diag esq
    rect(92, 48, 18, 18, fill), // diag dir
    rect(46, 60, 48, 13, fill), // pico = barriga
  ].join("\n  ");
}
