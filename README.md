# サイエンスノート（Science Note）

**例え話で読む、情報のしくみ。**
通信・生命・量子の3分野を、身近な例え話と図解で解説するサイトです。Astro で作り、Vercel で公開しています。

- 記事の書き方：[docs/WRITING.md](docs/WRITING.md)
- 公開手順（Vercel・独自ドメイン）：[docs/DEPLOY.md](docs/DEPLOY.md)
- 記事のひな形：[templates/article.mdx](templates/article.mdx)

## フォルダ構成

```
src/
├─ content/articles/   記事（分野ごとのフォルダに .md / .mdx で置く）
│   ├─ network/        ネットワーク
│   ├─ biology/        生命の情報処理
│   ├─ quantum/        コンピュータと量子
│   └─ crossover/      クロスオーバー
├─ data/
│   ├─ site.ts         サイト名・キャッチコピー・筆者プロフィール
│   ├─ fields.ts       分野（カテゴリ）の名前と説明
│   └─ metaphors.ts    たとえ図鑑の見出し
├─ components/         記事内の部品（たとえると、筆者のひとこと、図解 など）
├─ layouts/            ページの共通レイアウト
└─ pages/              トップ・分野別一覧・たとえ図鑑・固定ページ
public/figures/        図解の画像
```

## コマンド

| コマンド | 内容 |
|---|---|
| `npm install` | 必要なものをインストールする（最初の1回） |
| `npm run dev` | 手元で確認する（http://localhost:4321） |
| `npm run build` | 型チェックと本番用ビルド |
