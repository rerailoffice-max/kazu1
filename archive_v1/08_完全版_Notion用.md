# 🎬 KAZU I - 72時間 | 完全版ドキュメント（Notion用）

---

## 📋 作品情報

| 項目 | 内容 |
|------|------|
| **タイトル** | KAZU I - 72時間 |
| **英題** | KAZU I - 72 Hours |
| **ジャンル** | AIドキュメンタリー |
| **尺** | 約10分 |
| **解像度** | 4K (3840×2160) |
| **フレームレート** | 24fps |
| **アスペクト比** | 16:9 |
| **音声** | 環境音 + AI生成音声（ElevenLabs） |
| **字幕** | 日本語・英語（バイリンガル） |
| **出品先** | WAIFF KYOTO 2026（世界AI国際映画祭） |

---

## 🎨 使用AIツール

| ツール | 用途 | バージョン |
|--------|------|-----------|
| Midjourney | 画像生成 | V7 |
| Kling AI | 動画生成・Lipsync | 2.6 |
| Runway | 動画生成（シネマティック） | Gen-4.5 |
| Pika Labs | 動画生成（特殊効果） | Latest |
| ElevenLabs | 音声生成 | + Lipsync |
| Topaz Video AI | 4Kアップスケール | - |
| MotionVFX mCaptions | テロップ・字幕 | Latest |

---

## 📹 カメラスタイル定義

### 視点A：乗客カメラ（Passenger Camera）📱
**設定**: 2022年当時の観光客が撮影した映像
- **機材**: iPhone 13 / Sony Handycam / GoPro Hero 10
- **特徴**:
  - 素人撮影感、手ブレ
  - オートフォーカスの迷い
  - スマホ特有のやや高彩度な画質
  - RECインジケーター、タイムコード表示
  - フレーミングの甘さ、構図の不安定さ
  - 圧縮アーティファクト（動きの激しい場面）

### 視点B：ドキュメンタリー（Documentary）🎬
**設定**: 報道/ドキュメンタリー制作クルーが撮影した映像
- **機材**: Sony FX6 / Canon C300 / ドローン（DJI Inspire 3）
- **特徴**:
  - プロフェッショナルな構図
  - 安定したカメラワーク
  - シネマティックなカラーグレーディング
  - 俯瞰・ドローンショット

---

## 🎭 登場キャラクター（音声設定）

| キャラクター | 性別 | 年齢 | 声質 | 感情変化 |
|-------------|------|------|------|----------|
| 子供（女児） | 女性 | 7歳 | 高く澄んだ声 | 無邪気→恐怖 |
| 母親 | 女性 | 35歳 | 落ち着いた声 | 穏やか→絶望 |
| 父親 | 男性 | 40歳 | 低めの声 | 穏やか→緊迫 |
| 船長 | 男性 | 50代 | 低く落ち着いた声 | 焦り→諦め |
| 他社社員 | 男性 | 40代 | ビジネス的 | 緊迫 |
| NHKアナウンサー | 男性 | 40代 | 明瞭なアナウンス調 | 中立 |
| 海保通信員 | 男性 | 30代 | 明瞭・プロフェッショナル | 緊迫 |

---

## 🔤 mCaptions設定

### 使用プリセット一覧

| プリセット | 用途 | 使用カット |
|-----------|------|-----------|
| **Book 4492** | 時刻・場所表示、タイトルカード | CUT 1, 4, 10, 15, 20, 23, 26, 30-33, 34, 35, 38, 41, 42 |
| **Simple 54NQ** | セリフ字幕（通常〜緊迫） | CUT 2, 6B, 9, 13, 17, 21, 25, 27, 28 |
| **Minimalistic 29G3** | ナレーション、追悼テロップ、統計 | CUT 3, 38, 45-50, 52 |
| **Classic 141L** | 最終タイトル | CUT 53 |

### フォント設定

| 言語 | フォント | ウェイト |
|------|---------|---------|
| **日本語** | Hiragino Sans（ヒラギノ角ゴ） | W3〜W6 |
| **英語** | Helvetica Neue | Light〜Medium |

### 緊迫度別フォントウェイト

| 緊迫度 | ウェイト | 使用シーン |
|-------|---------|-----------|
| **低（平穏）** | W3 / Light | CUT 1-15、エンディング |
| **中（不安）** | W4 / Regular | CUT 16-20、捜索シーン |
| **高（緊迫）** | W5 / Medium | CUT 21-27、緊急通報 |
| **最高（危機）** | W6 / Bold | CUT 25, 28（最後の通信） |

---

## 📐 mCaptionsプリセット詳細設定

### 1. Book 4492（時刻・場所表示用）

| 項目 | 設定値 |
|------|-------|
| **Font** | Hiragino Sans W3〜W5 |
| **Font Size** | 60〜65 |
| **Alignment** | 中央揃え |
| **Position Y** | -380px または 0px（中央） |
| **Fill Color** | #FFFFFF |
| **Glow Opacity** | 0%（オフ） |
| **Drop Shadow Opacity** | 60% |
| **Drop Shadow Blur** | 5 |
| **Animation** | Fade In 0.5秒 |

### 2. Simple 54NQ（セリフ字幕用）

| 項目 | 設定値 |
|------|-------|
| **Font** | Hiragino Sans W4〜W6 |
| **Font Size** | 70〜75 |
| **Alignment** | 中央揃え |
| **Position Y** | -420px |
| **Fill Color** | #FFFFFF |
| **Glow Opacity** | 0%（オフ） |
| **Drop Shadow Opacity** | 65% |
| **Drop Shadow Blur** | 4 |
| **Animation** | Fade In 0.3秒 |

### 3. Minimalistic 29G3（ナレーション・エンディング用）

| 項目 | 設定値 |
|------|-------|
| **Font** | Hiragino Sans W3 |
| **Font Size** | 55〜70 |
| **Alignment** | 中央揃え |
| **Position Y** | 0px（中央） |
| **Fill Color** | #FFFFFF |
| **Glow Opacity** | 0%（オフ） |
| **Drop Shadow Opacity** | 50% |
| **Drop Shadow Blur** | 6 |
| **Animation** | Fade In 1.5〜3秒 |

### 4. Classic 141L（最終タイトル用）

| 項目 | 設定値 |
|------|-------|
| **Font** | Hiragino Sans W3 |
| **Font Size** | 85 |
| **Alignment** | 中央揃え |
| **Position Y** | 0px（中央） |
| **Fill Color** | #FFFFFF |
| **Glow Opacity** | 0%（オフ） |
| **Drop Shadow Opacity** | 40% |
| **Drop Shadow Blur** | 8 |
| **Animation** | Fade In 2秒 → Hold 3秒 → Fade Out 2秒 |

---

# 🎬 絵コンテ（全カット詳細）

---

# 第1章：出発（DEPARTURE）
**時間**: 0:00 - 1:12 | **カット数**: 8

---

## CUT 1 | プロローグ - 黒画面
**時間**: 0:00 - 0:05 | **尺**: 5秒

| 項目 | 内容 |
|------|------|
| **映像** | 完全な黒画面 |
| **テロップ（日）** | 2022年4月23日 北海道・知床半島沖 |
| **テロップ（英）** | April 23, 2022 — Off the coast of Shiretoko Peninsula, Hokkaido |
| **音声** | 無音 |
| **意図** | 静寂から始まり、観客の注意を引く |

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 |
| **Font** | Hiragino Sans W3 |
| **Size** | 65 |
| **Position Y** | 0px（中央） |
| **Animation** | Fade In 2.0秒 |

