import Theme from "vitepress/theme";
import { coloricon } from "../compoment/navbar/coloricon";
import "./style/var.css";
// import * as buffer from "buffer";
// if (typeof (window as any).global === "undefined") {
//   (window as any).global = window;
// }
// if (typeof (window as any).Buffer === "undefined") {
//   (window as any).Buffer = buffer.Buffer;
// }
export default {
  ...Theme,
  enhanceApp({ app }) {
    //脚本
    let url = "";
    setInterval(() => {
      (function (window: any) {
        if (typeof (window as any) !== "undefined") {
          if (
            window &&
            window.location &&
            window.location.href &&
            url != window.location.href
          ) {
            coloricon();
            url = window.location.href;
          }
        }
        /* Keep source code the same */
        // })(typeof window == "undefined" ? global : window);
        // or
      })(this);
    }, 500);
  },
};
