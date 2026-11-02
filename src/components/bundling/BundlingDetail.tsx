"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import BundlingHero from "./BundlingHero";
import DesignPicker from "@/components/design/DesignPicker";
import DesignSummary from "@/components/design/DesignSummary";
import { charmCustom } from "@/data/charmCustom";
import { formatRupiah, formatWhatsAppLink } from "@/lib/utils";
import { track } from "@/lib/analytics";
import { profilData } from "@/data/statisData";
import type { BundlingPackage, CharmCustom, Product } from "@/types/globalTypes";

const categoryLabel: Record<string, string> = {
  "lumi-pink": "Lumi Pink",
  "lumi-blue": "Lumi Blue",
  "lumi-red": "Lumi Red",
  "lumi-calm": "Lumi Calm",
  "lumi-zodiac": "Lumi Zodiac",
  "lumi-3d": "Lumi 3D",
  "luxor-3d": "Luxor 3D",
  "luxor-hanging-3d": "Lux Hanging 3D",
  "lumi-kpop": "Lumi Kpop",
  "lumi-hero": "Lumi Hero",
  "lumi-harry-potter": "Lumi Harry Potter",
  "lumi-otomotif": "Lumi Otomotif",
  "lumi-polka": "Lumi Polka",
};

type Props = {
  pkg: BundlingPackage;
  product: Product;
};

const BundlingDetail = ({ pkg, product }: Props) => {
  const [selectedCharms, setSelectedCharms] = useState<CharmCustom[]>([]);

  const allQuotasMet = useMemo(() => {
    return pkg.rules.every((rule) => {
      const count = selectedCharms.filter((c) =>
        rule.allowedCategories.includes(c.charmCategory),
      ).length;
      return count >= rule.quota;
    });
  }, [pkg.rules, selectedCharms]);

  const handleToggleCharm = (charm: CharmCustom) => {
    setSelectedCharms((prev) => {
      const exists = prev.find((c) => c.id === charm.id);
      if (exists) {
        return prev.filter((c) => c.id !== charm.id);
      }
      return [...prev, charm];
    });
  };

  const handleOrder = () => {
    if (!allQuotasMet) return;

    const grouped = selectedCharms.reduce(
      (acc, item) => {
        acc[item.name] = (acc[item.name] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    const summary = Object.entries(grouped)
      .map(([name, qty]) => `• ${name} (${qty})`)
      .join("\n");

    const message = `Halo Kak, saya ingin memesan paket bundling.
    Paket: ${product.name}
    Harga: ${formatRupiah(product.price)}
    Pilihan Charm:
    ${summary}
    Terima kasih.`;
    track({
      event: "bundling_order",
      product_name: product.name,
      value: product.price,
    });
    window.open(formatWhatsAppLink(profilData.phone, message));
  };

  return (
    <section className="bg-gradient-to-b from-white to-rose-50 via-rose-100">
      <div className="container mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 md:px-8 lg:px-12">
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-rose-500"
        >
          <FiArrowLeft />
          <span>Kembali ke Koleksi</span>
        </Link>

        <BundlingHero product={product} description={pkg.description} />

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-slate-900">Pilih Charm Bonus</h2>

          {pkg.rules.map((rule, index) => {
            const count = selectedCharms.filter((c) =>
              rule.allowedCategories.includes(c.charmCategory),
            ).length;

            return (
              <DesignPicker
                key={index}
                mode="bundling"
                title={rule.label}
                items={charmCustom.filter((c) =>
                  rule.allowedCategories.includes(c.charmCategory),
                )}
                categories={rule.allowedCategories.map((cat) => ({
                  value: cat,
                  label: categoryLabel[cat] ?? cat,
                }))}
                getCategory={(c) => c.charmCategory}
                selectedIds={selectedCharms.map((c) => c.id)}
                onToggle={handleToggleCharm}
                quota={rule.quota}
                selectedCount={count}
              />
            );
          })}
        </div>

        <DesignSummary
          mode="bundling"
          items={selectedCharms}
          watch={null}
          productName={product.name}
          productPrice={product.price}
          disabled={!allQuotasMet}
          onOrder={handleOrder}
        />
      </div>
    </section>
  );
};

export default BundlingDetail;
