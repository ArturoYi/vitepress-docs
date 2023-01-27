import DefaultTheme from "vitepress/theme";
import "./style/var.css";
import { onMounted } from "vue";
import { coloricon } from "../compoment/navbar/coloricon";
export default {
  ...DefaultTheme,
  // Nav: () => {},
  enhanceApp({ ctx }) {
  },
  setup() {
    onMounted(() => {
      coloricon();
    });
  },
};
