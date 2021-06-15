// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon29Icon(props: Icon29IconProps) {
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
          "M32.01 56.02c-13.255 0-24-10.744-24-24 0-13.254 10.745-24 24-24s24 10.746 24 24c0 13.256-10.745 24-24 24zm0-44c-11.046 0-20 8.955-20 20.001 0 11.047 8.955 20.001 20 20 11.047 0 20.001-8.954 20.001-20s-8.954-20.001-20-20.001h-.001zm2 33a2 2 0 01-4 0v-11h-11a2 2 0 010-4h11v-11a2 2 0 114 0v11h11a2 2 0 110 4h-11v11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon29Icon;
/* prettier-ignore-end */
