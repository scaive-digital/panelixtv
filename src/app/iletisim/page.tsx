import { PhoneCall, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata = {
    title: "İletişim | Panelix",
    description: "Türkiye'nin lider TV panel değişim merkezi Panelix'e ulaşın. Form doldurmanıza gerek yok, doğrudan WhatsApp üzerinden 5 dakikada fiyat alın.",
};

export default function ContactPage() {
    const whatsappUrl = "https://wa.me/905350577188?text=Merhaba,%20TV%20panel%20değişimi%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum.";

    const faqs = [
        {
            q: "TV panel değişimi ne kadar sürer?",
            a: "Panel değişim süresi stok durumuna göre değişmekle birlikte, stokta bulunan paneller için cihazınız laboratuvarımıza ulaştıktan sonra ortalama 1-2 iş günü içerisinde onarılıp teslim edilir."
        },
        {
            q: "Samsung, LG, Philips gibi markaların orijinal panellerini mi kullanıyorsunuz?",
            a: "Kesinlikle evet. Servisimizde yan sanayi panel kullanılmamaktadır. Tüm panellerimiz markaların kendi fabrikalarında üretilen %100 orijinal, sıfır ve A kalite yedek parçalardır."
        },
        {
            q: "Kırık televizyon tamir edilir mi, yoksa yenisini mi almalıyım?",
            a: "Televizyonunuzun anakartı, besleme kartı ve LED'leri sağlamsa, sadece paneli kırıldıysa yenisini almaktan %50 ile %70 arasında daha uygun maliyetle orijinal panel takarak cihazınızı kurtarabilirsiniz."
        },
        {
            q: "İstanbul dışından kargoyla TV gönderebilir miyim?",
            a: "Evet, tüm Türkiye'ye hizmet veriyoruz. Lojistik anlaşmamız ile büyük ekranlı televizyonlarınızı bile güvenle servisimize gönderebilirsiniz."
        },
        {
            q: "İşlem sonrası ne kadar garanti veriyorsunuz?",
            a: "Kurumumuz tarafından gerçekleştirilen tüm panel değişim işlemleri (renk solması, ölü piksel vb. imalat hatalarına karşı) 1 yıl tam donanım garantisi altındadır."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-16 md:py-24 w-full">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 text-center">Bize Ulaşmanın En Hızlı Yolu</h1>
                <p className="text-lg text-slate-600 mb-16 text-center max-w-2xl mx-auto">
                    Zamanınızın değerli olduğunu biliyoruz. Form doldurmakla, e-posta beklemekle vakit kaybetmeyin. Bize doğrudan ulaşın, anında çözüm anında fiyat sunalım.
                </p>

                <div className="grid lg:grid-cols-2 gap-12 mb-20 items-stretch">

                    {/* Contact Info & WhatsApp CTA */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center h-full">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden flex flex-col items-center justify-center p-10 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full mb-12"
                        >
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            <MessageCircle className="w-16 h-16 mb-4 animate-bounce" />
                            <h2 className="text-3xl font-bold mb-2 text-center">WhatsApp ile Ulaşın</h2>
                            <span className="text-green-50 font-medium text-lg text-center">Tıklayın, sorununuzu yazın,<br />5 dakikada fiyat verelim.</span>
                        </a>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                    <PhoneCall className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Doğrudan Arama</h3>
                                    <p className="text-xl font-semibold text-slate-900">+90 535 057 71 88</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Çalışma Saatleri</h3>
                                    <p className="text-lg font-medium text-slate-900">Pzt - Cmt: 09:00 - 19:00</p>
                                    <p className="text-sm text-slate-500">Pazar günleri kapalıyız.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">E-Posta Desteği</h3>
                                    <a href="mailto:info@panelix.com" className="text-lg font-medium text-slate-900 hover:text-brand-blue transition-colors">info@panelix.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden h-full min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79421272!2d28.87175402035!3d41.0054958092289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
                            title="Panelix Merkez Konum"
                        ></iframe>
                    </div>

                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details key={index} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-slate-900 bg-white hover:bg-slate-50 transition-colors">
                                    <span className="text-lg">{faq.q}</span>
                                    <span className="transition duration-300 group-open:rotate-180">
                                        <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="p-6 pt-0 text-slate-600 bg-white leading-relaxed">
                                    <p>{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
