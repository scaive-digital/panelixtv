import { Metadata } from "next";
import { PhoneCall, ShieldCheck, Settings, ArrowRight, Camera } from "lucide-react";
import Link from "next/link";

type Props = {
    params: Promise<{ marka: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { marka } = await params;
    const capitalizedMarka = marka.charAt(0).toUpperCase() + marka.slice(1);
    return {
        title: `${capitalizedMarka} TV Ekran Değişimi ve Panel Fiyatları 2026 | Panelix`,
        description: `${capitalizedMarka} televizyonunuz mu kırıldı? Orijinal ${capitalizedMarka} panel değişimi, ekran onarımı ve garantili servis hizmeti. Kırık ekran yenileme rehberi.`,
    };
}

export default async function BrandPage({ params }: Props) {
    const { marka } = await params;
    const capitalizedMarka = marka.charAt(0).toUpperCase() + marka.slice(1);
    const whatsappUrl = `https://wa.me/905350577188?text=Merhaba,%20${capitalizedMarka}%20TV%20panel%20değişimi%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum.`;

    return (
        <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-20">
            {/* Brand Hero */}
            <section className="bg-brand-blue py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        {capitalizedMarka} TV Panel Değişimi ve Ekran Tamiri
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        {capitalizedMarka} televizyonunuzun hasar gören, kırılan veya çizgilenen ekranını, tamamen {capitalizedMarka} uyumlu orijinal sıfır panellerle garantili olarak değiştiriyoruz.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="container mx-auto px-4 md:px-8 -mt-8">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Article / SEO Content */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                        <article className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{capitalizedMarka} TV Ekranları Neden Kırılır?</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {capitalizedMarka} televizyon ekranları son derece gelişmiş teknolojilere (QLED, OLED, Mini LED vb.) sahip olsalar da dışarıdan gelen darbelere karşı oldukça hassastır. Merkezimize ulaşan vakalarda {capitalizedMarka} televizyonların en sık şu durumlarda hasar aldığı gözlemlenmiştir:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 mb-8 space-y-2">
                                <li>Çocukların ekrana sert veya sivri bir cisimle vurması.</li>
                                <li>Taşınma veya yer değiştirme esnasında panelin köşelerden veya yüzeyden darbe alması.</li>
                                <li>Duvara montaj (askı aparatı) işlemleri sırasında panele aşırı ve dengesiz baskı uygulanması.</li>
                                <li>Ekran temizliği esnasında yüzeye gereğinden fazla baskı yapılması veya sıvı sızması (COF oksitlenmesi).</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">İstanbul {capitalizedMarka} TV Ekran Değişimi Servisi</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                İstanbul genelinde (Kadıköy, Ümraniye, Ataşehir, Esenyurt, Bağcılar, Pendik, Kartal, Şişli, Beşiktaş vb.) laboratuvar ortamımızda profesyonel {capitalizedMarka} ekran değişimi hizmeti sunuyoruz. Amacımız; <strong>Ücretsiz arıza tespiti</strong>, stoktan <strong>orijinal panel</strong> tedariği, tamamen <strong>garantili onarım</strong> ve uygun durumlarda aynı gün teslimat imkanları ile müşterilerimize en hızlı ve güvenli çözümü sunmaktır.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{capitalizedMarka} TV Ekranı Onarılır mı?</h2>
                            <div className="bg-slate-50 border-l-4 border-brand-blue p-6 rounded-r-2xl mb-8">
                                <p className="text-slate-800 font-semibold mb-2">Bu konuda son derece net ve şeffaf olmalıyız:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-500 font-bold">❌</span>
                                        <span className="text-slate-600">{capitalizedMarka} TV'lerde fiziksel olarak kırılan, çatlayan veya mürekkebi akan ince cam ekranın <strong>onarımı veya tamiri mümkün değildir.</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 font-bold">✅</span>
                                        <span className="text-slate-600">Bunun yerine, televizyonun dış kasası ve iç anakart/güç donanımları sabit kalarak, en öndeki <strong>hasarlı panel tamamen orijinal sıfır panel ile değiştirilir.</strong></span>
                                    </li>
                                </ul>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ekranı Kırılan {capitalizedMarka} TV İçin Süreç Nasıl İşler?</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Panelix laboratuvarı olarak biz, standart bir tak-çıkar ekran değişiminden çok daha kapsamlı bir revizyon süreci işletiyoruz. Ekranı kırıldı şikayetiyle gelen {capitalizedMarka} cihazlarınızı şu adımlarla yeniliyoruz:
                            </p>
                            <div className="space-y-6 mb-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 shrink-0 bg-brand-light text-brand-blue rounded-full flex items-center justify-center font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Güvenli Transfer</h4>
                                        <p className="text-slate-600 mt-1">İstanbul içi (belirli bölgeler dahilinde) %100 sigortalı lojistik ekibimizle cihazınızı kapınızdan güvenle alıyoruz.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 shrink-0 bg-brand-light text-brand-blue rounded-full flex items-center justify-center font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Donanım Check-Up</h4>
                                        <p className="text-slate-600 mt-1">Kırılmaya yol açan şiddetli darbe bazen sadece dış camı değil, aydınlatmayı sağlayan arka LED barları veya katman reflektörlerini de zedelemiş olabilir. Yeni sıfır {capitalizedMarka} paneli takılmadan önce bu hassas parçalar izole odamızda mikroskobik düzeyde incelenir.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 shrink-0 bg-brand-light text-brand-blue rounded-full flex items-center justify-center font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Orijinal Yedek Parça Montajı</h4>
                                        <p className="text-slate-600 mt-1">Cihazınıza %100 uyumlu (genellikle fabrika serisiyle tam örtüşen) orijinal, jelatinli sıfır ekran kasaya tam oturtularak özel vakumlu endüstriyel aparatlarla kusursuz şekilde monte edilir.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 shrink-0 bg-brand-light text-brand-blue rounded-full flex items-center justify-center font-bold">4</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Test ve Teslimat</h4>
                                        <p className="text-slate-600 mt-1">Yeni panel takıldıktan sonra cihaz; renk doğruluk kalibrasyonu, ölü piksel taraması, ghosting ve karartma (local dimming) testlerinden geçirilir. Tüm donanımlar (WiFi, Uydu, Ses) onaylandıktan sonra sıfır gibi ambalajlanarak size teslim edilir.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{capitalizedMarka} TV Ekran Değişimi Mantıklı mı? Yeni TV mi Alınmalı?</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Müşterilerimize karşı ilk kuralımız daima dürüstlüktür. Karar verirken şu mühendislik matematiğini kullanmanızı öneriyoruz:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="p-6 border border-green-200 bg-green-50 rounded-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform"><ShieldCheck className="w-24 h-24 text-green-600" /></div>
                                    <h4 className="font-bold text-green-800 text-lg mb-2 relative z-10">Ekran Değişimi Kesinlikle Mantıklıdır</h4>
                                    <p className="text-green-700/80 text-sm relative z-10">Eğer cihazınız üst ve orta segment (QLED, OLED, Smart 4K, 120Hz oyun destekli vb.) ise ve laboratuvarımızdan aldığınız orijinal panel değişim fiyatı, o cihazın bugün mağazadaki **yenisini almanın %60 - %70'ini geçmiyorsa** kesinlikle yaptırılmalıdır. Orijinal değişim sonrası {capitalizedMarka} TV'niz fabrika çıkış görüntü kalitesine eksiksiz döner.</p>
                                </div>
                                <div className="p-6 border border-red-200 bg-red-50 rounded-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform"><Settings className="w-24 h-24 text-red-600" /></div>
                                    <h4 className="font-bold text-red-800 text-lg mb-2 relative z-10">Yeni TV Almak Mantıklı Olabilir</h4>
                                    <p className="text-red-700/80 text-sm relative z-10">Cihazınız çok eski nesil, donanımı güncel teknolojileri desteklemeyen (Düşük çözünürlüklü veya aşırı yavaşlamış bir Smart altyapısına sahip) giriş seviyesi ufak boyutlu bir modelse ve sunduğumuz orijinal panel fiyatı, yeni bir teknolojiye geçiş fiyatına çok yakınsa; sizlere değişimi dürüstçe önermiyoruz.</p>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Sticky CTA Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-brand-light border border-slate-200 rounded-3xl p-8 text-center shadow-lg">
                            <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/20">
                                <Camera className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                                {capitalizedMarka} Modeli İçin 5 Dakikada Fiyat Alın!
                            </h3>
                            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                Televizyonunuzun arkasındaki <strong>model kodunun (örn: UE55TU7000)</strong> ve kırık ekranın fotoğrafını çekip bize WhatsApp'tan gönderin.
                            </p>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-md hover:bg-[#20bd5a] transition-colors mb-4"
                            >
                                <PhoneCall className="h-5 w-5 animate-pulse" />
                                WhatsApp'a Gönder
                            </a>

                            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mt-4">
                                <ShieldCheck className="w-4 h-4 text-brand-blue" />
                                %100 Güvenli İletişim
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
