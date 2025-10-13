import { ElementType } from "react";

interface Props {
  icon: ElementType;
  text: string | number;
  className?: string;
}

const IconItem = ({ icon: IconComponent, text, className }: Props) => {
  return (
    <div
      className={`flex items-center gap-1 text-neutral-400 text-sm ${className}`}
    >
      <IconComponent className="w-4" />
      <p>{text}</p>
    </div>
  );
};

export default IconItem;
