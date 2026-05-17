// Shared rect helper for the M4 builders. Every M4 shape is a <rect> (SPEC §1.3).

export function rect(
  x: number,
  y: number,
  w: number,
  h: number,
  fill: string,
  opacity?: number,
  children = "",
): string {
  const op = opacity !== undefined ? ` opacity="${opacity}"` : "";
  if (children) {
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"${op}>${children}</rect>`;
  }
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"${op}/>`;
}
