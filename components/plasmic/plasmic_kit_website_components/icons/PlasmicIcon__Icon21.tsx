// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon21Icon(props: Icon21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M26.249 28H5.753a.756.756 0 01-.75-.83C5.339 23.752 8.898 20 16 20s10.662 3.752 10.997 7.17a.756.756 0 01-.75.83zM16 18c-3.201 0-5.997-2.778-5.997-7.25C10.003 6.9 12.424 4 16 4c3.575 0 5.996 2.9 5.996 6.75 0 4.472-2.795 7.25-5.996 7.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon21Icon;
/* prettier-ignore-end */