**備考**: 画像生成不要（編集で作成）

---

## CUT 2 | NHKニュース速報
**時間**: 0:05 - 0:15 | **尺**: 10秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | テレビ画面風のニュース速報 |
| **テロップ（日）** | 【速報】知床 観光船と連絡取れず 海保が確認中 |
| **テロップ（英）** | [BREAKING] Shiretoko: Contact lost with tour boat — Coast Guard investigating |
| **音声（日）** | NHKアナウンサー「知床半島沖で観光船と連絡が取れなくなっているという情報が入りました」 |
| **音声（英）字幕** | "We have reports that contact has been lost with a tour boat off the coast of Shiretoko Peninsula." |
| **カメラ** | 固定（テレビ画面の直撮り風） |

### Midjourneyプロンプト
```
Japanese TV news broadcast screen, NHK style breaking news alert, red "速報" banner at top, news anchor desk background slightly blurred, text overlay area showing "知床 観光船と連絡取れず", broadcast graphics, 16:9 aspect ratio, realistic television screenshot, CRT TV screen texture with slight scan lines, news studio lighting, photographed TV screen aesthetic --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Simple 54NQ |
| **Font** | Hiragino Sans W4 |
| **Size** | 70 |
| **Position Y** | -420px |
| **備考** | ニュース画面内テロップは画像に含める |

**動画生成**: Runway Gen-4.5（微細な画面の揺らぎ）
**ElevenLabs**: NHKアナウンサー音声生成

---

## CUT 3 | 白いテロップ
**時間**: 0:15 - 0:22 | **尺**: 7秒

| 項目 | 内容 |
|------|------|
| **映像** | 黒背景に白テキスト |
| **テロップ（日）** | これは、その12時間前の記録である。 |
| **テロップ（英）** | This is a record from 12 hours before. |
| **音声** | 無音→遠くの波音がフェードイン |
| **意図** | 時間を遡ることを示唆 |

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Minimalistic 29G3 |
| **Font** | Hiragino Sans W3 |
| **Size** | 60 |
| **Position Y** | 0px（中央） |
| **Animation** | Fade In 1.5秒 |

**備考**: 画像生成不要（編集で作成）

---

## CUT 4 | 車窓からウトロへ
**時間**: 0:22 - 0:32 | **尺**: 10秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 車の窓越しにウトロ港が見えてくる |
| **テロップ（日）** | 2022年4月23日 午前9時30分 ウトロ |
| **テロップ（英）** | April 23, 2022, 9:30 AM — Utoro |
| **音声** | 車内の静かな音、遠くのカモメの声 |
| **カメラ** | スマートフォン撮影、手持ち、軽い揺れ |
| **天候** | 曇り、薄い霧 |

### Midjourneyプロンプト
```
Smartphone video screenshot through car window, approaching Utoro Port Shiretoko Hokkaido, overcast morning sky, fishing boats in harbor, small coastal town, Sea of Okhotsk visible, April spring morning, window reflection and slight condensation, amateur tourist footage aesthetic, iPhone 13 video quality, slightly oversaturated colors, auto-exposure adjustment visible, REC indicator in corner, timestamp overlay "2022/04/23 09:32", handheld shake, casual tourist recording style, 1080p upscaled look --ar 16:9 --v 7 --s 150
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 |
| **Font** | Hiragino Sans W3 |
| **Size** | 60 |
| **Position Y** | -380px |
| **Animation** | Fade In 0.5秒 |

**動画生成**: Kling AI 2.6（窓の反射と車の振動）
**UI追加**: 編集時にRECマーク、タイムスタンプをオーバーレイ

---

## CUT 5 | 駐車場 - 足元
**時間**: 0:32 - 0:40 | **尺**: 8秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 車から降りる足元、砂利の駐車場 |
| **音声** | 砂利を踏む音、風の音、カモメ |
| **カメラ** | スマホを持ったまま降車、不安定なアングル |
| **意図** | 日常の始まり、これから楽しい旅が始まる期待感 |

### Midjourneyプロンプト
```
Smartphone POV video of feet stepping out of car onto gravel parking lot, Japanese tourist shoes, camera pointing down accidentally while getting out, Utoro Port parking area glimpsed, unstable amateur framing, motion blur from movement, iPhone video aesthetic, slightly out of focus moment, auto-focus hunting, casual unintentional footage, gravel texture visible, overcast daylight, tourist home video style --ar 16:9 --v 7 --s 150
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Kling AI 2.6（歩行の揺れ）

---

## CUT 6 | ウトロ港・KAZU I初登場
**時間**: 0:40 - 0:52 | **尺**: 12秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 港に停泊するKAZU I、小型の白い観光船 |
| **テロップ** | なし |
| **音声** | 港の環境音、エンジンのアイドリング音 |
| **カメラ** | スマホ撮影、観光客が船を撮影 |
| **天候** | 曇り、風は穏やか |

### Midjourneyプロンプト
```
Smartphone video of small white Japanese sightseeing boat moored at Utoro fishing port, tourist filming the boat they're about to board, KAZU I style vessel approximately 19 tons, two-deck passenger boat, Japanese fishing harbor atmosphere, other fishing boats nearby, overcast sky, calm sea, morning light, amateur travel video aesthetic, iPhone 13 camera quality, slight lens flare from sky, auto-exposure on bright sky making boat slightly dark, handheld gentle movement, excited tourist perspective, timestamp visible --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Runway Gen-4.5（波の揺れ、旗のなびき）

---

## CUT 6B | 【伏線①】事務所のテレビ
**時間**: 0:52 - 1:00 | **尺**: 8秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 運航会社事務所、テレビに波浪注意報 |
| **テロップ（日）** | （テレビ画面内）波浪注意報 |
| **テロップ（英）** | (On TV screen) WAVE WARNING |
| **音声** | テレビの気象情報の音声 |
| **カメラ** | 固定、事務所内部（後日再現/報道映像風） |
| **意図** | 【重要伏線】会社が警報を無視して出航させたことを示唆 |

### Midjourneyプロンプト
```
Interior of small Japanese boat company office, old CRT television showing weather warning graphics with "波浪注意報" text, messy desk with papers and ashtrays, calendar on wall showing April 2022, fluorescent lighting casting harsh shadows, realistic Japanese small business office atmosphere, documentary reconstruction style, Sony FX6 camera aesthetic, slightly dim interior, morning light from dirty window, static observational shot, evidence footage feeling, 4K photorealistic --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 |
| **Font** | Hiragino Sans W4 |
| **Size** | 55 |
| **Position Y** | -380px |
| **備考** | テレビ画面内テロップは画像に含める、字幕は補足 |

**動画生成**: Pika Labs（テレビ画面のちらつき）
**演出意図**: 会社側の過失を暗示する重要なカット

---

## CUT 7 | 乗船受付
**時間**: 1:00 - 1:07 | **尺**: 7秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 受付で乗船名簿に記入する手元 |
| **音声** | 受付スタッフの声（遠く）、他の乗客の話し声 |
| **カメラ** | スマホで手元を撮影、日常記録風 |
| **意図** | 日常的な手続き、まもなく始まる非日常への入口 |

### Midjourneyプロンプト
```
Smartphone video of hands filling passenger registration form at Japanese boat tour counter, ballpoint pen writing on paper, tourist recording the moment as travel memory, tour company counter with faded brochures, Japanese text on forms, slightly shaky amateur footage, iPhone video close-up with shallow depth of field, fluorescent office lighting, casual documentation style, focus hunting on moving pen, warm anticipation atmosphere --ar 16:9 --v 7 --s 150
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Kling AI 2.6（記入の動き）

