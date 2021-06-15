// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CodeSandboxSeeklogocomsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CodeSandboxSeeklogocomsvgIcon(
  props: CodeSandboxSeeklogocomsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      preserveAspectRatio={"xMidYMid"}
      viewBox={"0 0 256 296"}
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
          "M115.498 261.088v-106.61L23.814 101.73v60.773L65.81 186.85v45.7l49.688 28.54zm23.814.627l50.605-29.151V185.78l42.269-24.495v-60.011l-92.874 53.621v106.82zm80.66-180.887l-48.817-28.289-42.863 24.872-43.188-24.897-49.252 28.667 91.914 52.882 92.206-53.235zM0 222.212V74.495L127.987 0 256 74.182v147.797l-128.016 73.744L0 222.212z"
        }
      ></path>
    </svg>
  );
}

export default CodeSandboxSeeklogocomsvgIcon;
/* prettier-ignore-end */
