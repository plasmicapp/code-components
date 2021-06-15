// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon37Icon(props: Icon37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-153 -46 652 652"}
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
          "M473.1 388.3h-98.7L340 315h-68l4.7-12.5h57.5l-36.5-78.2 23.5-56.1h32.6l74.7 158.6c10.5 22.2 23.8 52.9 44.6 61.5zm-299.5-8.5v-96.4s24.7 7.4 49.4 43.6v-97.7c-24.7 36.8-49.4 42-49.4 42v-94.8c53.3 0 78.7 25.6 92 48.9L290 168H65.1c20.4 14.4 35.2 26.9 35.2 77.2v142.9H290L264.7 335c-14.4 22.4-41.8 44.8-91.1 44.8zm-300.5-211.6c15.3 8.8 37 23.2 37 68v86.4c0 48-34.8 65.5-34.8 65.5H-44s-34.8-17.4-34.8-65.5v-111L82.7 388.8V277.6l-99.9-109.4h-109.7zm532.8 24.4h-4.6v-16.3h6.3c3-.6 5.9 1.3 6.5 4.3.1.3.1.6.1.8.1 1.9-1.1 3.7-3 4.4l3.9 6.7h-4.4l-3.6-5.7h-1.2v5.8zm0-8.8h1.5c1.1.2 2.1-.5 2.3-1.6v-.4c0-1.1-.9-1.9-1.9-1.9h-1.9v3.9zm-15.3.9c0-9.1 7.4-16.5 16.5-16.6h.3c9.1.2 16.3 7.7 16.1 16.9-.2 9.1-7.7 16.4-16.8 16.2-8.9-.1-16.1-7.5-16.1-16.5zm3.2 0c0 7.6 6.1 13.8 13.7 13.8s13.7-6.2 13.7-13.8c0-7.6-6.1-13.8-13.7-13.8s-13.7 6.2-13.7 13.8z"
        }
      ></path>
    </svg>
  );
}

export default Icon37Icon;
/* prettier-ignore-end */
