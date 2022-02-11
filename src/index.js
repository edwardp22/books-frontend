import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import { CssBaseline } from "@material-ui/core";

import App from "./App";
import { store } from "./state";
import ErrorFallback from "./components/errorFallback/ErrorFallback";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        const navigate = useNavigate();
        navigate("/");
      }}
    >
      <CssBaseline />
      <ToastContainer />

      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
