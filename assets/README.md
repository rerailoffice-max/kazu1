# REC Overlay Assets - KAZU I 72時間

iPhoneカメラアプリ風の録画オーバーレイ素材

## ファイル一覧

| ファイル | 説明 | 用途 |
|---------|------|------|
| `rec_overlay_iphone_camera.html` | **推奨** iPhoneカメラ風オーバーレイ | ブラウザプレビュー・PNG連番書き出し元 |
| `rec_overlay_iphone_camera.svg` | iPhoneカメラ風SVG | Motion/AEで直接使用可能 |
| `generate_frames_iphone.js` | **推奨** PNG連番生成スクリプト | Final Cut Pro用素材作成 |
| `rec_overlay.html` | シンプルREC表示版 | 代替用 |
| `rec_overlay.svg` | シンプルREC表示版SVG | 代替用 |
| `generate_frames.js` | シンプル版PNG生成 | 代替用 |

## 仕様（iPhoneカメラ風）

- **解像度**: 1920×1080 (16:9)
- **背景**: 透過
- **スタイル**: iPhoneカメラアプリ録画画面

### 表示内容
- 📐 **3×3グリッド線**（白・半透明）
- 🟢 **上部中央の緑インジケーター**（点滅）
- 🔴 **右上の赤い録画タイマー**（00:00:01）

## 使用方法

### 方法1: PNG連番をFinal Cut Proで使用（推奨）

```bash
# 1. puppeteerをインストール
npm install puppeteer

# 2. iPhoneカメラ風フレームを生成
node generate_frames_iphone.js

# 3. frames_iphone/ フォルダが作成される（60フレーム）
```

**Final Cut Proでの読み込み:**
1. `frames_iphone/` フォルダをタイムラインにドラッグ
2. 「イメージシーケンス」として読み込み
3. フレームレートを **30fps** に設定
4. 最上位トラックに配置
5. ループ: Option+G でコンパウンド → 「ループ」をON

### 方法2: Apple Motionで使用

1. `rec_overlay_iphone_camera.svg` をMotionに読み込み
2. SVGアニメーションが自動再生
3. 書き出し → Final Cut Pro用テンプレート

### 方法3: After Effectsで使用

1. `rec_overlay_iphone_camera.html` をブラウザで開く
2. 画面録画（OBS等）で透過MOV書き出し
3. AEで読み込み

## カスタマイズ

### グリッド線を非表示にする

`rec_overlay_iphone_camera.html` のCSSを編集:

```css
.grid-lines {
    display: none;
}
```

### タイマーの初期値を変更する

`rec_overlay_iphone_camera.html` のJavaScriptを編集:

```javascript
let totalSeconds = 0; // 00:00:00からスタート
```

### 色を変更する

```css
/* タイマー背景色 */
.rec-timer {
    background: #FF3B30;  /* iPhoneの赤 */
}

/* 緑インジケーター */
.rec-indicator-top {
    background: #30D158;  /* iPhoneの緑 */
}

/* グリッド線 */
.grid-line-v, .grid-line-h {
    background: rgba(255, 255, 255, 0.3);  /* 白・半透明 */
}
```

## プロジェクト内での使用

この素材は、全カットに統一的に適用することで、
「発見されたスマホ映像」というドキュメンタリーの一貫性を保ちます。

**適用手順:**
1. 全カットをタイムラインに配置
2. RECオーバーレイを最上位トラックに配置
3. タイムライン全体をカバーするように伸ばす
4. ブレンドモード: 通常（デフォルト）

---

作成: 2025年 KAZU I - 72時間 プロジェクト
