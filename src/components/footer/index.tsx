"use client";

import { motion } from "motion/react";
import { Smartphone } from "lucide-react";
import { FORMATTED_PHONE_NUMBER, PHONE_NUMBER } from "@/shared/constants/phone";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background mt-12 max-w-3xl mx-auto flex flex-col items-center gap-2 text-sm text-muted-foreground py-4">
      <div className="flex items-center gap-2">
        <motion.span
          initial={{ scale: 0.9, rotate: -10 }}
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -15, 15, -15, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="inline-flex"
        >
          <Smartphone className="w-4 h-4" />
        </motion.span>
        <a href={`tel:${PHONE_NUMBER}`}>{FORMATTED_PHONE_NUMBER}</a>
      </div>

      <span>© {new Date().getFullYear()} Live Here</span>
    </footer>
  );
};

export default Footer;