---

## CUT 8 | タラップを上がる
**時間**: 1:07 - 1:12 | **尺**: 5秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | KAZU Iのタラップを上がる、スマホを持ちながら乗船 |
| **音声** | 金属のタラップを踏む音、船のエンジン音 |
| **カメラ** | POV、片手でスマホ撮影しながら乗船 |
| **意図** | 船への乗り込み、運命への第一歩 |

### Midjourneyプロンプト
```
Smartphone POV walking up metal gangway boarding small passenger boat, one hand visible gripping handrail while filming with other hand, boat deck visible ahead, white painted boat hull on left, harbor water below visible through gaps, shaky amateur footage of boarding moment, iPhone video with motion blur, auto-focus adjusting, excited tourist perspective, casual travel vlog style, slightly overexposed sky, authentic home video aesthetic --ar 16:9 --v 7 --s 150
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Runway Gen-4.5（歩行POV、揺れ）

---

# 第2章：航海（VOYAGE）
**時間**: 1:12 - 2:58 | **カット数**: 7

---

## CUT 9 | 船内・子供の手【Lipsync】⭐
**時間**: 1:12 - 1:22 | **尺**: 10秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 窓を指差す子供の手と横顔 |
| **音声（日）** | 子供「ママ見て！海だよ！」 |
| **音声（英）字幕** | "Mommy, look! It's the ocean!" |
| **カメラ** | 親がスマホで子供を撮影 |
| **意図** | 無邪気な喜び、幸せな家族の時間（後の悲劇との対比） |
| **Lipsync** | ✅ 必要 |

### Midjourneyプロンプト
```
Smartphone video inside small passenger boat cabin, parent filming 7-year-old Japanese girl pointing excitedly at window, child's profile view with visible mouth and lips for lipsync, joyful expression, window showing ocean view with bright light, warm family moment captured on phone, iPhone portrait mode aesthetic, slightly overexposed window, child in sharp focus, authentic family travel video, happy amateur footage, visible UI elements suggestion --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Simple 54NQ |
| **Font** | Hiragino Sans W4 |
| **Size** | 70 |
| **Position Y** | -420px |
| **Animation** | Fade In 0.3秒 |

**動画生成**: Kling AI 2.6（Lipsyncモード）
**ElevenLabs**: 子供の声「ママ見て！海だよ！」
**重要**: 顔・口元がはっきり見える構図で生成すること

---

## CUT 10 | 出航
**時間**: 1:22 - 1:35 | **尺**: 13秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | ウトロ港を離れるKAZU I、ドローン視点 |
| **テロップ（日）** | 午前10時00分 出航 |
| **テロップ（英）** | 10:00 AM — Departure |
| **音声** | エンジン音、波を切る音、カモメ |
| **カメラ** | ドローン俯瞰、追従ショット |
| **天候** | 曇り、波は穏やか |

### Midjourneyプロンプト
```
Aerial drone shot of small white sightseeing boat departing from Utoro Port, KAZU I style vessel leaving harbor, wake trail in calm grey sea, Shiretoko Peninsula coastline visible, fishing port with concrete breakwater, overcast sky, soft morning light, DJI Inspire 3 drone footage, smooth cinematic tracking shot, documentary aerial photography, 4K broadcast quality, professional color grading with muted tones --ar 16:9 --v 7 --s 300
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 |
| **Font** | Hiragino Sans W3 |
| **Size** | 60 |
| **Position Y** | -380px |
| **Animation** | Fade In 0.5秒 |

**動画生成**: Runway Gen-4.5（ドローン追従）

---

## CUT 11 | 知床の海・水平線
**時間**: 1:35 - 1:50 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 船から見る知床の海と水平線 |
| **音声** | 波の音、エンジン音、風 |
| **カメラ** | スマホで海を撮影、デッキから |
| **意図** | 広大な海、自然の美しさと脅威の両面 |

### Midjourneyプロンプト
```
Smartphone video from boat deck looking at Sea of Okhotsk horizon, tourist filming the scenic view, Shiretoko Peninsula coastline on right side, vast open ocean, gentle waves, overcast grey sky meeting sea at horizon, iPhone video with slight digital noise, wind affecting microphone creating audio distortion feeling, handheld movement with boat rocking, auto-exposure adjusting to bright sky, amateur travel footage aesthetic, peaceful moment before storm --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Kling AI 2.6（波と船の揺れ）

---

## CUT 12 | オシンコシンの滝
**時間**: 1:50 - 2:08 | **尺**: 18秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 海から見るオシンコシンの滝 |
| **音声** | 乗客の歓声（遠く）、滝の音、波 |
| **カメラ** | スマホでズーム撮影（デジタルズームで粗い） |
| **意図** | 知床の象徴的な風景、観光のハイライト |

### Midjourneyプロンプト
```
Smartphone video of Oshinkoshin Falls viewed from tour boat at sea, famous twin waterfall cascading down cliff, tourist using digital zoom causing pixelation and quality loss, iPhone maximum zoom aesthetic, shaky handheld footage, waterfall splitting into two streams, lush green vegetation on cliff, spray mist visible, excited tourist perspective trying to capture the view, compression artifacts from digital zoom, auto-focus struggling with distance --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし（歓声のみ） |

**動画生成**: Runway Gen-4.5（滝の水流、ズームの不安定さ）

---

## CUT 13 | 岸辺のヒグマ
**時間**: 2:08 - 2:23 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 海岸沿いを歩くヒグマ |
| **音声（日）** | 乗客のささやき声「熊だ…！」 |
| **音声（英）字幕** | "A bear...!" (whisper) |
| **カメラ** | スマホで必死にズーム、ブレブレ |
| **意図** | 知床の野生、非日常の体験 |

### Midjourneyプロンプト
```
Smartphone video of Hokkaido brown bear walking along rocky Shiretoko coastline, tourist desperately trying to zoom in on distant bear, extreme digital zoom with severe quality degradation, very shaky excited handheld footage, bear foraging near water edge as small figure, iPhone camera struggling with distance, pixelated and noisy image, auto-focus hunting, authentic wildlife encounter footage by amateur, thrilling tourist moment --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Simple 54NQ |
| **Font** | Hiragino Sans W4 |
| **Size** | 65 |
| **Position Y** | -420px |
| **備考** | 小声表現（ささやき） |

**動画生成**: Kling AI 2.6（熊の動き、ズームの揺れ）

---

## CUT 14 | 船内の穏やかな時間
**時間**: 2:23 - 2:38 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 船内でくつろぐ乗客たち |
| **音声** | 穏やかな会話、笑い声、エンジン音 |
| **カメラ** | スマホでさりげなく船内を撮影 |
| **意図** | 幸せな時間、これが最後の平穏であることを観客は知っている |

