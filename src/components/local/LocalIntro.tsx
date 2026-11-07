import TrackedWaLink from "@/components/ui/TrackedWaLink";
import { formatWhatsAppLink } from "@/lib/utils";
import { profilData } from "@/data/statisData";
import { localPage } from "@/data/localData";

const waMessage = `Halo, saya mau tanya soal charm bracelet di Jogja.

Saya melihat halaman lokasi di website. Mohon info stok dan cara pemesanannya. Terima kasih.`;

const LocalIntro = () => (
  <div className="flex flex-col gap-5">
    <h1 className="text-2xl font-black leading-tight text-slate-900 md:text-3xl lg:text-4xl">
      {localPage.heading}
    </h1>

    <div className="flex flex-col gap-3.5 text-sm leading-relaxed text-slate-600 md:text-base">
      {localPage.intro.map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}
    </div>

    <div className="flex flex-col gap-2 pt-1 sm:flex-row">
      <TrackedWaLink
        href={formatWhatsAppLink(profilData.phone, waMessage)}
        placement="local_page"
        className="inline-flex items-center justify-center rounded-full bg-rose-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
      >
        Tanya via WhatsApp
      </TrackedWaLink>
      <a
        href={profilData.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-rose-200 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-rose-300 hover:text-rose-700"
      >
        Buka di Google Maps
      </a>
    </div>
  </div>
);

export default LocalIntro;
