// M4 antenna — SPEC.md §4 (Loading / Full Signal) + §5.X.3 (reading).

import type { AntennaVariant } from "../postures";
import { animate } from "../motion";
import { rect } from "./util";

/**
 * @param fill      Body color (antenna shares the body fill).
 * @param animated  When false, SMIL opacity animation is dropped.
 */
export function m4Antenna(
  variant: AntennaVariant,
  fill: string,
  animated: boolean,
): string {
  const haste = rect(110, 18, 8, 20, fill);
  const ghost = rect(106, 8, 16, 10, fill, 0.25);

  if (variant === "reading") {
    // §5.X.3 — haste only, no emitting bars.
    return [haste, ghost].join("\n  ");
  }

  const bar1 = rect(120, 30, 9, 6, fill); // sempre acesa

  if (variant === "full") {
    // §4.3 — Full Signal, every bar solid, no animation.
    return [
      haste,
      bar1,
      rect(120, 23, 9, 6, fill),
      rect(120, 16, 9, 6, fill),
      rect(106, 8, 16, 10, fill),
    ].join("\n  ");
  }

  // §4.1 — Loading ↑ (1.8s).
  const bar2 = animated
    ? rect(120, 23, 9, 6, fill, 0.15, animate("opacity", "0.15;1;0.15", "1.8s", { begin: "0.45s" }))
    : rect(120, 23, 9, 6, fill);
  const bar3 = animated
    ? rect(120, 16, 9, 6, fill, 0.05, animate("opacity", "0.05;1;0", "1.8s", { begin: "0.9s" }))
    : rect(120, 16, 9, 6, fill);

  return [haste, bar1, bar2, bar3, ghost].join("\n  ");
}
