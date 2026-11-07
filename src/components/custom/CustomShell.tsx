import type { ReactNode } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SizingLink from "@/components/ui/SizingLink";

type Props = {
  crumbs: { name: string; path: string }[];
  heading: string;
  children: ReactNode;
};

const CustomShell = ({ crumbs, heading, children }: Props) => (
  <section className="bg-white">
    <div className="container mx-auto max-w-7xl px-5 pb-12 pt-20 md:px-8 md:pb-16 md:pt-24 lg:px-12">
      <div className="mb-3">
        <Breadcrumb items={crumbs} />
      </div>
      <h1 className="text-2xl font-black leading-tight text-slate-900 md:text-3xl lg:text-4xl">
        {heading}
      </h1>
      <div data-aos="fade-up" className="mt-6 flex flex-col gap-5">
        {children}
      </div>

      <SizingLink
        label="Belum tahu ukuran gelang? Lihat panduan ukuran"
        className="mt-8"
      />
    </div>
  </section>
);

export default CustomShell;
