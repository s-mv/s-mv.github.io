import { useEffect, useState } from "preact/hooks";

import wallpaper1 from "/wallpaper1.jpeg";
import wallpaper2 from "/wallpaper2.jpeg";

import Layout from "./components/layout.jsx";

function getCurrentRoute() {
  const path = window.location.hash.slice(1) || "/";

  if (
    path === "/about" ||
    path === "/resume" ||
    path === "/plato" ||
    path === "/faq" ||
    path === "/meow"
  ) {
    return path;
  }

  return "/";
}

function getInitialTheme() {
  const stored = window.localStorage.getItem("theme");

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function App() {
  const [wallpaper, setWallpaper] = useState(0);
  const [route, setRoute] = useState(getCurrentRoute);
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleWallpaper = () => {
    setWallpaper((x) => 1 - x);
  };

  const toggleTheme = () => {
    setTheme((x) => (x === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const wallpapers = [wallpaper1, wallpaper2];
    const preloaded = wallpapers.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    const handler = (e) => {
      if (e.key.toLowerCase() === "s") {
        toggleWallpaper();
      }

      if (e.key.toLowerCase() === "t") {
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
      preloaded.length = 0;
    };
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getCurrentRoute());
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Layout
      wallpaper={wallpaper === 0 ? wallpaper1 : wallpaper2}
      route={route}
      theme={theme}
      onToggleTheme={toggleTheme}
      onToggleWallpaper={toggleWallpaper}
    />
  );
}
