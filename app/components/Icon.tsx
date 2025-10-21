import * as HiIcons from "react-icons/hi";
import * as Fa6Icons from "react-icons/fa6";

const iconMap = {
  ...HiIcons,
  ...Fa6Icons,
};

const Icon = ({ name, className = "" }: { name: string; className?: string }) => {
  const IconComponent = iconMap[name as keyof typeof iconMap];

  if (!IconComponent) {
    return <span>Icon bulunamadı: {name}</span>;
  }

  return <IconComponent className={className} />;
};

export default Icon;
