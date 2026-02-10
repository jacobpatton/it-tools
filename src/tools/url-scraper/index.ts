import { Link } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'URL Scraper',
  path: '/url-scraper',
  description: 'Extract all URLs from a given text.',
  keywords: ['url', 'scraper', 'extract', 'list', 'href', 'link'],
  component: () => import('./url-scraper.vue'),
  icon: Link,
  createdAt: new Date('2026-02-10'),
});