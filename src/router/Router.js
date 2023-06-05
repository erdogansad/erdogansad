import React, { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes/";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchLang, fetchTheme } from "@slices/coreSlice";
import LoadingSpinner from "@components/LoadingSpinner";

const LazyFooter = lazy(() => import("@layouts/Footer"));

export const Router = () => {
  const { theme, lang, contents, isLoading } = useSelector((store) => store.core);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTheme());
    dispatch(fetchLang());
  }, [dispatch]);

  useEffect(() => {
    if (lang !== "" && lang !== undefined) dispatch(fetchData(lang));
  }, [dispatch, lang]);

  if (isLoading || Object.keys(contents).length === 0) return <LoadingSpinner />;

  const RenderRoute = ({ route }) => {
    if (route.layout === "default") {
      return (
        <div className={theme}>
          <route.component />
          <LazyFooter />
        </div>
      );
    } else if (route.layout === "blank") {
      return (
        <div className={theme}>
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
