import { extendTheme } from "native-base";

const defaultTheme = extendTheme({
  colors: {
    gray: {
      100: "#f2f2f2",
      200: "#d9d9d9",
      300: "#808080",
      400: "#333333",
      500: "#262626",
      600: "#1a1a1a",
      700: "#0d0d0d",
    },
    red: {
      300: "#e25858",
    },
    purple: {
      300: "#8284fa",
      500: "#5e60ce",
    },
    blue: {
      300: "#4ea8de",
      500: "#1E6F9F",
    },
  },
  fonts: {
    heading: "Inter_700Bold",
    body: "Inter_400Regular",
  },
});

export { defaultTheme };
