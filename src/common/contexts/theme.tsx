import React, { createContext, useState, useContext, useEffect } from "react";
import { dark, light } from "@/styles/themes";
import { ITheme } from "../types/theme";

interface IThemeContext {
  toogleTheme(): void;
  theme: ITheme;
}

interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<ITheme>(dark);

  function toogleTheme() {
    if (theme.title === "dark") {
      setTheme(light);
      localStorage.setItem("@minha-carteira:theme", JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem("@minha-carteira:theme", JSON.stringify(dark));
    }
  }

  useEffect(() => {
    const themeSaved = localStorage.getItem("@minha-carteira:theme");
    if (themeSaved) {
      const parsedTheme = JSON.parse(themeSaved);
      setTheme(parsedTheme);
    } else {
      setTheme(dark);
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = React.useMemo(() => ({ toogleTheme, theme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  return context;
};
