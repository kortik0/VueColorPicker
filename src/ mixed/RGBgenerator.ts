function generateRGB(): number[] {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return [r, g ,b];
}

export function matchTheRGB() {
    const str = "54cdc180-color:rgb(180,0,255);";
    const matches = str.match(/rgb\((\d+),(\d+),(\d+)\)/);

    if (Array.isArray(matches)) {
        const [_, r, g, b] = matches;

        console.log(r, g, b); // 180 0 255
    }
}

export function generateAdvancedRGB(similarTo: number[] = [0,0,0], variance = 50) {
    if (!similarTo.length) {
        generateRGB()
    }
    let r = Math.floor(Math.random() * (variance * 2)) - variance + (similarTo ? similarTo[0] : Math.floor(Math.random() * 256));
    let g = Math.floor(Math.random() * (variance * 2)) - variance + (similarTo ? similarTo[1] : Math.floor(Math.random() * 256));
    let b = Math.floor(Math.random() * (variance * 2)) - variance + (similarTo ? similarTo[2] : Math.floor(Math.random() * 256));
    r = Math.min(Math.max(r, 0), 255);
    g = Math.min(Math.max(g, 0), 255);
    b = Math.min(Math.max(b, 0), 255);
    return `rgb(${r},${g},${b})`
}