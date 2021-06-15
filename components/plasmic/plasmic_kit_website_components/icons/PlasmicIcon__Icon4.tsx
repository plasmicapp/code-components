// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1440 442"}
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
          "M0 0s34.176 9.964 50.362 53.672c0 0 60.232 2.77 97.37 58.703 0 0 13.898-19.71 34.194-6.446 0 0 21.5-27.966 44.704-11.186 0 0 54.629-43.709 81.003 23.811 0 0 21.082-10.467 26.614 13.371 0 0 40.221-57.713 102.718 5.998 0 0 24.619-18.937 38.267 8.923 0 0 26.592-12.546 34.069 15.581 0 0 46.904-58.277 73.952 16.86 0 0 31.355-10.681 56.618 26.955 0 0 50.831-44.96 82.777 34.333 0 0 32.237-16.088 46.042 28.712 0 0 31.003-52.284 97.854-12.678 0 0 14.825-38.541 47.222-15.422 0 0-1.095-30.896 26.424-23.039 0 0 12.764-40.299 44.481-6.259 0 0 37.069-67.339 99.829-40.97 0 0 31.41-36.437 60.65 5.727 0 0 16.12-69.438 80.95-34.786 0 0 44.88-75.564 113.89-10.867 0 0 26.63-29.618 72.15 3.17 0 0-12.92-37.933 27.86-46.163v354H0V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
