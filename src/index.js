import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoadingSpinner from "@components/LoadingSpinner";
import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";

import "@assets/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);

/* reportWebVitals(); */
