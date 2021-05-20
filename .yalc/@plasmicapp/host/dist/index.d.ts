import * as React from "react";
export declare type PrimitiveType = "string" | "boolean" | "number" | "object" | "slot" | {
    type: "slot";
    allowedComponents: string[];
};
export interface ComponentMeta {
    /**
     * Any unique identifying string for this fetcher.
     */
    name: string;
    /**
     * The Studio-user-friendly display name.
     */
    displayName?: string;
    /**
     * The symbol to import from the importPath.
     */
    importName?: string;
    props: {
        [prop: string]: PrimitiveType;
    };
    /**
     * Either the path to the component relative to `rootDir` or the npm
     * package name
     */
    importPath: string;
    /**
     * Whether it's a default export or named export
     */
    isDefaultExport?: boolean;
    /**
     * The prop that expects CSS class names, required for styling code component
     * instances from Plasmic Studio. If not specified, it's assumed to be
     * "className".
     */
    classNameProp?: string;
}
export interface ComponentRegistration {
    component: React.ComponentType;
    meta: ComponentMeta;
}
export declare type Fetcher = (...args: any[]) => Promise<any>;
export interface FetcherMeta {
    /**
     * Any unique identifying string for this fetcher.
     */
    name: string;
    /**
     * The Studio-user-friendly display name.
     */
    displayName?: string;
    /**
     * The symbol to import from the importPath.
     */
    importName?: string;
    args: {
        name: string;
        type: PrimitiveType;
    }[];
    returns: PrimitiveType;
    /**
     * Either the path to the fetcher relative to `rootDir` or the npm
     * package name
     */
    importPath: string;
    /**
     * Whether it's a default export or named export
     */
    isDefaultExport?: boolean;
}
export interface FetcherRegistration {
    fetcher: Fetcher;
    meta: FetcherMeta;
}
declare global {
    interface Window {
        __PlasmicHostVersion: string;
        __PlasmicComponentRegistry: ComponentRegistration[];
        __PlasmicFetcherRegistry: FetcherRegistration[];
    }
}
export declare function registerComponent(component: React.ComponentType<any>, meta: ComponentMeta): void;
export declare function registerFetcher(fetcher: Fetcher, meta: FetcherMeta): void;
export declare const PlasmicCanvasHost: React.FunctionComponent<object>;
