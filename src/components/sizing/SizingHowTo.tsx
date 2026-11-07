import SafeImage from "@/components/ui/SafeImage";
import { linkSize } from "@/data/sizingData";

const steps = [
  "Lilitkan meteran kain di pergelangan tangan dengan posisi pas menempel kulit, tanpa ditekan dan tanpa dilonggarkan.",
  "Cocokkan angka dalam sentimeter dengan tabel ukuran untuk menemukan jumlah mata yang sesuai.",
  "Kalau hasil ukur jatuh di antara dua baris, ambil jumlah mata yang lebih besar karena charm menambah ketebalan gelang.",
];

const SizingHowTo = () => (
  <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
    <div
      data-aos="fade-up"
      className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-2xl border border-rose-100 bg-rose-50"
    >
      <SafeImage
        src="/img/sizing.webp"
        alt="Cara mengukur pergelangan tangan untuk gelang charm Vluffy Store"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 55vw"
        style={{ aspectRatio: "4 / 3" }}
        className="object-contain p-4"
      />
    </div>

    <div data-aos="fade-up" className="flex min-w-0 flex-col gap-5">
      <h2 className="text-lg font-bold text-slate-900 md:text-xl">
        Cara mengukur pergelangan tangan
      </h2>

      <ol className="flex flex-col gap-4">
        {steps.map((step, index) => (
          <li key={step.slice(0, 24)} className="flex gap-3">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-900">
              {index + 1}
            </span>
            <p className="min-w-0 text-sm leading-relaxed text-slate-600 md:text-base">
              {step}
            </p>
          </li>
        ))}
      </ol>

      <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-4">
        <p className="text-sm font-semibold text-slate-900">
          Dimensi mata gelang
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Tinggi {linkSize.height.toString().replace(".", ",")} cm · Lebar{" "}
          {linkSize.width.toString().replace(".", ",")} cm
        </p>
      </div>
    </div>
  </div>
);

export default SizingHowTo;
