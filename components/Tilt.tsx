import { ComponentProps } from "react";
import ReactParallaxTilt from "react-parallax-tilt";

export function Tilt(props: ComponentProps<typeof ReactParallaxTilt>) {
  return (
    <ReactParallaxTilt
      {...props}
      style={{
        transformStyle: "preserve-3d",
        ...(props.style ?? {}),
      }}
    ></ReactParallaxTilt>
  );
}
