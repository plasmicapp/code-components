// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
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
          "M45.002 53.984h-26a4.177 4.177 0 01-4-4.333V32.318a4.177 4.177 0 014-4.334h1V16.98c0-4.03.847-6.379 2.729-8.262 1.882-1.883 4.23-2.73 8.259-2.73h2.025c4.029 0 6.376.846 8.258 2.73 1.883 1.883 2.73 4.231 2.73 8.262v3.005a2 2 0 01-4 0V16.98c0-2.565-.54-4.059-1.737-5.257-1.198-1.199-2.692-1.738-5.256-1.738h-2.016c-2.564 0-4.057.54-5.255 1.738-1.198 1.198-1.737 2.692-1.737 5.257v11.003h21a4.177 4.177 0 014 4.334V49.65a4.177 4.177 0 01-4 4.333zm-13-22a4.987 4.987 0 00-2.737 9.165.977.977 0 01.398 1.057l-1.636 6.536a1 1 0 00.971 1.242h6.009a1 1 0 00.97-1.242l-1.635-6.536a.977.977 0 01.398-1.057 4.987 4.987 0 00-2.737-9.165z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
