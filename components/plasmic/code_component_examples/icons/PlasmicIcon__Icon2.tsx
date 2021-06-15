// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 22 22"}
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
          "M19.4 3.5c.9-.7 1.6-1.8 2-3.1-.9.6-1.8 1.1-2.9 1.3-.8-1.1-2-1.8-3.3-1.8-2.5 0-4.5 2.5-4.5 5.6 0 .4 0 .9.1 1.3-3.7-.2-7-2.4-9.3-5.8-.4.8-.6 1.8-.6 2.8 0 1.9.8 3.6 2 4.6-.7 0-1.4-.3-2-.7v.1c0 2.7 1.6 4.9 3.6 5.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 2.2 2.2 3.8 4.2 3.9-1.5 1.5-3.5 2.4-5.6 2.4-.4 0-.7 0-1.1-.1C2 21.1 4.4 22 6.9 22c8.3 0 12.8-8.5 12.8-15.8v-.7c.9-.8 1.6-1.8 2.3-2.9-.8.4-1.7.7-2.6.9z"
        }
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