### Midjourneyプロンプト
```
Smartphone video inside small Japanese sightseeing boat cabin, casually filming fellow passengers relaxing, families looking out windows smiling, elderly couple chatting, young tourists checking their phones, warm happy atmosphere, soft daylight through windows, iPhone candid footage style, natural unposed moments, slight camera movement as filmer shifts position, authentic Japanese tour group aesthetic, peaceful before the storm, amateur travel documentation --ar 16:9 --v 7 --s 150
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Kling AI 2.6（自然な人物の動き）

---

## CUT 14B | 【伏線②】事務所の焦り
**時間**: 2:38 - 2:48 | **尺**: 10秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 事務所で電話を受ける社員、表情に焦り |
| **テロップ** | なし |
| **音声** | 電話の声（聞き取れない）、社員の生返事 |
| **カメラ** | 固定→ゆっくりズーム（報道再現風） |
| **意図** | 【重要伏線】他社からの警告電話を無視している暗示 |

### Midjourneyプロンプト
```
Documentary reconstruction shot of Japanese man in boat company office answering urgent phone call, worried expression trying to stay calm, middle-aged office worker in casual clothes, fluorescent office lighting, messy desk with boat schedules, weather fax printouts visible, window showing harbor outside, tense atmosphere, Sony FX6 camera aesthetic, slow zoom in on increasingly concerned face, investigative documentary style, evidence reconstruction footage --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Runway Gen-4.5（表情変化、ズーム）
**演出意図**: 会社側が警告を受けながら無視した過失を示唆

---

## CUT 15 | 俯瞰・KAZU I航行
**時間**: 2:48 - 2:58 | **尺**: 10秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 上空からのKAZU I、知床半島沿いを北上 |
| **音声** | 波の音（遠く）、風 |
| **カメラ** | ドローン俯瞰、ゆっくり追従 |
| **意図** | 孤独な小さな船、広大な海との対比 |

### Midjourneyプロンプト
```
High aerial drone shot of small white sightseeing boat navigating along Shiretoko Peninsula rugged coast, KAZU I style vessel looking tiny against vast ocean, dramatic cliff coastline with no other boats visible, deep grey Sea of Okhotsk, boat leaving thin white wake trail, isolated vulnerable vessel, overcast sky growing darker, ominous atmosphere, DJI drone cinematic footage, sense of foreboding, documentary establishing shot --ar 16:9 --v 7 --s 350
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Runway Gen-4.5（ドローン俯瞰移動）

---

# 第3章：異変（TROUBLE）
**時間**: 2:58 - 4:23 | **カット数**: 7

---

## CUT 16 | 波が高くなる
**時間**: 2:58 - 3:13 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 窓越しに見える波、明らかに高くなっている |
| **テロップ（日）** | 午後12時30分頃 |
| **テロップ（英）** | Around 12:30 PM |
| **音声** | 波の音が大きくなる、船体がきしむ音 |
| **カメラ** | スマホ撮影、揺れが増す、不安を感じ始める |
| **天候** | 曇り→悪化、風が強まる |

### Midjourneyプロンプト
```
Smartphone video through boat cabin window showing worsening sea conditions, rough waves with growing whitecaps, 2-3 meter swells visible, grey sky darkening ominously, water occasionally splashing against window, increasingly shaky handheld footage as boat rocks, iPhone video capturing passenger's growing concern, auto-exposure fluctuating with changing light, timestamp "2022/04/23 12:34" visible, nervous tourist documentation, compression artifacts from motion --ar 16:9 --v 7 --s 250
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 |
| **Font** | Hiragino Sans W4 |
| **Size** | 60 |
| **Position Y** | -380px |

**動画生成**: Pika Labs（波のダイナミックな動き、揺れ）

---

## CUT 17 | 船内の不安【Lipsync】⭐
**時間**: 3:13 - 3:28 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 不安そうな乗客の表情、子供が母親にしがみつく |
| **音声（日）** | 子供「ママ、怖い…」母親「大丈夫よ、もうすぐ戻るから」 |
| **音声（英）字幕** | "Mommy, I'm scared..." / "It's okay, we'll be back soon." |
| **カメラ** | スマホで家族を撮影、揺れる |
| **意図** | 不安の高まり、無力な乗客 |
| **Lipsync** | ✅ 必要（子供と母親） |

### Midjourneyプロンプト
```
Smartphone video inside shaking boat cabin, scared 7-year-old Japanese girl clinging to mother, child's frightened face with visible mouth for lipsync, mother holding child protectively with reassuring but worried expression and visible lips, cabin visibly tilting, other anxious passengers in background, harsh fluorescent lighting, iPhone footage capturing family's fear, very shaky handheld, emotional authentic moment, amateur disaster footage aesthetic --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Simple 54NQ |
| **Font** | Hiragino Sans W4 |
| **Size** | 70 |
| **Position Y** | -420px |

**動画生成**: Kling AI 2.6（Lipsyncモード）
**ElevenLabs**: 子供「ママ、怖い…」母親「大丈夫よ、もうすぐ戻るから」
**重要**: 2人の顔・口元がはっきり見える構図

---

## CUT 18 | 激しく揺れる船内
**時間**: 3:28 - 3:43 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 激しく揺れる船内、荷物が滑る |
| **音声** | 悲鳴、物が落ちる音、船体のきしみ |
| **カメラ** | 激しく揺れるスマホ映像、一部フレームアウト |
| **意図** | 状況の急激な悪化 |

### Midjourneyプロンプト
```
Smartphone video of violently shaking boat cabin interior, extreme camera shake and motion blur, passengers gripping seats in panic, bags and belongings sliding across tilted floor, chaotic scene partially out of frame, harsh fluorescent lighting flickering, water visible through heavily tilted window, iPhone footage with severe compression artifacts from rapid motion, terrified screams implied, authentic disaster footage, some frames nearly abstract from movement --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Pika Labs（激しい揺れと物の動き）

---

## CUT 19 | 手すりを握る手
**時間**: 3:43 - 3:50 | **尺**: 7秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 必死に手すりを握る複数の手 |
| **音声** | 荒い呼吸、祈りの声 |
| **カメラ** | スマホが偶然捉えた映像、意図せず |
| **意図** | 恐怖の象徴、必死さ |

### Midjourneyプロンプト
```
Smartphone video accidentally capturing multiple hands desperately gripping metal handrail, white knuckles from tension, different hands - elderly wrinkled, adult, small child's hand, camera not intentionally filming this - accidental footage, extreme shake, partially out of focus, iPhone video in chaos, authentic unintentional documentation of terror, motion blur, harsh lighting, raw emotional moment --ar 16:9 --v 7 --s 150
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Kling AI 2.6（手の震え、揺れ）

---

## CUT 20 | 俯瞰・荒れる海のKAZU I
**時間**: 3:50 - 4:05 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 荒波の中の小さなKAZU I、俯瞰 |
| **テロップ（日）** | 11:30 AM - 波高3メートル |
| **テロップ（英）** | 11:30 AM - Wave height: 3 meters |
| **音声** | 風の咆哮、波の音 |
| **カメラ** | ドローン俯瞰（荒天で不安定） |
| **意図** | 自然の脅威に対する人間の無力さ |

### Midjourneyプロンプト
```
Aerial drone shot of small white boat struggling in violent stormy sea, KAZU I style vessel being tossed by 3-4 meter waves, white foam and spray covering ocean surface, dark threatening grey sky, Shiretoko cliff coastline in background, tiny vulnerable boat versus massive angry ocean, drone footage slightly unstable from wind, cinematic disaster documentary, terrifying sense of scale, 4K broadcast quality --ar 16:9 --v 7 --s 350
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 |
| **Font** | Hiragino Sans W5 |
| **Size** | 65 |
| **Position Y** | -380px |
| **備考** | 警告感を出すためW5使用 |

