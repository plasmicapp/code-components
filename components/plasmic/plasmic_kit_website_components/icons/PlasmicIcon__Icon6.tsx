// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
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
          "M54 52H10a2 2 0 01-2-2v-6a2 2 0 012-2h9a1 1 0 001-1v-7a2 2 0 012-2h9a1 1 0 001-1v-7a2 2 0 012-2h9a1 1 0 001-1v-7a2 2 0 012-2h8a2 2 0 012 2v36a2 2 0 01-2 2zM21.998 25.976a2 2 0 01-2.002-1.998v-5.141l-8.624 8.577a1.99 1.99 0 11-2.804-2.823l8.642-8.595h-5.233a1.998 1.998 0 110-3.996h10.02A2 2 0 0124 13.998v9.98a2 2 0 01-2.002 1.998z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
