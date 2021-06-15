// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon35Icon(props: Icon35IconProps) {
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
          "M42 56H22a5 5 0 01-5-5V13a5 5 0 015-5h20a5 5 0 015 5v38a5 5 0 01-5 5zM32 46a3 3 0 100 6 3 3 0 000-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon35Icon;
/* prettier-ignore-end */
