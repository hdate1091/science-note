// 「たとえ図鑑」の見出し。記事の frontmatter の metaphors はここの key を使います。
// 新しい例えを使うときは、ここに1行追加してください。
export const METAPHORS = {
  logistics: { name: '物流・郵便', description: '荷物の仕分け、宛先、配送ルートにたとえた記事。' },
  library: { name: '図書館', description: '本・書庫・貸し出しにたとえた記事。' },
  factory: { name: '工場', description: '設計図・組み立てライン・検品にたとえた記事。' },
  water: { name: '水道', description: '水道管の分岐や水圧にたとえた記事。' },
  traffic: { name: '交通整理', description: '道路・信号・合流にたとえた記事。' },
  relay: { name: 'バケツリレー・ドミノ', description: '次々に手渡して伝わる仕組みにたとえた記事。' },
  coin: { name: 'コイン', description: '表と裏、回転するコインにたとえた記事。' },
} as const;

export type MetaphorKey = keyof typeof METAPHORS;
export const METAPHOR_KEYS = Object.keys(METAPHORS) as [MetaphorKey, ...MetaphorKey[]];
