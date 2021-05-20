if (typeof window !== "undefined" && window.parent !== window) {
  try {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ =
      window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  } catch (err) {}
}

const searchParams = (() => {
  try {
    return new URLSearchParams(
      location.search ||
        new URL(location.toString().replace(/#/, "?")).searchParams.get(
          "searchParams"
        ) ||
        window?.parent?.location.search ||
        ""
    );
  } catch {
    return new URLSearchParams();
  }
})();

if (
  searchParams.get("codeComponents") === "true" &&
  typeof window !== "undefined" &&
  !window.__REACT_DEVTOOLS_GLOBAL_HOOK__
) {
  const renderers = new Map();
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
    supportsFiber: true,
    renderers,

    inject: (renderer) => {
      renderers.set(renderers.size + 1, renderer);
    },

    onCommitFiberRoot: (..._args) => {},

    onCommitFiberUnmount: (..._args) => {},
  };
}
