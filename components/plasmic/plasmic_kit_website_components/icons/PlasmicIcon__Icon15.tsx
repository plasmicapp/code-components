// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon15Icon(props: Icon15IconProps) {
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
        d={
          "M33.585 42.94l7.477-9.72a2 2 0 000-2.44l-7.477-9.72a2 2 0 00-3.17 0l-7.477 9.72a2 2 0 000 2.44l7.477 9.72a2 2 0 003.17 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M32 8C18.745 8 8 18.745 8 32s10.745 24 24 24 24-10.745 24-24S45.255 8 32 8zM12 32c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
