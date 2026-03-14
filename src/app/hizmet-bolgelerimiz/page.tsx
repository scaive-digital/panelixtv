import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";

export const metadata = {
    title: "İstanbul Hizmet Bölgelerimiz | Panelix",
    description: "Panelix olarak İstanbul'un 39 ilçesinde ücretsiz analiz, yerinde TV servis ve orijinal parça garantili ekran panel değişimi hizmeti sunuyoruz. Tüm ilçeleri görüntüleyin.",
};

const districts = [
    { slug: "adalar", name: "Adalar" }, { slug: "arnavutkoy", name: "Arnavutköy" },
    { slug: "atasehir", name: "Ataşehir" }, { slug: "avcilar", name: "Avcılar" },
    { slug: "bagcilar", name: "Bağcılar" }, { slug: "bahcelievler", name: "Bahçelievler" },
    { slug: "bakirkoy", name: "Bakırköy" }, { slug: "basaksehir", name: "Başakşehir" },
    { slug: "bayrampasa", name: "Bayrampaşa" }, { slug: "besiktas", name: "Beşiktaş" },
    { slug: "beykoz", name: "Beykoz" }, { slug: "beylikduzu", name: "Beylikdüzü" },
    { slug: "beyoglu", name: "Beyoğlu" }, { slug: "buyukcekmece", name: "Büyükçekmece" },
    { slug: "catalca", name: "Çatalca" }, { slug: "cekmekoy", name: "Çekmeköy" },
    { slug: "esenler", name: "Esenler" }, { slug: "esenyurt", name: "Esenyurt" },
    { slug: "eyupsultan", name: "Eyüpsultan" }, { slug: "fatih", name: "Fatih" },
    { slug: "gaziosmanpasa", name: "Gaziosmanpaşa" }, { slug: "gungoren", name: "Güngören" },
    { slug: "kadikoy", name: "Kadıköy" }, { slug: "kagithane", name: "Kağıthane" },
    { slug: "kartal", name: "Kartal" }, { slug: "kucukcekmece", name: "Küçükçekmece" },
    { slug: "maltepe", name: "Maltepe" }, { slug: "pendik", name: "Pendik" },
    { slug: "sancaktepe", name: "Sancaktepe" }, { slug: "sariyer", name: "Sarıyer" },
    { slug: "silivri", name: "Silivri" }, { slug: "sultanbeyli", name: "Sultanbeyli" },
    { slug: "sultangazi", name: "Sultangazi" }, { slug: "sile", name: "Şile" },
    { slug: "sisli", name: "Şişli" }, { slug: "tuzla", name: "Tuzla" },
    { slug: "umraniye", name: "Ümraniye" }, { slug: "uskudar", name: "Üsküdar" },
    { slug: "zeytinburnu", name: "Zeytinburnu" }
];

export default function RegionsPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-16 md:py-24 w-full">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">İstanbul TV Tamir Bölgelerimiz</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Panelix olarak İstanbul'un tüm ilçelerine ücretsiz analiz, yerinde cihaz teslim alma ve ikame TV hizmeti sunuyoruz. Size en yakın hizmet noktamızı seçebilirsiniz.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
                        <MapPin className="w-8 h-8 text-brand-blue" />
                        <h2 className="text-2xl font-bold text-slate-800">Tüm İlçelerimiz</h2>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {districts.map((district) => (
                            <Link 
                                key={district.slug} 
                                href={`/istanbul/${district.slug}`}
                                className="group flex items-center p-4 rounded-xl border border-slate-100 hover:border-brand-blue/30 hover:bg-slate-50 transition-all duration-300"
                            >
                                <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-brand-blue mr-3 transition-colors"></div>
                                <span className="font-medium text-slate-700 group-hover:text-brand-blue transition-colors">{district.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] p-8 md:p-12 rounded-3xl shadow-lg text-white flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0 max-w-xl">
                        <h3 className="text-3xl font-bold mb-4">TV'niz Arızalandı mı?</h3>
                        <p className="opacity-90 text-lg">Hangi ilçede olursanız olun, bize ulaştığınızda özel lojistik araçlarımızla cihazınızı güvenle teslim alıyor, ücretsiz analiz edip fiyat veriyoruz.</p>
                    </div>
                    <a
                        href="https://wa.me/905350577188?text=Merhaba,%20TV%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#128C7E] hover:bg-slate-50 font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-300 flex items-center gap-3 text-lg shrink-0"
                    >
                        <MessageCircle className="w-6 h-6" />
                        WhatsApp'tan Yazın
                    </a>
                </div>
            </div>
        </div>
    );
}
