import { useEffect } from "react";

const useToggleTheme = (theme) => {
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    html.setAttribute("data-theme", theme);
  }, [theme]);
};

export default useToggleTheme;
