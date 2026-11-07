import { profilData } from "@/data/statisData";
import { seoData } from "@/data/seoData";

const LocalInfo = () => (
  <aside
    data-aos="fade-up"
    className="flex flex-col gap-4 rounded-2xl border border-rose-100 bg-rose-50/40 p-6"
  >
    <h2 className="text-base font-bold text-slate-900">Alamat workshop</h2>

    <address className="not-italic text-sm leading-relaxed text-slate-700">
      {profilData.address}
    </address>

    <dl className="flex flex-col gap-2 border-t border-rose-100 pt-4 text-sm">
      <div className="flex justify-between gap-4">
        <dt className="text-slate-500">Koordinat</dt>
        <dd className="text-right font-medium text-slate-800">
          {seoData.geo.lat}, {seoData.geo.lng}
        </dd>
      </div>
      <div className="flex justify-between gap-4">
        <dt className="text-slate-500">Jam buka</dt>
        <dd className="text-right font-medium text-slate-800">
          {seoData.openingHours.opens.replace(":", ".")} -{" "}
          {seoData.openingHours.closes.replace(":", ".")}
        </dd>
      </div>
      <div className="flex justify-between gap-4">
        <dt className="text-slate-500">WhatsApp</dt>
        <dd className="text-right font-medium text-slate-800">
          {profilData.phone}
        </dd>
      </div>
      <div className="flex justify-between gap-4">
        <dt className="text-slate-500">Email</dt>
        <dd className="text-right font-medium text-slate-800">
          {profilData.email}
        </dd>
      </div>
    </dl>
  </aside>
);

export default LocalInfo;
