import { Metadata } from "next";
import { PhoneCall, CheckCircle2, Wrench, Shield, ArrowRight, Clock, Zap, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define the 39 districts of Istanbul
const istanbulDistricts = [
    { slug: "adalar", name: "Adalar" },
    { slug: "arnavutkoy", name: "Arnavutköy" },
    { slug: "atasehir", name: "Ataşehir" },
    { slug: "avcilar", name: "Avcılar" },
    { slug: "bagcilar", name: "Bağcılar" },
    { slug: "bahcelievler", name: "Bahçelievler" },
    { slug: "bakirkoy", name: "Bakırköy" },
    { slug: "basaksehir", name: "Başakşehir" },
    { slug: "bayrampasa", name: "Bayrampaşa" },
    { slug: "besiktas", name: "Beşiktaş" },
    { slug: "beykoz", name: "Beykoz" },
    { slug: "beylikduzu", name: "Beylikdüzü" },
    { slug: "beyoglu", name: "Beyoğlu" },
    { slug: "buyukcekmece", name: "Büyükçekmece" },
    { slug: "catalca", name: "Çatalca" },
    { slug: "cekmekoy", name: "Çekmeköy" },
    { slug: "esenler", name: "Esenler" },
    { slug: "esenyurt", name: "Esenyurt" },
    { slug: "eyupsultan", name: "Eyüpsultan" },
    { slug: "fatih", name: "Fatih" },
    { slug: "gaziosmanpasa", name: "Gaziosmanpaşa" },
    { slug: "gungoren", name: "Güngören" },
    { slug: "kadikoy", name: "Kadıköy" },
    { slug: "kagithane", name: "Kağıthane" },
    { slug: "kartal", name: "Kartal" },
    { slug: "kucukcekmece", name: "Küçükçekmece" },
    { slug: "maltepe", name: "Maltepe" },
    { slug: "pendik", name: "Pendik" },
    { slug: "sancaktepe", name: "Sancaktepe" },
    { slug: "sariyer", name: "Sarıyer" },
    { slug: "silivri", name: "Silivri" },
    { slug: "sultanbeyli", name: "Sultanbeyli" },
    { slug: "sultangazi", name: "Sultangazi" },
    { slug: "sile", name: "Şile" },
    { slug: "sisli", name: "Şişli" },
    { slug: "tuzla", name: "Tuzla" },
    { slug: "umraniye", name: "Ümraniye" },
    { slug: "uskudar", name: "Üsküdar" },
    { slug: "zeytinburnu", name: "Zeytinburnu" }
];

type Props = {
    params: Promise<{ ilce: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { ilce } = await params;
    
    const district = istanbulDistricts.find(d => d.slug === ilce);
    
    if (!district) {
         return { title: 'Sayfa Bulunamadı' };
    }

    const title = `${district.name} TV Tamiri ve Televizyon Servisi`;
    const desc = `${district.name} bölgesinde aynı gün, garantili ve adresinizde televizyon tamiri. TV panel, LED değişimi ve anakart onarım servisi. Hemen fiyat alın.`;

    return {
        title: `${title} | En Uygun Fiyat Garantili Onarım - Panelix`,
        description: desc,
        keywords: [`${district.name} tv tamiri`, `${district.name} televizyon servisi`, `${district.name} tv panel tamiri`, "istanbul tv tamiri", "garantili televizyon tamircisi", `${district.name} aynı gün tv tamir`, "televizyon led değişimi"],
        openGraph: {
            title: `${title} | Panelix TV Tamiri`,
            description: desc,
        }
    };
}

export function generateStaticParams() {
    return istanbulDistricts.map((district) => ({
        ilce: district.slug,
    }));
}

export default async function DistrictPage({ params }: Props) {
    const { ilce } = await params;
    const district = istanbulDistricts.find(d => d.slug === ilce);

    if (!district) {
        notFound();
    }

    const whatsappText = `Merhaba, ${district.name} bölgesinden size ulaşıyorum. TV tamiri konusunda fiyat ve bilgi almak istiyorum.`;
    const whatsappUrl = `https://wa.me/905350577188?text=${encodeURIComponent(whatsappText)}`;

    return (
        <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-20">
            {/* Localized Hero section */}
            <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-transparent"></div>
                <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                            <MapPin className="w-12 h-12 text-brand-blue" />
                        </div>
                    </div>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-brand-blue/20 text-brand-blue font-medium text-sm">
                       <span className="relative flex h-2 w-2">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                       </span>
                       Bölgenizde Aktif Servis Aracı
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        {district.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">TV Tamiri</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Arızalı televizyonlarınızı adresinizden alıyor, <strong className="text-white">garantili ve profesyonel</strong> onarım sonrası tekrar evinizde kurulumunu yapıyoruz.
                    </p>
                </div>
            </section>

             {/* Main Content Area */}
             <section className="container mx-auto px-4 md:px-8 -mt-8 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8 items-start">

                    {/* Detailed SEO Article */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                        <article className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">{district.name} Bölgesinde Hızlı ve Güvenilir Çözüm</h2>

                            <p className="text-slate-600 mb-6 leading-relaxed">
                                İstanbul <strong>{district.name}</strong> ilçesinde ikamet ediyor ve televizyonunuzda donanımsal bir arıza yaşıyorsanız, en yakın profesyonel servis noktanız olarak buradayız. Panel kırılması, LED barların tükenmesi (ses var görüntü yok arızası) veya sıvı teması gibi sorunlarda cihazınızı kendi imkanlarınızla taşımak hem ekstra masrafa hem de cihazda istenmeyen ek hasarlara yol açabilir.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                <strong>Panelix</strong> garantili servis felsefesiyle, {district.name} bölgesinin hangi mahallesinde olursanız olun donanımlı araçlarımız ve uzman teknisyenlerimizle bulunduğunuz lokasyona gelmekteyiz. Televizyonunuz güvenilir bir şekilde anti-statik (ESD) ambalajlarla teslim alınır ve laboratuvarımızda detaylı check-up sürecine girer.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Hangi Sorunlara Çözüm Sunuyoruz?</h3>
                            <div className="grid sm:grid-cols-2 gap-4 my-6">
                                <Link href="/hizmetler/tv-panel-degisimi" className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 hover:border-brand-blue/30 hover:bg-slate-50 transition-colors group">
                                    <div className="mt-1 bg-brand-blue/10 rounded-lg p-2 group-hover:bg-brand-blue/20 transition-colors">
                                        <Wrench className="w-5 h-5 text-brand-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 m-0">Kırık Panel Onarımı</h4>
                                        <p className="text-sm text-slate-500 m-0 mt-1 line-clamp-2">Ekranda çatlak veya darbe sonrası iç ekranın (likit kristal) dağılması.</p>
                                    </div>
                                </Link>
                                <Link href="/hizmetler/led-bar-degisimi" className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 hover:border-brand-blue/30 hover:bg-slate-50 transition-colors group">
                                    <div className="mt-1 bg-brand-blue/10 rounded-lg p-2 group-hover:bg-brand-blue/20 transition-colors">
                                        <Zap className="w-5 h-5 text-brand-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 m-0">LED Bar Yenileme</h4>
                                        <p className="text-sm text-slate-500 m-0 mt-1 line-clamp-2">Ses geliyor fakat görüntü aşırı karanlık veya ekranda yer yer kararmalar mevcut.</p>
                                    </div>
                                </Link>
                                <Link href="/hizmetler/anakart-tamiri" className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 hover:border-brand-blue/30 hover:bg-slate-50 transition-colors group">
                                    <div className="mt-1 bg-brand-blue/10 rounded-lg p-2 group-hover:bg-brand-blue/20 transition-colors">
                                        <Wrench className="w-5 h-5 text-brand-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 m-0">Anakart / Besleme</h4>
                                        <p className="text-sm text-slate-500 m-0 mt-1 line-clamp-2">Standby ışığı yanıp sönüyor ancak televizyon hiçbir komuta tepki vermiyor.</p>
                                    </div>
                                </Link>
                                <Link href="/hizmetler/tv-sivi-temasi-onarimi" className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 hover:border-brand-blue/30 hover:bg-slate-50 transition-colors group">
                                    <div className="mt-1 bg-brand-blue/10 rounded-lg p-2 group-hover:bg-brand-blue/20 transition-colors">
                                        <Shield className="w-5 h-5 text-brand-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 m-0">Sıvı Teması (COF)</h4>
                                        <p className="text-sm text-slate-500 m-0 mt-1 line-clamp-2">Temizlik esnasında kullanılan losyonların ekranın altından sızıp COF flexleri paslandırması.</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 my-8 not-prose">
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                    <Clock className="w-8 h-8 text-brand-blue mb-3" />
                                    <h4 className="font-bold text-slate-900 mb-2">Ortalama Onarım Süresi: 1-3 İş Günü</h4>
                                    <p className="text-sm text-slate-600">Arıza tespiti aynı gün içerisinde tamamlanır. Çoğu LED değişimi ve panel işlemi, test süreçleri dahil maksimum 3 gün içerisinde onaylanarak adresinize teslim edilir.</p>
                                </div>
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                    <CheckCircle2 className="w-8 h-8 text-brand-blue mb-3" />
                                    <h4 className="font-bold text-slate-900 mb-2">Garanti Koşulları</h4>
                                    <p className="text-sm text-slate-600">Değiştirilen her orijinal parça markanın belirlediği standartlarda test edilip faturalandırılır ve firmamızın 1 yıllık güvencesi altına girer.</p>
                                </div>
                            </div>

                             <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Ücretsiz Teknik Tespit İçin Arayın</h3>
                             <p className="text-slate-600 mb-6 leading-relaxed">
                                {district.name} sakinleri, cihazın tam model numarasını (TV'nin arkasındaki etiket üzerinde yer alır) bize görsel olarak veya metin formatında ilettiğinizde, dakikalar içinde işçilik dahil en şeffaf fiyat haritasını size çıkarıyoruz. Fahiş fiyat veya sürpriz ödemelerle karşılaşmazsınız.
                             </p>
                        </article>
                    </div>

                    {/* Sticky CTA Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-xl">
                            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-6 shadow-inner">
                                <MapPin className="w-8 h-8 text-brand-blue" />
                            </div>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                                {district.name} Servisi
                            </h3>
                            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                Cihazınızın arkasındaki etikette yer alan cihaz model numarasını ve arızanızın detayını paylaşarak hızlıca geri dönüş alın.
                            </p>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#25D366] px-6 py-4 text-lg font-bold text-white shadow-md hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 mb-4"
                            >
                                <PhoneCall className="h-6 w-6 animate-pulse" />
                                Anında Fiyat Al
                            </a>

                            <div className="flex flex-col gap-3 text-sm mt-6">
                                <div className="flex items-center justify-center gap-2 text-slate-600 font-medium">
                                    <Shield className="w-5 h-5 text-brand-blue" />
                                    Orijinal Yedek Parça Desteği
                                </div>
                                <div className="flex items-center justify-center gap-2 text-slate-600 font-medium">
                                    <Clock className="w-5 h-5 text-brand-blue" />
                                    Adresten Alım / Adrese Teslim
                                </div>
                            </div>
                            
                            <hr className="my-6 border-slate-100" />
                            <div className="text-xs text-slate-500">
                                <strong>Mesai Saatlerimiz:</strong><br/>
                                Hafta içi: 09:00 - 19:00<br/>
                                Cumartesi: 09:00 - 16:00
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
