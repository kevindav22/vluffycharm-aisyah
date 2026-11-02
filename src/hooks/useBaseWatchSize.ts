import { useEffect, useState } from "react";

type Size = { height: number; width: number };

export function useBaseWatchSize(): Size | null {
  const [size, setSize] = useState<Size | null>(null);

  useEffect(() => {
    const update = () => {
      setSize(
        window.innerWidth < 768
          ? { height: 60, width: 75 }
          : { height: 120, width: 145 },
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}
