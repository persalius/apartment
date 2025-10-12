"use client";

import { useId } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GlobeIcon } from "lucide-react";

const languages = [
  { value: "ua", label: "UA" },
  { value: "ru", label: "RU" },
];

const defaultLanguage = "ua";

export const SelectLanguage = () => {
  const selectId = useId();

  const handleChangeValue = (value: string) => {
    console.log("Selected language:", value);
  };

  return (
    <Select defaultValue={defaultLanguage} onValueChange={handleChangeValue}>
      <SelectTrigger
        id={`language-${selectId}`}
        className="[&>svg]:text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground h-8 border-none px-2 shadow-none [&>svg]:shrink-0"
        aria-label="Select language"
      >
        <GlobeIcon size={16} aria-hidden={true} />
        <SelectValue className="hidden sm:inline-flex" />
      </SelectTrigger>
      <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2">
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            <span className="flex items-center gap-2">
              <span className="truncate">{lang.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
