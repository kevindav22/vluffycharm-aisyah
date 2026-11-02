"use client";

import SafeImage from "@/components/ui/SafeImage";
import type { SelectedCharm } from "@/types/globalTypes";

type Size = { height: number; width: number };

type Props = {
  item: SelectedCharm;
  isSelected: boolean;
  baseSize: Size;
  setRef: (el: HTMLDivElement | null) => void;
  setMoveHandleRef: (el: HTMLDivElement | null) => void;
  onSelect: () => void;
};

// Elemen yang dirangkai di canvas (reuse SelectedCharm). Bisa digeser/diubah skala.
const CustomItem = ({
  item,
  isSelected,
  baseSize,
  setRef,
  setMoveHandleRef,
  onSelect,
}: Props) => {
  const height = baseSize.height * item.scale;
  const width = baseSize.width * item.scale;

  return (
    <div
      ref={setRef}
      className="absolute cursor-move touch-none select-none"
      style={{
        left: item.x,
        top: item.y,
        width,
        height,
        zIndex: item.zIndex,
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      <div className="pointer-events-none relative size-full">
        <SafeImage
          useNativeImg
          src={item.image}
          alt={item.name}
          fill
          className="object-fill"
        />
      </div>

      {isSelected && (
        <div
          className="pointer-events-none absolute left-1/2 top-full flex -translate-x-1/2 flex-col items-center"
          style={{ height: 28 }}
        >
          <div className="h-4 w-px bg-rose-300" />
          <div
            ref={setMoveHandleRef}
            className="pointer-events-auto flex size-7 touch-none items-center justify-center rounded-full border border-rose-300 bg-white shadow-sm active:scale-95"
          >
            <div className="flex flex-col items-center gap-0.5">
              <span className="block h-0.5 w-3 rounded bg-rose-900" />
              <span className="block h-0.5 w-3 rounded bg-rose-900" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomItem;
