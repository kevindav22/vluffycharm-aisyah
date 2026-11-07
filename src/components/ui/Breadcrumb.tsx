import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

type Crumb = { name: string; path: string };

const Breadcrumb = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb">
    <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={item.path} className="flex items-center gap-1.5">
            {isLast ? (
              <span aria-current="page" className="font-semibold text-slate-700">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="transition hover:text-rose-700">
                {item.name}
              </Link>
            )}
            {!isLast && <FiChevronRight aria-hidden="true" className="text-slate-400" />}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumb;
