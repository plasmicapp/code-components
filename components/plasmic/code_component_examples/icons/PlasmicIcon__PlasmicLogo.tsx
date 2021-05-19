// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlasmicLogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlasmicLogoIcon(props: PlasmicLogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 18"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"url(#kQdHwLjSFa)"}
        d={
          "M2 18C.895 18-.012 17.101.11 16.003 1.103 7.002 8.734 0 18 0s16.897 7.002 17.89 16.003C36.013 17.101 35.106 18 34 18h-2c0-7.732-6.268-14-14-14S4 10.268 4 18H2z"
        }
        clipRule={"evenodd"}
        fillRule={"evenodd"}
      ></path>

      <path
        fill={"url(#kQdHwLjSFb)"}
        d={"M6 18c0-6.627 5.373-12 12-12s12 5.373 12 12h-4a8 8 0 10-16 0H6z"}
        clipRule={"evenodd"}
        fillRule={"evenodd"}
      ></path>

      <path
        fill={"url(#kQdHwLjSFc)"}
        d={
          "M12 18a6 6 0 0112 0h-3c-.552 0-.98-.474-1.244-.959a2 2 0 00-3.512 0c-.265.485-.692.959-1.244.959h-3z"
        }
        clipRule={"evenodd"}
        fillRule={"evenodd"}
      ></path>

      <defs>
        <linearGradient
          gradientUnits={"userSpaceOnUse"}
          y2={"18"}
          x2={"18"}
          y1={"18"}
          x1={"1.977"}
          id={"kQdHwLjSFa"}
        >
          <stop stopColor={"#1877F2"}></stop>

          <stop stopColor={"#04A4F4"} offset={"1"}></stop>
        </linearGradient>

        <linearGradient
          gradientUnits={"userSpaceOnUse"}
          y2={"18"}
          x2={"18"}
          y1={"18"}
          x1={"7.968"}
          id={"kQdHwLjSFb"}
        >
          <stop stopColor={"#2ABBA7"}></stop>

          <stop stopColor={"#45BD62"} offset={"1"}></stop>
        </linearGradient>

        <linearGradient
          gradientUnits={"userSpaceOnUse"}
          y2={"18"}
          x2={"18"}
          y1={"18"}
          x1={"13.953"}
          id={"kQdHwLjSFc"}
        >
          <stop stopColor={"#F02849"}></stop>

          <stop stopColor={"#F5533D"} offset={"1"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default PlasmicLogoIcon;
/* prettier-ignore-end */
