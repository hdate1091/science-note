// サイトの柱（カテゴリ）。記事の frontmatter の field はここの key を使います。
export const FIELDS = {
  network: {
    name: 'ネットワーク',
    lead: 'インターネットはどうやって情報を届けているのか。通信の現場から、物流や水道にたとえて解説します。',
    color: 'var(--c-network)',
  },
  biology: {
    name: '生命の情報処理',
    lead: 'DNA は設計図、細胞は工場。生き物の中で情報がどう読み出され、伝わっていくのかを解説します。',
    color: 'var(--c-biology)',
  },
  quantum: {
    name: 'コンピュータと量子',
    lead: 'コンピュータの基本から量子コンピュータまで。数式を使わずに「何がすごいのか」を解説します。',
    color: 'var(--c-quantum)',
  },
  crossover: {
    name: 'クロスオーバー',
    lead: '通信・生命・量子をまたいで、同じ発想を見つける分野横断の読み物です。',
    color: 'var(--c-crossover)',
  },
} as const;

export type FieldKey = keyof typeof FIELDS;
export const FIELD_KEYS = Object.keys(FIELDS) as [FieldKey, ...FieldKey[]];
