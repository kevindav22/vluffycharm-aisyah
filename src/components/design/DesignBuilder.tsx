"use client";

import { useMemo, useState } from "react";
import DesignCanvas from "./DesignCanvas";
import DesignPicker from "./DesignPicker";
import DesignSummary from "./DesignSummary";
import { charmCustom } from "@/data/charmCustom";
import { watchCustom } from "@/data/watchCustom";
import type {
  CharmCustom,
  CharmCategory,
  DesignMode,
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
  { value: "luxor-hanging-3d", label: "Lux Hanging 3D" },
  { value: "kpop", label: "Kpop" },
  { value: "hero", label: "Hero" },
  { value: "harry-potter", label: "Harry Potter" },
  { value: "otomotif", label: "Otomotif" },
  { value: "polka", label: "Polka" },
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
  mode: DesignMode;
};

const generateId = () =>
  typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;

const DesignBuilder = ({ mode }: Props) => {
  const [zoom, setZoom] = useState(1);
  const [items, setItems] = useState<SelectedCharm[]>([]);
  const [watch, setWatch] = useState<WatchCustom>(watchCustom[0]);

  const charms = useMemo<CharmCustom[]>(() => charmCustom, []);

  const addCharm = (charm: CharmCustom) => {
    setItems((prev) => [
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
    ]);
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
    <section className="bg-gradient-to-b from-white to-rose-50 via-rose-100">
      <div className="container mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 md:px-8 lg:px-12">
        <DesignCanvas
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
          <DesignPicker
            title="Pilih Watch"
            items={watchCustom}
            categories={watchCategories}
            getCategory={(w) => w.watchCategory}
            onSelect={setWatch}
            selectedId={watch.id}
          />
        )}

        <DesignPicker
          title="Pilih Charm"
          items={charms}
          categories={charmCategories}
          getCategory={(c) => c.charmCategory}
          onSelect={addCharm}
        />

        <DesignSummary items={items} watch={mode === "watch" ? watch : null} />
      </div>
    </section>
  );
};

export default DesignBuilder;
