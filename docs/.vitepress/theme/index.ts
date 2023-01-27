import Theme from "vitepress/theme";
import { coloricon } from "../compoment/navbar/coloricon";
import "./style/var.css";

export default {
  ...Theme,
  enhanceApp({ app }) {
    //脚本
    let url = "";
    setInterval(() => {
      if (url != window.location.href) {
        coloricon();
        url = window.location.href;
      }
    }, 500);
  },
};
