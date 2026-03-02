import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://panelix.com'; // Change this to your actual production domain

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/'], // Disallow API routes from indexing
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
