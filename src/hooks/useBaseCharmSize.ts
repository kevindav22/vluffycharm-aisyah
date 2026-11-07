import { useEffect, useState } from "react";

type Size = { height: number; width: number };

export function useBaseCharmSize(): Size | null {
  const [size, setSize] = useState<Size | null>(null);

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
