import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="iletisim" className="bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="container flex flex-col gap-6 items-center justify-center py-12 lg:py-16">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xl lg:text-4xl font-medium select-none cursor-default text-slate-950 dark:text-slate-50 transition-colors">
            Sormak istediğiniz bir şey mi var?
          </span>
          <span className="text-xs lg:text-lg font-thin select-none cursor-default text-slate-950 dark:text-slate-50 transition-colors">
            Aşağıdaki bağlantıları kullanarak bana ulaşabilirsiniz.
          </span>
        </div>
        <ul className="flex items-center gap-2 lg:gap-5 text-slate-950 dark:text-slate-50 *:cursor-pointer *:select-none transition-colors">
          <li className="hover:text-slate-400 transition-colors">
            <Link to="https://www.github.com/erdogansad" target="_blank" rel="noopener noreferrer">
              <FiGithub className="size-7" />
            </Link>
          </li>
          <li className="hover:text-slate-400 transition-colors">
            <Link to="https://www.linkedin.com/in/erdogansad" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="size-7" />
            </Link>
          </li>
          <li className="hover:text-slate-400 transition-colors">
            <Link to="mailto:sad@erdogan.codes">
              <FaEnvelope className="size-7" />
            </Link>
          </li>
        </ul>
        <span className="lg:text-lg font-light text-slate-950 dark:text-slate-50 transition-colors">sad@erdogan.codes</span>
      </div>
    </footer>
  );
};

export default Footer;
