import { describe, expect, it } from 'vitest';
import { extractUrls } from './url-scraper.service';

describe('url-scraper service', () => {
    it('should return empty array for empty input', () => {
        expect(extractUrls('')).toEqual([]);
    });

    it('should extract single URL', () => {
        const text = 'Check out https://example.com';
        expect(extractUrls(text)).toEqual(['https://example.com']);
    });

    it('should extract multiple URLs', () => {
        const text = 'Visit https://google.com and http://example.org';
        expect(extractUrls(text)).toEqual(['https://google.com', 'http://example.org']);
    });

    it('should return unique URLs when requested', () => {
        const text = 'https://example.com https://example.com';
        expect(extractUrls(text, true)).toEqual(['https://example.com']);
    });

    it('should return all URLs by default', () => {
        const text = 'https://example.com https://example.com';
        expect(extractUrls(text)).toEqual(['https://example.com', 'https://example.com']);
    });

    it('should handle no URLs found', () => {
        const text = 'Just some text';
        expect(extractUrls(text)).toEqual([]);
    });
});