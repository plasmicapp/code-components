// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
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
          "M40 42.031v.002c0 1.267-.29 2.518-.845 3.657l-.741 1.482a1.5 1.5 0 01-1.341.828H26.927a1.5 1.5 0 01-1.341-.83l-.741-1.48A8.337 8.337 0 0124 42.03l-5.72 5.72a.75.75 0 01-1.28-.53v-6.532a4 4 0 011.171-2.828l5.536-5.535a1 1 0 00.293-.708V24c0-12.686 5-18 8-18s8 5.314 8 18v7.617a1 1 0 00.293.707l5.535 5.536A4 4 0 0147 40.688v6.533a.75.75 0 01-1.28.53L40 42.03zM32 50a4.257 4.257 0 013.998 4.5c0 2.855-2.683 7.5-3.998 7.5-1.315 0-3.998-4.645-3.998-7.5A4.257 4.257 0 0132 50z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
