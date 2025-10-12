import { SelectTheme } from "@/components/selectTheme";
import { SelectLanguage } from "@/components/selectLanguage";

export const Actions = () => {
  return (
    <div className="flex items-center">
      <SelectTheme />
      <SelectLanguage />
    </div>
  );
};
