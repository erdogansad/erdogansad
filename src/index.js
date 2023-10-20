import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import LoadingSpinner from "@components/LoadingSpinner";
import { BrowserRouter } from "react-router-dom";
import "@assets/css/globals.css";
import "./utils/i18n";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";

const Loading = () => (
  <div className="h-screen flex justify-center items-center bg-slate-900">
    <LoadingSpinner size={24} />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = lazy(() => import("./App"));
const store = setupStore();

root.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>
);
