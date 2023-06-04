import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import LoadingSpinner from "@components/LoadingSpinner";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./redux/store";
// import reportWebVitals from "./reportWebVitals";

import "@assets/css/index.css";
import { Provider } from "react-redux";

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

/* reportWebVitals(); */
