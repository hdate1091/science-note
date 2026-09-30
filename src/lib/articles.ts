import { getCollection, type CollectionEntry } from 'astro:content';
import type { FieldKey } from '../data/fields';
import type { MetaphorKey } from '../data/metaphors';

export type Article = CollectionEntry<'articles'>;

// 下書きは開発環境（npm run dev）と Vercel のプレビューでだけ表示する。
const showDrafts = import.meta.env.DEV || process.env.VERCEL_ENV === 'preview';

export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('articles', ({ data }) => showDrafts || !data.draft);
  return all.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

export async function getArticlesByField(field: FieldKey) {
  return (await getArticles()).filter((a) => a.data.field === field);
}

export async function getArticlesByMetaphor(metaphor: MetaphorKey) {
  return (await getArticles()).filter((a) => a.data.metaphors.includes(metaphor));
}

// URL は /network/tcp-ip-layers のように「分野/ファイル名」になる。
export function articleUrl(article: Article) {
  return `/${article.data.field}/${article.id.split('/').pop()}`;
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
}
