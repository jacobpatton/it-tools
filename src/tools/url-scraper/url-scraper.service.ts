export function extractUrls(text: string, unique: boolean = false): string[] {
    if (!text) {
        return [];
    }
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const matches = text.match(urlRegex) || [];

    const cleanedUrls = matches.map((url) => {
        // Remove common trailing punctuation
        let clean = url.replace(/[.,:;!?"*'\]}]+$/, '');

        // Handle trailing parenthesis (markdown links like [label](url))
        // Keep removing trailing ')' as long as they are unbalanced
        while (clean.endsWith(')')) {
            const openCount = (clean.match(/\(/g) || []).length;
            const closeCount = (clean.match(/\)/g) || []).length;
            if (closeCount > openCount) {
                clean = clean.slice(0, -1);
            } else {
                break;
            }
        }
        return clean;
    });

    if (unique) {
        return [...new Set(cleanedUrls)];
    }
    return cleanedUrls;
}
