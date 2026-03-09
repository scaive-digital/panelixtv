"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  const services = [
    { name: "Kırık Ekran Tamiri", slug: "kirik-ekran-tamiri" },
    { name: "Sıvı Teması Onarımı", slug: "tv-sivi-temasi-onarimi" },
    { name: "Orijinal Panel Değişimi", slug: "tv-panel-degisimi" },
    { name: "Dikey & Yatay Çizgi Tamiri", slug: "dikey-ve-yatay-cizgiler" },
    { name: "LED Bar Değişimi", slug: "led-bar-degisimi" },
    { name: "Anakart & Besleme Tamiri", slug: "anakart-tamiri" }
  ];

  const brands = ['Samsung', 'LG', 'Philips', 'Sony', 'Vestel', 'Beko', 'Arçelik', 'TCL', 'Toshiba'];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-2 group shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
          <Link href="/" className="text-base font-semibold text-slate-700 hover:text-brand-blue transition-colors">
            Ana Sayfa
          </Link>
          <Link href="/tv-modelleri" className="text-base font-semibold text-slate-700 hover:text-brand-blue transition-colors">
            TV Modelleri
          </Link>

          <div className="relative group py-2">
            <span className="cursor-pointer text-base font-semibold text-slate-700 hover:text-brand-blue transition-colors">
              Hizmetlerimiz
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[260px] bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="p-2 flex flex-col gap-1">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/hizmetler/${service.slug}`}
                    className="px-4 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group py-2">
            <span className="cursor-pointer text-base font-semibold text-slate-700 hover:text-brand-blue transition-colors">
              Markalar
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="p-2 flex flex-col gap-1">
                {brands.map((brand) => (
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

          <div className="relative group py-2">
            <span className="cursor-pointer text-base font-semibold text-slate-700 hover:text-brand-blue transition-colors">
              Kurumsal
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="p-2 flex flex-col gap-1">
                <Link href="/hakkimizda" className="px-4 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg transition-colors">Hakkımızda</Link>
                <Link href="/sss" className="px-4 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg transition-colors">S.S.S</Link>
                <Link href="/garanti-kosullari" className="px-4 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg transition-colors">Garanti Koşulları</Link>
                <Link href="/kvkk" className="px-4 py-2 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-lg transition-colors">KVKK & Aydınlatma</Link>
              </div>
            </div>
          </div>

          <Link href="/iletisim" className="text-base font-semibold text-slate-700 hover:text-brand-blue transition-colors">
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

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Menüyü aç/kapat"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col p-4 overflow-y-auto max-h-[85vh]">
          <Link
            href="/"
            className="py-3 px-4 text-slate-800 font-semibold border-b border-slate-100 hover:bg-slate-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ana Sayfa
          </Link>
          <Link
            href="/tv-modelleri"
            className="py-3 px-4 text-slate-800 font-semibold border-b border-slate-100 hover:bg-slate-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            TV Modelleri
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="border-b border-slate-100">
            <button
              className="w-full flex items-center justify-between py-3 px-4 text-slate-800 font-semibold hover:bg-slate-50 transition-colors"
              onClick={() => toggleDropdown('services')}
            >
              Hizmetlerimiz
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMobileDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`flex flex-col bg-slate-50 overflow-hidden transition-all duration-300 ${activeMobileDropdown === 'services' ? 'max-h-[500px]' : 'max-h-0'}`}>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/hizmetler/${service.slug}`}
                  className="py-2.5 px-8 text-sm text-slate-600 hover:text-brand-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Brands Dropdown */}
          <div className="border-b border-slate-100">
            <button
              className="w-full flex items-center justify-between py-3 px-4 text-slate-800 font-semibold hover:bg-slate-50 transition-colors"
              onClick={() => toggleDropdown('brands')}
            >
              Markalar
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMobileDropdown === 'brands' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`flex flex-col bg-slate-50 overflow-hidden transition-all duration-300 ${activeMobileDropdown === 'brands' ? 'max-h-[500px]' : 'max-h-0'}`}>
              {brands.map((brand) => (
                <Link
                  key={brand}
                  href={`/markalar/${brand.toLowerCase()}`}
                  className="py-2.5 px-8 text-sm text-slate-600 hover:text-brand-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {brand}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Kurumsal Dropdown */}
          <div className="border-b border-slate-100">
            <button
              className="w-full flex items-center justify-between py-3 px-4 text-slate-800 font-semibold hover:bg-slate-50 transition-colors"
              onClick={() => toggleDropdown('kurumsal')}
            >
              Kurumsal
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMobileDropdown === 'kurumsal' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`flex flex-col bg-slate-50 overflow-hidden transition-all duration-300 ${activeMobileDropdown === 'kurumsal' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <Link href="/hakkimizda" className="py-2.5 px-8 text-sm text-slate-600 hover:text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Hakkımızda</Link>
              <Link href="/sss" className="py-2.5 px-8 text-sm text-slate-600 hover:text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Sıkça Sorulan Sorular</Link>
              <Link href="/garanti-kosullari" className="py-2.5 px-8 text-sm text-slate-600 hover:text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Garanti Koşulları</Link>
              <Link href="/kvkk" className="py-2.5 px-8 text-sm text-slate-600 hover:text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>KVKK & Aydınlatma Metni</Link>
            </div>
          </div>

          <Link
            href="/iletisim"
            className="py-3 px-4 text-slate-800 font-semibold hover:bg-slate-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            İletişim
          </Link>

          <div className="pt-4 pb-2 px-2 mt-4 border-t border-slate-100">
            <a
              href="https://wa.me/905350577188?text=Merhaba,%20TV%20panel%20değişimi%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 w-full rounded-xl bg-brand-blue px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-brand-darkblue transition-colors"
            >
              <PhoneCall className="h-5 w-5" />
              WhatsApp&apos;tan Fiyat Al
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
