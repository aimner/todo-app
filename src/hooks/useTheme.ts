import { useEffect, useState } from "react";

export function useTheme() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.querySelector("html")?.setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html")?.setAttribute("data-theme", "light");
    }
  }, [darkTheme]);

  return { setDarkTheme };
}
