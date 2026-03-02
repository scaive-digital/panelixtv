import { Metadata } from "next";
import { PhoneCall, CheckCircle2, Wrench, Shield, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

type Props = {
    params: Promise<{ hizmet: string }>;
};

// Map URL slugs to human-readable titles and descriptions
const serviceData: Record<string, { title: string, desc: string, icon: React.ReactNode }> = {
    "kirik-ekran-tamiri": {
        title: "Kırık Ekran ve İç Ekran Tamiri",
        desc: "Televizyonunuz fiziksel darbe mi aldı? Kırık panel, çatlak veya içten mürekkep akması gibi durumlarda, %100 orijinal sıfır panel değişimi ile televizyonunuzu ilk günkü performansına kavuşturuyoruz.",
        icon: <Wrench className="w-12 h-12 text-brand-blue" />
    },
    "tv-sivi-temasi-onarimi": {
        title: "Sıvı Teması ve COF Onarımı",
        desc: "Ekran silme sırasında alta kaçan sıvıların neden olduğu korozyon, oksitlenme ve COF flex arızaları artık çözümsüz değil. Uzman cihazlarla garantili sıvı teması onarımı yapıyoruz.",
        icon: <Shield className="w-12 h-12 text-brand-blue" />
    },
    "tv-panel-degisimi": {
        title: "Orijinal Panel Değişimi",
        desc: "Arızalı, ömrünü yitirmiş veya onarılamayacak kadar hasar görmüş televizyon ekranları için birebir orijinal ve garantili panel değişim hizmeti sunuyoruz. Kesinlikle yan sanayi kullanılmaz.",
        icon: <CheckCircle2 className="w-12 h-12 text-brand-blue" />
    },
    "dikey-ve-yatay-cizgiler": {
        title: "Dikey ve Yatay Çizgi Tamiri",
        desc: "Televizyonunuzda aniden beliren dikey çizgiler, yatay bantlar veya görüntünün titremesi gibi matris arızalarına nokta atışı müdahale ediyor, arızalı bileşenleri kalıcı olarak onarıyoruz.",
        icon: <ArrowRight className="w-12 h-12 text-brand-blue" />
    },
    "led-bar-degisimi": {
        title: "LED Bar ve Aydınlatma Değişimi",
        desc: "Ses var görüntü yok şikayetinin bir numaralı sebebi olan LED patlaması arızasını, tamamen yeni ve orijinal LED barlar takarak (bölgesel tamir değil, komple değişim) çözüme kavuşturuyoruz.",
        icon: <Wrench className="w-12 h-12 text-brand-blue" />
    },
    "anakart-tamiri": {
        title: "Anakart ve Besleme Tamiri",
        desc: "Televizyon hiç açılmıyor mu? Işık yanıp sönüyor mu? Güç kartı (besleme) ve anakart (mainboard) arızalarını laboratuvar ortamında mikroskobik düzeyde tamir ediyoruz.",
        icon: <Shield className="w-12 h-12 text-brand-blue" />
    }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { hizmet } = await params;
    const data = serviceData[hizmet];

    // Default fallback if URL doesn't match
    const title = data?.title || "Profesyonel TV Tamir Hizmetleri";
    const desc = data?.desc || "Garantili TV panel değişimi ve onarım hizmetleri.";

    return {
        title: `${title} | En Uygun Fiyat Garantisi - Panelix`,
        description: desc,
    };
}

export default async function ServicePage({ params }: Props) {
    const { hizmet } = await params;
    const data = serviceData[hizmet] || {
        title: "Profesyonel Televizyon Tamiri",
        desc: "Her marka ve model televizyonunuz için profesyonel tamir hizmeti sunuyoruz. WhatsApp üzerinden hemen destek alabilirsiniz.",
    };

    const whatsappUrl = `https://wa.me/905350577188?text=Merhaba,%20${encodeURIComponent(data.title)}%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum.`;

    return (
        <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-20">
            {/* Service Hero */}
            <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-transparent"></div>
                <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                            {serviceData[hizmet]?.icon || <Wrench className="w-12 h-12 text-white" />}
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        {data.title}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        {data.desc}
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="container mx-auto px-4 md:px-8 -mt-8 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8 items-start">

                    {/* Detailed SEO Article */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                        <article className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">{data.title} Süreci Nasıl İlerler?</h2>

                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Modern televizyonların yapıları giderek karmaşıklaştığı için, <strong>{data.title.toLowerCase()}</strong> gibi hassas işlemlerin mutlaka ESD (Elektrostatik Deşarj) korumalı profesyonel laboratuvar ortamlarında yapılması gerekmektedir. Uzman olmayan veya yetkisiz servislerce yapılan amatör müdahaleler, cihazın kurtarılabilecek durumda olsa dahi tamamen çöp olmasına yol açabilir.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Neden Bizi Tercih Etmelisiniz?</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Yılların verdiği tecrübe ve ithal ettiğimiz birinci sınıf onarım cihazları sayesinde arızayı kaynağında çözeriz. Amacımız günü kurtarmak değil, size yıllarca sorunsuz kullanabileceğiniz kalıcı onarımlar sunmaktır.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 my-8 not-prose">
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                    <CheckCircle2 className="w-8 h-8 text-brand-blue mb-3" />
                                    <h4 className="font-bold text-slate-900 mb-2">Garantili İşlem</h4>
                                    <p className="text-sm text-slate-600">Yapılan tüm tamir işlemleri kurumumuz tarafından 1 yıl boyunca parça ve işçilik garantisi altındadır.</p>
                                </div>
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                    <CheckCircle2 className="w-8 h-8 text-brand-blue mb-3" />
                                    <h4 className="font-bold text-slate-900 mb-2">%100 Şeffaflık</h4>
                                    <p className="text-sm text-slate-600">Arıza tespiti sonrası onayınız alınmadan hiçbir işleme başlanmaz, sürpriz ücretlerle karşılaşmazsınız.</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Maliyet ve Teslimat Süresi</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Maliyet, televizyonunuzun inç (ekran) boyutuna ve arızanın boyutuna göre değişiklik göstermektedir. Ancak piyasadaki rekabetçi yapımız sayesinde her zaman en uygun fiyat garantisini sunmaktayız. Cihazınız laboratuvarımıza ulaştıktan sonra stok durumuna bağlı olarak genellikle 1-2 iş günü içerisinde onarılır, testleri tamamlanır ve size güvenle teslim edilir.
                            </p>
                        </article>
                    </div>

                    {/* Sticky CTA Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-xl">
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                                Hemen Çözüm Bulalım
                            </h3>
                            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                Vakit kaybetmeyin. TV'nizin arkasındaki model numarasını ve arızanın fotoğrafını bize gönderin, anında fiyat alın.
                            </p>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#25D366] px-6 py-4 text-lg font-bold text-white shadow-md hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 mb-4"
                            >
                                <PhoneCall className="h-6 w-6 animate-pulse" />
                                WhatsApp Destek
                            </a>

                            <div className="flex flex-col gap-3 text-sm mt-6">
                                <div className="flex items-center justify-center gap-2 text-slate-600 font-medium">
                                    <Shield className="w-5 h-5 text-brand-blue" />
                                    1 Yıl Garanti Belgesi
                                </div>
                                <div className="flex items-center justify-center gap-2 text-slate-600 font-medium">
                                    <Clock className="w-5 h-5 text-brand-blue" />
                                    Hızlı ve Güvenilir Teslimat
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
