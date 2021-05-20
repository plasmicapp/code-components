declare type StringGen = string | (() => string);
export declare function flatMap<T, U>(arr: T[], f: (x: T) => U[]): U[];
export declare function ensure<T>(x: T | null | undefined, msg?: StringGen): T;
export declare function ensureString(x: any): string;
export declare class AssertionError extends Error {
    constructor(msg?: string);
}
export declare function assert<T>(cond: T, msg?: StringGen): asserts cond;
export {};
