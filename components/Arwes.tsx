import React, {
  useState,
  ReactNode,
  useRef,
  useEffect,
  useContext,
} from "react";
import { AnimatorGeneralProvider, Animator } from "@arwes/animation";
import { BleepsProvider } from "@arwes/sounds";
import { ArwesThemeProvider, StylesBaseline, Text, Figure } from "@arwes/core";
import { useIntersection } from "react-use";
import { ensure } from "../src/common";
import { PlasmicCanvasContext } from "@plasmicapp/host";

// For the font-family to work, you would have to setup the Google Fonts link:
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap" />
const ROOT_FONT_FAMILY = '"Titillium Web", sans-serif';
const IMAGE_URL = "https://playground.arwes.dev/assets/images/wallpaper.jpg";
const SOUND_OBJECT_URL =
  "https://playground.arwes.dev/assets/sounds/object.mp3";
const SOUND_TYPE_URL = "https://playground.arwes.dev/assets/sounds/type.mp3";
const audioSettings = { common: { volume: 0.25 } };
const playersSettings = {
  object: { src: [SOUND_OBJECT_URL] },
  type: { src: [SOUND_TYPE_URL], loop: true },
};
const bleepsSettings = {
  object: { player: "object" },
  type: { player: "type" },
};
const generalAnimator = { duration: { enter: 200, exit: 200 } };
export const ArwesCard = ({
  className,
  children,
  caption,
  title,
}: {
  className?: string;
  children?: ReactNode;
  caption?: ReactNode;
  title?: ReactNode;
}) => {
  const inEditor = useContext(PlasmicCanvasContext);
  const footerElt = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(footerElt, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
      },
      { root: null, rootMargin: "0px", threshold: 1.0 }
    );
    observer.observe(ensure(footerElt.current));
  }, []);
  const activate = intersection?.isIntersecting;
  console.log(
    activate,
    intersection?.isIntersecting,
    intersection?.boundingClientRect.top
  );
  return (
    <div
      className={"Arwes " + className}
      style={{
        backgroundColor: "#021114",
        color: "#7efcf6",
        fontFamily: ROOT_FONT_FAMILY,
      }}
    >
      <ArwesThemeProvider>
        {inEditor ? (
          children
        ) : (
          <BleepsProvider
            audioSettings={audioSettings}
            playersSettings={playersSettings}
            bleepsSettings={bleepsSettings}
          >
            <AnimatorGeneralProvider animator={generalAnimator}>
              <Animator animator={{ activate, manager: "stagger" }}>
                {children}
              </Animator>
            </AnimatorGeneralProvider>
          </BleepsProvider>
        )}
      </ArwesThemeProvider>
      <div ref={footerElt} />
    </div>
  );
};
