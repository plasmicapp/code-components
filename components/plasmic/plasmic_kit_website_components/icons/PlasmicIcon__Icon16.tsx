// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
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
          "M47 56H17a3 3 0 01-3-3V11a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 003 3h10a3 3 0 013 3v26a3 3 0 01-3 3zm-8-19h-5v-5a2 2 0 10-4 0v5h-5a2 2 0 000 4h5v5a2 2 0 004 0v-5h5a2 2 0 100-4zm8.585-15H36.999a1 1 0 01-1-1V10.414a1 1 0 011.707-.707l10.586 10.586A1 1 0 0147.585 22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
