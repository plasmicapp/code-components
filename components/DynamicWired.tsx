import { useEffect, useState } from "react";
import * as React from "react";
import ReactWiredElements from "react-wired-elements";

export function dynamicWired(componentName: keyof typeof ReactWiredElements) {
  return function Wrapper({ className, ...props }: any) {
    const [Cmp, setCmp] = useState<any>(undefined);
    useEffect(() => {
      import("react-wired-elements").then((x) =>
        setCmp(() => x[componentName])
      );
    }, []);
    return <div className={className}>{Cmp && <Cmp {...props} />}</div>;
  };
}

export const DynWiredButton = dynamicWired("WiredButton");
export const DynWiredIconButton = dynamicWired("WiredIconButton");
