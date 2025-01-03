import { lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import PrivateRoute from "@/core/components/PrivateRoute";
import LoadingSpinner from "@/core/components/LoadingSpinner";
import ToTopButton from "@/core/components/ToTopButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@/redux/slices/rootSlice";
import { AppDispatch } from "@/redux/store";
import { RootState } from "@/redux/slices/rootSlice";
import { RouteType } from "./routes";

const LazyHeader = lazy(() => import("@/core/layouts/Header"));
const LazyFooter = lazy(() => import("@/core/layouts/Footer"));

const Router = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state: { root: RootState & { error: { message: string } } }) => state.root);

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
          <p className="text-lg">{error?.message}</p>
        </div>
      </div>
    );
  }

  const RenderRoute = (props: { route: RouteType }) => {
    const { route } = props;

    if (route.layout === "default") {
      if (isLoading) {
        return <LoadingSpinner size={24} fullpage={true} />;
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
    return routes.map((route: RouteType) => {
      if (route.protected) {
        return (
          <Route key={route.path} path={route.path} element={<PrivateRoute />}>
            <Route key={route.path} path={route.path} element={<RenderRoute route={route} />} />
          </Route>
        );
      } else {
        return <Route key={route.path} path={route.path} element={<RenderRoute route={route} />} />;
      }
    });
  };

  return (
    <Routes>
      {resolveRoutes()}

      <Route path="*" element={<Navigate to="/404" replace={true} />} />
    </Routes>
  );
};

export default Router;
