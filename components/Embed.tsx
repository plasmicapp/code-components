import { useEffect, useRef } from "react";

import { ensure } from "../src/common";

export function Embed({
  className,
  code,
}: {
  className?: string;
  code: string;
}) {
  const rootElt = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Array.from(ensure(rootElt.current).querySelectorAll("script")).forEach(
      (oldScript) => {
        const newScript = document.createElement("script");
        Array.from(oldScript.attributes).forEach((attr) =>
          newScript.setAttribute(attr.name, attr.value)
        );
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        ensure(oldScript.parentNode).replaceChild(newScript, oldScript);
      }
    );
  }, [code]);

  return (
    <div
      ref={rootElt}
      className={className}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
