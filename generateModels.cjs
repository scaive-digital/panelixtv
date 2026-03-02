const fs = require('fs');
const path = require('path');

const generateData = () => {
    const models = [];
    let idCounter = 1;

    const addModel = (brand, code, size, panel, res) => {
        models.push({
            id: `${brand.toLowerCase().substring(0, 3)}-${idCounter++}`,
            brand,
            modelCode: code,
            screenSize: size.toString(),
            panelType: panel,
            resolution: res || '4K'
        });
    };

    const sizes = [32, 40, 42, 43, 48, 50, 55, 58, 65, 70, 75, 77, 83, 85, 98];
    const pResolutions = {
        '32': 'HD', '40': 'FHD', '42': '4K', '43': '4K', '48': '4K', '50': '4K',
        '55': '4K', '58': '4K', '65': '4K', '70': '4K', '75': '4K', '77': '4K',
        '83': '4K', '85': '4K', '98': '4K'
    };

    // --- SAMSUNG ---
    const samSizes = [43, 50, 55, 65, 75, 85, 98];
    samSizes.forEach(size => {
        addModel('Samsung', `${size}CU7000`, size, 'Crystal UHD', pResolutions[size]);
        addModel('Samsung', `${size}CU8000`, size, 'Crystal UHD', pResolutions[size]);
        addModel('Samsung', `${size}Q60C`, size, 'QLED', '4K');
        addModel('Samsung', `${size}Q70C`, size, 'QLED', '4K');
        addModel('Samsung', `${size}Q80C`, size, 'QLED', '4K');
        addModel('Samsung', `${size}QN85C`, size, 'Neo QLED', '4K');
        addModel('Samsung', `${size}QN90C`, size, 'Neo QLED', '4K');
        addModel('Samsung', `${size}QN90D`, size, 'Neo QLED', '4K');
        if (size >= 65) addModel('Samsung', `${size}QN800C`, size, 'Neo QLED', '8K');
        if (size >= 65) addModel('Samsung', `${size}QN900C`, size, 'Neo QLED', '8K');
    });
    [55, 65, 77, 83].forEach(size => {
        addModel('Samsung', `${size}S90C`, size, 'OLED', '4K');
        addModel('Samsung', `${size}S95C`, size, 'OLED', '4K');
        addModel('Samsung', `${size}S95D`, size, 'OLED', '4K');
    });

    // --- LG ---
    const lgSizes = [43, 50, 55, 65, 75, 86];
    lgSizes.forEach(size => {
        addModel('LG', `${size}UR80006LJ`, size, 'LED', pResolutions[size]);
        addModel('LG', `${size}UR91006LA`, size, 'LED', pResolutions[size]);
        addModel('LG', `${size}NANO766QA`, size, 'NanoCell', '4K');
        addModel('LG', `${size}NANO816QA`, size, 'NanoCell', '4K');
        addModel('LG', `${size}QNED816QA`, size, 'QNED', '4K');
        addModel('LG', `${size}QNED866QA`, size, 'QNED', '4K');
    });
    [42, 48, 55, 65, 77, 83].forEach(size => {
        addModel('LG', `OLED${size}C34LA`, size, 'OLED evo', '4K');
        addModel('LG', `OLED${size}C44LA`, size, 'OLED evo', '4K');
        if (size >= 55) addModel('LG', `OLED${size}G36LA`, size, 'OLED evo', '4K');
        if (size >= 55) addModel('LG', `OLED${size}G46LA`, size, 'OLED evo', '4K');
        if (size >= 55) addModel('LG', `OLED${size}B36LA`, size, 'OLED', '4K');
    });

    // --- PHILIPS ---
    const phiSizes = [43, 50, 55, 65, 75, 85];
    phiSizes.forEach(size => {
        addModel('Philips', `${size}PUS7608`, size, 'LED', pResolutions[size]);
        addModel('Philips', `${size}PUS8108`, size, 'LED Ambilight', '4K');
        addModel('Philips', `${size}PUS8508`, size, 'LED Ambilight', '4K');
        addModel('Philips', `${size}PUS8808`, size, 'LED Ambilight', '4K');
        if (size >= 55) addModel('Philips', `${size}PML9008`, size, 'MiniLED Ambilight', '4K');
    });
    [48, 55, 65, 77].forEach(size => {
        addModel('Philips', `${size}OLED708`, size, 'OLED Ambilight', '4K');
        addModel('Philips', `${size}OLED808`, size, 'OLED Ambilight', '4K');
        addModel('Philips', `${size}OLED908`, size, 'OLED Ambilight', '4K');
    });

    // --- SONY ---
    const sonySizes = [43, 50, 55, 65, 75, 85];
    sonySizes.forEach(size => {
        addModel('Sony', `KD-${size}X75K`, size, 'LED', pResolutions[size]);
        addModel('Sony', `KD-${size}X80L`, size, 'LED', '4K');
        addModel('Sony', `KD-${size}X85L`, size, 'LED', '4K');
        if (size >= 55) addModel('Sony', `XR-${size}X90L`, size, 'Full Array LED', '4K');
        if (size >= 65) addModel('Sony', `XR-${size}X95L`, size, 'MiniLED', '4K');
    });
    [55, 65, 77, 83].forEach(size => {
        addModel('Sony', `XR-${size}A80L`, size, 'OLED', '4K');
        addModel('Sony', `XR-${size}A95L`, size, 'QD-OLED', '4K');
    });

    // --- VESTEL / REGAL / SEG ---
    const vestelSizes = [32, 43, 50, 55, 65, 75];
    vestelSizes.forEach(size => {
        addModel('Vestel', `${size}FA5000`, size, 'LED', size === 32 ? 'HD' : pResolutions[size]);
        if (size >= 43) addModel('Vestel', `${size}UA9630`, size, 'LED', '4K');
        if (size >= 43) addModel('Vestel', `${size}U9600`, size, 'LED', '4K');
        if (size >= 50) addModel('Vestel', `${size}QA9700`, size, 'QLED', '4K');
        if (size >= 65) addModel('Vestel', `${size}OLED9900`, size, 'OLED', '4K');

        addModel('Regal', `${size}R653F`, size, 'LED', size === 32 ? 'HD' : pResolutions[size]);
        if (size >= 43) addModel('Regal', `${size}R754U`, size, 'LED', '4K');
    });

    // --- BEKO / ARÇELİK / GRUNDIG ---
    const bekoSizes = [32, 40, 43, 50, 55, 65];
    bekoSizes.forEach(size => {
        addModel('Beko', `BM ${size} A 400`, size, 'LED', size <= 40 ? 'FHD' : pResolutions[size]);
        if (size >= 43) addModel('Beko', `B${size} B 665`, size, 'LED', '4K');
        if (size >= 50) addModel('Beko', `B${size} C 890`, size, 'LED', '4K');
        if (size >= 55) addModel('Beko', `B${size} Q 990`, size, 'QLED', '4K');

        addModel('Arçelik', `A${size} A 400`, size, 'LED', size <= 40 ? 'FHD' : pResolutions[size]);
        if (size >= 43) addModel('Arçelik', `A${size} B 665`, size, 'LED', '4K');
        if (size >= 50) addModel('Arçelik', `A${size} C 890`, size, 'LED', '4K');
        if (size >= 55) addModel('Arçelik', `A${size} Q 990`, size, 'QLED', '4K');

        addModel('Grundig', `${size} GFU 7800 B`, size, 'LED', size <= 40 ? 'FHD' : pResolutions[size]);
        if (size >= 50) addModel('Grundig', `${size} GGU 7900`, size, 'LED', '4K');
        if (size >= 55) addModel('Grundig', `${size} GHU 8500`, size, 'LED', '4K');
    });

    // --- TCL ---
    const tclSizes = [43, 50, 55, 65, 75, 85, 98];
    tclSizes.forEach(size => {
        addModel('TCL', `${size}P635`, size, 'LED', pResolutions[size]);
        addModel('TCL', `${size}P735`, size, 'LED', pResolutions[size]);
        if (size >= 50) addModel('TCL', `${size}C645`, size, 'QLED', '4K');
        if (size >= 55) addModel('TCL', `${size}C745`, size, 'QLED', '4K');
        if (size >= 55) addModel('TCL', `${size}C845`, size, 'MiniLED', '4K');
    });

    // --- TOSHIBA ---
    const toshibaSizes = [43, 50, 55, 65];
    toshibaSizes.forEach(size => {
        addModel('Toshiba', `${size}UL2163DT`, size, 'LED', pResolutions[size]);
        addModel('Toshiba', `${size}UA2263DT`, size, 'LED', '4K');
        if (size >= 50) addModel('Toshiba', `${size}QA4263DT`, size, 'QLED', '4K');
    });

    // --- AXEN / SUNNY / HI-LEVEL ---
    const cheapSizes = [32, 43, 50, 55, 65];
    cheapSizes.forEach(size => {
        addModel('Axen', `AX${size}FIL243`, size, 'LED', size === 32 ? 'HD' : pResolutions[size]);
        if (size >= 43) addModel('Axen', `AX${size}UAL402`, size, 'LED', '4K');

        addModel('Sunny', `SN${size}LEDA7053`, size, 'LED', size === 32 ? 'HD' : pResolutions[size]);

        addModel('Hi-Level', `HL${size}FHD`, size, 'LED', size === 32 ? 'HD' : pResolutions[size]);
        if (size >= 43) addModel('Hi-Level', `HL${size}UHD`, size, 'LED', '4K');
    });

    // Output formatting
    const fileContent = `// Auto-generated massive TV models dataset
export interface TvModel {
  id: string;
  brand: string;
  modelCode: string;
  screenSize: string;
  panelType: string;
  resolution: string;
}

export const tvModels: TvModel[] = ${JSON.stringify(models, null, 2)};
`;

    fs.writeFileSync(path.join(__dirname, 'src', 'data', 'tvModels.ts'), fileContent, 'utf-8');
    console.log(`Generated ${models.length} TV models successfully.`);
};

generateData();
