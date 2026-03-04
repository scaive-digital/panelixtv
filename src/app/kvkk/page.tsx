import { Metadata } from "next";
import { Scale } from "lucide-react";

export const metadata: Metadata = {
    title: "KVKK ve Aydınlatma Metni | Panelix",
    description: "Panelix kişisel verilerin korunması kanunu (KVKK) aydınlatma metni ve yasal şartlar.",
};

export default function KVKKPage() {
    return (
        <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="bg-brand-blue py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        KVKK ve Aydınlatma Metni
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Kişisel Verilerin Korunması Kanunu Çerçevesinde Bilgilendirme
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 md:px-8 mt-12 max-w-4xl">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">

                    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
                        <Scale className="w-8 h-8 text-brand-blue" />
                        <h2 className="text-2xl font-bold text-slate-900">Veri Gizliliğiniz Bizim İçin Önemli</h2>
                    </div>

                    <div className="prose prose-slate max-w-none text-slate-600">
                        <p className="font-medium">
                            Son Güncelleme: Ocak 2026
                        </p>
                        <p>
                            Panelix olarak, müşterilerimizin ve web sitemizi ziyaret eden kullanıcılarımızın kişisel verilerinin korunmasına büyük önem vermekteyiz. Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca veri sorumlusu sıfatıyla tarafımızca aydınlatma yükümlülüğünün yerine getirilmesi amacıyla hazırlanmıştır.
                        </p>

                        <h3 className="text-lg font-bold text-slate-900 mt-8 mb-4">1. Hangi Verilerinizi İşliyoruz?</h3>
                        <p>Sizlere sağlıklı bir onarım ve danışmanlık hizmeti sunabilmek adına aşağıdaki verileri işlemekteyiz:</p>
                        <ul>
                            <li><strong>Kimlik ve İletişim Bilgileri:</strong> Ad, Soyad, Telefon Numarası, E-posta Adresi. (Doğrudan teklif ve onarım süreçleri için WhatsApp veya iletisim formu üzerinden paylaştığınızda)</li>
                            <li><strong>Adres Bilgisi:</strong> Lojistik ve servis hizmeti sağlanacaksa tam adresiniz.</li>
                            <li><strong>Müşteri İşlem Verisi:</strong> Cihaz modeliniz, arıza detayları, fatura bilgileri.</li>
                        </ul>

                        <h3 className="text-lg font-bold text-slate-900 mt-8 mb-4">2. Verilerin İşlenme Amacı</h3>
                        <p>Topladığımız kişisel veriler, aşağıdaki amaçlarla işlenmektedir:</p>
                        <ul>
                            <li>Talep ettiğiniz onarım hizmetlerinin (teklif, teslim alma, tamir, teslim etme) ifası.</li>
                            <li>İletişim faaliyetlerinin yürütülmesi ve hizmetlerimizle ilgili bilgilendirme yapılması.</li>
                            <li>Yasal yükümlülüklerin (Fatura kesimi, garanti takibi) yerine getirilmesi.</li>
                            <li>Müşteri memnuniyetine yönelik doğrulama ve analizlerin yapılması.</li>
                        </ul>

                        <h3 className="text-lg font-bold text-slate-900 mt-8 mb-4">3. Verilerin Aktarımı</h3>
                        <p>
                            Kişisel verileriniz, asla üçüncü şahıslara ticari amaçla satılmaz. Ancak yasal mevzuatlar gereği zorunlu durumlarda yetkili kamu kurumlarına, ayrıca yasal muhasebe işlemlerinin yürütülmesi için mali müşavirlik partnerlerimize kanunların izin verdiği ölçüde aktarılabilir.
                        </p>

                        <h3 className="text-lg font-bold text-slate-900 mt-8 mb-4">4. KVKK Uyarınca Haklarınız</h3>
                        <p>
                            KVKK'nın 11. maddesi kapsamındaki haklarınız uyarınca, veri sorumlusu olan tarafımıza başvurarak; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, eksik veya yanlışsa düzeltilmesini isteme haklarına sahipsiniz. Taleplerinizi <strong>teknik@scaive.com</strong> adresine iletebilirsiniz.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
