import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

// Kotak kosong seragam untuk state "belum ada produk".
const EmptyState = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 px-6 py-16 text-center">
      <h3 className="text-base font-semibold text-slate-500">{title}</h3>
      <p className="max-w-sm text-sm text-slate-400">{children}</p>
    </div>
  );
};

export default EmptyState;
