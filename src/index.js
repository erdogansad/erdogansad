import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import LoadingSpinner from "@components/LoadingSpinner";
import { BrowserRouter } from "react-router-dom";
import "@assets/css/globals.css";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = lazy(() => import("./App"));
root.render(
  <Suspense fallback={<LoadingSpinner size={16} />}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Suspense>
);

// reportWebVitals();
