interface M4SceneProps {
  title: string;
  caption: string;
  /** Background color of the scene stage. */
  bg: string;
  children: React.ReactNode;
}

/** Frames an M4 composition (prop scene or ambient scene) with a caption. */
export default function M4Scene({ title, caption, bg, children }: M4SceneProps) {
  return (
    <figure className="border border-hairline">
      <div
        className="flex aspect-[4/3] items-center justify-center overflow-hidden p-4"
        style={{ background: bg }}
      >
        {children}
      </div>
      <figcaption className="border-t border-hairline px-4 py-3">
        <h3 className="font-display text-sm font-bold tracking-tightest text-[#f0ece0]">
          {title}
        </h3>
        <p className="mt-0.5 font-body text-[12px] text-muted">{caption}</p>
      </figcaption>
    </figure>
  );
}

/** Renders a raw SVG markup string at a responsive width. */
export function RawSvg({ svg }: { svg: string }) {
  return (
    <div
      className="w-full max-w-[420px]"
      style={{ lineHeight: 0 }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
