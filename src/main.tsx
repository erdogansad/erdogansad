import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Router from "@/router/";
import LoadingSpinner from "@/core/components/LoadingSpinner";
import "@/assets/css/main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingSpinner fullpage={true} />}>
        <BrowserRouter basename="/">
          <Router />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </StrictMode>
);
