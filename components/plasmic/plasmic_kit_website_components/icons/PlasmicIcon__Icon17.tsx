// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon17Icon(props: Icon17IconProps) {
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
          "M37.02 22.02a1 1 0 01-1-1V10.436a1 1 0 011.708-.707l10.586 10.586a1 1 0 01-.707 1.707H37.02zm13 5v26a3 3 0 01-3 3h-30a3 3 0 01-3-3v-42a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 003 3h10a3 3 0 013 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
