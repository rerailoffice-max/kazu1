# 🎬 KAZU I - 72時間 | mCaptions設定ガイド

---

## 📋 概要

このドキュメントは、MotionVFX mCaptionsを使用した「KAZU I - 72時間」の全テロップ・字幕設定を記載しています。

| 項目 | 内容 |
|------|------|
| **対象ソフトウェア** | MotionVFX mCaptions（Final Cut Pro / DaVinci Resolve） |
| **映像仕様** | 4K (3840×2160) / 24fps / 16:9 |
| **字幕言語** | 日本語 + 英語（バイリンガル） |
| **出品先** | WAIFF KYOTO 2026 |

---

## 🎨 使用プリセット一覧

| プリセット | 用途 | 使用カット |
|-----------|------|-----------|
| **Book 4492** | 時刻・場所表示、タイトルカード | CUT 1, 4, 10, 15, 20, 26, 30, 34, 35, 38, 42 |
| **Simple 54NQ** | セリフ字幕（通常〜緊迫） | CUT 6B, 9, 12, 13, 14B, 17, 21, 23, 25, 27, 28 |
| **Minimalistic 29G3** | ナレーション、追悼テロップ、エンディング | CUT 2, 3, 39, 46-52 |
| **Classic 141L** | 最終タイトル | CUT 53 |

---

## 🔤 フォント設定

### 推奨フォント

| 言語 | フォント | ウェイト | 備考 |
|------|---------|---------|------|
| **日本語** | Hiragino Sans（ヒラギノ角ゴ） | W3〜W6 | macOS標準、可読性◎ |
| **日本語（代替）** | Noto Sans JP | Regular〜Bold | Google Fonts、無料 |
| **英語** | Helvetica Neue | Light〜Medium | 国際標準 |
| **英語（代替）** | Inter | Regular〜Medium | 無料、視認性◎ |

### 緊迫度別フォントウェイト

| 緊迫度 | ウェイト | 使用シーン |
|-------|---------|-----------|
| **低（平穏）** | W3 / Light | CUT 1-15、エンディング |
| **中（不安）** | W4 / Regular | CUT 16-20、捜索シーン |
| **高（緊迫）** | W5 / Medium | CUT 21-27、緊急通報 |
| **最高（危機）** | W6 / Bold | CUT 25, 28（最後の通信） |

---

## 📐 プリセット別 詳細設定

---

### 1. Book 4492（時刻・場所表示用）

**用途**: 日時、場所、客観的な情報表示

#### 基本設定
| 項目 | 設定値 |
|------|-------|
| **Font** | Hiragino Sans W3〜W5 |
| **Font Size** | 60〜65 |
| **Alignment** | 中央揃え |
| **Line Spacing** | 10 |
| **Tracking** | 2% |

#### 位置設定
| 項目 | 設定値 |
|------|-------|
| **Content Position X** | 0 px |
| **Content Position Y** | -380 px（下部）または 0 px（中央） |

#### カラー設定
| 項目 | 設定値 |
|------|-------|
| **Fill Color** | #FFFFFF（白） |
| **Fill Opacity** | 100% |
| **Fill Blur** | 0 |

#### グロー設定
| 項目 | 設定値 |
|------|-------|
| **Glow Opacity** | 0%（オフ） |

#### ドロップシャドウ設定
| 項目 | 設定値 |
|------|-------|
| **Drop Shadow Color** | #000000（黒） |
| **Drop Shadow Opacity** | 60% |
| **Drop Shadow Blur** | 5 |
| **Drop Shadow Distance** | 2 |
| **Drop Shadow Angle** | 315° |

#### アニメーション設定
| 項目 | 設定値 |
|------|-------|
| **Animation In** | Fade In |
| **Animation Duration** | 0.5秒 |
| **Custom Speed** | 100% |

---

### 2. Simple 54NQ（セリフ字幕用）

**用途**: 登場人物のセリフ、会話

#### 基本設定
| 項目 | 設定値 |
|------|-------|
| **Font** | Hiragino Sans W4〜W6 |
| **Font Size** | 70〜75 |
| **Alignment** | 中央揃え |
| **Line Spacing** | 12 |
| **Tracking** | 3% |

#### 位置設定
| 項目 | 設定値 |
|------|-------|
| **Content Position X** | 0 px |
| **Content Position Y** | -420 px（下部） |

