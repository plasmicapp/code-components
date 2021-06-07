import { ComponentProps, useContext } from "react";
import { Parallax } from "react-scroll-parallax";
import { PlasmicCanvasContext } from "@plasmicapp/host";

export function ParallaxWrapper(props: ComponentProps<typeof Parallax>) {
  const inEditor = useContext(PlasmicCanvasContext);
  return <Parallax {...props} {...(inEditor ? { disabled: true } : {})} />;
}
