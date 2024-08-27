import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./context/index";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
