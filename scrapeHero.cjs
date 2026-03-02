const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const scrapeHero = async () => {
    try {
        console.log("Fetching tv repair hero image...");
        const response = await axios.get('https://html.duckduckgo.com/html/?q=tv+repair+technician+fixing+screen+high+resolution', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        const $ = cheerio.load(response.data);
        const images = [];

        $('.tile--img').each((i, el) => {
            const resultLocation = $(el).find('a.image-td').attr('href');
            if (resultLocation) {
                const urlParams = new URLSearchParams(resultLocation.split('?')[1]);
                const imageUrl = urlParams.get('uddg');
                if (imageUrl && !imageUrl.includes('stock') && !imageUrl.includes('alamy')) {
                    images.push(imageUrl);
                }
            }
        });

        if (images.length > 0) {
            console.log("Found image: " + images[0]);
            const imgRes = await axios.get(images[0], { responseType: 'arraybuffer' });
            fs.writeFileSync(path.join(__dirname, 'public', 'tv-repair-hero.jpg'), imgRes.data);
            console.log("Saved public/tv-repair-hero.jpg");
        } else {
            console.log("fallback");
            // Just use a known Unsplash tech repair image
            const fb = 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=2070';
            const imgRes = await axios.get(fb, { responseType: 'arraybuffer' });
            fs.writeFileSync(path.join(__dirname, 'public', 'tv-repair-hero.jpg'), imgRes.data);
            console.log("Saved fallback to public/tv-repair-hero.jpg");
        }

    } catch (error) {
        console.error("Error:", error.message);
    }
};

scrapeHero();
