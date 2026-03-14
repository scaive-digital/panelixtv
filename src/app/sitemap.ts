import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://panelix.com'; // Change this to your actual production domain

    const brands = [
        'samsung', 'lg', 'philips', 'sony',
        'vestel', 'beko', 'arcelik', 'tcl',
        'toshiba', 'grundig', 'axen', 'panasonic'
    ];

    const services = [
        'tv-panel-degisimi',
        'led-bar-degisimi',
        'led-ve-reflektor-degisim',
        'anakart-tamiri'
    ];

    const districts = [
        "adalar", "arnavutkoy", "atasehir", "avcilar", "bagcilar",
        "bahcelievler", "bakirkoy", "basaksehir", "bayrampasa", "besiktas",
        "beykoz", "beylikduzu", "beyoglu", "buyukcekmece", "catalca",
        "cekmekoy", "esenler", "esenyurt", "eyupsultan", "fatih",
        "gaziosmanpasa", "gungoren", "kadikoy", "kagithane", "kartal",
        "kucukcekmece", "maltepe", "pendik", "sancaktepe", "sariyer",
        "silivri", "sultanbeyli", "sultangazi", "sile", "sisli",
        "tuzla", "umraniye", "uskudar", "zeytinburnu"
    ];

    // Map core routes
    const coreRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/iletisim`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ];

    // Map dynamic brand pages
    const brandRoutes = brands.map((brand) => ({
        url: `${baseUrl}/markalar/${brand}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Map dynamic service pages
    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/hizmetler/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Map dynamic district pages
    const districtRoutes = districts.map((district) => ({
        url: `${baseUrl}/istanbul/${district}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...coreRoutes, ...brandRoutes, ...serviceRoutes, ...districtRoutes];
}
