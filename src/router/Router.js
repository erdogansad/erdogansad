import React, { lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import PrivateRoute from "@components/PrivateRoute";
import LoadingSpinner from "@components/LoadingSpinner";
import ToTopButton from "@components/ToTopButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/rootSlice";

const LazyHeader = lazy(() => import("@layouts/Header"));
const LazyFooter = lazy(() => import("@layouts/Footer"));

const Router = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.root);

  useEffect(() => {
    if (data === null) {
      setTimeout(() => {
        dispatch(fetchData());
      }, 1500);
    }
  }, [dispatch, data]);

  if (error) {
    return (
      <div className="h-screen flex justify-center items-center bg-slate-900">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">Error!</h1>
          <p className="text-lg">{error.message}</p>
        </div>
      </div>
    );
  }

  const RenderRoute = (props) => {
    const { route } = props;

    if (route.layout === "default") {
      if (isLoading) {
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
          <Route key={route.path} exact={`${route.exact}`} path={route.path} element={<PrivateRoute />}>
            <Route key={route.path} exact={`${route.exact}`} path={route.path} element={<RenderRoute route={route} />} />
          </Route>
        );
      } else {
        return <Route key={route.path} exact={`${route.exact}`} path={route.path} element={<RenderRoute route={route} />} />;
      }
    });
  };

  return (
    <Routes>
      {resolveRoutes()}

      <Route path="*" element={<Navigate to="/404" replaced={true} />} />
    </Routes>
  );
};

export default Router;
