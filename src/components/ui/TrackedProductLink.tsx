"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { track } from "@/lib/analytics";

type Props = {
  href: string;
  productName: string;
  value: number;
  className?: string;
  children: ReactNode;
};

const TrackedProductLink = ({
  href,
  productName,
  value,
  className,
  children,
}: Props) => (
  <Link
    href={href}
    className={className}
    onClick={() =>
      track({
        event: "product_view",
        placement: "product_card",
        product_name: productName,
        value,
      })
    }
  >
    {children}
  </Link>
);

export default TrackedProductLink;
