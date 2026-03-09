import { Metadata } from "next";
import { PhoneCall, CheckCircle2, Wrench, Shield, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

type Props = {
    params: Promise<{ hizmet: string }>;
};

// Map URL slugs to human-readable titles, descriptions, and deep SEO content
const serviceData: Record<string, { title: string, desc: string, icon: React.ReactNode, seoArticle: React.ReactNode }> = {
    "kirik-ekran-tamiri": {
        title: "Kırık Ekran ve İç Ekran Tamiri",
        desc: "Televizyonunuz fiziksel darbe mi aldı? Kırık panel, çatlak veya içten mürekkep akması gibi durumlarda, %100 orijinal sıfır panel değişimi ile televizyonunuzu kurtarıyoruz.",
        icon: <Wrench className="w-12 h-12 text-brand-blue" />,
        seoArticle: (
            <>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    İstanbul genelinde servisimize başvuran müşterilerimizin en çok karşılaştığı sorunların başında <strong>kırık televizyon ekranı</strong> gelmektedir. Özellikle ev kazaları, taşınma esnasında meydana gelen köşeden çarpmalar veya çocukların oyuncak fırlatması sonucu panellerde derin çatlaklar ile iç ekran (likit kristal) kırılması yaşanabilmektedir. Birçok kullanıcı dış cam sağlam görünse dahi, ekranın içten mürekkep akıtması veya ağ şeklindeki siyahlıklar karşısında telaşa kapılmaktadır.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Laboratuvar ortamında edindiğimiz tecrübeler gösteriyor ki; fiziksel veya baskı sonucu kırılan bir TV ekranının yüzeysel bir yöntemle "yamalanması" veya dondurularak "tamir edilmesi" teknolojik olarak imkansızdır. Panelix olarak cihazınızı kaderine terk etmenize ya da fahiş fiyatlara yenisini almanıza gerek bırakmıyoruz. Arızalı olan ana panel birimi özel endüstriyel vakumlarla sökülür ve cihazınıza <strong>fabrikasyon %100 orijinal sıfır panel</strong> entegre edilir. İşlem sonrasında televizyonunuz renk, parlaklık ve doku olarak kutudan çıktığı o ilk güne eksiksiz olarak geri döner.
                </p>
            </>
        )
    },
    "tv-sivi-temasi-onarimi": {
        title: "Sıvı Teması ve COF Onarımı",
        desc: "Ekran temizliği sırasında panelin altına kaçan sıvıların neden olduğu korozyon, oksitlenme ve COF flex arızaları çözümsüz değil. Gelişmiş donanımlarla uzman korozyon temizliği yapıyoruz.",
        icon: <Shield className="w-12 h-12 text-brand-blue" />,
        seoArticle: (
            <>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Ekrana püskürtülen temizleyici losyonlar veya bezden sızan nem, yerçekiminin etkisiyle süzülerek çerçevenin en hassas noktası olan alt panele ulaşır. Burada bulunan hayati öneme sahip <strong>COF (Chip On Film) flex kabloları</strong>, su ile temas ettiğinde anında yüksek voltajlı bir korozyona (oksitlenmeye) uğrar. Bu durum cihazda ekranda dikey sönük çizgiler, görüntünün aniden gidip gelmesi veya sesin olup da ekranın tamamen siyah kalması gibi ağır arızalara yol açar.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Sıvı teması onarımlarında zamana karşı yarışılır. Cihazınızı anında fişten çekmek hasarın büyümesini engellemek için atılacak ilk kritik adımdır. Panelix'in yüksek standartlı laboratuvarında bulunan son teknoloji <strong>Bonding makineleri</strong> ile korozyona uğramış veri yolları ve entegre filmleri mikroskobik düzeyde analiz edilir. Mümkün olan durumlarda flex kablolar yenide lehimlenir (bonding) ve pahalı ekran değişim maliyetlerinden kurtulmanız sağlanır. Eğer korozyon matrisi geri dönülemez boyutta yakmışsa, garantili parça değişim protokolleri devreye girer.
                </p>
            </>
        )
    },
    "tv-panel-degisimi": {
        title: "Orijinal Panel Değişimi",
        desc: "Arızalı, ömrünü yitirmiş, çizgilenen veya onarılamayacak kadar hasar görmüş televizyon ekranları için birebir sertifikalı, garantili orijinal panel (ekran) değişim hizmeti sunuyoruz.",
        icon: <CheckCircle2 className="w-12 h-12 text-brand-blue" />,
        seoArticle: (
            <>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Televizyon panel değişimi basit bir sök-tak işlemi değil, steril ortam ve yüksek hassasiyet gerektiren ileri düzey bir elektronik entegrasyondur. İster QLED donanımına sahip olun ister standart bir LED TV; panelin orijinal olması cihazın ömrünü, renk gamını ve yenileme hızını (Hz) doğrudan belirler. Piyasada maalesef ticari kaygılarla A Kalite veya yan sanayi paneller kullanılarak televizyonun orijinal donanımına ve ana kart voltajlarına hasar veren uygulamalar görmekteyiz.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Panelix olarak bizim temel felsefemiz <strong>"sadece fabrika standartlarındaki orijinal paneli"</strong> kullanmaktır. Samsung, LG, Sony veya diğer büyük markaların cihazınıza özel ürettiği kodlarla eşleşen paneller özenle temin edilir. Değişim işlemi statik elektrikten tamamen yalıtılmış ESD laboratuvarlarımızda gerçekleştirilir. Cihaz teslimatı öncesi; ölü piksel (dead pixel), ışık sızması (light bleed) ve homojen renk dağılım testleri yapılarak kusursuz sonuca ulaşıldığı teyit edilir.
                </p>
            </>
        )
    },
    "dikey-ve-yatay-cizgiler": {
        title: "Dikey ve Yatay Çizgi Tamiri",
        desc: "Televizyonunuzda aniden beliren renkli dikey çizgiler, yatay bantlar veya görüntünün titremesi gibi matris arızalarına nokta atışı müdahale ediyor, T-CON arızalarını kalıcı olarak onarıyoruz.",
        icon: <ArrowRight className="w-12 h-12 text-brand-blue" />,
        seoArticle: (
            <>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Maç izlerken, film rulosu dönerken veya normal yayın akışında ekranınızın tam ortasından veya köşelerinden inen incecik renkli çizgiler mi var? Ekran bir bölümünde kararma yapıp diğer tarafta net mi gösteriyor? <strong>Ekranda yatay ve dikey çizgiler oluşması</strong>, televizyon arızaları arasında en çok paniğe sebep olanlardan biridir. Bu hatalar genelde panelin kendisine (camdaki kılcal çatlaklar) ya da veriyi panele aktaran T-CON (Timing Controller) kartı ve flex bağlantılarına işaret eder.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Panelix laboratuvarlarında, bu tür piksel sütun arızalarını ezbere çözmek yerine nokta atışı sinyal okuyucular ile tespit ediyoruz. Sorunun kaynağı eğer T-CON kartındaki bir voltaj dalgalanması ise sadece ilgili bileşen yenilenir. Flex yollarında kopma varsa mikro lehimleme (bonding) yapılır. Çizginin nedeni darbe kaynaklı iç cam kırılması ise, şeffaf bir fiyatlandırma ile <strong>%100 orijinal panel revizyonuna</strong> gidilir. Her koşulda cihazınız garantili olarak sorunsuz yayına döner.
                </p>
            </>
        )
    },
    "led-bar-degisimi": {
        title: "LED Bar ve Aydınlatma Değişimi",
        desc: "Ses var görüntü yok efsanesinin bir numaralı sebebi olan LED patlaması arızasını, tamamen yeni ve orijinal aydınlatmalar (komple LED set) takarak kalıcı yatırımlara çeviriyoruz.",
        icon: <Wrench className="w-12 h-12 text-brand-blue" />,
        seoArticle: (
            <>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    <strong>"Televizyondan ses geliyor ama ekran kapkaranlık, görüntü yok!"</strong> Şüphesiz her kullanıcının bir gün duyabileceği bu klasik cümlenin teknolojik karşılığı LED arka aydınlatma (Backlight) arızasıdır. Ekrandaki kristallerin sizin gözünüze ulaşmasını sağlayan çok sayıdaki LED ampullerden yalnızca biri dahi seri bağlantıda koptuğunda, anakart güvenlik amaçlı tüm aydınlatmayı keser. Fenerle ekrana yakından bakarsanız aslında görüntünün çok soluk bir şekilde akmakta olduğunu fark edebilirsiniz.
                </p>
                <div className="flex flex-wrap gap-3 mb-6 not-prose">
                    <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10 cursor-default select-none">
                        <CheckCircle2 className="w-4 h-4 mr-1.5" />
                        Ses var görüntü yok
                    </span>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 cursor-default select-none">
                        <CheckCircle2 className="w-4 h-4 mr-1.5" />
                        Mavi ekran hatası
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-800 ring-1 ring-inset ring-slate-500/10 cursor-default select-none">
                        <CheckCircle2 className="w-4 h-4 mr-1.5" />
                        Ekranın belirli bölgelerinin kararması
                    </span>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Sektördeki en büyük hata, patlayan tek bir LED lambasının lehimle bölgesel olarak değiştirilmesidir. Zira ömrünü dolduran diğer lambalar da kısa süre sonra patlamaya devam edecek ve cihazınız sürekli servise gidip gelecektir. Panelix vizyonu gereği; cihazınızda meydana gelen aydınlatma problemlerinde arkelojik bir titizlikle panel yüzeyi sökülür ve sadece patlayan ampul değil, <strong>tüm LED bar seti reflektörü ile birlikte komple ve orijinal sıfırıyla</strong> değiştirilir. Ayrıca beyaz kalibrasyonu yapılarak cihazın ömrü yıllarca uzatılmış olur.
                </p>
            </>
        )
    },
    "anakart-tamiri": {
        title: "Anakart ve Besleme Tamiri",
        desc: "Televizyon hiç açılmıyor mu? Işık yanıp sönüyor ancak tepki yok mu? Güç kartı (besleme/Power board) ve anakart (mainboard) arızalarını laboratuvarımızda yüksek entegrasyonla tamir ediyoruz.",
        icon: <Shield className="w-12 h-12 text-brand-blue" />,
        seoArticle: (
            <>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Şehir şebeke hatlarında yaşanan anlık yüksek gerilim dalgalanmaları (voltaj sıçramaları), yıldırım düşmesi gibi tabiat olayları ya da uzun yıllar elektrikte beklemenin verdiği elektronik yorgunluk; televizyonunuzun kalbi olan ve ilk darbeyi karşılayan <strong>Besleme Kartı (Power Board)</strong> ve işlemcilerinizin bulunduğu <strong>Anakartı (Main Board)</strong> doğrudan hedef alır. Sonuç olarak standby (kırmızı) ışığı döngüye girip yanıp sönmeye başlar, logo çıkıp geri donar veya cihaz elektriğe komple tepkisiz kalır.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Değişen döviz kurları ile anakart parça maliyetlerinin çok fazla artması sebebiyle; parçayı hemen değiştirmek çoğu kez tüketici bütçesini zorlar. Panelix’te ilk yaptığımız şey; kartlarınızı ithal diyagnostik uçlarla test edip; çip, transistör, bobin, kapasitör gibi anakart elemanlarında kısa devre (SMD) düzeyinde komponent bazlı onarım ihtimallerini araştırmaktır. Kart üzerindeki mikroskobik hasarlı eleman yüksek teknoloji havya setleri ile sökülüp yenisi lehimlenemez durumdaysa oş zaman tamamen uyumlu ve sıfır bir güç/anakart ile 1 yıllık garanti güvencesi ile değişim yapılır.
                </p>
            </>
        )
    }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { hizmet } = await params;
    const data = serviceData[hizmet];

    const title = data?.title || "Profesyonel TV Tamir Hizmetleri";
    const desc = data?.desc || "İstanbul genelinde garantili TV panel değişimi ve profesyonel onarım hizmetleri.";

    return {
        title: `${title} | En Uygun Fiyat Garantili Onarım - Panelix`,
        description: desc,
        keywords: [data?.title, "tv panel değişimi", "istanbul tv tamiri", "orijinal panel", "garantili televizyon tamircisi"],
        openGraph: {
            title: `${title} | Panelix TV Tamiri`,
            description: desc,
        }
    };
}

export default async function ServicePage({ params }: Props) {
    const { hizmet } = await params;
    const data = serviceData[hizmet] || {
        title: "Profesyonel Televizyon Tamiri",
        desc: "Her marka ve model televizyonunuz için İstanbul genelinde profesyonel tamir hizmeti sunuyoruz. WhatsApp üzerinden hemen destek alabilirsiniz.",
        icon: <Wrench className="w-12 h-12 text-white" />,
        seoArticle: <p className="text-slate-600 mb-6">Detaylı uzman analizi için lütfen müşteri hizmetlerimizle iletişime geçiniz.</p>
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
                            {data.icon}
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">{data.title} Süreci Uzmanlık İster</h2>

                            {/* Injecting our deep SEO content here */}
                            {data.seoArticle}

                            <div className="grid sm:grid-cols-2 gap-4 my-8 not-prose">
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                    <CheckCircle2 className="w-8 h-8 text-brand-blue mb-3" />
                                    <h4 className="font-bold text-slate-900 mb-2">Resmi ve Garantili Onarım</h4>
                                    <p className="text-sm text-slate-600">Tamamlanan işlemlerimizde kullanılan tüm donanımlar Panelix laboratuvarları tarafından 1 yıla kadar parça garantisi barındırır.</p>
                                </div>
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                    <CheckCircle2 className="w-8 h-8 text-brand-blue mb-3" />
                                    <h4 className="font-bold text-slate-900 mb-2">İkame Seçeneği & Şeffaf Fiyat</h4>
                                    <p className="text-sm text-slate-600">Onarım esnasında cihazsız kalmamanız adına ikame TV ayrıcalığı sunar; sürpriz fahiş faturalarla karşılaşmamanız için süreci tam şeffaf yönetiriz.</p>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Sticky CTA Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-xl">
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                                Uzman Ekibe Ulaşın
                            </h3>
                            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                Cihazınızın arkasındaki etikette yer alan cihaz model numarasını ve arızanızın detayını bizimle WhatsApp üzerinden paylaşarak dakikalar içinde uzman fiyatlandırması alabilirsiniz.
                            </p>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#25D366] px-6 py-4 text-lg font-bold text-white shadow-md hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 mb-4"
                            >
                                <PhoneCall className="h-6 w-6 animate-pulse" />
                                WhatsApp Anında Fiyat
                            </a>

                            <div className="flex flex-col gap-3 text-sm mt-6">
                                <div className="flex items-center justify-center gap-2 text-slate-600 font-medium">
                                    <Shield className="w-5 h-5 text-brand-blue" />
                                    Orijinal Yedek Parça Desteği
                                </div>
                                <div className="flex items-center justify-center gap-2 text-slate-600 font-medium">
                                    <Clock className="w-5 h-5 text-brand-blue" />
                                    İstanbul İçi Profesyonel Lojistik
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
