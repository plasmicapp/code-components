import { ComponentProps } from "react";
import {
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";

const effectNameToComponent = {
  bounce: Bounce,
  fade: Fade,
  flip: Flip,
  hinge: Hinge,
  jackinthebox: JackInTheBox,
  roll: Roll,
  rotate: Rotate,
  slide: Slide,
  zoom: Zoom,
} as const;

type Effect = keyof typeof effectNameToComponent;

const effects = Object.keys(effectNameToComponent);

export function Reveal({
  effect = "fade",
  className,
  ...props
}: ComponentProps<typeof Fade> & {
  className?: string;
  effect?: Effect;
}) {
  const Comp = effectNameToComponent[effect] as any;
  if (!Comp) {
    throw new Error(`Please specify a valid effect: ${effects.join(", ")}`);
  }
  return <Comp {...props} />;
}
