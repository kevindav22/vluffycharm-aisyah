"use client";

import { useEffect } from "react";
import AOS from "aos";

const AosProvider = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  return null;
};

export default AosProvider;