#### カラー設定
| 項目 | 設定値 |
|------|-------|
| **Fill Color** | #FFFFFF（白） |
| **Fill Opacity** | 100% |
| **Fill Blur** | 0 |

#### グロー設定
| 項目 | 設定値 |
|------|-------|
| **Glow Opacity** | 0%（オフ） |

#### ドロップシャドウ設定
| 項目 | 設定値 |
|------|-------|
| **Drop Shadow Color** | #000000（黒） |
| **Drop Shadow Opacity** | 65% |
| **Drop Shadow Blur** | 4 |
| **Drop Shadow Distance** | 2 |
| **Drop Shadow Angle** | 315° |

#### アニメーション設定
| 項目 | 設定値 |
|------|-------|
| **Animation In** | Fade In |
| **Animation Duration** | 0.3秒 |
| **Custom Speed** | 100% |

---

### 3. Minimalistic 29G3（ナレーション・エンディング用）

**用途**: ナレーション、追悼テロップ、エンディング統計

#### 基本設定
| 項目 | 設定値 |
|------|-------|
| **Font** | Hiragino Sans W3 |
| **Font Size** | 55〜70 |
| **Alignment** | 中央揃え |
| **Line Spacing** | 15 |
| **Tracking** | 5% |

#### 位置設定
| 項目 | 設定値 |
|------|-------|
| **Content Position X** | 0 px |
| **Content Position Y** | 0 px（中央）または -420 px（下部） |

#### カラー設定
| 項目 | 設定値 |
|------|-------|
| **Fill Color** | #FFFFFF（白） |
| **Fill Opacity** | 100% |
| **Fill Blur** | 0 |

#### グロー設定
| 項目 | 設定値 |
|------|-------|
| **Glow Opacity** | 0%（オフ） |

#### ドロップシャドウ設定
| 項目 | 設定値 |
|------|-------|
| **Drop Shadow Color** | #000000（黒） |
| **Drop Shadow Opacity** | 50% |
| **Drop Shadow Blur** | 6 |
| **Drop Shadow Distance** | 0 |
| **Drop Shadow Angle** | 315° |

#### アニメーション設定
| 項目 | 設定値 |
|------|-------|
| **Animation In** | Fade In |
| **Animation Duration** | 1.5〜3秒 |
| **Custom Speed** | 100% |

---

### 4. Classic 141L（最終タイトル用）

**用途**: 映画タイトル、最終画面

#### 基本設定
| 項目 | 設定値 |
|------|-------|
| **Font** | Hiragino Sans W3 |
| **Font Size** | 85 |
| **Alignment** | 中央揃え |
| **Line Spacing** | 20 |
| **Tracking** | 8% |

#### 位置設定
| 項目 | 設定値 |
|------|-------|
| **Content Position X** | 0 px |
| **Content Position Y** | 0 px（中央） |

#### カラー設定
| 項目 | 設定値 |
|------|-------|
| **Fill Color** | #FFFFFF（白） |
| **Fill Opacity** | 100% |
| **Fill Blur** | 0 |

#### グロー設定
| 項目 | 設定値 |
|------|-------|
| **Glow Opacity** | 0%（オフ） |

#### ドロップシャドウ設定
| 項目 | 設定値 |
|------|-------|
| **Drop Shadow Color** | #000000（黒） |
| **Drop Shadow Opacity** | 40% |
| **Drop Shadow Blur** | 8 |
| **Drop Shadow Distance** | 0 |
| **Drop Shadow Angle** | 315° |

#### アニメーション設定
| 項目 | 設定値 |
|------|-------|
| **Animation In** | Fade In |
| **Animation Duration** | 2秒 |
| **Hold** | 3秒 |
| **Animation Out** | Fade Out 2秒 |
| **Custom Speed** | 100% |

---

## 📝 全カット別 mCaptions設定一覧

---

### 第1章：出発（DEPARTURE）
**時間**: 0:00 - 1:12

