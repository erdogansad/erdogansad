import React, { lazy, useEffect } from "react";
import routes from "./routes/";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchLang, fetchTheme } from "../redux/slices/coreSlice";

const LazyFooter = lazy(() => import("@layouts/Footer"));

export const Router = () => {
  const { theme, lang } = useSelector((store) => store.core);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTheme());
    dispatch(fetchLang());
  }, [dispatch]);

  useEffect(() => {
    if (lang !== "") {
      dispatch(fetchData());
    }
  }, [dispatch, lang]);

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
