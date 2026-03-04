import { Metadata } from "next";
import { HelpCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
    title: "Sıkça Sorulan Sorular (SSS) | Panelix TV Tamiri",
    description: "TV ekran değişimi, onarım süreleri, garanti koşulları ve ikame TV hizmetimiz hakkında sıkça sorulan soruların yanıtları.",
};

const faqs = [
    {
        question: "Kırık televizyon ekranı tamir edilir mi?",
        answer: "Maalesef televizyon panelleri (ekranları) fiziksel olarak kırıldığında veya mürekkebi aktığında onarımı mümkün değildir. Bunun çözümü, arızalı olan ön panelin sökülerek, yerine %100 orijinal ve sıfır bir panelin takılmasıdır (Panel Değişimi)."
    },
    {
        question: "Panel değişimi ne kadar sürer?",
        answer: "Stok durumuna ve cihazınızın bağlı olduğu markanın tedarik sürecine göre değişiklik göstermekle birlikte, standart modellerde ekran değişimi genellikle 1 ile 3 iş günü içerisinde tamamlanarak cihazınız size teslim edilir."
    },
    {
        question: "İkame (Geçici) TV hizmetiniz ücretli mi?",
        answer: "Hayır. Onarım kararı verdiğiniz televizyonunuzu atölyemize alırken, evde geçirdiğiniz süre zarfında mağdur olmamanız için bıraktığımız geçici ikame televizyon tamamen ücretsizdir."
    },
    {
        question: "Değiştirilen panel orijinal mi?",
        answer: "Evet. Panelix olarak yan sanayi (A kalite vs. olarak adlandırılan) paneller yerine, yalnızca cihazınızla %100 uyumlu, fabrika standartlarına sahip orijinal yedek paneller kullanıyoruz."
    },
    {
        question: "Onarımlar garantili mi?",
        answer: "Yaptığımız tüm onarım ve panel değişimi işlemleri Panelix laboratuvarı güvencesi altındadır ve değiştirilen parça için (kullanıcı hataları hariç) size onarım garantisi sunulmaktadır."
    },
    {
        question: "Evden teslim alma yapıyor musunuz?",
        answer: "Evet, İstanbul içi belirli bölgelerdeki müşterilerimiz için ürünlerin zarar görmemesi adına özel ambalaj ve lojistik araçlarımızla (randevulu sistem) evden alma ve eve teslim etme hizmetimiz mevcuttur."
    }
];

export default function FAQPage() {
    return (
        <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="bg-brand-blue py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Sıkça Sorulan Sorular
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        TV panel değişimi ve süreçlerimiz hakkında merak ettikleriniz
                    </p>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="container mx-auto px-4 md:px-8 mt-12 max-w-4xl">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
                        <HelpCircle className="w-8 h-8 text-brand-blue" />
                        <h2 className="text-2xl font-bold text-slate-900">Merak Edilenler</h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <details key={index} className="group border border-slate-200 rounded-2xl hover:border-brand-blue/30 transition-colors">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-800 text-lg">
                                    <span className="font-bold">{faq.question}</span>
                                    <span className="transition group-open:rotate-180">
                                        <ChevronDown className="text-brand-blue" />
                                    </span>
                                </summary>
                                <div className="text-slate-600 mt-3 group-open:animate-fadeIn p-6 pt-0 leading-relaxed border-t border-slate-100">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>

                    <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl">
                        <p className="text-slate-600 mb-4">Cevabını bulamadığınız farklı bir sorunuz mu var?</p>
                        <a href="/iletisim" className="text-brand-blue font-bold hover:underline">Bize hemen ulaşın</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
