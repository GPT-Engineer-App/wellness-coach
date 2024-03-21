import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#B2F5EA",
    800: "#81E6D9",
    700: "#4FD1C5",
    600: "#38B2AC",
    500: "#319795",
    400: "#2C7A7B",
    300: "#285E61",
    200: "#234E52",
    100: "#1D4044",
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
