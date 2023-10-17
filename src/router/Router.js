import React, { lazy, useEffect, useState } from "react";
import { Switch as Routes, Route, Redirect } from "react-router-dom";
import { routes } from "./routes";
import PrivateRoute from "@components/PrivateRoute";
import LoadingSpinner from "@components/LoadingSpinner";
import ToTopButton from "@components/ToTopButton";

const LazyHeader = lazy(() => import("@layouts/Header"));
const LazyFooter = lazy(() => import("@layouts/Footer"));

const Router = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const RenderRoute = (props) => {
    const { route } = props;

    if (route.layout === "default") {
      if (loading) {
        return (
          <div className="h-screen flex justify-center items-center bg-slate-900">
            <LoadingSpinner size={24} />
          </div>
        );
      }
      return (
        <>
          <LazyHeader />
          <route.element />
          <ToTopButton />
          <LazyFooter />
        </>
      );
    } else if (route.layout === "blank") {
      return <route.element />;
    }
  };

  const resolveRoutes = () => {
    return routes.map((route) => {
      if (route.protected) {
        return (
          <Route key={route.path} exact={route.exact === true} path={route.path}>
            <PrivateRoute>
              <RenderRoute route={route} />
            </PrivateRoute>
          </Route>
        );
      } else {
        return (
          <Route key={route.path} exact={route.exact === true} path={route.path}>
            <RenderRoute route={route} />
          </Route>
        );
      }
    });
  };

  return (
    <Routes>
      {resolveRoutes()}
      <Route path="*">
        <Redirect to="/404" replaced={true} />
      </Route>
    </Routes>
  );
};

export default Router;