| CUT | 時間 | テロップ（日） | テロップ（英） | プリセット | フォント | サイズ | 位置Y | 特殊設定 |
|-----|------|---------------|---------------|-----------|---------|-------|-------|---------|
| **1** | 0:00-0:05 | 2022年4月23日 北海道・知床半島沖 | April 23, 2022 — Off the coast of Shiretoko Peninsula, Hokkaido | Book 4492 | Hiragino Sans W3 | 65 | 0px（中央） | Fade In 2.0秒 |
| **2** | 0:05-0:15 | 【速報】知床 観光船と連絡取れず | [BREAKING] Contact lost with tour boat | Simple 54NQ | Hiragino Sans W4 | 70 | -420px | ニュース風 |
| **3** | 0:15-0:22 | これは、その12時間前の記録である。 | This is a record from 12 hours before. | Minimalistic 29G3 | Hiragino Sans W3 | 60 | 0px（中央） | Fade In 1.5秒 |
| **4** | 0:22-0:32 | 2022年4月23日 午前9時30分 ウトロ | April 23, 2022, 9:30 AM — Utoro | Book 4492 | Hiragino Sans W3 | 60 | -380px | 時刻表示 |
| **5** | 0:32-0:40 | （なし） | — | — | — | — | — | — |
| **6** | 0:40-0:52 | （なし） | — | — | — | — | — | — |
| **6B** | 0:52-1:00 | （テレビ画面内）波浪注意報 | (On TV) WAVE WARNING | Book 4492 | Hiragino Sans W4 | 55 | -380px | 伏線 |
| **7** | 1:00-1:07 | （なし） | — | — | — | — | — | — |
| **8** | 1:07-1:12 | （なし） | — | — | — | — | — | — |

---

### 第2章：航海（VOYAGE）
**時間**: 1:12 - 2:58

| CUT | 時間 | 音声/テロップ（日） | 音声/テロップ（英） | プリセット | フォント | サイズ | 位置Y | 特殊設定 |
|-----|------|-------------------|-------------------|-----------|---------|-------|-------|---------|
| **9** | 1:12-1:22 | 「ママ見て！海だよ！」 | "Mommy, look! It's the ocean!" | Simple 54NQ | Hiragino Sans W4 | 70 | -420px | Lipsync対応 |
| **10** | 1:22-1:35 | 午前10時00分 出航 | 10:00 AM — Departure | Book 4492 | Hiragino Sans W3 | 60 | -380px | 時刻表示 |
| **11** | 1:35-1:50 | （なし） | — | — | — | — | — | — |
| **12** | 1:50-2:08 | （歓声のみ） | (Cheers) | — | — | — | — | 字幕不要 |
| **13** | 2:08-2:23 | 「熊だ…！」（ささやき） | "A bear...!" (whisper) | Simple 54NQ | Hiragino Sans W4 | 65 | -420px | 小声表現 |
| **14** | 2:23-2:38 | （なし） | — | — | — | — | — | — |
| **14B** | 2:38-2:48 | （電話応対、聞き取れない） | (Phone conversation, inaudible) | — | — | — | — | 字幕不要 |
| **15** | 2:48-2:58 | （なし） | — | — | — | — | — | — |

---

### 第3章：異変（SIGNS OF TROUBLE）
**時間**: 2:58 - 4:25

| CUT | 時間 | 音声/テロップ（日） | 音声/テロップ（英） | プリセット | フォント | サイズ | 位置Y | 特殊設定 |
|-----|------|-------------------|-------------------|-----------|---------|-------|-------|---------|
| **16** | 2:58-3:08 | （なし） | — | — | — | — | — | — |
| **17** | 3:08-3:18 | 「大丈夫かな...」 | "Will we be okay...?" | Simple 54NQ | Hiragino Sans W4 | 70 | -420px | 不安な声 |
| **18** | 3:18-3:28 | （なし） | — | — | — | — | — | — |
| **19** | 3:28-3:38 | （なし） | — | — | — | — | — | — |
| **20** | 3:38-3:48 | 11:30 AM - 波高3メートル | 11:30 AM - Wave height: 3 meters | Book 4492 | Hiragino Sans W5 | 65 | -380px | 警告感 |
| **21** | 3:48-3:58 | 「KAZU I、応答してください」 | "KAZU I, please respond" | Simple 54NQ | Hiragino Sans W5 | 72 | -420px | 緊迫感 |
| **22** | 3:58-4:08 | （なし） | — | — | — | — | — | — |
| **23** | 4:08-4:25 | 「KAZU I、こちら〇〇丸、応答願います」 | "KAZU I, this is [vessel], please respond" | Simple 54NQ | Hiragino Sans W5 | 72 | -420px | 緊迫感増 |

