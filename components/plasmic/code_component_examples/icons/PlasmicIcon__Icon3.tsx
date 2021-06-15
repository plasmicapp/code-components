// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
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
          "M16.8 10.7c-.2-.1-.4-.2-.6-.4l-.7-1.1c-.2-.3-.2-.7 0-1.1l.8-1.1c.1-.1.2-.3.4-.3l.5-.3c.6 1.1.9 2.4.9 3.6 0 .4 0 .7-.1 1l-1.2-.3zm-3.5 3.7l-.5.5c-.1.1-.2.3-.2.4-.1.2-.1.5-.2.7l-.7 1.9c-.6.1-1.1.2-1.7.2V17c.1-.5-.3-1.5-.9-2.1-.2-.2-.4-.6-.4-.9v-1.3c0-.5-.3-.9-.7-1.1-.6-.4-1.3-.7-2-1.1-.4-.2-.8-.5-1.2-.9-.3-.2-.6-.5-.8-.8-.3-.6-1-1.5-1.4-2.1.9-1.8 2.4-3.3 4.2-4.1l1 .5c.3.2.7 0 .9-.3 0-.1.1-.2.1-.3V2h.9l1.1 1.1c.3.3.3.7 0 .9l-.2.2-.4.4c-.1.1-.1.3 0 .5l.2.2c.1.1.1.3 0 .5l-.3.2c-.1.1-.2.1-.2.1h-.4c-.1 0-.2 0-.2.1l-.4.4c-.1.1-.2.3-.1.4l.6 1.3c.1.2 0 .4-.1.4h-.4c-.1 0-.2 0-.2-.1l-.4-.3c-.1-.1-.4-.2-.6-.1l-1.2.4c-.3.1-.4.4-.3.6 0 .1.1.2.2.3l.4.2c.4.2.8.3 1.3.3s.9 1.1 1.3 1.3H12c.3 0 .7.1.9.4l.6.6c.2.2.4.5.4.9s-.2.9-.6 1.2zM10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0z"
        }
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
