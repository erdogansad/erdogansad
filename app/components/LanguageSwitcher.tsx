import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useLocation } from "react-router";
import { US, TR } from "country-flag-icons/react/3x2";
import { useSelector } from "react-redux";
import type { RootState } from "~/redux/store";
import clsx from "clsx";

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
  const { hwSupported } = useSelector((state: RootState) => state.root);

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

  const Button = ({ children, title, ariaLabel, onClick }: { children: React.ReactNode; title: string; ariaLabel: string; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={clsx("text-2xl hover:opacity-70 cursor-pointer", hwSupported && "scale-110 hover:scale-105 transition-all duration-300")}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );

  return (
    <div className="flex gap-3 items-center">
      {i18n.language === "en" ? (
        <Button onClick={() => changeLanguage("tr")} title="Türkçe" ariaLabel="Türkçe">
          <TR title="Türkçe" className="w-8" />
        </Button>
      ) : (
        <Button onClick={() => changeLanguage("en")} title="English" ariaLabel="English">
          <US title="English" className="w-8" />
        </Button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
