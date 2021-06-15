// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon22Icon(props: Icon22IconProps) {
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
          "M58 45h-8a1 1 0 01-1-1v-7l-1.268 1.268a2.5 2.5 0 01-1.768.732H41.67a.67.67 0 01-.67-.67v-.744a.75.75 0 01.568-.728L45 36l4.103-5.744A3 3 0 0151.544 29H55a4 4 0 014 4v11a1 1 0 01-1 1zm-4-18a5 5 0 110-10 5 5 0 010 10zM38 39H26a1 1 0 01-1-1v-5a4 4 0 014-4h6a4 4 0 014 4v5a1 1 0 01-1 1zm-6-12a5 5 0 110-10 5 5 0 010 10zm-9.67 12h-4.294a2.5 2.5 0 01-1.768-.732L15 37v7a1 1 0 01-1 1H6a1 1 0 01-1-1V33a4 4 0 014-4h3.456a3 3 0 012.441 1.256L19 36l3.432.858a.75.75 0 01.568.728v.744c0 .37-.3.67-.67.67zM10 27a5 5 0 110-10 5 5 0 010 10zm10 14h24a1 1 0 011 1v2a1 1 0 01-1 1H20a1 1 0 01-1-1v-2a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon22Icon;
/* prettier-ignore-end */
