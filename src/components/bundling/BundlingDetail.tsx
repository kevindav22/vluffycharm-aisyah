"use client";

import { useMemo, useState } from "react";
import BundlingHero from "./BundlingHero";
import BundlingOthers from "./BundlingOthers";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SizingLink from "@/components/ui/SizingLink";
import CustomPicker from "@/components/custom/CustomPicker";
import CustomSummary from "@/components/custom/CustomSummary";
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
  "luxor-hanging": "Luxor Hanging 3D",
  "lumi-kpop": "Lumi Kpop",
  "lumi-hero": "Lumi Hero",
  "lumi-harry-potter": "Lumi Harry Potter",
  "lumi-otomotif": "Lumi Otomotif",
  "lumi-polka": "Lumi Polka",
};

type Props = {
  crumbs: { name: string; path: string }[];
  pkg: BundlingPackage;
  product: Product;
  others: Product[];
};

const BundlingDetail = ({ crumbs, pkg, product, others }: Props) => {
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
    <section className="bg-white">
      <div className="container mx-auto flex max-w-7xl flex-col gap-5 px-5 pb-12 pt-20 md:px-8 md:pb-16 md:pt-24 lg:px-12">
        <div className="mb-3">
          <Breadcrumb items={crumbs} />
        </div>

        <BundlingHero product={product} description={pkg.description} />

        <SizingLink label="Cek ukuran gelang sebelum memesan" />

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-slate-900">Pilih Charm Bonus</h2>

          {pkg.rules.map((rule, index) => {
            const count = selectedCharms.filter((c) =>
              rule.allowedCategories.includes(c.charmCategory),
            ).length;

            return (
              <CustomPicker
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

        <div data-aos="fade-up">
          <CustomSummary
            mode="bundling"
            items={selectedCharms}
            watch={null}
            productName={product.name}
            productPrice={product.price}
            disabled={!allQuotasMet}
            onOrder={handleOrder}
          />
        </div>

        <BundlingOthers products={others} />
      </div>
    </section>
  );
};

export default BundlingDetail;
