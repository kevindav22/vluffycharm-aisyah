"use client";

import {
  FiDownload,
  FiMinus,
  FiPlus,
  FiRotateCcw,
  FiXCircle,
} from "react-icons/fi";
import { Button } from "@/components/ui/Button";

type Props = {
  zoom: number;
  hasSelected: boolean;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  onClear: () => void;
  onDownload: () => void;
  onRemoveSelected: () => void;
};

const DesignToolbar = ({
  zoom,
  hasSelected,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onClear,
  onDownload,
  onRemoveSelected,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-rose-200 bg-rose-100 p-3 md:p-4">
      <div className="flex items-center overflow-hidden rounded-xl border border-rose-300 bg-white shadow-sm">
        <Button
          variant="plain"
          onClick={onZoomOut}
          className="size-8 rounded-none p-0 text-slate-600 hover:bg-rose-50 hover:text-rose-500"
        >
          <FiMinus />
        </Button>

        <div className="flex items-center justify-center border-x border-rose-300 px-3 text-sm font-semibold text-slate-700 md:px-4">
          {Math.round(zoom * 100)}%
        </div>

        <Button
          variant="plain"
          onClick={onZoomIn}
          className="size-8 rounded-none p-0 text-slate-600 hover:bg-rose-50 hover:text-rose-500"
        >
          <FiPlus />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        {hasSelected && (
          <Button
            variant="secondary"
            onClick={onRemoveSelected}
            className="size-8 p-0 text-rose-600 md:size-auto md:px-4 md:py-2"
            title="Hapus Elemen Terpilih"
          >
            <FiXCircle />
            <span className="hidden md:block">Hapus</span>
          </Button>
        )}

        <Button
          variant="secondary"
          onClick={onResetZoom}
          className="size-8 p-0 md:size-auto md:px-4 md:py-2"
          title="Reset Zoom"
        >
          <FiRotateCcw />
          <span className="hidden md:block">Reset Zoom</span>
        </Button>

        <Button
          variant="secondary"
          onClick={onClear}
          className="size-8 p-0 md:size-auto md:px-4 md:py-2"
          title="Clear All"
        >
          <FiRotateCcw className="rotate-45" />
          <span className="hidden md:block">Clear All</span>
        </Button>

        <Button
          variant="primary"
          onClick={onDownload}
          className="size-8 p-0 md:size-auto md:px-4 md:py-2"
        >
          <FiDownload />
          <span className="hidden md:block">Download</span>
        </Button>
      </div>
    </div>
  );
};

export default DesignToolbar;
