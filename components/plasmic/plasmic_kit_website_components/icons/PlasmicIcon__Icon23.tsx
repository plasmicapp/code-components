// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon23Icon(props: Icon23IconProps) {
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
          "M10.052 53.064l2.018-6.739a8.002 8.002 0 012.003-3.358L39.721 17.28a.998.998 0 011.41-.001l.002.001 5.578 5.588a1 1 0 010 1.414L21.065 49.968a7.994 7.994 0 01-3.358 2.009l-6.722 2.02a.75.75 0 01-.933-.933zm40.314-42.189l2.746 2.75a2.993 2.993 0 010 4.228l-3.347 3.35a.994.994 0 01-1.406.002l-.001-.001-5.561-5.569a.998.998 0 010-1.41l3.347-3.35a2.982 2.982 0 014.222 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon23Icon;
/* prettier-ignore-end */
