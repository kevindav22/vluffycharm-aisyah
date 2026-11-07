import type { ReactNode } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";

type Props = {
  crumbs: { name: string; path: string }[];
  heading: string;
  description?: string;
  children: ReactNode;
};

const CategoryShell = ({ crumbs, heading, description, children }: Props) => (
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-5 pb-12 pt-20 md:px-8 md:pb-16 md:pt-24 lg:px-12">
      <div className="mb-3">
        <Breadcrumb items={crumbs} />
      </div>

      <h1 className="text-center text-2xl font-black text-slate-900 md:text-3xl lg:text-4xl">
        {heading}
      </h1>

      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate-600 md:text-base">
          {description}
        </p>
      )}

      <div className="mt-8">{children}</div>
    </div>
  </section>
);

export default CategoryShell;
