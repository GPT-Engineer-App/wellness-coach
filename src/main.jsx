import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#D6CCC2",
    800: "#C5B8A8",
    700: "#B5A48E",
    600: "#A49074",
    500: "#8D7B61",
    400: "#76674F",
    300: "#5F523D",
    200: "#483E2E",
    100: "#32281F",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
