import React, { lazy } from "react";
import routes from "./routes/";
import { Navigate, Route, Routes } from "react-router-dom";

const LazyFooter = lazy(() => import("@layouts/Footer"));

export const Router = () => {
  const RenderRoute = ({ route }) => {
    if (route.layout === "default") {
      return (
        <div>
          <route.component />
          <LazyFooter />
        </div>
      );
    } else if (route.layout === "blank") {
      return (
        <div>
          <route.component />
        </div>
      );
    }
  };

  const resolveRoutes = () => {
    return routes.map((route) => {
      return <Route key={route.path} exact={route.exact === true} path={route.path} element={<RenderRoute route={route} />} />;
    });
  };

  return (
    <Routes>
      {resolveRoutes()}
      <Route path="*" element={<Navigate to="/404" replaced={true} />} />
    </Routes>
  );
};
