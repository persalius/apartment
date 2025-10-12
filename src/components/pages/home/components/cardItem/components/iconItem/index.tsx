import { ElementType } from "react";
import { motion } from "motion/react";

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
      <motion.p
        initial={{ filter: "blur(8px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default IconItem;
