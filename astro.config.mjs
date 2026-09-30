// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// 独自ドメインが決まったら、Vercel の環境変数 SITE_URL に設定してください。
const site = process.env.SITE_URL ?? 'https://science-note.vercel.app';

export default defineConfig({
  site,
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
});
