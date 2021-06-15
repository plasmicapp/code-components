// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
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
          "M16 18a8.983 8.983 0 003.343 7A8.983 8.983 0 0016 32a8.983 8.983 0 003.343 7A9 9 0 1034 46v-6.516A9 9 0 0044.657 25 9 9 0 0039 9H25a9 9 0 00-9 9zm9-5a5 5 0 000 10h5V13h-5zm5 24V27h-5a5 5 0 000 10h5zm0 4h-5a5 5 0 105 5v-5zm9-4a5 5 0 110-10 5 5 0 010 10zm0-14a5 5 0 000-10h-5v10h5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
