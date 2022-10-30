import { THEME } from "../constants";
import { useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(THEME.light);

  return { theme, setTheme };
}