---

### 第4章：浸水〜沈没（FLOODING & SINKING）
**時間**: 4:25 - 5:55

| CUT | 時間 | 音声/テロップ（日） | 音声/テロップ（英） | プリセット | フォント | サイズ | 位置Y | 特殊設定 |
|-----|------|-------------------|-------------------|-----------|---------|-------|-------|---------|
| **24** | 4:25-4:35 | （なし） | — | — | — | — | — | — |
| **25** | 4:35-4:45 | 「傾いてる！」 | "It's tilting!" | Simple 54NQ | Hiragino Sans **W6** | **75** | -420px | パニック、太字 |
| **26** | 4:45-4:55 | 13:13 - 118番通報受信 | 13:13 - Emergency call received | Book 4492 | Hiragino Sans W5 | 65 | -380px | Fill: #FFF5F5 |
| **27** | 4:55-5:10 | 「船長から118番です」 | "The captain is calling 118" | Simple 54NQ | Hiragino Sans W5 | 72 | -420px | — |
| **28** | 5:10-5:25 | 「浸水して沈んでいます...」 | "We're flooding and sinking..." | Simple 54NQ | Hiragino Sans **W6** | **75** | -420px | 最後の通信、太字 |
| **29** | 5:25-5:40 | （なし） | — | — | — | — | — | — |
| **30** | 5:40-5:55 | 13:26 - 通信途絶 | 13:26 - Communication lost | Book 4492 | Hiragino Sans W5 | 65 | 0px（中央） | Fade Out 2秒 |

---

### 第5章：捜索（SEARCH）
**時間**: 5:55 - 7:45

| CUT | 時間 | テロップ（日） | テロップ（英） | プリセット | フォント | サイズ | 位置Y | 特殊設定 |
|-----|------|---------------|---------------|-----------|---------|-------|-------|---------|
| **34** | 5:55-6:05 | 13:30 - 第一管区海上保安本部 | 13:30 - 1st Regional Coast Guard HQ | Book 4492 | Hiragino Sans W4 | 65 | -380px | — |
| **35** | 6:05-6:15 | 巡視船「くなしり」出動 | Patrol vessel "Kunashiri" dispatched | Book 4492 | Hiragino Sans W4 | 65 | -380px | — |
| **36** | 6:15-6:30 | （なし） | — | — | — | — | — | — |
| **37** | 6:30-6:45 | （なし） | — | — | — | — | — | — |
| **38** | 6:45-6:55 | 17:30 - 日没 | 17:30 - Sunset | Book 4492 | Hiragino Sans W3 | 60 | -380px | — |
| **39** | 6:55-7:10 | 捜索は夜通し続けられた | The search continued through the night | Minimalistic 29G3 | Hiragino Sans W3 | 60 | -420px | Fade In 1.5秒 |
| **40** | 7:10-7:25 | （なし） | — | — | — | — | — | — |
| **42** | 7:25-7:40 | 翌朝 - 救命胴衣発見 | Next morning - Life jackets found | Book 4492 | Hiragino Sans W4 | 65 | -380px | — |
| **43** | 7:40-7:45 | （なし） | — | — | — | — | — | — |

---

### 第6章：鎮魂（REQUIEM）
**時間**: 7:45 - 10:00

