import { Metadata } from "next";
import { ShieldAlert, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Garanti Koşulları | Panelix TV Tamiri",
    description: "Panelix tarafından yapılan TV panel değişimlerinde ve onarımlarda sağlanan garanti kapsamı, süresi ve koşulları hakkında bilgilendirme.",
};

export default function WarrantyPage() {
    return (
        <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="bg-brand-blue py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Garanti Koşulları
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Hizmetlerimizde sunduğumuz garanti şartları ve kapsam dışı durumlar
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 md:px-8 mt-12 max-w-4xl">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">

                    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
                        <ShieldAlert className="w-8 h-8 text-brand-blue" />
                        <h2 className="text-2xl font-bold text-slate-900">Genel Garanti Şartları</h2>
                    </div>

                    <div className="prose prose-slate max-w-none text-slate-600">
                        <p>
                            Panelix tarafından laboratuvar ortamında gerçekleştirilen tüm <strong>Orijinal Panel Değişimi</strong> ve <strong>Donanım Onarımı</strong> işlemleri, aksi müşteri onayı ile belirtilmedikçe garanti altındadır. Amacımız, onardığımız cihazların uzun yıllar sorunsuz kullanılmasını sağlamaktır.
                        </p>

                        <h3 className="text-lg font-bold text-slate-900 mt-8 mb-4">1. Garanti Süresi</h3>
                        <p>
                            Değiştirilen sıfır orijinal TV panelleri, teslimat tarihinden itibaren en az <strong>6 ay (180 Gün) ile 1 Yıl (365 Gün)</strong> arasında değişen parça garantisine sahiptir (Kullanılan panele ve markaya göre değişir, tarafınıza faturada/belgede açıkça belirtilir). Anakart, besleme kartı ve LED onarımları aksi belirtilmediği sürece <strong>6 ay</strong> garantilidir.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <div className="flex items-center gap-2 mb-4">
                                    <CheckCircle className="text-green-600 w-6 h-6" />
                                    <h4 className="font-bold text-green-900 m-0">Garanti Kapsamındaki Durumlar</h4>
                                </div>
                                <ul className="text-sm text-green-800 space-y-2 m-0 p-0 list-none">
                                    <li>• Değişen parçanın üretimsel hataları (Kendi kendine kararma, vs.)</li>
                                    <li>• Değişim kaynaklı ölü pikseller (Standart dışı sayılarda)</li>
                                    <li>• Montaj ve işçilik hatalarından kaynaklı sorunlar</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                <div className="flex items-center gap-2 mb-4">
                                    <XCircle className="text-red-600 w-6 h-6" />
                                    <h4 className="font-bold text-red-900 m-0">Garanti Dışı Kalan Durumlar</h4>
                                </div>
                                <ul className="text-sm text-red-800 space-y-2 m-0 p-0 list-none">
                                    <li>• Teslimat sonrası oluşan <strong>yeni fiziksel kırıklar/darbeler</strong></li>
                                    <li>• Kullanıcı kaynaklı Sıvı teması (Ekrana temizleyici sıkılması vb.)</li>
                                    <li>• Yüksek voltaj / Şebeke dalgalanması kaynaklı anakart yanmaları</li>
                                    <li>• Yetkisiz kişilerin veya farklı servislerin cihaza müdahale etmesi</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mt-8 mb-4">2. Garanti Süreci Nasıl İşler?</h3>
                        <p>
                            Garanti süresi içerisinde (Yukarıdaki garanti dışı durumlar hariç) parça ile ilgili bir uyumsuzluk yaşarsanız, bizimle WhatsApp veya telefon hattımız üzerinden derhal iletişime geçiniz. Kaydınız oluşturulduktan sonra cihazınız adresinizden alınır (bölgeye göre) veya atölyemize getirilmesi istenir. Yapılan inceleme sonucunda kusurun garanti kapsamında olduğu doğrulanırsa <strong>hiçbir parça veya işçilik ücreti alınmaksızın</strong> onarım sağlanır.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
