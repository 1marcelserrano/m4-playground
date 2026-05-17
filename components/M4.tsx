import { buildM4Svg, type M4Options } from "@/lib/m4/svg";

/**
 * Renders the canonical M4 mascot. The same builder feeds the XML viewer,
 * so the rendered pixels and the copyable markup never drift apart.
 */
export default function M4(props: M4Options & { className?: string }) {
  const { className, ...options } = props;
  const svg = buildM4Svg(options);
  return (
    <div
      className={className}
      style={{ lineHeight: 0 }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
