// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon28Icon(props: Icon28IconProps) {
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
          "M56.02 42.02a2 2 0 01-2 2h-20v1.278l11.992 6.99a2.01 2.01 0 01.725 2.733 1.97 1.97 0 01-2.706.732l-10.01-5.836v4.104a2 2 0 01-4 0v-4.104L20.01 55.753a1.97 1.97 0 01-2.694-.711l-.012-.021a2.01 2.01 0 01.725-2.732l11.992-6.991v-1.277h-20a2 2 0 010-4v-24a2 2 0 010-4h20v-2a2 2 0 114 0v2h20a2 2 0 110 4v24a2 2 0 012 2zM42.469 27.127l-16-8a1 1 0 00-1.447.895v16a1 1 0 001.447.894l16-8a1 1 0 000-1.789z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon28Icon;
/* prettier-ignore-end */
