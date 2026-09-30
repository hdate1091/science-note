import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { FIELD_KEYS } from './data/fields';
import { METAPHOR_KEYS } from './data/metaphors';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    field: z.enum(FIELD_KEYS),
    metaphors: z.array(z.enum(METAPHOR_KEYS)).default([]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    // テーマパック名（例：「インターネットは国際物流網」）。同じパックの記事同士が相互リンクされます。
    pack: z.string().optional(),
    order: z.number().default(0),
    // true の記事は、本番サイトには出ず、開発環境とプレビューにだけ表示されます。
    draft: z.boolean().default(false),
    references: z
      .array(z.object({ title: z.string(), url: z.url().optional(), note: z.string().optional() }))
      .default([]),
  }),
});

export const collections = { articles };
