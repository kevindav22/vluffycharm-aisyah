import type { ReactNode } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";

type Props = {
  crumbs: { name: string; path: string }[];
  children: ReactNode;
  className?: string;
};

const PageShell = ({ crumbs, children, className = "bg-white" }: Props) => (
  <section className={className}>
    <div className="mx-auto max-w-7xl px-5 pb-12 pt-20 md:px-8 md:pb-16 md:pt-24 lg:px-12">
      <div className="mb-3">
        <Breadcrumb items={crumbs} />
      </div>
      {children}
    </div>
  </section>
);

export default PageShell;
