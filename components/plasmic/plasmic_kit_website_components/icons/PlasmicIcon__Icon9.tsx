// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
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
          "M8 32C8 18.745 18.745 8 32 8s24 10.745 24 24-10.745 24-24 24S8 45.255 8 32zm44 0v.002C52 21.73 44.22 13.128 34.002 12.1v25.071l7.572-7.587a2.002 2.002 0 012.83 2.832L33.397 43.44a1.998 1.998 0 01-2.827.003l-.003-.003-11.004-11.023a2.002 2.002 0 012.83-2.832L30 37.205V12.102C19.01 13.205 10.996 23.01 12.1 34 13.205 44.99 23.01 53.005 34 51.9c10.22-1.028 18-9.63 18-19.9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