**動画生成**: Runway Gen-4.5（嵐の海のドラマチックな動き）

---

## CUT 21 | 他社事務所・無線
**時間**: 4:05 - 4:15 | **尺**: 10秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 別の観光船会社の事務所、無線で呼びかける社員 |
| **音声（日）** | 社員「KAZU I、KAZU I、応答してください」 |
| **音声（英）字幕** | "KAZU I, KAZU I, please respond." |
| **カメラ** | 固定→クローズアップ（報道再現風） |
| **意図** | 他社は危険を認識し警告を試みていた |

### Midjourneyプロンプト
```
Documentary shot of Japanese boat company employee urgently calling on VHF marine radio, speaking into handset with desperate expression, "KAZU I" written on notepad nearby, radio equipment on cluttered desk, weather chart showing storm on wall, window showing rough harbor conditions outside, fluorescent office lighting, tense atmosphere, Sony FX6 camera aesthetic, investigative documentary reconstruction, focus pulling to radio equipment --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Simple 54NQ |
| **Font** | Hiragino Sans W5 |
| **Size** | 72 |
| **Position Y** | -420px |
| **備考** | 緊迫感 |

**動画生成**: Kling AI 2.6（人物の動き、口の動き）
**ElevenLabs**: 他社社員音声生成

---

## CUT 22 | 無線機クローズアップ
**時間**: 4:15 - 4:23 | **尺**: 8秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 無線機から聞こえるノイズ、応答なし |
| **音声** | 無線ノイズ、静寂、かすかな声？ |
| **カメラ** | クローズアップ、固定 |
| **意図** | 通信の断絶、不吉な予兆 |

### Midjourneyプロンプト
```
Extreme close-up of VHF marine radio speaker grille, static noise visualization with LED indicators blinking red, worn radio equipment showing years of use, dust particles floating in harsh light beam, no response atmosphere, profound silence implied, Sony FX6 macro shot, documentary detail evidence shot, tension building through mundane object, shallow depth of field --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Pika Labs（LEDの点滅、ノイズ）
**音声**: 無線ノイズ（フリー素材または生成）

---

# 第4章：沈没（SINKING）
**時間**: 4:23 - 6:05 | **カット数**: 11

---

## CUT 23 | テロップ「13時13分」
**時間**: 4:23 - 4:28 | **尺**: 5秒

| 項目 | 内容 |
|------|------|
| **映像** | 黒背景に白テキスト |
| **テロップ（日）** | 13時13分 |
| **テロップ（英）** | 1:13 PM |
| **音声** | 心臓の鼓動音（低く） |
| **意図** | 最初の118番通報の時刻を示す |

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 |
| **Font** | Hiragino Sans W5 |
| **Size** | 70 |
| **Position Y** | 0px（中央） |
| **Animation** | Fade In 0.5秒 |

**備考**: 画像生成不要（編集で作成）

---

## CUT 24 | 浸水の始まり
**時間**: 4:28 - 4:43 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 船首から水が入ってくる、床が濡れ始める |
| **音声** | 水の音、悲鳴、「水だ！」という声 |
| **カメラ** | スマホで撮影、パニック、カメラが水を捉える |
| **意図** | 致命的な事態の始まり |

### Midjourneyプロンプト
```
Smartphone video capturing water flooding into boat cabin from bow, seawater rapidly spreading across floor, passengers' feet getting wet, someone's panicked voice audible, iPhone camera pointing down at rising water in disbelief, shoes and bags getting soaked, extreme camera shake from panic, fluorescent lights reflecting on water surface, authentic disaster footage by terrified passenger, chaotic amateur documentation of emergency --ar 16:9 --v 7 --s 250
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Runway Gen-4.5（水の流れ込み）

---

## CUT 25 | 傾く船内（30度）
**時間**: 4:43 - 4:58 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 30度傾いた船内、乗客がしがみつく |
| **音声（日）** | 「傾いてる！」 |
| **音声（英）字幕** | "It's tilting!" |
| **カメラ** | スマホが傾斜に合わせて傾く、混乱した映像 |
| **意図** | 絶望的な状況 |

### Midjourneyプロンプト
```
Smartphone video of severely tilted boat cabin at 30 degree angle, iPhone held by panicking passenger showing disorienting tilted view, passengers desperately clinging to seats and rails, water pooling and sloshing on lower side, loose objects sliding, life jackets being grabbed, terrified faces partially visible, extreme motion blur and shake, authentic catastrophic moment captured on phone, some frames nearly unusable from chaos --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Simple 54NQ |
| **Font** | Hiragino Sans **W6** |
| **Size** | **75** |
| **Position Y** | -420px |
| **備考** | パニック表現、太字 |

**動画生成**: Pika Labs（傾斜と物の動き）

---

## CUT 26 | 海保・118番受信
**時間**: 4:58 - 5:10 | **尺**: 12秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 海上保安庁の通信室、緊急通報を受ける |
| **テロップ（日）** | 13:13 - 118番通報受信 / 第一管区海上保安本部 |
| **テロップ（英）** | 13:13 - Emergency call received / 1st Regional Coast Guard HQ |
| **音声（日）** | 通信員「118番です。状況を教えてください」 |
| **音声（英）字幕** | "This is 118. Please describe your situation." |
| **カメラ** | 固定→通信員にズーム |
| **意図** | 救助側の視点の始まり |

### Midjourneyプロンプト
```
Japan Coast Guard communication center receiving 118 emergency call, operator with headset looking at multiple monitors showing maritime maps, professional tense atmosphere, male JCG officer in uniform, modern communication equipment with screens and radios, blue-tinted room lighting from monitors, documentary broadcast news style, Sony FX6 camera, zoom in on operator's concentrated face, 4K broadcast quality --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 |
| **Font** | Hiragino Sans W5 |
| **Size** | 65 |
| **Position Y** | -380px |
| **Fill Color** | #FFF5F5（わずかに赤み） |

**動画生成**: Kling AI 2.6（オペレーターの動き）
**ElevenLabs**: 海保通信員音声

---

## CUT 27 | 船長の通報
**時間**: 5:10 - 5:25 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 携帯電話で通報する船長の後ろ姿 |
| **音声（日）** | 船長「浸水している…沈みそうだ…」 |
| **音声（英）字幕** | "We're taking on water... We're going to sink..." |
| **カメラ** | 乗客のスマホが偶然船長を捉える |
| **意図** | 船長の最後の通報 |

### Midjourneyプロンプト
```
Smartphone video glimpsing boat captain from behind making emergency phone call, captain in uniform standing in flooded tilted wheelhouse, water ankle deep and rising, desperately gripping rail while pressing phone to ear, passenger's iPhone accidentally capturing this moment through doorway, chaotic shaky footage, water splashing, authentic last moments documentation, harrowing amateur footage --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Simple 54NQ |
| **Font** | Hiragino Sans W5 |
| **Size** | 72 |
| **Position Y** | -420px |

