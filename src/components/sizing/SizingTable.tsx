import { sizingRows } from "@/data/sizingData";

const cm = (value: number) => value.toString().replace(".", ",");

const SizingTable = () => (
  <div data-aos="fade-up" className="mt-14">
    <h2 className="text-lg font-bold text-slate-900 md:text-xl">
      Tabel ukuran gelang charm
    </h2>
    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
      Lingkar pergelangan diukur pas di kulit. Kolom terakhir adalah jumlah mata
      gelang berlebar 1 cm yang kami sarankan.
    </p>

    <div className="mt-6 min-w-0 overflow-x-auto">
      <table className="w-full border-collapse overflow-hidden rounded-xl border border-rose-100 text-sm">
        <thead>
          <tr className="bg-rose-50 text-left text-slate-900">
            <th scope="col" className="px-4 py-3 font-semibold">
              Lingkar pergelangan
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Dalam inci
            </th>
            <th scope="col" className="px-4 py-3 text-right font-semibold">
              Saran jumlah mata
            </th>
          </tr>
        </thead>
        <tbody>
          {sizingRows.map((row) => (
            <tr
              key={row.links}
              className="border-t border-rose-100 text-slate-600 transition hover:bg-rose-50/60"
            >
              <td className="px-4 py-3 font-medium text-slate-900">
                {cm(row.cmMin)} – {cm(row.cmMax)} cm
              </td>
              <td className="px-4 py-3">{row.inch}</td>
              <td className="px-4 py-3 text-right text-base font-bold text-rose-900">
                {row.links}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default SizingTable;
