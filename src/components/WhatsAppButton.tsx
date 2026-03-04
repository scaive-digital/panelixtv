import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const whatsappUrl = "https://wa.me/905350577188?text=Merhaba,%20TV%20panel%20değişimi%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum.";

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 hover:bg-[#20bd5a] transition-all duration-300 animate-bounce group"
            aria-label="WhatsApp'tan Bize Ulaşın"
        >
            <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30"></div>
            <MessageCircle className="h-8 w-8 relative z-10" />

            {/* Tooltip on hover */}
            <span className="hidden md:block absolute right-20 w-max origin-right scale-0 rounded bg-slate-800 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                WhatsApp'tan Fiyat Alın
            </span>
        </a>
    );
}
