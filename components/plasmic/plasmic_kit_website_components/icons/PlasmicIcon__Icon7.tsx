// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
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
          "M52.836 43.607a.995.995 0 01-1.638 0l-6.989-9.974a1.027 1.027 0 01.82-1.623h4.983c-.007-9.941-8.072-17.996-18.015-17.989a18.002 18.002 0 00-11.35 4.04 2 2 0 01-2.59-3.05c9.397-7.706 23.26-6.335 30.966 3.061a22.002 22.002 0 014.989 13.938h4.993a1.027 1.027 0 01.82 1.623l-6.99 9.974zM12.823 20.435l6.989 9.974a1.027 1.027 0 01-.819 1.623H14.01c.007 9.942 8.072 17.996 18.014 17.99a18.001 18.001 0 0011.351-4.04 2 2 0 112.589 3.05c-9.396 7.706-23.26 6.335-30.965-3.061a22.002 22.002 0 01-4.989-13.939H5.015a1.027 1.027 0 01-.819-1.622l6.989-9.974a.995.995 0 011.638 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
