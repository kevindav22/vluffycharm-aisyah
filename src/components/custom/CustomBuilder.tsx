"use client";

import { useMemo, useState } from "react";
import CustomCanvas from "./CustomCanvas";
import CustomPicker from "./CustomPicker";
import CustomSummary from "./CustomSummary";
import { charmCustom } from "@/data/charmCustom";
import { watchCustom } from "@/data/watchCustom";
import { track } from "@/lib/analytics";
import type {
  CharmCustom,
  CharmCategory,
  CustomMode,
  SelectedCharm,
  WatchCustom,
  WatchCategory,
} from "@/types/globalTypes";

const charmCategories: { value: CharmCategory; label: string }[] = [
  { value: "solid-color", label: "Solid Color" },
  { value: "lumi-pink", label: "Lumi Pink" },
  { value: "lumi-blue", label: "Lumi Blue" },
  { value: "lumi-red", label: "Lumi Red" },
  { value: "lumi-calm", label: "Lumi Calm" },
  { value: "lumi-zodiac", label: "Lumi Zodiac" },
  { value: "lumi-3d", label: "Lumi 3D" },
  { value: "luxor-3d", label: "Luxor 3D" },
  { value: "luxor-hanging", label: "Luxor Hanging 3D" },
  { value: "lumi-kpop", label: "Lumi Kpop" },
  { value: "lumi-hero", label: "Lumi Hero" },
  { value: "lumi-harry-potter", label: "Lumi Harry Potter" },
  { value: "lumi-otomotif", label: "Lumi Otomotif" },
  { value: "lumi-polka", label: "Lumi Polka" },
];

const watchCategories: { value: WatchCategory; label: string }[] = [
  { value: "type1a", label: "Type 1A" },
  { value: "type1b", label: "Type 1B" },
  { value: "premium", label: "Premium" },
  { value: "limited", label: "Limited" },
  { value: "classic", label: "Classic" },
  { value: "sport", label: "Sport" },
];

type Props = {
  mode: CustomMode;
};

const generateId = () =>
  typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;

const CustomBuilder = ({ mode }: Props) => {
  const [zoom, setZoom] = useState(1);
  const [items, setItems] = useState<SelectedCharm[]>([]);
  const [watch, setWatch] = useState<WatchCustom>(watchCustom[0]);

  const charms = useMemo<CharmCustom[]>(() => charmCustom, []);

  const addCharm = (charm: CharmCustom) => {
    setItems((prev) => {
      if (prev.length === 0) {
        track({ event: "custom_start", mode });
      }

      return [
        ...prev,
        {
          ...charm,
          instanceId: generateId(),
          x: 150,
          y: 100,
          scale: 1,
          rotate: 0,
          zIndex: prev.length + 1,
        },
      ];
    });
  };

  const updateTransform = (
    instanceId: string,
    patch: Partial<
      Pick<SelectedCharm, "x" | "y" | "scale" | "rotate" | "zIndex">
    >,
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.instanceId === instanceId ? { ...item, ...patch } : item,
      ),
    );
  };

  const removeItem = (instanceId: string) => {
    setItems((prev) => prev.filter((item) => item.instanceId !== instanceId));
  };

  const clearAll = () => {
    setItems([]);
  };

  return (
    <>
      <CustomCanvas
        mode={mode}
        baseImage={mode === "watch" ? watch.image : null}
        items={items}
        zoom={zoom}
        onRemove={removeItem}
        onClear={clearAll}
        onTransform={updateTransform}
        onZoomIn={() => setZoom((prev) => Math.min(prev + 0.1, 2))}
        onZoomOut={() => setZoom((prev) => Math.max(prev - 0.1, 0.5))}
        onResetZoom={() => setZoom(1)}
      />

      {mode === "watch" && (
        <CustomPicker
          title="Pilih Watch"
          items={watchCustom}
          categories={watchCategories}
          getCategory={(w) => w.watchCategory}
          onSelect={setWatch}
          selectedId={watch.id}
        />
      )}

      <CustomPicker
        title="Pilih Charm"
        items={charms}
        categories={charmCategories}
        getCategory={(c) => c.charmCategory}
        onSelect={addCharm}
        showSolBasic
      />

      <CustomSummary items={items} watch={mode === "watch" ? watch : null} />
    </>
  );
};

export default CustomBuilder;
