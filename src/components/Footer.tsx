import Link from "next/link";
import Image from "next/image";
import { Wrench, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

                    {/* Brand & Mission */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <div className="relative w-56 h-16 md:w-64 md:h-20 transition-transform hover:opacity-90">
                                <Image
                                    src="/panelix.png"
                                    alt="Panelix Logo - Garantili TV Ekran Tamiri"
                                    fill
                                    className="object-contain object-left filter brightness-0 invert" // Automatically turns the logo white for the dark footer
                                />
                            </div>
                        </Link>
                        <p className="text-slate-600 max-w-sm mb-6 leading-relaxed">
                            Orijinal parça garantisi ve uzman kadromuzla TV panel değişimi ve onarımında güvenilir adresiniz. Televizyonunuzu ilk günkü gibi yeniliyoruz.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Hızlı Erişim</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-slate-600 hover:text-brand-blue transition-colors">Ana Sayfa</Link>
                            </li>
                            <li>
                                <Link href="/tv-modelleri" className="text-slate-600 hover:text-brand-blue transition-colors">TV Modelleri</Link>
                            </li>
                            <li>
                                <Link href="/iletisim" className="text-slate-600 hover:text-brand-blue transition-colors">İletişim</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Markalar</h3>
                        <ul className="space-y-3">
                            {['Samsung', 'LG', 'Philips', 'Sony', 'Vestel', 'Beko', 'Arçelik'].map((brand) => (
                                <li key={brand}>
                                    <Link href={`/markalar/${brand.toLowerCase()}`} className="text-slate-600 hover:text-brand-blue transition-colors">
                                        {brand} TV Tamiri
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Hizmetlerimiz</h3>
                        <ul className="space-y-3">
                            <li><Link href="/hizmetler/kirik-ekran-tamiri" className="text-slate-600 hover:text-brand-blue transition-colors">Kırık Ekran Tamiri</Link></li>
                            <li><Link href="/hizmetler/tv-sivi-temasi-onarimi" className="text-slate-600 hover:text-brand-blue transition-colors">Sıvı Teması Onarımı</Link></li>
                            <li><Link href="/hizmetler/tv-panel-degisimi" className="text-slate-600 hover:text-brand-blue transition-colors">Orijinal Panel Değişimi</Link></li>
                            <li><Link href="/hizmetler/dikey-ve-yatay-cizgiler" className="text-slate-600 hover:text-brand-blue transition-colors">Dikey & Yatay Çizgi Tamiri</Link></li>
                            <li><Link href="/hizmetler/led-bar-degisimi" className="text-slate-600 hover:text-brand-blue transition-colors">LED Bar Değişimi</Link></li>
                            <li><Link href="/hizmetler/anakart-tamiri" className="text-slate-600 hover:text-brand-blue transition-colors">Anakart & Besleme Tamiri</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">İletişim</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-600">
                                <Phone className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                                <span>+90 535 057 71 88</span>
                            </li>

                            <li className="flex items-start gap-3 text-slate-600">
                                <MapPin className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                                <span>Merkez Ofis, İstanbul</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Panelix. Tüm hakları saklıdır.</p>
                    <p className="mt-2 md:mt-0">Orijinal Panel Değişim Merkezi</p>
                </div>
            </div>
        </footer>
    );
}
