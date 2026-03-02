import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ChevronRight, PhoneCall } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative w-48 h-16 md:w-56 md:h-16 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/panelix.png"
              alt="Panelix Logo - Televizyon Ekran ve Panel Değişimi"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
            Ana Sayfa
          </Link>
          <Link href="/tv-modelleri" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
            TV Modelleri
          </Link>
          <div className="relative group py-2">
            <span className="cursor-pointer text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Markalar
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="p-2 flex flex-col gap-1">
                {['Samsung', 'LG', 'Philips', 'Sony', 'Vestel', 'Beko', 'Arçelik', 'TCL', 'Toshiba'].map((brand) => (
                  <Link
                    key={brand}
                    href={`/markalar/${brand.toLowerCase()}`}
                    className="px-4 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    {brand}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/iletisim" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
            İletişim
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/905350577188?text=Merhaba,%20TV%20panel%20değişimi%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-brand-darkblue transition-colors"
          >
            <PhoneCall className="h-4 w-4" />
            Hemen Fiyat Al
          </a>
        </div>
      </div>
    </header>
  );
}
