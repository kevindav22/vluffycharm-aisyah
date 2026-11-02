"use client";

import { useEffect, useRef, useState } from "react";
import Moveable from "react-moveable";
import DesignToolbar from "./DesignToolbar";
import DesignItem from "./DesignItem";
import useDesignExport from "@/hooks/useDesignExport";
import SafeImage from "@/components/ui/SafeImage";
import { useBaseCharmSize } from "@/hooks/useBaseCharmSize";
import type { DesignMode, SelectedCharm } from "@/types/globalTypes";
import { useBaseWatchSize } from "@/hooks/useBaseWatch";
import { track } from "@/lib/analytics";

type Props = {
  mode: DesignMode;
  baseImage?: string | null;
  items: SelectedCharm[];
  zoom: number;
  onRemove: (id: string) => void;
  onClear: () => void;
  onTransform: (
    instanceId: string,
    patch: Partial<
      Pick<SelectedCharm, "x" | "y" | "scale" | "rotate" | "zIndex">
    >,
  ) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
};

const DesignCanvas = ({
  mode,
  baseImage,
  items,
  zoom,
  onRemove,
  onClear,
  onTransform,
  onZoomIn,
  onZoomOut,
  onResetZoom,
}: Props) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { handleDownload } = useDesignExport(canvasRef);

  const onDownload = () => {
    track({ event: "design_export", builder: mode, charm_count: items.length });
    void handleDownload();
  };

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const moveHandleRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const baseSize = useBaseCharmSize();
  const watchSize = useBaseWatchSize();

  const ready = baseSize !== null && (mode !== "watch" || watchSize !== null);

  const selectedItem =
    items.find((c) => c.instanceId === selectedId) || null;
  const selectedTarget = selectedId ? itemRefs.current[selectedId] : null;

  const handleRemoveSelected = () => {
    if (selectedId) {
      onRemove(selectedId);
      setSelectedId(null);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "Delete" || e.key === "Backspace") && selectedId) {
        if (
          document.activeElement?.tagName === "INPUT" ||
          document.activeElement?.tagName === "TEXTAREA"
        ) {
          return;
        }
        handleRemoveSelected();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId]);

  return (
    <div className="overflow-hidden rounded-xl border border-rose-100 bg-white">
      <DesignToolbar
        zoom={zoom}
        hasSelected={!!selectedId}
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        onResetZoom={onResetZoom}
        onClear={onClear}
        onDownload={onDownload}
        onRemoveSelected={handleRemoveSelected}
      />

      <div ref={canvasRef} className="p-1 md:p-1 lg:p-2">
        <div className="relative flex aspect-[4/3] flex-col overflow-hidden rounded-2xl border border-dashed border-rose-900 bg-rose-50/20 p-3 md:aspect-[4/3] md:p-4 lg:aspect-[16/7]">
          {!ready ? (
            <div className="flex flex-1 items-center justify-center">
              <div className="h-2/3 w-3/4 animate-pulse rounded-2xl bg-rose-100/60 blur-sm" />
            </div>
          ) : (
          <div className="relative flex-1 overflow-hidden touch-none">
            <div
              className="relative size-full"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "center center",
              }}
              onPointerDown={(e) => {
                if (e.target === e.currentTarget) setSelectedId(null);
              }}
            >
              {/* GARIS BANTU */}
              <div
                data-download-ignore
                className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 -translate-y-1/2 flex flex-col justify-between transition-all duration-200"
                style={{ height: `${baseSize!.height}px` }}
              >
                <div className="w-full border-t border-dashed border-rose-300/70" />
                <div className="w-full border-b border-dashed border-rose-300/70" />
              </div>

              {/* BASE WATCH — di tengah, seukuran baseSize */}
              {mode === "watch" && baseImage && (
                <div
                  data-download-ignore
                  className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
                  style={{ width: watchSize!.width, height: watchSize!.height }}
                >
                  <SafeImage
                    useNativeImg
                    src={baseImage}
                    alt="Base Watch"
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {items.length === 0 ? (
                <div className="flex size-full items-center justify-center text-sm text-slate-400">
                  {mode === "charm"
                    ? "Belum ada charm"
                    : "Pilih charm untuk mendesain watch"}
                </div>
              ) : (
                items.map((item) => (
                  <DesignItem
                    key={item.instanceId}
                    item={item}
                    isSelected={item.instanceId === selectedId}
                    baseSize={baseSize!}
                    setRef={(el) => (itemRefs.current[item.instanceId] = el)}
                    setMoveHandleRef={(el) =>
                      (moveHandleRefs.current[item.instanceId] = el)
                    }
                    onSelect={() => setSelectedId(item.instanceId)}
                  />
                ))
              )}

              {selectedItem && selectedTarget && (
                <Moveable
                  target={selectedTarget}
                  zoom={1 / zoom}
                  draggable
                  resizable
                  renderDirections={["nw", "ne", "sw", "se"]}
                  throttleDrag={0}
                  throttleResize={0}
                  keepRatio
                  origin={false}
                  edge={false}
                  onDrag={({ target, left, top }) => {
                    target.style.left = `${left}px`;
                    target.style.top = `${top}px`;
                  }}
                  onDragEnd={({ target }) => {
                    const left = parseFloat(target.style.left) || 0;
                    const top = parseFloat(target.style.top) || 0;
                    onTransform(selectedItem.instanceId, { x: left, y: top });
                  }}
                  onResize={({ target, width, height, drag }) => {
                    target.style.width = `${width}px`;
                    target.style.height = `${height}px`;
                    target.style.left = `${drag.left}px`;
                    target.style.top = `${drag.top}px`;
                  }}
                  onResizeEnd={({ target }) => {
                    const height =
                      parseFloat(target.style.height) || baseSize!.height;
                    const left = parseFloat(target.style.left) || 0;
                    const top = parseFloat(target.style.top) || 0;
                    onTransform(selectedItem.instanceId, {
                      scale: height / baseSize!.height,
                      x: left,
                      y: top,
                    });
                  }}
                />
              )}
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignCanvas;
