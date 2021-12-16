import React, { ComponentProps, useContext } from "react";
import { Parallax, ParallaxProvider, useController } from "react-scroll-parallax";
import { PlasmicCanvasContext } from "@plasmicapp/loader-nextjs";

function ParallaxCacheUpdate(props: React.PropsWithChildren<{}>) {
  const parallaxController = useController();
  
  React.useEffect(() => {
    const targetNode = document.body;
    const observer = new MutationObserver(() => {
      if (parallaxController) {
        parallaxController.update();
      }
    });
    observer.observe(targetNode, {childList: true, subtree: true});
  });

  return null;
}

export function ParallaxProviderWrapper(props: React.PropsWithChildren<{}>) {
  return (
    <ParallaxProvider>
      <ParallaxCacheUpdate />
      {props.children}  
    </ParallaxProvider>
  )
}

export function ParallaxWrapper(props: ComponentProps<typeof Parallax>) {
  const inEditor = useContext(PlasmicCanvasContext);
  return <Parallax {...props} {...(inEditor ? { disabled: true } : {})} />;
}
