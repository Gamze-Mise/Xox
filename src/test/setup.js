import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

window.__vite_plugin_react_preamble_installed__ = true;
window.$RefreshReg$ = () => {};
window.$RefreshSig$ = () => (type) => type;

afterEach(() => {
  cleanup();
});
