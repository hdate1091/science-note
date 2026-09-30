# 記事の書き方

## 1. 新しい記事を追加する

1. `templates/article.mdx` をコピーする
2. `src/content/articles/<分野>/` に、英語のファイル名で保存する
   - 分野フォルダ：`network`（ネットワーク）、`biology`（生命の情報処理）、`quantum`（コンピュータと量子）、`crossover`（クロスオーバー）
   - 例：`src/content/articles/network/ip-address.mdx` → URL は `/network/ip-address`
3. 先頭の `---` で囲まれた部分（frontmatter）を書き換えて、本文を書く
4. 図は `public/figures/<分野>/` に置き、`<Figure src="/figures/...">` で表示する

frontmatter の書き間違い（分野名のタイプミス、日付の形式など）は、ビルド時に自動でエラーになります。エラーが出たら Claude に見せてください。

## 2. 下書きと公開

- `draft: true` の記事は、**本番サイトには表示されず**、手元のプレビューと Vercel のプレビューURLにだけ表示されます。
- 内容を確認し、「筆者のひとこと」を書き終えたら `draft: false` にします。
- GitHub の `main` ブランチに入ると、Vercel が自動で本番サイトを更新します。

## 3. 記事内で使える部品

| 部品 | 使いどころ | 書き方 |
|---|---|---|
| この記事のポイント | 冒頭の3行要約 | `<Summary>` 〜 `</Summary>` の間に箇条書き |
| たとえると | 例え話の囲み | `<Analogy title="物流で例えると">` 〜 `</Analogy>` |
| 筆者のひとこと | 現場の経験・実感 | `<AuthorNote>` 〜 `</AuthorNote>` |
| 図解 | 図 | `<Figure src="..." alt="..." caption="..." />` |

部品を使う記事は、拡張子を `.mdx` にしてください。部品を使わないなら `.md` でもかまいません。

## 4. 記事制作の2本立てルール

| | A：自分で書く → AIが修正 | B：AIが下書き → 自分で修正 |
|---|---|---|
| 主な分野 | ネットワーク | 生物・量子 |
| 必須 | 骨子と現場の話は自分で書く | 数値・固有名詞を一次情報で確認する |

どちらの方式でも、次の3つは必ず守ります。

- 「筆者のひとこと」を最低1つ入れる
- 参考文献を `references` に書く
- 公開前に、声に出して読んで引っかかる箇所を直す

## 5. たとえ図鑑に新しい例えを追加する

`src/data/metaphors.ts` に1行追加します。

```ts
  kitchen: { name: '台所・料理', description: 'レシピや調理手順にたとえた記事。' },
```

追加したら、記事の `metaphors: [kitchen]` で使えます。

## 6. 手元で表示を確認する（任意）

Node.js をインストールしたうえで、このフォルダで次を実行します。

```sh
npm install     # 最初の1回だけ
npm run dev     # http://localhost:4321 で確認できる
```
