import type { Metadata } from "next";
import M4 from "@/components/M4";
import M4Scene, { RawSvg } from "@/components/M4Scene";
import { SiteFooter, SiteHeader } from "@/components/SiteFrame";
import { DEFAULT_M4 } from "@/lib/m4/svg";
import { LAPTOP_SCENE, NOCTURNE_DECOR, PHONE_SCENE } from "@/lib/scenes";
import type { Posture } from "@/lib/postures";

export const metadata: Metadata = {
  title: "Scenes — M4 Playground",
  description: "M4 in canonical prop and ambient scenes — laptop, phone, Nocturne.",
};

/** Nocturne ambient stage: star/cloud backdrop with M4 in nocturne palette. */
function NocturneStage({ posture }: { posture: Posture }) {
  return (
    <div className="relative flex h-full w-full max-w-[420px] items-center justify-center">
      <div
        className="pointer-events-none absolute inset-0"
        dangerouslySetInnerHTML={{ __html: NOCTURNE_DECOR }}
      />
      <div className="relative">
        <M4
          {...DEFAULT_M4}
          palette="nocturne"
          posture={posture}
          codex="none"
          size={170}
        />
      </div>
    </div>
  );
}

export default function ScenesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-10 sm:px-8">
        <h1 className="font-display text-2xl font-bold tracking-tightest text-[#f0ece0]">
          Scenes
        </h1>
        <p className="mt-2 max-w-prose font-body text-[13px] leading-relaxed text-muted">
          M4 never simply stands beside a prop — it leans, cradles, or rests
          inside it. Prop scenes are assembled verbatim from SPEC §10–§11; the
          Nocturne stages follow §19.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <M4Scene
            title="Laptop"
            caption="SPEC §10 — squash posture, terminal typing cycle (3.2s)."
            bg="#0C0C0C"
          >
            <RawSvg svg={LAPTOP_SCENE} />
          </M4Scene>

          <M4Scene
            title="Phone"
            caption="SPEC §11 — upright, L-shaped paws, notification slide-in (4s)."
            bg="#0C0C0C"
          >
            <RawSvg svg={PHONE_SCENE} />
          </M4Scene>

          <M4Scene
            title="Nocturne · Reading"
            caption="SPEC §19 + §5.X — contemplative reading under a deep sky."
            bg="#0B1220"
          >
            <NocturneStage posture="reading" />
          </M4Scene>

          <M4Scene
            title="Nocturne · Walk"
            caption="SPEC §19 + §6.8 — M4 crossing the ground at night."
            bg="#0B1220"
          >
            <NocturneStage posture="walk" />
          </M4Scene>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
