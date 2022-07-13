import "./style.css";
import typescriptLogo from "./typescript.svg";
import jQueryLogo from "./jquery.png";
import { setupCounter } from "./counter";
import $ from "jquery";

declare global {
  interface Window {
    $: JQueryStatic;
  }
}

window.$ = $;

$("#app").html(`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://jquery.com/" target="_blank">
      <img src="${jQueryLogo}" class="logo vanilla" alt="jQuery logo" />
    </a>
    <h1>Vite + TypeScript + jQuery</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite, TypeScript and jQuery logos to learn more
    </p>
  </div>
`);

setupCounter($("#counter")!);
