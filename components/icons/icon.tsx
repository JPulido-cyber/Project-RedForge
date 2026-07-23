import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function iconProps({
  size = 20,
  ...props
}: IconProps): SVGProps<SVGSVGElement> {
  return {
    "aria-hidden": props["aria-label"] ? undefined : true,
    fill: "none",
    height: size,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.75,
    viewBox: "0 0 24 24",
    width: size,
    ...props,
  };
}
