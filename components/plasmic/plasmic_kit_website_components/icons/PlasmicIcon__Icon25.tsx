// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon25Icon(props: Icon25IconProps) {
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
          "M54.01 44.02a2 2 0 01-2 2h-40a2 2 0 01-2-2v-4a2 2 0 012-2h40a2 2 0 012 2v4zm-.146-11.234a2 2 0 01-1.849 1.235H12.003a2 2 0 01-1.414-3.414l20.006-20a2 2 0 012.83 0l20.006 20a2 2 0 01.433 2.18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon25Icon;
/* prettier-ignore-end */
