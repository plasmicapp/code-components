// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon24Icon(props: Icon24IconProps) {
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
          "M34 54v-8c0-8.052 12-7.72 12-20v-6h-6V10a2 2 0 10-4 0v10h-8V10a2 2 0 10-4 0v10h-6v6c0 12.28 12 11.948 12 20v8a2 2 0 104 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon24Icon;
/* prettier-ignore-end */
