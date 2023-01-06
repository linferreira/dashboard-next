import { useThemeContext } from "@/contexts/theme";
import { light } from "@/styles/themes";

export const useTheme = () => {
  const { theme } = useThemeContext();
  return theme || light
}

export const useToogleTheme = () => {
  const { toogleTheme } = useThemeContext();
  return toogleTheme
}