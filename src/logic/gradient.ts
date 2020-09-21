export function gradient (
  startColor: string,
  endColor: string,
  steps: number,
): string[] {
  const start = {
    Hex: startColor,
    R: parseInt(startColor.slice(1, 3), 16),
    G: parseInt(startColor.slice(3, 5), 16),
    B: parseInt(startColor.slice(5, 7), 16),
  };
  const end = {
    Hex: endColor,
    R: parseInt(endColor.slice(1, 3), 16),
    G: parseInt(endColor.slice(3, 5), 16),
    B: parseInt(endColor.slice(5, 7), 16),
  };
  const diffR = end.R - start.R;
  const diffG = end.G - start.G;
  const diffB = end.B - start.B;

  const stepsHex: string[] = new Array();
  const stepsR: number[] = new Array();
  const stepsG: number[] = new Array();
  const stepsB: number[] = new Array();

  for (let i = 0; i <= steps; i++) {
    stepsR[i] = start.R + (diffR / steps) * i;
    stepsG[i] = start.G + (diffG / steps) * i;
    stepsB[i] = start.B + (diffB / steps) * i;
    stepsHex[i] = `#${Math.round(stepsR[i]).toString(16)}${Math.round(
      stepsG[i],
    ).toString(16)}${Math.round(stepsB[i]).toString(16)}`;
  }
  return stepsHex;
}
