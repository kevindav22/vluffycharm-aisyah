"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { formatRupiah, formatWhatsAppLink } from "@/lib/utils";
import { profilData } from "@/data/statisData";
import type { WatchCustom } from "@/types/globalTypes";

type PickerItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props<T extends PickerItem> = {
  items: T[];
  watch: WatchCustom | null;
  mode?: "bundling";
  productName?: string;
  productPrice?: number;
  disabled?: boolean;
  onOrder?: () => void;
};

function DesignSummary<T extends PickerItem>({
  items,
  watch,
  mode,
  productName,
  productPrice,
  disabled,
  onOrder,
}: Props<T>) {
  const isBundling = mode === "bundling";
  const charmsPrice = items.reduce((total, item) => total + item.price, 0);
  const watchPrice = watch ? watch.price : 0;
  const totalPrice = isBundling ? (productPrice ?? 0) : watchPrice + charmsPrice;

  const handleOrder = () => {
    if (isBundling && onOrder) {
      onOrder();
      return;
    }

    const grouped = items.reduce(
      (acc, item) => {
        acc[item.name] = (acc[item.name] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    const summary = Object.entries(grouped)
      .map(([name, qty]) => `• ${name} (${qty})`)
      .join("\n");

    const watchInfo = watch
      ? `\nModel Watch: ${watch.name} — ${formatRupiah(watch.price)}`
      : "";

    const message = `Halo Kak! Saya ingin memesan custom design hasil rangkaian saya.
    Ringkasan:
    ${summary}${watchInfo}
    Estimasi Total: ${formatRupiah(totalPrice)}
    Hasil desain telah saya lampirkan.
    Terima kasih`.trim();

    window.open(formatWhatsAppLink(profilData.phone, message));
  };

  const isDisabled = isBundling
    ? (disabled ?? false)
    : items.length === 0 && !watch;

  return (
    <div className="overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm">
      <div className="flex flex-col gap-4 p-4 md:p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-slate-900 md:text-xl">
            {isBundling ? "Ringkasan Pesanan" : "Konfirmasi Hasil Desainmu"}
          </h3>
          <p className="max-w-2xl text-sm text-slate-500 md:text-base">
            {isBundling
              ? "Periksa kembali paket dan charm yang kamu pilih, lalu kirimkan rincian pesanan melalui WhatsApp."
              : "Jangan lupa download desain terlebih dahulu, kemudian kirimkan gambar beserta rincian pesanan otomatis melalui WhatsApp."}
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:items-end">
          {isBundling && productName && (
            <div className="flex items-center justify-between gap-3 text-sm lg:justify-end">
              <span className="text-slate-500">Paket: {productName}</span>
              <span className="font-semibold text-slate-900">
                {formatRupiah(productPrice ?? 0)}
              </span>
            </div>
          )}

          {!isBundling && watch && (
            <div className="flex items-center justify-between gap-3 text-sm lg:justify-end">
              <span className="text-slate-500">{watch.name}</span>
              <span className="font-semibold text-slate-900">
                {formatRupiah(watch.price)}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between gap-3 text-sm lg:justify-end">
            <span className="text-slate-500">
              {items.length} charm terpilih
            </span>
            {!isBundling && (
              <span className="font-semibold text-slate-900">
                {formatRupiah(charmsPrice)}
              </span>
            )}
          </div>

          {isBundling && items.length > 0 && (
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
              {items.map((item) => (
                <span key={item.id}>• {item.name}</span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between gap-3 border-t border-rose-100 pt-2 lg:justify-end">
            <span className="font-semibold text-slate-900">Total</span>
            <span className="text-lg font-black text-rose-500">
              {formatRupiah(totalPrice)}
            </span>
          </div>

          <Button
            variant="primary"
            onClick={handleOrder}
            disabled={isDisabled}
            className="h-11 w-fit disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FaWhatsapp />
            Pesan via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DesignSummary;