**動画生成**: Runway Gen-4.5（水と揺れ）
**ElevenLabs**: 船長音声

---

## CUT 28 | 最後の電話
**時間**: 5:25 - 5:40 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 乗客が家族に電話する姿 |
| **音声（日）** | 乗客の声「もう会えないかもしれない…」 |
| **音声（英）字幕** | "I might not see you again..." |
| **カメラ** | スマホが別の乗客の最後の電話を捉える |
| **意図** | 最も心を打つ場面、人間の最後の瞬間 |

### Midjourneyプロンプト
```
Smartphone video capturing fellow passenger making final phone call to family, middle-aged Japanese man with tears on face pressing phone to ear, water now at knee level, life jacket worn, devastating goodbye moment, other passengers visible in flooded tilted cabin, iPhone footage of unbearable human tragedy, shaky emotional documentation, harsh fluorescent light reflecting on rising water, authentic final moments --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Simple 54NQ |
| **Font** | Hiragino Sans **W6** |
| **Size** | **75** |
| **Position Y** | -420px |
| **備考** | 最後の通信、太字 |

**動画生成**: Kling AI 2.6（感情表現）

---

## CUT 29 | 水位上昇
**時間**: 5:40 - 5:50 | **尺**: 10秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | 水位が胸まで上昇、カメラが水面に近づく |
| **音声** | 水の音、呼吸音、泣き声 |
| **カメラ** | スマホを持ち上げて撮影、水面ギリギリ |
| **意図** | 迫りくる最期 |

### Midjourneyプロンプト
```
Smartphone video from chest-high water inside sinking boat, iPhone held above water by desperate hand, water surface filling most of frame, last glimpse of cabin ceiling and flickering lights, life jackets and debris floating, terrifying final perspective, camera about to be submerged, water droplets on lens, authentic drowning POV footage, horrifying intimate last moments, partially underwater view --ar 16:9 --v 7 --s 250
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Runway Gen-4.5（水位上昇アニメーション）

---

## CUT 30 | カメラ水没
**時間**: 5:50 - 5:58 | **尺**: 8秒

| 項目 | 内容 |
|------|------|
| **視点** | A（乗客カメラ）📱 |
| **映像** | カメラが水没、歪む映像、そして暗転 |
| **音声** | 水中の音→無音 |
| **カメラ** | スマホ水没、気泡、歪み、ブラックアウト |
| **意図** | 視点Aの終わり、乗客たちの運命を暗示 |

### Midjourneyプロンプト
```
Smartphone camera submerging underwater, iPhone screen view going under water surface, distorted image through water, air bubbles rising past lens, last glimpse of cabin interior through murky green-blue water, light fading rapidly, phone sinking perspective, screen glitching and corrupting from water damage, transition to darkness and signal loss, final transmission ending, authentic found footage ending --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Pika Labs（水没エフェクト、画面グリッチ）

---

## CUT 31-33 | 黒画面・テロップシーケンス
**時間**: 5:58 - 6:05 | **尺**: 7秒

| CUT | テロップ（日） | テロップ（英） | 尺 | プリセット |
|-----|---------------|---------------|-----|-----------|
| 31 | 14時17分 | 2:17 PM | 2秒 | Book 4492 |
| 32 | 通信途絶 | Communication Lost | 3秒 | Book 4492 |
| 33 | （完全な黒） | (Complete black) | 2秒 | — |

### mCaptions設定（CUT 31-32共通）
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 |
| **Font** | Hiragino Sans W5 |
| **Size** | 65 |
| **Position Y** | 0px（中央） |
| **Animation** | Fade In 0.5秒 → Fade Out 0.5秒 |

**備考**: 画像生成不要（編集で作成）
**音声**: 完全な無音
**意図**: 沈黙が最も雄弁に語る

---

# 第5章：捜索（SEARCH）
**時間**: 6:05 - 8:17 | **カット数**: 7

---

## CUT 34 | 釧路航空基地
**時間**: 6:05 - 6:20 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 釧路航空基地、ヘリが離陸準備 |
| **テロップ（日）** | 13:30 - 第一管区海上保安本部 釧路航空基地 |
| **テロップ（英）** | 13:30 - Kushiro Air Station, 1st Regional Coast Guard |
| **音声** | ヘリのローター音、無線の声 |
| **カメラ** | 報道カメラ風、固定→パン |
| **意図** | 救助活動の開始 |

### Midjourneyプロンプト
```
Japan Coast Guard air station Kushiro, rescue helicopter on helipad preparing for emergency takeoff, JCG helicopter white and red livery with numbers visible, ground crew in orange flight suits running, rotor beginning to spin, overcast urgent sky, news broadcast footage style, Sony FX6 professional camera, documentary rescue operation coverage, 4K broadcast quality --ar 16:9 --v 7 --s 300
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 |
| **Font** | Hiragino Sans W4 |
| **Size** | 65 |
| **Position Y** | -380px |

**動画生成**: Runway Gen-4.5（ローター回転）

---

## CUT 35 | 巡視船「くなしり」出航
**時間**: 6:20 - 6:38 | **尺**: 18秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 巡視船が港を出る |
| **テロップ（日）** | 巡視船「くなしり」 |
| **テロップ（英）** | Patrol Vessel "Kunashiri" |
| **音声** | 汽笛、エンジン音、波 |
| **カメラ** | 岸壁からの報道カメラ、追従 |
| **意図** | 海上からの捜索開始 |

### Midjourneyプロンプト
```
Japan Coast Guard patrol vessel departing urgently from port, JCG ship Kunashiri style with "くなしり" name visible on hull, white hull with blue diagonal stripe, bow cutting through harbor water, crew visible on deck in orange gear, dramatic grey sky, news camera tracking shot from pier, documentary maritime rescue coverage, Sony FX6 telephoto lens, professional broadcast footage --ar 16:9 --v 7 --s 300
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 |
| **Font** | Hiragino Sans W4 |
| **Size** | 65 |
| **Position Y** | -380px |

**動画生成**: Runway Gen-4.5（船の動き、波）

---

## CUT 36 | ヘリコプター捜索
**時間**: 6:38 - 6:58 | **尺**: 20秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 知床の海上を捜索するヘリコプター |
| **音声** | ローター音、無線通信 |
| **カメラ** | 地上/船からの望遠 |
| **意図** | 大規模な捜索活動 |

### Midjourneyプロンプト
```
Japan Coast Guard rescue helicopter flying low over rough grey Sea of Okhotsk, searching in grid pattern, helicopter spotlight scanning dark waters, Shiretoko Peninsula dramatic cliffs in background, white and red JCG helicopter against stormy sky, news telephoto lens shot from patrol vessel, documentary aerial search coverage, professional broadcast footage, 4K quality --ar 16:9 --v 7 --s 300
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Runway Gen-4.5（ヘリの飛行）

---

## CUT 37 | ヘリからの視点
**時間**: 6:58 - 7:18 | **尺**: 20秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | ヘリから見下ろす海面、何も見つからない |
| **音声（日）** | ローター音、無線「視認できず」 |
| **音声（英）字幕** | "No visual contact." |
| **カメラ** | ヘリ搭載カメラ（FLIR風） |
| **意図** | 広大な海、見つからない絶望感 |

