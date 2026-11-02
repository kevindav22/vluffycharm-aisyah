"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HiBars3, HiChevronDown, HiXMark } from "react-icons/hi2";
import { WhatsAppButton } from "../ui/Button";
import { profilData } from "@/data/statisData";
import SafeImage from "../ui/SafeImage";
import { handleScrollToTop } from "@/lib/utils";

type NavChild = { label: string; href: string };

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Collections", href: "/collections" },
  {
    label: "Get Start",
    href: "/custom-charm",
    children: [
      { label: "Custom Charm", href: "/custom-charm" },
      { label: "Custom Watch", href: "/custom-watch" },
    ],
  },
  { label: "Tentang Kami", href: "/about" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu setiap pindah halaman (tanpa effect, sesuai pola React).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setOpenDesktop(null);
    setOpenMobile(null);
  }

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDesktop(null);
      }
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDesktop(null);
        setOpenMobile(null);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const isItemActive = (item: NavItem) =>
    item.children
      ? item.children.some((child) => pathname === child.href)
      : pathname === item.href;

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

            <nav ref={navRef} className="hidden items-center gap-10 md:flex">
              {navItems.map((item) => {
                const isActive = isItemActive(item);

                if (item.children) {
                  const isOpen = openDesktop === item.label;

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setOpenDesktop(item.label)}
                      onMouseLeave={() => setOpenDesktop(null)}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDesktop(isOpen ? null : item.label)
                        }
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        className={`group relative flex items-center gap-1 font-bold transition-colors duration-300 ${
                          isActive
                            ? "text-rose-900/80 mix-blend-multiply "
                            : "text-slate-600 hover:text-rose-700"
                        }`}
                      >
                        {item.label}
                        <HiChevronDown
                          className={`text-sm transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span
                          className={`absolute -bottom-0.5 left-0 h-0.5 bg-rose-900 transition-all duration-300 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </button>

                      <div
                        className={`absolute left-1/2 top-full z-50 w-44 -translate-x-1/2 pt-3 transition-all duration-200 ${
                          isOpen
                            ? "visible opacity-100"
                            : "pointer-events-none invisible opacity-0"
                        }`}
                      >
                        <div className="flex flex-col gap-1 rounded-xl border border-rose-100 bg-white p-1.5 shadow-lg shadow-rose-900/10">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={(e) => {
                                handleScrollToTop(e, child.href);
                                setOpenDesktop(null);
                              }}
                              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                                pathname === child.href
                                  ? "bg-rose-50 text-rose-900"
                                  : "text-slate-600 hover:bg-rose-50 hover:text-rose-700"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollToTop(e, item.href)}
                    className={`group relative font-bold transition-colors duration-300 ${
                      isActive
                        ? "text-rose-900/80 mix-blend-multiply "
                        : "text-slate-600 hover:text-rose-700"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-rose-900 transition-all duration-300 ${
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
                placement="header"
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
                {navItems.map((item) => {
                  if (item.children) {
                    const isOpen = openMobile === item.label;

                    return (
                      <div key={item.label} className="flex flex-col gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setOpenMobile(isOpen ? null : item.label)
                          }
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between font-medium text-slate-700 transition hover:text-rose-700"
                        >
                          {item.label}
                          <HiChevronDown
                            className={`text-sm transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`flex flex-col gap-2 overflow-hidden pl-3 transition-all duration-300 ${
                            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={(e) =>
                                handleScrollToTop(e, child.href, () =>
                                  setMobileOpen(false),
                                )
                              }
                              className={`border-l border-rose-200 pl-3 text-sm transition hover:text-rose-700 ${
                                pathname === child.href
                                  ? "font-semibold text-rose-900/80"
                                  : "text-slate-600"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={(e) =>
                        handleScrollToTop(e, item.href, () =>
                          setMobileOpen(false),
                        )
                      }
                      className="font-medium text-slate-700 transition hover:text-rose-700"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <WhatsAppButton
                phone={profilData.phone}
                message="Halo, saya mau tanya produk"
                className="w-full"
                variant="secondary"
                placement="header_mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
