export function generateRGB(): string {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function parseRGB(color: string, isCheck = false): number[] {
    let match = color.match(/\d+/g)!.map(Number);
    return isCheck ? match.splice(2) : match
}

export function generateSimilarRGB(similarTo: string, level: number) {
    let [r, g, b] = parseRGB(similarTo);
    const cooolors = []

    for (let i = 0; i < 4; i++) {
        if (getRandomNumber(0, 3)) {
            cooolors.push(similarTo)
        }

        r = Math.min(255, Math.max(0, r + getRandomNumber(-20, 20)));
        g = Math.min(255, Math.max(0, g + getRandomNumber(-20, 20)));
        b = Math.min(255, Math.max(0, b + getRandomNumber(-20, 20)));

        cooolors.push(`rgb(${r},${g},${b})`)
    }

    return cooolors;
}