### Midjourneyプロンプト
```
Aerial view from rescue helicopter searching vast empty ocean, looking down at rough grey sea with whitecaps, no survivors visible, Shiretoko coastline in far distance, helicopter window frame visible in shot, FLIR thermal camera display overlay suggestion, desperate futile search atmosphere, JCG rescue operation footage, sense of overwhelming hopelessness, professional aerial search documentation --ar 16:9 --v 7 --s 250
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Simple 54NQ |
| **Font** | Hiragino Sans W4 |
| **Size** | 70 |
| **Position Y** | -420px |

**動画生成**: Kling AI 2.6（ヘリからの揺れ）

---

## CUT 38 | 日没
**時間**: 7:18 - 7:38 | **尺**: 20秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 知床の海に沈む夕日 |
| **テロップ（日）** | 17:30 - 日没 / 捜索は夜を徹して続けられた |
| **テロップ（英）** | 17:30 - Sunset / The search continued through the night |
| **音声** | 波の音、風、遠くのエンジン音 |
| **カメラ** | 三脚固定、ゆっくりズームアウト |
| **意図** | 時間の経過、希望の消失 |

### Midjourneyプロンプト
```
Sunset over Sea of Okhotsk near Shiretoko Peninsula, dramatic blood orange and crimson sky reflecting on dark restless water, silhouette of rugged cliffs, melancholic devastating atmosphere, fading hope symbolism, single patrol vessel visible as tiny silhouette on horizon still searching, documentary contemplative landscape shot, Sony FX6 tripod mounted, slow zoom out, cinematic color grading --ar 16:9 --v 7 --s 350
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 + Minimalistic 29G3 |
| **Font** | Hiragino Sans W3 |
| **Size** | 60 |
| **Position Y** | -380px（時刻）/ -420px（ナレーション） |
| **Animation** | Fade In 1.5秒 |

**動画生成**: Runway Gen-4.5（夕日のタイムラプス風）

---

## CUT 39 | 夜間捜索
**時間**: 7:38 - 8:02 | **尺**: 24秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 投光器で照らされた夜の海、巡視船 |
| **音声** | 波、エンジン音、無線 |
| **カメラ** | 船上カメラ、報道映像風 |
| **意図** | 諦めない捜索、海保の使命感 |

### Midjourneyプロンプト
```
Night search operation at sea, Japan Coast Guard patrol vessel with multiple powerful searchlights sweeping across black ocean, spotlight beams cutting through darkness and mist, crew silhouettes visible on deck, rough dark water reflecting lights, stars barely visible through overcast, news documentary night footage, high ISO grain visible, Sony FX6 low light capability, haunting rescue operation atmosphere --ar 16:9 --v 7 --s 300
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Pika Labs（サーチライトの動き）

---

## CUT 40 | 港で待つ家族
**時間**: 8:02 - 8:17 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 夜のウトロ港、待ち続ける家族のシルエット |
| **音声** | 波の音、風、静寂 |
| **カメラ** | 遠景、三脚固定（報道の敬意ある距離） |
| **意図** | 待つ者の苦しみ |

### Midjourneyプロンプト
```
Night scene at Utoro Port, distant silhouettes of families waiting at harbor edge, harbor lights reflecting on dark water, people huddled in small groups some with blankets, news camera maintaining respectful distance, overcast night sky, devastating vigil atmosphere, documentary observational shot preserving dignity, Sony FX6 telephoto lens, figures small in wide frame conveying isolation and grief --ar 16:9 --v 7 --s 250
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Kling AI 2.6（静かな動き）

---

# 第6章：記憶（MEMORY）
**時間**: 8:17 - 10:15 | **カット数**: 13

---

## CUT 41 | テロップ「72時間後」
**時間**: 8:17 - 8:22 | **尺**: 5秒

| 項目 | 内容 |
|------|------|
| **映像** | 黒背景に白テキスト |
| **テロップ（日）** | 72時間後 |
| **テロップ（英）** | 72 hours later |
| **音声** | 無音 |

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 |
| **Font** | Hiragino Sans W4 |
| **Size** | 70 |
| **Position Y** | 0px（中央） |
| **Animation** | Fade In 1秒 |

**備考**: 画像生成不要（編集で作成）

---

## CUT 42 | 救命胴衣、発見
**時間**: 8:22 - 8:42 | **尺**: 20秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 海面に浮かぶオレンジ色の救命胴衣 |
| **テロップ（日）** | 翌朝 - 救命胴衣発見 |
| **テロップ（英）** | Next morning - Life jackets found |
| **音声** | 波の音、遠くのヘリ音 |
| **カメラ** | 海面レベル、船からの撮影 |
| **意図** | 発見、しかし希望ではなく悲しみ |

### Midjourneyプロンプト
```
Orange life jacket floating alone on grey ocean surface, single life vest drifting in gentle waves, overcast somber sky, Shiretoko coast barely visible through mist in background, profound symbol of tragedy, news camera from patrol vessel slowly approaching, documentary floating debris evidence shot, devastating discovery moment, Sony FX6 telephoto tracking the life jacket --ar 16:9 --v 7 --s 250
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Book 4492 |
| **Font** | Hiragino Sans W4 |
| **Size** | 65 |
| **Position Y** | -380px |

**動画生成**: Runway Gen-4.5（波に揺れる救命胴衣）

---

## CUT 43 | 担架、敬礼
**時間**: 8:42 - 9:02 | **尺**: 20秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 担架で運ばれる遺体、敬礼する海上保安官 |
| **音声** | 無音（または静かな波音のみ） |
| **カメラ** | 三脚固定、やや遠景（敬意ある距離） |
| **意図** | 尊厳、敬意、鎮魂 |

### Midjourneyプロンプト
```
Japan Coast Guard officers in formal salute as stretcher passes, white-covered stretcher being carried with utmost respect, officers in dress uniform standing at attention in line, harbor pier with patrol vessel in background, overcast solemn grey sky, profound respect and mourning ceremony, news camera maintaining dignified distance, documentary coverage of recovery operation, deep human dignity in tragedy --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Kling AI 2.6（敬礼の動き）

---

## CUT 44 | 港に並ぶ花
**時間**: 9:02 - 9:17 | **尺**: 15秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | ウトロ港に並べられた花と写真 |
| **音声** | 風の音、遠くの波 |
| **カメラ** | 三脚固定、ゆっくりパン |
| **意図** | 追悼、コミュニティの悲しみ |

