"use client";

import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "lucide-react";

export const SelectTheme = () => {
  const theme = "light";

  const handleToggleTheme = () => {
    // Implement theme toggle logic here
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 cursor-pointer"
      onClick={handleToggleTheme}
    >
      {theme === "light" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
