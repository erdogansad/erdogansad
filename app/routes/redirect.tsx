import { Navigate } from "react-router";
import { useTranslation } from "react-i18next";

export default function Redirect() {
  const { i18n } = useTranslation();
  const defaultLang = i18n.language || "en";

  return <Navigate to={`/${defaultLang}`} replace />;
}
