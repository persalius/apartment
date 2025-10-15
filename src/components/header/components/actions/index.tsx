"use client";

import dynamic from "next/dynamic";
import SelectLanguage from "@/components/selectLanguage";

const ThemeSwitch = dynamic(() => import("../../../themeSwitch"), {
  ssr: false,
});

const Actions = () => {
  return (
    <div className="flex items-center">
      <ThemeSwitch />
      <SelectLanguage />
    </div>
  );
};

export default Actions;
