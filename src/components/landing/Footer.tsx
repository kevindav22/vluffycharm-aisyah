import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { SiInstagram, SiTiktok, SiShopee } from "react-icons/si";
import SafeImage from "@/components/ui/SafeImage";
import { profilData } from "@/data/statisData";
import { formatWhatsAppLink } from "@/lib/utils";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Custom Charm", href: "/custom-charm" },
  { label: "Custom Watch", href: "/custom-watch" },
];

const socials = [
  { label: "Instagram", href: profilData.socialMedia.instagram, icon: SiInstagram },
  { label: "TikTok", href: profilData.socialMedia.tiktok, icon: SiTiktok },
  { label: "Shopee", href: profilData.socialMedia.shopee, icon: SiShopee },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-200 via-pink-200 to-[#dcbcdb]">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <SafeImage
                src={profilData.logo}
                alt={profilData.name || "Logo"}
                width={0}
                height={0}
                sizes="100vw"
                className="h-15 w-auto object-contain"
                preload
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600">
              Aksesoris handmade berkualitas untuk melengkapi gaya harianmu.
              Koleksi siap pakai hingga custom design sesuai ceritamu.
            </p>
          </div>

          {/* Navigasi */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Navigasi
            </h3>
            <nav className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-slate-600 transition hover:text-rose-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Kontak */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Hubungi Kami
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={formatWhatsAppLink(profilData.phone, profilData.pesanUmum)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-slate-600 transition hover:text-rose-900"
                >
                  <FaWhatsapp className="mt-0.5 shrink-0 text-rose-900" />
                  <span>{profilData.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profilData.email}`}
                  className="flex items-start gap-2.5 text-sm text-slate-600 transition hover:text-rose-900"
                >
                  <FaEnvelope className="mt-0.5 shrink-0 text-rose-900" />
                  <span>{profilData.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <FaLocationDot className="mt-0.5 shrink-0 text-rose-900" />
                <span>{profilData.address}</span>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-rose-200 bg-white text-slate-500 transition hover:border-rose-300 hover:text-rose-500"
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center gap-1.5 border-t border-rose-100 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {profilData.name}. All Rights Reserved. Build by{" "}
            <a
              href="https://kvndv.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-rose-500 transition hover:text-rose-600"
            >
              DavinTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
