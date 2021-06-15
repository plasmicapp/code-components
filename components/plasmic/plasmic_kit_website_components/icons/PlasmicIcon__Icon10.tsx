// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M47.002 57.997H13a.998.998 0 01-1-.979 2.562 2.562 0 011.94-2.506l13.306-3.325a1 1 0 00.758-.97v-1.439a1 1 0 00-.758-.97l-9.304-2.325a2.562 2.562 0 01-1.94-2.506.998.998 0 011-.979H37.06a3.927 3.927 0 003.505-2.066 12.94 12.94 0 001.153-8.66 2.006 2.006 0 00-1.277-1.458l-4.946-1.8-1.964 5.348a2.014 2.014 0 01-2.572 1.188l-1.029 2.8c-.19.517-.76.783-1.279.597l-3.788-1.362a.988.988 0 01-.595-1.263l.002-.007 1.029-2.8a1.98 1.98 0 01-1.202-2.545l5.828-15.867a2.014 2.014 0 012.573-1.188l3.768-10.26a1.014 1.014 0 011.289-.601l3.773 1.356a.996.996 0 01.6 1.274l-.002.006-3.768 10.26a1.98 1.98 0 011.207 2.527l-.006.018-.183.498c8.832 5.556 11.488 17.22 5.932 26.052-.225.358-.462.708-.711 1.05-.223.3-.259.7-.094 1.035l4.489 8.973a2 2 0 01-1.79 2.894z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
