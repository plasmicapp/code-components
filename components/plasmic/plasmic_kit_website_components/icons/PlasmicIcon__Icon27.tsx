// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon27Icon(props: Icon27IconProps) {
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
          "M12.999 19.306l16.998 10.317v-8.524A1.997 1.997 0 0133 19.306L50.01 29.63v-8.61a2 2 0 114 0v22a2 2 0 11-4 0v-8.61L32.999 44.733a1.997 1.997 0 01-3.002-1.794v-8.523L13 44.734a1.997 1.997 0 01-3.002-1.794V21.1A1.997 1.997 0 0113 19.305z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon27Icon;
/* prettier-ignore-end */
