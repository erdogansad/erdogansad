import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useLocation } from "react-router";
import { US, TR } from "country-flag-icons/react/3x2";

const routeMap = {
  "": { tr: "", en: "" },

  "gizlilik-politikasi": { tr: "gizlilik-politikasi", en: "privacy-policy" },
  "privacy-policy": { tr: "gizlilik-politikasi", en: "privacy-policy" },

  "kullanim-sartlari": { tr: "kullanim-sartlari", en: "terms-of-service" },
  "terms-of-service": { tr: "kullanim-sartlari", en: "terms-of-service" },

  destek: { tr: "destek", en: "support" },
  support: { tr: "destek", en: "support" },
} as const;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (newLang: "tr" | "en") => {
    const currentLang = lang as "tr" | "en";

    if (currentLang === newLang) return;

    const pathParts = location.pathname.split("/").filter(Boolean);
    const currentSlug = pathParts[1] || "";

    const slugMapping = routeMap[currentSlug as keyof typeof routeMap];

    if (slugMapping) {
      const newSlug = slugMapping[newLang];
      const newPath = newSlug ? `/${newLang}/${newSlug}` : `/${newLang}`;

      i18n.changeLanguage(newLang);
      navigate(newPath);
    } else {
      i18n.changeLanguage(newLang);
      navigate(`/${newLang}`);
    }
  };

  return (
    <div className="flex gap-3 items-center">
      {i18n.language === "en" ? (
        <button
          onClick={() => changeLanguage("tr")}
          className="text-2xl transition-all scale-110 hover:opacity-70 hover:scale-105 cursor-pointer"
          title="Türkçe"
          aria-label="Türkçe"
        >
          <TR title="Türkçe" className="w-8" />
        </button>
      ) : (
        <button
          onClick={() => changeLanguage("en")}
          className="text-2xl transition-all scale-110 hover:opacity-70 hover:scale-105 cursor-pointer"
          title="English"
          aria-label="English"
        >
          <US title="English" className="w-8" />
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
