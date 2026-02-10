export function extractUrls(text: string, unique: boolean = false): string[] {
    if (!text) {
        return [];
    }
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const found = text.match(urlRegex) || [];
    if (unique) {
        return [...new Set(found)];
    }
    return found;
}
