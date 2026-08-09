
import { useEffect, useState } from "react";

export function useBaseCharmSize() {
  const [size, setSize] = useState({ height: 48, width: 58 });

  useEffect(() => {
    const update = () => {
      setSize(
        window.innerWidth < 768
          ? { height: 24, width: 26 }
          : { height: 48, width: 58 },
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}
