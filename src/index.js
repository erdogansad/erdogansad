import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import LoadingSpinner from "@components/LoadingSpinner";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";

import "@assets/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = setupStore();
const App = lazy(() => import("./App"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingSpinner />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
