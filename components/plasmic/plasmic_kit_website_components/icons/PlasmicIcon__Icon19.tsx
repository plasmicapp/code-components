// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon19Icon(props: Icon19IconProps) {
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
          "M50.484 15.04c1.854.108 3.704-.26 5.375-1.07a.244.244 0 01.326.32c-2.382 5.025-6.644 5.66-11.269 8.05 2.045.23 4.111.177 6.142-.155a.244.244 0 01.227.4c-5.29 5.818-8.766 2.33-14.8 6.682a35.398 35.398 0 00-9.475 9.754c-.337.617-.984 1-1.687 1a1.322 1.322 0 01-1.313-1.5c0-2.11 3.852-10.29 13.453-19.845C48.183 8.008 55.898 6.296 57.743 6.03a.24.24 0 01.25.34c-.672 1.438-3.27 6.49-7.51 8.67zM12.01 18.014a6.007 6.007 0 016-6.002h15a2 2 0 110 4.001h-15c-1.104.001-2 .896-2 2V46.02a2 2 0 002 2h28a2.003 2.003 0 002-2v-15a2 2 0 114 0v15a6.008 6.008 0 01-6 6.003h-28a6.008 6.008 0 01-6-6.002V18.015z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
