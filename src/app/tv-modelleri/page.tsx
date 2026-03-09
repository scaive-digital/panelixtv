"use client";

import { useState, useEffect } from "react";
import { tvModels, TvModel } from "@/data/tvModels";
import { Search, SlidersHorizontal, ChevronRight, MessageCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TvModelsPage() {
    const [selectedBrand, setSelectedBrand] = useState<string>("Hepsi");
    const [selectedSize, setSelectedSize] = useState<string>("Hepsi");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 20;

    // Reset page to 1 whenever filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedBrand, selectedSize, searchQuery]);

    // Get unique brands and sizes for filters
    const brands = ["Hepsi", ...Array.from(new Set(tvModels.map(tv => tv.brand)))];
    const sizes = ["Hepsi", ...Array.from(new Set(tvModels.map(tv => tv.screenSize))).sort()];

    const filteredModels = tvModels.filter((tv) => {
        const brandMatch = selectedBrand === "Hepsi" || tv.brand === selectedBrand;
        const sizeMatch = selectedSize === "Hepsi" || tv.screenSize === selectedSize;
        const searchMatch = tv.modelCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tv.brand.toLowerCase().includes(searchQuery.toLowerCase());

        return brandMatch && sizeMatch && searchMatch;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredModels.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedModels = filteredModels.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="bg-slate-50 min-h-screen pt-12 pb-24 top-0 w-full">

            {/* Page Header */}
            <div className="bg-white border-b border-gray-100 py-8 mb-8 mt-4">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Televizyon Markaları ve Ekran Değişimi Modelleri</h1>
                            <p className="text-slate-600 max-w-3xl leading-relaxed">
                                İstanbul genelinde; Samsung, LG, Philips, Sony ve Vestel markalarının tüm popüler model serileri için (QLED, NanoCell, UHD) stoklu, %100 orijinal yedek panellerle hizmet veriyoruz. Aşağıdan modelinize uygun orijinal paneli bulun ve WhatsApp üzerinden saniyeler içinde anında ücretsiz fiyat alın.
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-72">
                            <input
                                type="text"
                                placeholder="Model Kodu Ara..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue bg-slate-50 transition-all"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        </div>
                    </div>
                </div>
                {/* SEO Text Below Grid */}
                <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-12">
                    <div className="prose prose-slate max-w-none">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Neden Orijinal Parça ve Uzman Servis Önemlidir?</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Televizyon teknolojileri (QLED, NanoCell vb.) her geçen gün gelişmekte olup, her markanın kendine özgü bir anakart yapısı ve ekran mimarisi bulunmaktadır. Örneğin bir <strong>Samsung panel değişimi</strong> ile <strong>LG TV ekran onarımı</strong> süreçlerinde kullanılacak solüsyonlar, anakart voltaj değerleri ve yazılım entegrasyonları tamamen birbirinden farklıdır.
                        </p>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Piyasadaki standart "her markaya bakarız" yaklaşımından ziyade, Panelix laboratuvarlarında her marka için o markanın mühendislik şemalarına uygun onarım protokolleri izlenir. <strong>Sony televizyonunuzun görüntü kalitesini</strong> korumak için orijinal bileşenler, <strong>Philips Ambilight sisteminizde</strong> sorun yaşamamak için hassas arka kapak söküm teknikleri tercih edilir.
                        </p>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            Arızalı cihazınız listede bulunan markalardan biriyse; modeli veya üretim yılı ne olursa olsun bize danışarak cihazınıza tam uyumlu ve %100 orijinal parçalarla en uygun fiyat garantisi üzerinden fiyat teklifi alabilirsiniz.
                        </p>
                    </div>
                </div>

            </div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-64 shrink-0">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-28">
                            <div className="flex items-center gap-2 mb-6 text-slate-900 border-b border-slate-100 pb-4">
                                <SlidersHorizontal className="w-5 h-5" />
                                <h2 className="font-bold text-lg">Filtreler</h2>
                            </div>

                            {/* Brand Filter */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-slate-900 mb-3 text-sm tracking-wider uppercase">Marka</h3>
                                <div className="flex flex-col gap-2">
                                    {brands.map(brand => (
                                        <button
                                            key={brand}
                                            onClick={() => setSelectedBrand(brand)}
                                            className={`text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group
                        ${selectedBrand === brand ? 'bg-brand-blue text-white font-medium shadow-md shadow-blue-500/20' : 'text-slate-600 hover:bg-slate-50'}`}
                                        >
                                            {brand}
                                            {selectedBrand !== brand && <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Size Filter */}
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-3 text-sm tracking-wider uppercase">Ekran Boyutu</h3>
                                <div className="flex flex-wrap gap-2">
                                    {sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-3 py-1.5 rounded-lg text-sm transition-all border
                        ${selectedSize === size ? 'bg-brand-blue text-white border-brand-blue shadow-md shadow-blue-500/20' : 'border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue'}`}
                                        >
                                            {size === "Hepsi" ? size : `${size}"`}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-grow">
                        {/* Results Count Summary */}
                        <div className="mb-6 flex items-center justify-between text-sm text-slate-500">
                            <span>Toplam <strong>{filteredModels.length}</strong> model bulundu.</span>
                        </div>

                        {filteredModels.length > 0 ? (
                            <>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {paginatedModels.map((tv) => {
                                        const whatsappMsg = `Merhaba, ${tv.brand} ${tv.modelCode} (${tv.screenSize}") model televizyonumun ekran değişimi için fiyat almak istiyorum.`;
                                        const whatsappLink = `https://wa.me/905350577188?text=${encodeURIComponent(whatsappMsg)}`;

                                        return (
                                            <div key={tv.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">

                                                {/* Top Bar / Brand Identifier */}
                                                <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-100 p-4 flex justify-between items-center">
                                                    <div className="text-sm text-brand-blue font-black uppercase tracking-widest">{tv.brand}</div>
                                                    <div className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded shadow-sm border border-red-100">
                                                        PANEL DEĞİŞİMİ
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-5 flex flex-col flex-grow">
                                                    <h3 className="font-extrabold text-slate-900 text-lg mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                                                        {tv.brand} {tv.modelCode}
                                                    </h3>

                                                    <div className="flex flex-wrap gap-2 mt-auto mb-5 text-xs font-semibold text-slate-600">
                                                        <span className="bg-slate-100 border border-slate-200 px-2.5 py-1.5 rounded-lg">{tv.screenSize}" Ekran</span>
                                                        <span className="bg-slate-100 border border-slate-200 px-2.5 py-1.5 rounded-lg">{tv.panelType}</span>
                                                        <span className="bg-slate-100 border border-slate-200 px-2.5 py-1.5 rounded-lg">{tv.resolution}</span>
                                                    </div>

                                                    <a
                                                        href={whatsappLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full flex items-center justify-center gap-2 bg-brand-light text-brand-blue border border-blue-200 hover:bg-brand-blue hover:text-white hover:border-brand-blue py-2.5 rounded-xl font-bold text-sm transition-colors mt-auto"
                                                    >
                                                        <MessageCircle className="w-4 h-4" />
                                                        Fiyat Al
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Pagination Controls */}
                                {totalPages > 1 && (
                                    <div className="mt-12 flex justify-center items-center gap-2">
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            disabled={currentPage === 1}
                                            className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>

                                        <div className="flex gap-1">
                                            {Array.from({ length: totalPages }).map((_, idx) => {
                                                const pageNum = idx + 1;
                                                // Show limited pages on mobile/small screens, but keep it simple for now
                                                return (
                                                    <button
                                                        key={pageNum}
                                                        onClick={() => setCurrentPage(pageNum)}
                                                        className={`w-10 h-10 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center
                                                        ${currentPage === pageNum
                                                                ? 'bg-brand-blue text-white shadow-md'
                                                                : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue'}`}
                                                    >
                                                        {pageNum}
                                                    </button>
                                                )
                                            })}
                                        </div>

                                        <button
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                            className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 shadow-sm w-full">
                                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Model Bulunamadı</h3>
                                <p className="text-slate-500 max-w-md mx-auto mb-6">Aradığınız kriterlere uygun bir model bulamadık. Lütfen farklı filtreler deneyin veya doğrudan bizimle iletişime geçin.</p>
                                <a
                                    href="https://wa.me/905350577188"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-6 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Modeli Sor
                                </a>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div >
    );
}
