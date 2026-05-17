// Canonical SMIL motion parameters — SPEC.md §6 (body), §7 (legs), §8 (eyes),
// consolidated with MOTION.md §13/§17 timing. Values copied literally.

export interface Anim {
  /** translate value list, e.g. "0,0; 0,-2; 0,0". */
  values: string;
  dur: string;
  keyTimes?: string;
  /** present => calcMode="spline". */
  keySplines?: string;
  /** present => calcMode="discrete". */
  discrete?: boolean;
}

// --- §6 Body animations ----------------------------------------------------

export const BODY_ANIM = {
  breathing: {
    values: "0,0; 0,-2; 0,0",
    dur: "3.5s",
    keyTimes: "0;0.5;1",
    keySplines: "0.4 0 0.4 1;0.4 0 0.4 1",
  },
  workingBob: {
    values: "0,0; 0,-4; 0,-1; 0,0",
    dur: "0.9s",
    keyTimes: "0;0.35;0.7;1",
    keySplines: "0.4 0 0.2 1;0.4 0 0.6 1;0.6 0 0.4 1",
  },
  happyJump: {
    values: "0,0; 0,-8; 0,0",
    dur: "0.6s",
    keyTimes: "0;0.4;1",
    keySplines: "0.4 0 0.2 1;0.4 0 0.6 1",
  },
  doneJump: {
    values: "0,0; 0,-14; 0,2; 0,0",
    dur: "0.7s",
    keyTimes: "0;0.4;0.75;1",
    keySplines: "0.4 0 0.2 1;0.4 0 0.6 1;0.6 0 0.4 1",
  },
  vibing: {
    values: "0,0; 0,-6; 0,-2; 0,0",
    dur: "0.5s",
    keyTimes: "0;0.4;0.7;1",
    keySplines: "0.4 0 0.2 1;0.4 0 0.6 1;0.6 0 0.4 1",
  },
  walk: {
    values: "0,0; -6,0; -10,-2; -6,0; 0,0",
    dur: "0.5s",
    keyTimes: "0;0.25;0.5;0.75;1",
    keySplines: "0.4 0 0.2 1;0.4 0 0.6 1;0.4 0 0.2 1;0.6 0 0.4 1",
  },
} satisfies Record<string, Anim>;

export type BodyAnimKey = keyof typeof BODY_ANIM;

// --- §7 Leg animations -----------------------------------------------------

/** §7.1 — typing tap, FL hits frame 2 of an 8-frame cycle. */
export const TAP_FL: Anim = {
  values: "0,0; 0,-3; 0,0; 0,0; 0,0; 0,0; 0,0; 0,0",
  dur: "0.8s",
  discrete: true,
};
/** §7.1 — typing tap, FR hits frame 5 (exact half-cycle offset). */
export const TAP_FR: Anim = {
  values: "0,0; 0,0; 0,0; 0,0; 0,-3; 0,0; 0,0; 0,0",
  dur: "0.8s",
  discrete: true,
};
/** §7.3 — quadruped walk stride. */
export const STRIDE: Anim = {
  values: "0,0; 0,-8; 4,-4; 0,0",
  dur: "0.5s",
  keySplines: "0.4 0 0.2 1;0.4 0 0.6 1;0.4 0 0.6 1",
};
/** §7.4 — dance, 4 beats with sequential begin offsets. */
export const DANCE: Anim = {
  values: "0,0; 0,-6; 0,0",
  dur: "0.5s",
  keySplines: "0.4 0 0.2 1;0.4 0 0.6 1",
};

// --- Renderers -------------------------------------------------------------

function calcMode(a: Anim): string {
  if (a.discrete) return ' calcMode="discrete"';
  if (a.keySplines) return ' calcMode="spline"';
  return "";
}

/** Render an <animateTransform type="translate"> element from an Anim. */
export function animateTransform(
  a: Anim,
  opts: { begin?: string; additive?: boolean } = {},
): string {
  const parts = [
    '<animateTransform attributeName="transform" type="translate"',
    `values="${a.values}"`,
    `dur="${a.dur}"`,
    'repeatCount="indefinite"',
  ];
  if (a.keyTimes) parts.push(`keyTimes="${a.keyTimes}"`);
  if (a.keySplines) parts.push(`keySplines="${a.keySplines}"`);
  if (opts.begin) parts.push(`begin="${opts.begin}"`);
  if (opts.additive) parts.push('additive="sum"');
  return parts.join(" ") + calcMode(a) + "/>";
}

/** Render a generic <animate> element. */
export function animate(
  attributeName: string,
  values: string,
  dur: string,
  opts: { begin?: string; discrete?: boolean } = {},
): string {
  const parts = [
    "<animate",
    `attributeName="${attributeName}"`,
    `values="${values}"`,
    `dur="${dur}"`,
    'repeatCount="indefinite"',
  ];
  if (opts.begin) parts.push(`begin="${opts.begin}"`);
  if (opts.discrete) parts.push('calcMode="discrete"');
  return parts.join(" ") + "/>";
}
