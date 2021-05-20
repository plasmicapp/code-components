import { Fiber } from "./fiber";
interface GlobalHookCtx {
    uidToFiber: Map<number, Fiber>;
    startedEvalCount: number;
    finishedEvalCount: number;
}
export declare const globalHookCtx: GlobalHookCtx;
export {};
