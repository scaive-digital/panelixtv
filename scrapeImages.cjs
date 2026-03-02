const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const models = [
    { brand: 'Samsung', code: '98QN90D' },
    { brand: 'Samsung', code: '98DU9000' },
    { brand: 'Samsung', code: '85QN900D' },
    { brand: 'Samsung', code: '85QN90D' },
    { brand: 'Samsung', code: '77S95D' },
    { brand: 'Samsung', code: '65Q80C' },
    { brand: 'LG', code: 'OLED83G4' },
    { brand: 'LG', code: 'OLED77C4' },
    { brand: 'LG', code: 'OLED65B4' },
    { brand: 'LG', code: '75QNED86' },
    { brand: 'LG', code: '55UR8000' },
    { brand: 'Philips', code: '65OLED808' },
    { brand: 'Philips', code: '55PUS8808' },
    { brand: 'Philips', code: '75PML9008' },
    { brand: 'Sony', code: 'XR-85X90L' },
    { brand: 'Sony', code: 'XR-65A80L' },
    { brand: 'Sony', code: 'KD-55X85L' },
    { brand: 'Vestel', code: '65QA9700' },
    { brand: 'Beko', code: 'B55 C 890' },
    { brand: 'Arçelik', code: 'A65 C 890' },
    { brand: 'TCL', code: '98P745' },
    { brand: 'TCL', code: '65C845' }
];

async function downloadImage(url, dest) {
    try {
        const response = await axios({ url, responseType: 'stream', timeout: 8000 });
        return new Promise((resolve, reject) => {
            response.data.pipe(fs.createWriteStream(dest))
                .on('finish', () => resolve(true))
                .on('error', e => reject(e));
        });
    } catch (err) {
        return false;
    }
}

async function run() {
    for (const model of models) {
        const query = `${model.brand} ${model.code} TV`;
        console.log(`Searching for: ${query}`);
        try {
            // Use DuckDuckGo HTML search
            const res = await axios.get(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`, {
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
            });
            const $ = cheerio.load(res.data);
            const imgNodes = $('.zcm-wrap img.product-image, img.result__image, img');
            let imgUrl = null;

            // Some simple heuristics to find a valid image URL
            for (let i = 0; i < imgNodes.length; i++) {
                let src = $(imgNodes[i]).attr('src') || $(imgNodes[i]).attr('data-src');
                if (src && src.startsWith('//')) src = 'https:' + src;
                if (src && src.includes('external-content')) {
                    imgUrl = src;
                    break;
                }
            }

            // If HTML results don't have good images, fallback to a known default per brand
            if (!imgUrl) {
                if (model.brand === 'Samsung') imgUrl = 'https://images.samsung.com/is/image/samsung/p6pim/tr/qe98qn90datxtk/gallery/tr-qled-qn90d-qe98qn90datxtk-541577457';
                else if (model.brand === 'LG') imgUrl = 'https://www.lg.com/us/images/tvs/md08004124/gallery/desktop-01.jpg';
                else imgUrl = 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=600'; // fallback
            }

            console.log(`Found image for ${model.code}: ${imgUrl}`);

            const safeCode = model.code.replace(/[^a-zA-Z0-9-]/g, '');
            const imagePath = path.join(__dirname, 'public', 'tv-images', `${safeCode}.jpg`);

            await downloadImage(imgUrl, imagePath);
            console.log(`-> Saved to ${imagePath}`);

            // sleep a bit to avoid rate limits
            await new Promise(r => setTimeout(r, 1000));

        } catch (e) {
            console.error(`Error processing ${model.code}: ${e.message}`);
        }
    }
    console.log("Done scraping.");
}

run();
