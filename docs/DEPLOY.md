# 公開手順（Vercel・独自ドメイン）

## 1. Vercel にプロジェクトを追加する

1. Vercel にログインし、既存サイトと同じ有料プラン（Pro）のチームを選ぶ
2. 「Add New… → Project」を選ぶ
3. GitHub のリポジトリ一覧から `hdate1091/science-note` を選んで「Import」
   - 一覧に出ない場合は「Adjust GitHub App Permissions」から、このリポジトリへのアクセスを許可する
4. Framework Preset が「Astro」になっていることを確認する（自動で判定されます）
5. 「Deploy」を押す

以降は、GitHub の `main` ブランチが更新されるたびに、本番サイトが自動で更新されます。
PR（変更の提案）を作るたびに確認用のプレビューURLも発行され、下書き記事もそこで確認できます。

## 2. 独自ドメインを設定する

1. ドメインを取得する（例：お名前.com、Cloudflare Registrar など）
2. Vercel のプロジェクト画面で「Settings → Domains」を開き、取得したドメインを追加する
3. 表示された DNS レコード（A レコードまたは CNAME）を、ドメイン取得サービスの管理画面で設定する
4. Vercel の「Settings → Environment Variables」で、次を追加して再デプロイする
   - Name：`SITE_URL`
   - Value：`https://取得したドメイン`（末尾の `/` は不要）

`SITE_URL` は、サイトマップ・RSS・検索エンジン向けの正式なURLの生成に使われます。

## 3. 公開後にやること

- Google Search Console にサイトを登録し、`/sitemap-index.xml` を送信する
- 記事が15本前後になったら、Google AdSense を申請する
- Amazonアソシエイトを申請する（プライバシーポリシーには、必要な表記を記載済みです）
