# Hanareba（はなれば）

夫婦のイベント進行管理アプリ「Hanareba（はなれば）」のプロトタイプです。

## 概要

Hanarebaは、夫婦ふたりの「これから」を一緒に考えるためのイベント進行管理アプリです。結婚後に発生する数々のライフイベントを"ひとつずつ"話し合って決めていくためのプロダクトです。

## 技術スタック

- **フロントエンド**: Next.js 14, TypeScript, Tailwind CSS
- **バックエンド**: Next.js API Routes
- **データベース**: PostgreSQL
- **認証**: NextAuth.js
- **開発環境**: Docker, Docker Compose

## 開発環境のセットアップ

### 前提条件

- Docker
- Docker Compose

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd hanareba
```

### 2. 環境変数の設定

```bash
cp env.example .env
```

`.env`ファイルを編集して、必要な環境変数を設定してください。

### 3. Docker環境の起動

```bash
# 開発環境の起動
docker-compose up --build

# バックグラウンドで起動する場合
docker-compose up -d --build
```

### 4. アプリケーションへのアクセス

- アプリケーション: http://localhost:3000
- データベース: localhost:5432
- Redis: localhost:6379

## 開発コマンド

```bash
# 開発環境の起動
docker-compose up

# 開発環境の停止
docker-compose down

# ログの確認
docker-compose logs -f app

# データベースのリセット
docker-compose down -v
docker-compose up --build

# コンテナ内でコマンド実行
docker-compose exec app npm run lint
docker-compose exec app npm run test
```

## プロジェクト構造

```
hanareba/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React コンポーネント
│   ├── lib/                 # ユーティリティ関数
│   └── types/               # TypeScript 型定義
├── docs/                    # ドキュメント
├── prisma/                  # データベーススキーマ
├── Dockerfile               # 本番用Dockerfile
├── Dockerfile.dev           # 開発用Dockerfile
├── docker-compose.yml       # Docker Compose設定
└── init.sql                 # データベース初期化SQL
```

## 主要機能

### MVP機能
- [ ] イベント登録・管理機能
- [ ] 論点管理機能
- [ ] タスク管理機能
- [ ] 合意ログ機能
- [ ] 基本的な通知機能

### 今後の拡張予定
- [ ] Splitmate連携機能
- [ ] カレンダー連携機能
- [ ] GPT機能
- [ ] 親族共有モード

## データベース設計

詳細なデータベース設計については、`docs/prototype-requirements.md`を参照してください。

## 貢献

1. 新しいブランチを作成
2. 変更をコミット
3. プルリクエストを作成

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
