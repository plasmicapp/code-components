// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon30Icon(props: Icon30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 49 49"}
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
          "M24.021 48.02c-13.255 0-24-10.744-24-24 0-13.254 10.745-24 24-24s24 10.746 24 24c0 13.256-10.745 24-24 24zm0-44c-11.046 0-20 8.955-20 20 0 11.046 8.954 20 20 20s20-8.954 20-20v.001c0-11.046-8.954-20-20-20zm2.25 24a1 1 0 01-1 1h-2.25a1 1 0 01-1-1c0-6.644 5.625-6.017 5.625-11 0-1.656-1.88-3-3.812-3-1.933 0-3.844 1.344-3.844 3-.007.57.08 1.136.26 1.677a.996.996 0 01-.94 1.324h-2.031a1.004 1.004 0 01-.97-.733 8.369 8.369 0 01-.288-2.267c0-3.866 3.581-7 8-7 4.418 0 8 3.134 8 7 0 6.417-5.75 6.167-5.75 11zm-2.25 4a3 3 0 11-3 3 3 3 0 013-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon30Icon;
/* prettier-ignore-end */
