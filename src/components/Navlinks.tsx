/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sun, Moon, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useTheme } from "./ThemeProvider";
import { useState } from "react";

const themeToggleIconComponent = {
  sun: <Sun className="w-5 h-5" />,
  moon: <Moon className="w-5 h-5" />,
};

const Navlinks = () => {
  const { setTheme, theme } = useTheme();

  const [themeToggleIcon, setThemeToggleIcon] = useState(
    theme == "light"
      ? themeToggleIconComponent["moon"]
      : themeToggleIconComponent["sun"]
  );

  const handleSetTheme = () => {
    switch (theme) {
      case "light": {
        setThemeToggleIcon(themeToggleIconComponent["sun"]);
        setTheme("dark");
        break;
      }
      case "dark": {
        setThemeToggleIcon(themeToggleIconComponent["moon"]);
        setTheme("light");
        break;
      }
    }
  };
  return (
    <span className="flex items-center justify-center gap-4">
      <Button variant={"secondary"} size={"default"}>
        <span className="hidden md:block">Resume</span> <Download className="w-4 h-4 md:ml-2 ml-0" />
      </Button>
      {/* Sidenav */}
      {/* <Button variant={"outline"} size={"icon"}>
        <AlignRight />
      </Button> */}
      {/* Theme Switch */}
      <Button onClick={handleSetTheme} variant={"outline"} size={"icon"}>
        {themeToggleIcon}
      </Button>
    </span>
  );
};

export default Navlinks;
