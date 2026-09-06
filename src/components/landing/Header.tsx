"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { WhatsAppButton } from "../ui/Button";
import { profilData } from "@/data/statisData";
import SafeImage from "../ui/SafeImage";
import { handleScrollToTop } from "@/lib/utils";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Tentang Kami", href: "/about" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto max-w-7xl pt-2 px-5 md:px-8 lg:px-12">
        <div className="flex w-full flex-col rounded-2xl bg-gradient-to-r from-rose-200 via-pink-200 to-[#dcbcdb]">
          <div
            className={`flex items-center justify-between gap-2 px-5 transition-all duration-500 md:px-7 ${
              scrolled ? "py-1" : "py-2"
            }`}
          >
            <Link
              href="/"
              onClick={(e) => handleScrollToTop(e, "/")}
              className="flex items-center"
            >
              <SafeImage
                src="/logo/logovluffy.webp"
                alt={profilData?.name || "Logo"}
                width={0}
                height={0}
                sizes="100vw"
                className="h-8 w-auto object-contain md:h-10"
                preload
              />
            </Link>

            <nav className="hidden items-center gap-10 md:flex">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollToTop(e, item.href)}
                    className={`group relative font-bold transition-colors duration-300 ${
                      isActive
                        ? "text-rose-900/80 mix-blend-multiply "
                        : "text-slate-600 hover:text-rose-500"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-rose-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex">
              <WhatsAppButton
                variant="secondary"
                phone={profilData.phone}
                message="Halo, saya mau tanya produk"
              />
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <HiXMark className="text-xl" />
              ) : (
                <HiBars3 className="text-xl" />
              )}
            </button>
          </div>

          <div
            className={`flex flex-col overflow-hidden transition-all duration-300 ease-out md:hidden ${
              mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-5 border-t border-rose-100 px-5 py-4">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) =>
                      handleScrollToTop(e, item.href, () =>
                        setMobileOpen(false),
                      )
                    }
                    className="font-medium text-slate-700 transition hover:text-rose-500"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <WhatsAppButton
                phone={profilData.phone}
                message="Halo, saya mau tanya produk"
                className="w-full"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
