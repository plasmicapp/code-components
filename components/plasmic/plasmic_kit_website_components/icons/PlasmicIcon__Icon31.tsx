// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon31Icon(props: Icon31IconProps) {
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
          "M32.01 56.02c-13.255 0-24-10.744-24-24 0-13.254 10.745-24 24-24s24 10.746 24 24c0 13.256-10.745 24-24 24zm11.866-25.8l-17.984-9.008A2 2 0 0023 23.002V41.02a2 2 0 002.892 1.79l17.984-9.008a2.005 2.005 0 000-3.582z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon31Icon;
/* prettier-ignore-end */
