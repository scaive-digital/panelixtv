import { Metadata } from "next";
import { ShieldCheck, Target, Users, Award } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Hakkımızda | Panelix TV Ekran Değişim Merkezi",
    description: "Türkiye'nin ve İstanbul'un lider TV panel değişim laboratuvarı olan Panelix hakkında bilgi edinin. Kurumsal vizyonumuz ve uzman ekibimiz.",
};

export default function AboutPage() {
    const whatsappUrl = "https://wa.me/905350577188?text=Merhaba,%20TV%20panel%20değişimi%20hakkında%20bilgi%20almak%20istiyorum.";

    return (
        <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="bg-brand-blue py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Hakkımızda
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Televizyonlarınızı ilk günkü fabrika kalitesine ulaştıran profesyonel, statik elektrikten arındırılmış tam donanımlı laboratuvar mimarisi: Panelix
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 md:px-8 mt-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">TV Tamirinde Mühendislik Standartları</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Teknolojinin 8K ve kuantum noktalı ekranlara (QLED) evrildiği günümüzde, televizyonlar evimizin ve iş yerimizin vazgeçilmez bir parçası haline gelmiştir. Ancak kırık ekranlar, sıvı temasına bağlı COF oksitlenmeleri veya ömrünü yitirmiş LED panel aydınlatmaları arızalandığında maalesef kullanıcı fahiş yeni cihaz bütçeleriyle karşı karşıya kalır. <strong>Panelix</strong> olarak biz, bu durumları önlemek amacıyla; %100 orijinal parçalı, garantili, şeffaf teknolojik altyapılarımız ile sürdürülebilir onarım çözümleri üretiyoruz.
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Geleneksel "tak-çıkar" veya bölgesel merdiven altı tamirci mantığından tamamen sıyrılarak çalışıyoruz. Cihazlarınız, İstanbul Merkez servisimizde <strong>ESD (Elektrostatik Deşarj) korumalı steril laboratuvar ortamlarında</strong>, entegre tamirlerine ve bonding makinelerine sahip teknisyenlerimizce incelenir ve onarılır. Cihazınıza müdahale ederken; sıfır ölü piksel hedefi, orijinal renk doygunluk kalibrasyonu ve sıvı sızdırmazlık testleri uygulanarak teslimat sağlanır. Hedefimiz günü kurtarmak değil, cihazınızın ömrünü uzatarak fabrika çıkış kalitesini uzun yıllar sorunsuz deneyimlemenizdir.
                        </p>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
                        >
                            Bizimle İletişime Geçin
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-8">
                            <Award className="w-10 h-10 text-brand-blue mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Deneyim</h3>
                            <p className="text-slate-500 text-sm">Yılların getirdiği sektör tecrübesi ve binlerce mutlu müşteri.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <Users className="w-10 h-10 text-brand-blue mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Uzman Kadro</h3>
                            <p className="text-slate-500 text-sm">Düzenli eğitim alan, güncel teknolojilere hakim uzman teknisyenler.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-8">
                            <ShieldCheck className="w-10 h-10 text-brand-blue mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Orijinal Parça</h3>
                            <p className="text-slate-500 text-sm">Sadece seri numaralı, sertifikalı ve marka uyumlu yedek parçalar.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <Target className="w-10 h-10 text-brand-blue mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Misyonumuz</h3>
                            <p className="text-slate-500 text-sm">Maksimum şeffaflık ile ekonomik, hızlı ve kalıcı çözümler üretmek.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
