// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon13Icon(props: Icon13IconProps) {
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
          "M38.333 17.171a2 2 0 00-3.845-1.102l-8.82 30.76a2 2 0 003.844 1.102l8.82-30.76zm-16.606 6.821a2 2 0 01-.72 2.736L11.97 32l9.039 5.273a2 2 0 11-2.016 3.455L7.177 33.836c-1.405-.82-1.405-2.851 0-3.671l11.815-6.892a2 2 0 012.735.72zm20.545 0a2 2 0 00.72 2.736L52.031 32l-9.039 5.273a2 2 0 002.016 3.455l11.815-6.892c1.405-.82 1.405-2.851 0-3.671l-11.815-6.892a2 2 0 00-2.736.72z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */
