import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

type Props = {
  label?: string;
  className?: string;
};

const SizingLink = ({
  label = "Panduan Ukuran",
  className = "",
}: Props) => (
  <Link
    href="/panduan-ukuran"
    className={`inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-rose-900 transition hover:text-rose-700 ${className}`}
  >
    <span>{label}</span>
    <FiArrowRight />
  </Link>
);

export default SizingLink;
