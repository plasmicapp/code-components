// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 15 24"}
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
          "M14.5.3c-.4-.1-2-.2-3.7-.2-3.7 0-6.2 2-6.2 5.6v3.1H.4V13h4.2v10.9h5V13h4.1l.6-4.2H9.6V6.1c0-1.2.3-2.1 2.3-2.1h2.6V.3z"
        }
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
