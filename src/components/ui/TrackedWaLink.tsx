"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics";

type Props = {
  href: string;
  placement: string;
  className?: string;
  children: ReactNode;
};

/**
 * Link WhatsApp dengan tracking, tanpa memaksa seluruh parent
 * jadi client component. Dipakai di Footer (server component).
 */
const TrackedWaLink = ({ href, placement, className, children }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track({ event: "wa_click", placement })}
      className={className}
    >
      {children}
    </a>
  );
};

export default TrackedWaLink;