| CUT | 時間 | テロップ（日） | テロップ（英） | プリセット | フォント | サイズ | 位置Y | 特殊設定 |
|-----|------|---------------|---------------|-----------|---------|-------|-------|---------|
| **45** | 7:45-8:00 | （なし） | — | — | — | — | — | — |
| **46** | 8:00-8:15 | 乗客乗員26名 | 26 passengers and crew | Minimalistic 29G3 | Hiragino Sans W3 | 70 | 0px（中央） | Fade In 3秒 |
| **47** | 8:15-8:30 | 20名死亡確認 | 20 confirmed dead | Minimalistic 29G3 | Hiragino Sans W3 | 70 | 0px（中央） | — |
| **48** | 8:30-8:45 | 6名行方不明 | 6 still missing | Minimalistic 29G3 | Hiragino Sans W3 | 70 | 0px（中央） | — |
| **49** | 8:45-9:00 | 水深120m | Depth: 120 meters | Minimalistic 29G3 | Hiragino Sans W3 | 65 | 0px（中央） | — |
| **50** | 9:00-9:15 | 水温3〜4℃ | Water temperature: 3-4°C | Minimalistic 29G3 | Hiragino Sans W3 | 65 | 0px（中央） | — |
| **51** | 9:15-9:30 | 生存可能時間：約1時間 | Survival time: approx. 1 hour | Minimalistic 29G3 | Hiragino Sans W3 | 65 | 0px（中央） | — |
| **52** | 9:30-9:45 | 彼らは、最後まで生きようとした | They fought to survive until the very end | Minimalistic 29G3 | Hiragino Sans W3 | 70 | 0px（中央） | Fade In 3秒 |
| **53** | 9:45-10:00 | KAZU I - 72時間 | KAZU I - 72 Hours | Classic 141L | Hiragino Sans W3 | 85 | 0px（中央） | Fade In 2秒, Hold, Fade Out 2秒 |

---

## 🎯 視点別スタイルガイド

### 視点A（乗客スマホ映像）📱

スマートフォンで撮影された素人映像に合わせたスタイル

| 項目 | 設定 |
|------|------|
| **フォントサイズ** | やや小さめ（65〜70） |
| **スタイル** | シンプル、背景ボックスなし |
| **演出オプション** | 手ブレに合わせた微動（キーフレーム） |
| **プリセット** | Simple 54NQ |

### 視点B（ドキュメンタリー）🎬

プロフェッショナルな報道/ドキュメンタリー映像に合わせたスタイル

| 項目 | 設定 |
|------|------|
| **フォントサイズ** | 標準（70〜75） |
| **スタイル** | プロフェッショナル、安定 |
| **演出** | なし（静的表示） |
| **プリセット** | Book 4492 / Minimalistic 29G3 |

---

## ⚠️ 特殊シーン設定

### 緊急通報シーン（CUT 26-28）

| 項目 | 設定 |
|------|------|
| **Fill Color** | #FFF5F5（わずかに赤みがかった白） |
| **フォントウェイト** | W5〜W6（太め） |
| **フォントサイズ** | 72〜75（大きめ） |

### エンディング統計（CUT 46-51）

| 項目 | 設定 |
|------|------|
| **アニメーション** | Fade In 3秒（ゆっくり） |
| **表示時間** | 各15秒（十分な読み時間） |
| **位置** | 画面中央（0px） |

### 最終タイトル（CUT 53）

| 項目 | 設定 |
|------|------|
| **フォントサイズ** | 85（最大） |
| **Tracking** | 8%（広め） |
| **アニメーション** | Fade In 2秒 → Hold 3秒 → Fade Out 2秒 |

---

## 📌 WAIFF提出向け注意事項

### セーフエリア
- 字幕は画面端から **10%以上内側** に配置
- 4K (3840×2160) の場合、上下左右 **384px以上** のマージン

### コントラスト
- **WCAG AA基準**（4.5:1以上）を満たす
- 白文字 + 黒シャドウで対応

### 表示時間
- **最低1.5秒**、読む速度に合わせて調整
- セリフは音声と同期
- 統計テロップは **15秒以上** 表示

### フォント
- 書き出し時にフォントが正しくレンダリングされることを確認
- 最終レンダリング前にプレビューで全字幕を確認

---

## 💾 プリセット保存名（推奨）

Final Cut Pro / DaVinci Resolveで保存する際の名前：

```
KAZU_I_Book_TimePlace      - 時刻・場所表示用（Book 4492ベース）
KAZU_I_Simple_Subtitle     - セリフ字幕用（Simple 54NQベース）
KAZU_I_Minimal_Narration   - ナレーション用（Minimalistic 29G3ベース）
KAZU_I_Classic_Title       - 最終タイトル用（Classic 141Lベース）
KAZU_I_Emergency           - 緊急通報シーン用（Simple 54NQベース、赤み）
```

---

## 📅 更新履歴

| 日付 | 内容 |
|------|------|
| 2025-02-01 | 初版作成 |

---

**制作**: KAZU I - 72時間 プロジェクト
**出品先**: WAIFF KYOTO 2026
