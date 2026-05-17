// 8 canonical postures — SPEC.md §5 (expressions), §5.X (reading), §6/§7 (motion).

import type { BodyAnimKey } from "./motion";

export type Posture =
  | "idle"
  | "working"
  | "happy"
  | "done"
  | "reading"
  | "walk"
  | "dance"
  | "vibing";

export const POSTURE_IDS: Posture[] = [
  "idle",
  "working",
  "happy",
  "done",
  "reading",
  "walk",
  "dance",
  "vibing",
];

export type AntennaVariant = "loading" | "full" | "reading";
export type EyeExpression = "idle" | "happy" | "reading";
export type LegMode = "follow" | "tap" | "walk" | "dance" | "static";

export interface PostureDef {
  id: Posture;
  label: string;
  /** Antenna state for this posture (§4). */
  antenna: AntennaVariant;
  /** Eye expression (§5). */
  eyes: EyeExpression;
  /** Body group animation, or null for a static posture. */
  bodyAnim: BodyAnimKey | null;
  /**
   * follow = legs share the body animation (whole creature moves as one);
   * tap    = §7.1 typing tap; walk = §7.3 stride; dance = §7.4 sequential;
   * static = no leg animation.
   */
  legMode: LegMode;
  /** Static lean translate on X (reading posture, §5.X.2). */
  leanX: number;
  /** True => no <animate>/<animateTransform> emitted at all (§5.X.2). */
  frozen: boolean;
}

export const POSTURES: Record<Posture, PostureDef> = {
  idle: {
    id: "idle",
    label: "Idle",
    antenna: "loading",
    eyes: "idle",
    bodyAnim: "breathing",
    legMode: "follow",
    leanX: 0,
    frozen: false,
  },
  working: {
    id: "working",
    label: "Working",
    antenna: "full",
    eyes: "idle",
    bodyAnim: "workingBob",
    legMode: "tap",
    leanX: 0,
    frozen: false,
  },
  happy: {
    id: "happy",
    label: "Happy",
    antenna: "full",
    eyes: "happy",
    bodyAnim: "happyJump",
    legMode: "follow",
    leanX: 0,
    frozen: false,
  },
  done: {
    id: "done",
    label: "Done",
    antenna: "full",
    eyes: "happy",
    bodyAnim: "doneJump",
    legMode: "follow",
    leanX: 0,
    frozen: false,
  },
  reading: {
    id: "reading",
    label: "Reading",
    antenna: "reading",
    eyes: "reading",
    bodyAnim: null,
    legMode: "static",
    leanX: 2,
    frozen: true,
  },
  walk: {
    id: "walk",
    label: "Walk",
    antenna: "loading",
    eyes: "idle",
    bodyAnim: "walk",
    legMode: "walk",
    leanX: 0,
    frozen: false,
  },
  dance: {
    id: "dance",
    label: "Dance",
    antenna: "loading",
    eyes: "happy",
    bodyAnim: "vibing",
    legMode: "dance",
    leanX: 0,
    frozen: false,
  },
  vibing: {
    id: "vibing",
    label: "Vibing",
    antenna: "loading",
    eyes: "idle",
    bodyAnim: "vibing",
    legMode: "follow",
    leanX: 0,
    frozen: false,
  },
};
