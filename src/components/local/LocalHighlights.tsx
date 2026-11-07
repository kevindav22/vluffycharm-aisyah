import { localPage } from "@/data/localData";

const LocalHighlights = () => (
  <>
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {localPage.highlights.map((item) => (
        <div
          key={item.title}
          data-aos="fade-up"
          className="flex flex-col gap-1.5 rounded-xl border border-rose-100 p-5"
        >
          <h2 className="text-sm font-bold text-slate-900">{item.title}</h2>
          <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 border-t border-rose-100 pt-10">
      <h2 className="mb-3 text-lg font-bold text-slate-900 md:text-xl">
        Area asal pelanggan workshop
      </h2>
      <p className="mb-4 text-sm leading-relaxed text-slate-600">
        Pelanggan kami banyak datang dari kawasan sekitar kampus dan perumahan di
        utara Yogyakarta. Kalau kamu dari luar daftar ini, pengiriman tetap bisa
        dilakukan ke seluruh Indonesia.
      </p>
      <ul data-aos="fade-up" className="flex flex-wrap gap-2">
        {localPage.areas.map((area) => (
          <li
            key={area}
            className="rounded-full bg-rose-50 px-3.5 py-1.5 text-sm text-slate-700"
          >
            {area}
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default LocalHighlights;
