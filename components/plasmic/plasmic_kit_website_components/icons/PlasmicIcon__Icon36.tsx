// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon36Icon(props: Icon36IconProps) {
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
          "M55 38H9a1 1 0 01-1-1V15a5 5 0 015-5h38a5 5 0 015 5v22a1 1 0 01-1 1zM9 40h46a1 1 0 011 1 5 5 0 01-5 5H13a5 5 0 01-5-5 1 1 0 011-1zm12 14c2.025-.344 3.374-1.146 4-5a1.068 1.068 0 011-1h12c.538.033.967.462 1 1 .625 3.854 1.975 4.656 4 5 .537.035.965.463 1 1a1 1 0 01-1 1H21a1 1 0 01-1-1 1.071 1.071 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon36Icon;
/* prettier-ignore-end */
