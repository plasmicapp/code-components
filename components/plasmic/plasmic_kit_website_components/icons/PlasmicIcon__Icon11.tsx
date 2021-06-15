// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon11Icon(props: Icon11IconProps) {
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
          "M61 38H51a1 1 0 00-1 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1v-8a1 1 0 00-1-1H19a1 1 0 00-1 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1v-8a1 1 0 00-1-1H3a1 1 0 01-1-1v-5.319c.006-.483.352-.896.828-.984A13.99 13.99 0 0014 17v-2a1 1 0 011-1h2a1 1 0 011 1v2c0 7.732 6.268 14 14 14s14-6.268 14-14v-2a1 1 0 011-1h2a1 1 0 011 1v2a13.99 13.99 0 0011.172 13.697c.476.088.822.5.828.984V37a1 1 0 01-1 1zm-47.733-8.86a18.038 18.038 0 01-5.441 4.056.425.425 0 00.19.805h4.986a.994.994 0 00.998-.99v-3.586a.422.422 0 00-.733-.285zm4.733.303v3.563c0 .55.446.994.996.994h5.549a.296.296 0 00.119-.568 18.032 18.032 0 01-5.931-4.275.422.422 0 00-.733.286zm27.267-.286a18.036 18.036 0 01-5.423 4.039.425.425 0 00.19.804h4.968a.994.994 0 00.998-.99v-3.567a.422.422 0 00-.733-.286zm4.733.268v3.58c0 .55.446.995.996.995h4.984a.425.425 0 00.194-.804 18.04 18.04 0 01-5.441-4.056.422.422 0 00-.733.285z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon11Icon;
/* prettier-ignore-end */