### Midjourneyプロンプト
```
Memorial flowers and photos arranged at Utoro Port waterfront, white chrysanthemums and colorful bouquets, framed photos with black ribbons, burning incense, small offerings, Japanese memorial style, wind gently moving flowers, overcast grey sky, profound community grief, documentary slow pan across memorial, Sony FX6 on slider, respectful intimate coverage of mourning --ar 16:9 --v 7 --s 200
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Runway Gen-4.5（ゆっくりしたパン）

---

## CUT 45-46 | 水中イメージ
**時間**: 9:17 - 9:47 | **尺**: 30秒

| CUT | 内容 | テロップ（日） | テロップ（英） | 尺 |
|-----|------|---------------|---------------|-----|
| 45 | 深い青の水中、光が差し込む | — | — | 15秒 |
| 46 | 水中に浮かぶテロップ | 26名全員が亡くなった | All 26 perished | 15秒 |

### CUT 45 Midjourneyプロンプト
```
Deep underwater scene with ethereal light rays penetrating from surface above, deep blue ocean water with floating particles like souls ascending, peaceful yet profoundly melancholic atmosphere, abstract memorial imagery, light representing spirits rising, cinematic underwater photography, anamorphic lens flare through water, contemplative final resting place visualization, 4K dreamlike quality --ar 16:9 --v 7 --s 300
```

### mCaptions設定（CUT 46）
| 項目 | 設定 |
|------|------|
| **プリセット** | Minimalistic 29G3 |
| **Font** | Hiragino Sans W3 |
| **Size** | 70 |
| **Position Y** | 0px（中央） |
| **Animation** | Fade In 3秒 |

**動画生成**: Pika Labs（光の揺らぎ、粒子の動き）

---

## CUT 47-50 | 統計テロップシーケンス
**時間**: 9:47 - 10:00 | **尺**: 13秒

| CUT | テロップ（日） | テロップ（英） | 尺 |
|-----|---------------|---------------|-----|
| 47 | 乗客乗員26名 | 26 passengers and crew | 3秒 |
| 48 | 子供2名を含む | Including 2 children | 3秒 |
| 49 | 6名は今も行方不明 | 6 remain missing to this day | 4秒 |
| 50 | （無音、黒画面） | (Silence and black) | 3秒 |

### mCaptions設定（CUT 47-49共通）
| 項目 | 設定 |
|------|------|
| **プリセット** | Minimalistic 29G3 |
| **Font** | Hiragino Sans W3 |
| **Size** | 65〜70 |
| **Position Y** | 0px（中央） |
| **Animation** | Fade In 1秒 → Fade Out 0.5秒 |

**備考**: 画像生成不要（編集で作成）
**音声**: 完全な無音

---

## CUT 51 | 知床の海（現在）
**時間**: 10:00 - 10:08 | **尺**: 8秒

| 項目 | 内容 |
|------|------|
| **視点** | B（ドキュメンタリー）🎬 |
| **映像** | 穏やかな知床の海、何事もなかったかのように |
| **音声** | 穏やかな波音 |
| **カメラ** | ドローン固定、ロングショット |
| **意図** | 自然は変わらず続く、人間の悲劇を飲み込んで |

### Midjourneyプロンプト
```
Calm peaceful Sea of Okhotsk near Shiretoko Peninsula on clear day, serene blue water with gentle waves, dramatic cliff coastline, nature unchanged and indifferent to human tragedy, beautiful yet haunting landscape, stunning natural beauty that conceals horror below, drone wide establishing shot, DJI cinematic footage, contemplative documentary ending, 4K pristine quality --ar 16:9 --v 7 --s 300
```

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **テロップ** | なし |

**動画生成**: Runway Gen-4.5（穏やかな波）

---

## CUT 52 | 最終テロップ
**時間**: 10:08 - 10:12 | **尺**: 4秒

| 項目 | 内容 |
|------|------|
| **映像** | 黒背景 |
| **テロップ（日）** | 二度と繰り返さないために |
| **テロップ（英）** | So that this never happens again |
| **音声** | 無音 |

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Minimalistic 29G3 |
| **Font** | Hiragino Sans W3 |
| **Size** | 70 |
| **Position Y** | 0px（中央） |
| **Animation** | Fade In 2秒 |

**備考**: 画像生成不要（編集で作成）

---

## CUT 53 | エンドクレジット
**時間**: 10:12 - 10:15+ | **尺**: 3秒+

| 項目 | 内容 |
|------|------|
| **映像** | 黒背景にクレジット |
| **テロップ（日）** | KAZU I - 72時間 / この作品はAI技術で制作されました / 犠牲者のご冥福をお祈りします |
| **テロップ（英）** | KAZU I - 72 Hours / This film was created using AI technology / In memory of the victims |
| **音声** | 穏やかな波音（フェードアウト） |

### mCaptions設定
| 項目 | 設定 |
|------|------|
| **プリセット** | Classic 141L |
| **Font** | Hiragino Sans W3 |
| **Size** | 85（タイトル）/ 55（クレジット） |
| **Position Y** | 0px（中央） |
| **Animation** | Fade In 2秒 → Hold 3秒 → Fade Out 2秒 |

**備考**: 画像生成不要（編集で作成）

---

# 📊 制作統計

| 項目 | 数値 |
|------|------|
| **総カット数** | 53 |
| **画像生成必要カット** | 40 |
| **Lipsync必要カット** | 2（CUT 9, 17） |
| **ElevenLabs音声カット** | 7 |
| **テロップのみカット** | 13 |
| **視点A（乗客カメラ）📱** | 20カット |
| **視点B（ドキュメンタリー）🎬** | 20カット |

---

# 🎬 動画生成ツール使用一覧

| ツール | 使用カット | 主な用途 |
|--------|-----------|---------|
| **Kling AI 2.6** | CUT 4, 5, 7, 9, 11, 13, 14, 17, 19, 21, 26, 37, 40, 43 | Lipsync、人物の動き |
| **Runway Gen-4.5** | CUT 2, 6, 8, 10, 12, 14B, 15, 20, 24, 27, 29, 34, 35, 36, 38, 42, 44, 51 | シネマティック、ドローン |
| **Pika Labs** | CUT 6B, 16, 18, 22, 30, 39, 45 | 特殊効果、水中、夜間 |

---

# 🔊 ElevenLabs音声生成一覧

| CUT | キャラクター | セリフ（日本語） | セリフ（英語字幕） |
|-----|-------------|-----------------|-------------------|
| 2 | NHKアナウンサー | 知床半島沖で観光船と連絡が取れなくなっている... | We have reports that contact has been lost... |
| 9 | 子供 | ママ見て！海だよ！ | Mommy, look! It's the ocean! |
| 17 | 子供・母親 | ママ、怖い… / 大丈夫よ、もうすぐ戻るから | Mommy, I'm scared... / It's okay, we'll be back soon |
| 21 | 他社社員 | KAZU I、KAZU I、応答してください | KAZU I, KAZU I, please respond |
| 26 | 海保通信員 | 118番です。状況を教えてください | This is 118. Please describe your situation |
| 27 | 船長 | 浸水している…沈みそうだ… | We're taking on water... We're going to sink... |
| 28 | 乗客 | もう会えないかもしれない… | I might not see you again... |

---

# ⚠️ WAIFF提出向け注意事項

## 技術要件
| 項目 | 要件 | 対応 |
|------|------|------|
| **解像度** | 4K (3840×2160) | ✅ |
| **アスペクト比** | 16:9 | ✅ |
| **尺** | 5〜10分 | ✅（約10分） |
| **AI使用ツール** | 3つ以上 | ✅（6つ以上） |
| **英語字幕** | 必須 | ✅ |

## 字幕セーフエリア
- 画面端から **10%以上** 内側
- 4K (3840×2160) → 上下左右 **384px以上** マージン

## コントラスト
- **WCAG AA基準**（4.5:1以上）
- 白文字 + 黒シャドウで対応

## 表示時間
- セリフ字幕: **最低1.5秒**
- 統計テロップ: **3秒以上**

---

# 📅 更新履歴

| 日付 | 内容 |
|------|------|
| 2025-02-01 | 完全版ドキュメント作成（絵コンテ + mCaptions設定統合） |

---

**制作**: KAZU I - 72時間 プロジェクト
**出品先**: WAIFF KYOTO 2026（世界AI国際映画祭）
