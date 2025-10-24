import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "~/redux/store";
import LoadingSpinner from "./LoadingSpinner";
import { useEffect } from "react";
import { setHardwareAcceleration, setTheme } from "~/redux/slices/rootSlice";
import useHardwareAcceleration from "~/hooks/useHardwareAcceleration";

const LoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme, loading } = useSelector((state: RootState) => state.root);
  const dispatch = useAppDispatch();
  const isAccelerated = useHardwareAcceleration();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (localTheme) {
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
      dispatch(setTheme(localTheme));
    } else {
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
      dispatch(setTheme(prefersDark ? "dark" : "light"));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAccelerated !== null) {
      dispatch(setHardwareAcceleration(isAccelerated));
    }
  }, [isAccelerated, dispatch]);

  if (theme === null || isAccelerated === null || loading) {
    return (
      <div className="scheme-light-dark h-screen w-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingWrapper;
