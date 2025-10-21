import { Outlet, useLocation, Navigate } from "react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageLayout() {
  const { i18n } = useTranslation();
  const location = useLocation();

  const lang = location.pathname.split("/")[1];

  useEffect(() => {
    if (lang && (lang === "tr" || lang === "en")) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  if (lang && lang !== "tr" && lang !== "en") {
    return <Navigate to="/tr" replace />;
  }

  return <Outlet />;
}
