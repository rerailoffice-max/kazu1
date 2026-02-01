# 🎬 KAZU I - 72時間 | Notion完全版 v2.0

> **最終更新**: 2025年2月1日
> **出品先**: WAIFF KYOTO 2026
> **総尺**: 10分00秒（600秒）
> **総カット**: 89カット

---

# 📋 目次

1. [作品概要](#1-作品概要)
2. [制作ワークフロー](#2-制作ワークフロー)
3. [全89カット詳細](#3-全89カット詳細)
4. [mCaptions設定ガイド](#4-mcaptions設定ガイド)
5. [ElevenLabs音声一覧](#5-elevenlabs音声一覧)
6. [制作統計](#6-制作統計)

---

# 1. 作品概要

## 基本情報

| 項目 | 内容 |
|------|------|
| **タイトル** | KAZU I - 72時間 |
| **英題** | KAZU I - 72 Hours |
| **尺** | 10分00秒（600秒） |
| **解像度** | 4K (3840×2160) / 24fps / 16:9 |
| **総カット数** | 89カット |
| **出品先** | WAIFF KYOTO 2026（AI国際映画祭） |

## 構成概要

| 章 | タイトル | 時間 | カット数 | 雰囲気 |
|----|---------|------|---------|--------|
| **序章** | プロローグ | 0:00-0:25 | 4 | 衝撃・導入 |
| **第1章** | 出発 | 0:25-1:45 | 15 | 平穏・期待 |
| **第2章** | 航海 | 1:45-3:15 | 14 | 喜び・伏線 |
| **第3章** | 異変 | 3:15-4:30 | 12 | 不安・緊張 |
| **第4章** | 沈没 | 4:30-6:15 | 18 | 恐怖・絶望 |
| **第5章** | 捜索 | 6:15-8:00 | 14 | 焦燥・希望 |
| **第6章** | 鎮魂 | 8:00-10:00 | 12 | 悲しみ・祈り |

## 視点の定義

| 視点 | 記号 | 説明 | 映像特徴 |
|------|------|------|----------|
| **視点A** | 📱 | 乗客のスマートフォン映像 | 手ブレ、iPhone画質、REC表示 |
| **視点B** | 🎬 | ドキュメンタリー（客観） | プロ撮影、ドローン、報道映像 |

---

# 2. 制作ワークフロー

## AI制作ツール一覧

| ツール | 用途 | 対象カット |
|--------|------|-----------|
| **Midjourney V7** | 風景・広角・ドローン・iPhone映像生成 | 約50カット |
| **NanoBananaPro** | 人物・顔・Lipsync対応画像 | 約15カット |
| **Veo 3.1** | Frame A→B補間・動画生成 | 65カット |
| **ElevenLabs** | 日本語音声合成 | 9カット（Lipsync） |
| **Kling AI** | Lipsync動画生成 | 9カット |
| **mCaptions** | 字幕・テロップ | 全カット |

## 動画生成ワークフロー

```
1. Frame A（始まり画像）生成 → Midjourney V7 / NanoBananaPro
2. Frame B（終わり画像）生成 → Midjourney V7 / NanoBananaPro
3. 動画生成 → Veo 3.1 で Frame A → Frame B を補間
4. Lipsyncカットのみ → ElevenLabs音声 + Kling AI
5. 編集・字幕 → Final Cut Pro + mCaptions
```

---

# 3. 全89カット詳細

---

## 序章：プロローグ（0:00-0:25）| 4カット

---

### CUT 1 | 黒画面・日付
**時間**: 0:00-0:04 | **尺**: 4秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 完全な黒画面 |
| **テロップ（日）** | 2022年4月23日 |
| **テロップ（英）** | April 23, 2022 |
| **音声** | 完全な無音 |

---

### CUT 2 | 黒画面・場所
**時間**: 0:04-0:08 | **尺**: 4秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 完全な黒画面 |
| **テロップ（日）** | 北海道・知床半島沖 |
| **テロップ（英）** | Off the coast of Shiretoko Peninsula, Hokkaido |
| **音声** | 遠くの波音がかすかにフェードイン |

---

### CUT 3 | NHKニュース速報
**時間**: 0:08-0:18 | **尺**: 10秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | テレビ画面のニュース速報 |
| **テロップ** | 【速報】知床 観光船と連絡取れず |
| **音声（日）** | NHKアナウンサー「知床半島沖で観光船と連絡が取れなくなっているという情報が入りました」 |
| **音声（英）字幕** | "We have reports that contact has been lost with a tour boat off the coast of Shiretoko Peninsula." |

#### Midjourneyプロンプト
**Frame A**:
```
Japanese TV news broadcast screen, NHK style, red "速報" banner just appearing at top, news anchor desk background, broadcast beginning, CRT TV texture, 16:9 --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Japanese TV news broadcast screen, NHK style breaking news fully displayed, red "速報" banner, "知床 観光船と連絡取れず" text prominent, map of Shiretoko Peninsula on screen, news ticker at bottom, CRT TV texture --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
TV news broadcast animation. Breaking news banner pulses and slides in. Text "知床 観光船と連絡取れず" fades in. Map graphic appears from right. News ticker scrolls at bottom. CRT flicker effect. Static camera. Duration: 10 seconds.
```

---

### CUT 4 | 事務所への移行（引き）
**時間**: 0:18-0:25 | **尺**: 7秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 事故を起こした船会社事務所（広角・引き） |
| **テロップ（日）** | これは、その12時間前の記録である。 |
| **テロップ（英）** | This is a record from 12 hours before. |
| **音声** | テレビ音声がフェードアウト→静寂 |

#### Midjourneyプロンプト
**Frame A**:
```
Fading TV news screen with "速報" banner, transitioning to darkness, broadcast audio implied fading --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Wide establishing shot of small Japanese tour boat company office, KAZU I operator office, cramped space, cluttered desks with papers, old CRT TV showing weather, fluorescent lights, calendar April 2022, dirty window with harbor view, ashtrays, negligent atmosphere, documentary style, Sony FX6 wide --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Transition from TV news to boat company office. News fades out. Wide shot of cramped Japanese office fades in. Fluorescent lights harsh. TV in corner shows weather warning being ignored. Ominous atmosphere. Foreshadowing tension. This is where tragedy began. Duration: 7 seconds.
```

---

## 第1章：出発（0:25-1:45）| 15カット

---

### CUT 5 | 事務所・波浪注意報（テレビ）
**時間**: 0:25-0:30 | **尺**: 5秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 事務所のテレビ、波浪注意報表示 |
| **音声** | テレビの気象情報音声 |
| **意図** | 【重要伏線】警報を無視した証拠 |

#### Midjourneyプロンプト
**Frame A**:
```
Old CRT television in dim Japanese office, weather broadcast starting, screen glow in darkness --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Close-up of CRT television showing "波浪注意報" wave warning text clearly, weather map visible, TV screen glow, documentary evidence shot --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Camera slowly pushes in toward TV showing weather warning. "波浪注意報" text becomes clearer. TV screen flickers with CRT effect. Ominous revelation of ignored warning. Duration: 5 seconds.
```

---

### CUT 6 | 事務所・社員の無関心
**時間**: 0:30-0:35 | **尺**: 5秒 | **視点**: 🎬 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | テレビを背にして電話する社員 |
| **音声** | 電話の声「はい、予定通り出航します」 |
| **意図** | 警告無視の決定的瞬間 |

#### Midjourneyプロンプト
**Frame A**:
```
Japanese office worker in boat company, standing with back to TV showing warning, phone not yet to ear, cluttered desk visible --ar 16:9
```

**Frame B**:
```
Japanese office worker on phone, back still turned to TV warning, casual posture, speaking into phone, negligent body language, damning evidence moment --ar 16:9
```

#### Veo 3.1プロンプト
```
Office worker picks up phone and speaks while TV warning plays behind him ignored. His back remains turned to the warning. Casual indifferent demeanor. "予定通り出航します" implied in his manner. Documentary damning evidence. Duration: 5 seconds.
```

---

### CUT 7 | 車窓から見える海（遠景）
**時間**: 0:35-0:42 | **尺**: 7秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 車窓から見えるオホーツク海（遠景） |
| **音声** | 車内の静かな音、遠くのカモメ |
| **カメラ** | iPhone撮影、軽い揺れ |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone video through car window, distant Sea of Okhotsk barely visible, Shiretoko mountains in far background, morning overcast, window reflection, iPhone video, timestamp "09:15" --ar 16:9 --v 7 --s 150
```

**Frame B**:
```
Smartphone video through car window, Sea of Okhotsk closer now, coastline more visible, overcast sky, window reflection shifting, iPhone video quality, tourist anticipation --ar 16:9 --v 7 --s 150
```

#### Veo 3.1プロンプト
```
Smartphone footage through moving car window. Sea gradually becomes more visible as car approaches coast. Subtle car vibration. Window reflections shift. Auto-exposure adjusts. Tourist anticipation atmosphere. Duration: 7 seconds.
```

---

### CUT 8 | 車窓・ウトロ港が近づく
**時間**: 0:42-0:50 | **尺**: 8秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | ウトロ港が見えてくる |
| **音声** | 子供の声「あ、港だ！」 |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone video through car window, Utoro Port becoming visible in distance, fishing boats appearing, iPhone video, timestamp "09:25" --ar 16:9 --v 7 --s 150
```

**Frame B**:
```
Smartphone video through car window, Utoro Port clearly visible now, harbor detail, fishing boats, small coastal town, iPhone video, timestamp "09:28", excited tourist perspective --ar 16:9 --v 7 --s 150
```

#### Veo 3.1プロンプト
```
Smartphone footage approaching Utoro Port. Harbor gets progressively clearer and more detailed. Car vibration. Child's voice "あ、港だ！" implied by excitement in framing. Timestamp advances. Duration: 8 seconds.
```

---

### CUT 9 | 駐車場・車を降りる
**時間**: 0:50-0:54 | **尺**: 4秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 車から降りる足元 |
| **音声** | 砂利を踏む音、風 |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone POV inside car, looking at car floor mat, door beginning to open, gravel parking lot glimpsed outside --ar 16:9 --v 7 --s 150
```

**Frame B**:
```
Smartphone POV, feet stepping onto gravel parking lot, Japanese tourist shoes, casual downward angle, motion blur --ar 16:9 --v 7 --s 150
```

#### Veo 3.1プロンプト
```
POV smartphone footage exiting car. Door opens. View shifts down erratically. Feet step onto gravel. Gravel crunch implied by motion. Brief disorienting movement typical of tourist casually filming. Duration: 4 seconds.
```

---

### CUT 10 | 駐車場・港を見渡す
**時間**: 0:54-1:00 | **尺**: 6秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 駐車場から港を見渡す |
| **音声** | 港の環境音、カモメ |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone video from parking lot, camera rising from ground level, beginning to pan toward harbor --ar 16:9 --v 7 --s 150
```

**Frame B**:
```
Smartphone video panning across Utoro Port from parking lot, fishing boats, harbor buildings, overcast sky, tourist arrival establishing shot --ar 16:9 --v 7 --s 150
```

#### Veo 3.1プロンプト
```
Smartphone footage panning across Utoro Port. Camera rises from ground and pans right showing harbor panorama. Fishing boats, buildings, overcast sky. Handheld movement. Tourist arrival moment. Duration: 6 seconds.
```

---

### CUT 11 | KAZU I初登場（遠景）
**時間**: 1:00-1:06 | **尺**: 6秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 港に停泊するKAZU I（遠景） |
| **音声** | 「あれが今日乗る船かな？」 |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone video of Utoro Port, KAZU I small white boat visible in distance among fishing boats --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Same view, tourist has spotted KAZU I, slight zoom beginning toward white boat --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Tourist spots KAZU I in harbor. Camera movement toward boat. Slight zoom. Excitement of finding their boat. Duration: 6 seconds.
```

---

### CUT 12 | KAZU Iに近づく
**時間**: 1:06-1:12 | **尺**: 6秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | KAZU Iに歩いて近づく |
| **音声** | 足音、エンジンのアイドリング |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone video walking toward KAZU I boat at dock, white vessel medium distance, handheld movement, harbor atmosphere --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
KAZU I getting closer, more detail visible, walking continues, hull details clearer --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Tourist walks toward KAZU I. Boat gets progressively closer. Handheld movement. Anticipation. Duration: 6 seconds.
```

---

### CUT 13 | KAZU I船体アップ
**時間**: 1:12-1:16 | **尺**: 4秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | KAZU Iの船名が見える船体 |
| **音声** | エンジン音 |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone close-up of KAZU I boat hull approaching, vessel name beginning to be visible --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Clear view of KAZU I hull and name, white painted hull, harbor water below, tourist filming boat they will board --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Close-up of KAZU I hull. Name clearly visible. Tourist documenting boat. Duration: 4 seconds.
```

---

### CUT 14 | 乗船受付・受付カウンター
**時間**: 1:16-1:20 | **尺**: 4秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 受付カウンター |
| **音声** | 「お名前をこちらにご記入ください」 |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone video of tour boat company counter, faded brochures, staff barely visible --ar 16:9 --v 7 --s 150
```

**Frame B**:
```
Counter view clearer, staff welcoming, registration forms visible, fluorescent lighting --ar 16:9 --v 7 --s 150
```

#### Veo 3.1プロンプト
```
Counter view at tour company. Staff interaction implied. Forms being prepared. Duration: 4 seconds.
```

---

### CUT 15 | 乗船受付・記入する手元
**時間**: 1:20-1:26 | **尺**: 6秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 乗船名簿に記入する手元 |
| **音声** | ペンの音 |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone close-up of blank registration form, pen positioned, counter background --ar 16:9 --v 7 --s 150
```

**Frame B**:
```
Hands writing on form, pen moving, Japanese characters being written, passenger registration --ar 16:9 --v 7 --s 150
```

#### Veo 3.1プロンプト
```
Close-up of hands writing on passenger form. Pen moves across paper. Natural writing motion. Duration: 6 seconds.
```

---

### CUT 16 | 乗船・タラップ下から
**時間**: 1:26-1:30 | **尺**: 4秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | タラップの下から上を見上げる |
| **音声** | 金属音、他の乗客の足音 |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone POV at bottom of metal gangway, looking up at boat, passengers ahead --ar 16:9 --v 7 --s 150
```

**Frame B**:
```
Same angle, other passengers climbing gangway, boat deck visible above --ar 16:9 --v 7 --s 150
```

#### Veo 3.1プロンプト
```
Looking up at gangway. Other passengers climbing ahead. Boarding anticipation. Duration: 4 seconds.
```

---

### CUT 17 | 乗船・タラップを上がる
**時間**: 1:30-1:34 | **尺**: 4秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | タラップを上がるPOV |
| **音声** | 金属のタラップ音 |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone POV on gangway, climbing, handrail visible, harbor water below --ar 16:9 --v 7 --s 150
```

**Frame B**:
```
Almost at top of gangway, boat deck approaching, handheld shake --ar 16:9 --v 7 --s 150
```

#### Veo 3.1プロンプト
```
POV climbing gangway. Handheld shake. Metal sounds implied. Boat deck approaching. Duration: 4 seconds.
```

---

### CUT 18 | デッキに到着
**時間**: 1:34-1:38 | **尺**: 4秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | デッキに足を踏み入れる |
| **音声** | 「いらっしゃいませ」 |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone POV stepping onto boat deck, crew member visible --ar 16:9 --v 7 --s 150
```

**Frame B**:
```
On deck, crew member welcoming, other passengers visible, boat interior glimpsed --ar 16:9 --v 7 --s 150
```

#### Veo 3.1プロンプト
```
Stepping onto deck. Crew welcomes passengers. First moments aboard. Duration: 4 seconds.
```

---

### CUT 19 | 船内・席を探す
**時間**: 1:38-1:45 | **尺**: 7秒 | **視点**: 📱 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | 船内を歩いて席を探す |
| **音声** | 乗客の話し声、子供の声 |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone video entering boat cabin, passengers settling, looking for seats --ar 16:9
```

**Frame B**:
```
Inside cabin, families with children visible, warm atmosphere, soft daylight through windows --ar 16:9
```

#### Veo 3.1プロンプト
```
POV walking through boat cabin finding seats. Passengers settling in. Families with children visible. Warm happy atmosphere. Duration: 7 seconds.
```

---

## 第2章：航海（1:45-3:15）| 14カット

---

### CUT 20 | 船内・窓の外を見る子供【Lipsync】⭐
**時間**: 1:45-1:52 | **尺**: 7秒 | **視点**: 📱 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | 窓の外を見る子供の横顔 |
| **音声（日）** | 子供「ママ見て！海だよ！」 |
| **音声（英）字幕** | "Mommy, look! It's the ocean!" |
| **Lipsync** | ✅ 必要 |

#### Midjourneyプロンプト（NanoBananaPro）
**Frame A**:
```
Smartphone video of 7-year-old Japanese girl by window, looking outside, profile view, mouth visible but neutral expression --ar 16:9
```

**Frame B**:
```
Same girl pointing excitedly at window, joyful expression, mouth open speaking, profile with clear lips for lipsync, ocean visible through window --ar 16:9
```

#### Veo 3.1プロンプト
```
Child looks out window then turns excitedly. She points and speaks "ママ見て！海だよ！" with clear mouth movement for lipsync. Natural child energy. Duration: 7 seconds.
```

#### ElevenLabs
- **キャラクター**: 子供（7歳女児）
- **セリフ**: 「ママ見て！海だよ！」

---

### CUT 21 | 出航アナウンス
**時間**: 1:52-1:58 | **尺**: 6秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 船内スピーカー |
| **音声** | 「まもなく出航いたします」 |

#### Midjourneyプロンプト
**Frame A**:
```
Boat cabin interior, speaker on ceiling, passengers settling --ar 16:9 --v 7 --s 150
```

**Frame B**:
```
Same view, announcement moment, passengers react slightly --ar 16:9 --v 7 --s 150
```

#### Veo 3.1プロンプト
```
Cabin interior. Announcement plays. Passengers settle. Duration: 6 seconds.
```

---

### CUT 22 | 出航・ロープを解く
**時間**: 1:58-2:03 | **尺**: 5秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 係留ロープを解く作業員 |
| **音声** | ロープの音、エンジン音 |

#### Midjourneyプロンプト
**Frame A**:
```
Harbor worker at mooring rope, boat still secured, documentary style --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Rope being released, KAZU I beginning to move away from pier --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Documentary shot of mooring rope released. Boat pulls away from pier. Duration: 5 seconds.
```

---

### CUT 23 | 出航・港を離れる（船上から）
**時間**: 2:03-2:10 | **尺**: 7秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | デッキから港が離れていく |
| **音声** | 波の音、エンジン音 |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone from deck, harbor close, just departed --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Harbor receding in distance, wake visible in water, tourist filming departure --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Tourist filming departure from deck. Harbor gets smaller. Wake forms behind boat. Duration: 7 seconds.
```

---

### CUT 24 | 出航・ドローン俯瞰
**時間**: 2:10-2:18 | **尺**: 8秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 港を離れるKAZU I（空撮） |
| **テロップ（日）** | 午前10時00分 出航 |
| **テロップ（英）** | 10:00 AM — Departure |

#### Midjourneyプロンプト
**Frame A**:
```
Aerial drone shot, KAZU I just departing Utoro Port, small wake beginning --ar 16:9 --v 7 --s 300
```

**Frame B**:
```
Higher angle aerial, KAZU I with clear wake trail, Shiretoko coastline visible, cinematic --ar 16:9 --v 7 --s 300
```

#### Veo 3.1プロンプト
```
Aerial drone shot, KAZU I departing. Wake trail forms. Port shrinks. Shiretoko coastline visible. Cinematic. Duration: 8 seconds.
```

---

### CUT 25 | 航海・知床の海
**時間**: 2:18-2:26 | **尺**: 8秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 船から見る知床の海 |
| **音声** | 波の音、風 |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone from deck, sea horizon, beginning of scenic filming --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Wider ocean view with Shiretoko coastline visible, gentle waves, overcast sky --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Tourist filming ocean panorama from deck. Gentle waves. Peaceful atmosphere. Duration: 8 seconds.
```

---

### CUT 26 | 航海・断崖を見上げる
**時間**: 2:26-2:32 | **尺**: 6秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 知床の断崖を見上げる |
| **音声** | 歓声 |

#### Midjourneyプロンプト
**Frame A**:
```
Smartphone looking up at cliffs, beginning of dramatic view --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Dramatic Shiretoko cliff view with digital zoom, towering cliffs, tourist awe --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Looking up at towering Shiretoko cliffs. Tourist awe. Slight digital zoom. Duration: 6 seconds.
```

---

### CUT 27 | オシンコシンの滝（遠景）
**時間**: 2:32-2:38 | **尺**: 6秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | オシンコシンの滝（遠景） |
| **音声** | 「あ、滝だ！」 |

#### Midjourneyプロンプト
**Frame A**:
```
Coastline view, waterfall as distant feature on cliff --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Oshinkoshin Falls spotted, tourist beginning to aim camera at waterfall --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Tourist spots Oshinkoshin Falls. "あ、滝だ！" excitement. Camera turns toward waterfall. Duration: 6 seconds.
```

---

### CUT 28 | オシンコシンの滝（ズーム）
**時間**: 2:38-2:46 | **尺**: 8秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | オシンコシンの滝（デジタルズーム） |
| **音声** | カメラのシャッター音 |

#### Midjourneyプロンプト
**Frame A**:
```
Oshinkoshin Falls at normal zoom, twin waterfall visible on cliff --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Extreme digital zoom on waterfall, pixelation and quality loss, shaky footage --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Dramatic digital zoom on waterfall. Quality degrades severely. Shaky attempt to capture detail. Duration: 8 seconds.
```

---

### CUT 29 | ヒグマ発見！（遠景）
**時間**: 2:46-2:50 | **尺**: 4秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 岸辺にヒグマを発見 |
| **音声** | 「熊！熊がいる！」 |

#### Midjourneyプロンプト
**Frame A**:
```
Coastline view, tiny brown bear figure visible on rocky shore --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Tourist has spotted bear, excited camera movement toward shore --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Tourist spots bear on shore. "熊！" excitement. Camera jerks toward shore. Duration: 4 seconds.
```

---

### CUT 30 | ヒグマ（必死のズーム）
**時間**: 2:50-2:58 | **尺**: 8秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | ヒグマに必死でズーム |
| **音声** | 興奮した声 |

#### Midjourneyプロンプト
**Frame A**:
```
Bear in distance at normal zoom, rocky shore --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Extreme zoom on bear, severely pixelated, very shaky, auto-focus hunting --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Desperate zoom attempt on distant bear. Severe quality loss. Extremely shaky excited footage. Auto-focus hunting. Duration: 8 seconds.
```

---

### CUT 31 | 船内の穏やかな時間①
**時間**: 2:58-3:04 | **尺**: 6秒 | **視点**: 📱 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | くつろぐ乗客たち |
| **音声** | 穏やかな会話、笑い声 |

#### Midjourneyプロンプト
**Frame A**:
```
Boat cabin, passengers relaxing, families looking out windows --ar 16:9
```

**Frame B**:
```
Different angle, warm atmosphere, happy moments, smiling passengers --ar 16:9
```

#### Veo 3.1プロンプト
```
Candid cabin footage. Passengers relaxed. Families smiling. Peaceful. Duration: 6 seconds.
```

---

### CUT 32 | 船内の穏やかな時間②
**時間**: 3:04-3:08 | **尺**: 4秒 | **視点**: 📱 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | スマホを見る若者、おしゃべりする老夫婦 |

#### Midjourneyプロンプト
**Frame A**:
```
Young tourist checking phone in cabin, elderly couple visible --ar 16:9
```

**Frame B**:
```
Same scene, natural unposed moments, elderly couple chatting --ar 16:9
```

#### Veo 3.1プロンプト
```
More candid footage. Young person on phone. Elderly couple chatting. Duration: 4 seconds.
```

---

### CUT 33 | 【伏線】事務所・電話を受ける
**時間**: 3:08-3:15 | **尺**: 7秒 | **視点**: 🎬 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | 事務所で電話を受ける社員（焦りの表情） |
| **音声** | 電話の声（聞き取れない） |
| **意図** | 他社からの警告電話を無視 |

#### Midjourneyプロンプト
**Frame A**:
```
Japanese man in boat company office, phone ringing, neutral expression --ar 16:9
```

**Frame B**:
```
Same man on phone, worried expression developing, weather fax visible, ominous --ar 16:9
```

#### Veo 3.1プロンプト
```
Documentary reconstruction. Man answers phone. Expression changes from neutral to worried. He's receiving warning but will ignore it. Slow zoom. Ominous. Duration: 7 seconds.
```

---

## 第3章：異変（3:15-4:30）| 12カット

---

### CUT 34 | 俯瞰・KAZU I（不穏な空）
**時間**: 3:15-3:22 | **尺**: 7秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 上空からのKAZU I、空が暗くなる |
| **音声** | 風の音 |

#### Midjourneyプロンプト
**Frame A**:
```
Aerial drone shot, KAZU I navigating, sky beginning to darken --ar 16:9 --v 7 --s 350
```

**Frame B**:
```
Same angle, sky noticeably darker, boat looking more isolated and vulnerable --ar 16:9 --v 7 --s 350
```

#### Veo 3.1プロンプト
```
Aerial shot of KAZU I along Shiretoko coast. Sky darkens ominously. Boat appears increasingly isolated and tiny. Foreboding atmosphere builds. Duration: 7 seconds.
```

---

### CUT 35 | 波が高くなる①
**時間**: 3:22-3:28 | **尺**: 6秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 窓越しに見える波（やや荒れ始める） |
| **テロップ（日）** | 午後12時30分頃 |
| **テロップ（英）** | Around 12:30 PM |

#### Midjourneyプロンプト
**Frame A**:
```
Window view from boat, waves starting to grow, whitecaps forming --ar 16:9 --v 7 --s 250
```

**Frame B**:
```
Larger waves visible, more whitecaps, boat rocking slightly --ar 16:9 --v 7 --s 250
```

#### Veo 3.1プロンプト
```
Waves through window growing. Whitecaps appearing. Boat rocking. Duration: 6 seconds.
```

---

### CUT 36 | 波が高くなる②
**時間**: 3:28-3:34 | **尺**: 6秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | さらに高くなる波 |
| **音声** | 波の音が大きくなる |

#### Midjourneyプロンプト
**Frame A**:
```
Rougher waves through window, 2m swells beginning --ar 16:9 --v 7 --s 250
```

**Frame B**:
```
Water splashing window, very rough seas, shaky footage --ar 16:9 --v 7 --s 250
```

#### Veo 3.1プロンプト
```
Waves continue growing. Water splashes window. Increasingly shaky camera. Duration: 6 seconds.
```

---

### CUT 37 | 不安そうな表情【Lipsync】⭐
**時間**: 3:34-3:42 | **尺**: 8秒 | **視点**: 📱 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | 子供の不安そうな顔 |
| **音声（日）** | 子供「大丈夫かな...」 |
| **音声（英）字幕** | "Will we be okay...?" |
| **Lipsync** | ✅ 必要 |

#### Midjourneyプロンプト（NanoBananaPro）
**Frame A**:
```
7-year-old Japanese girl looking worried, cabin shaking, profile view --ar 16:9
```

**Frame B**:
```
Same girl speaking with anxious expression, mouth visible for lipsync, mother's arm comforting --ar 16:9
```

#### Veo 3.1プロンプト
```
Worried child in shaking cabin. She speaks "大丈夫かな..." with visible mouth movement. Mother's arm enters frame comforting her. Duration: 8 seconds.
```

#### ElevenLabs
- **キャラクター**: 子供（7歳女児）
- **セリフ**: 「大丈夫かな...」

---

### CUT 38 | 揺れる船内①
**時間**: 3:42-3:47 | **尺**: 5秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 揺れる船内、荷物が滑る |
| **音声** | 荷物の音、小さな悲鳴 |

#### Midjourneyプロンプト
**Frame A**:
```
Cabin beginning to rock, bags starting to shift --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
More severe rocking, bags sliding, passengers gripping seats --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Cabin rocks increasingly. Bags begin sliding. Passengers grip seats. Camera shake intensifies. Duration: 5 seconds.
```

---

### CUT 39 | 母親が子供を抱きしめる【Lipsync】⭐
**時間**: 3:47-3:55 | **尺**: 8秒 | **視点**: 📱 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | 母親が子供を抱きしめる |
| **音声（日）** | 子供「ママ、怖い…」母親「大丈夫よ、もうすぐ戻るから」 |
| **音声（英）字幕** | "Mommy, I'm scared..." / "It's okay, we'll be back soon." |
| **Lipsync** | ✅ 必要 |

#### Midjourneyプロンプト（NanoBananaPro）
**Frame A**:
```
Mother and child in shaking cabin, child about to speak, both faces visible --ar 16:9
```

**Frame B**:
```
Child clinging to mother, both mouths visible for lipsync, emotional moment, cabin tilting --ar 16:9
```

#### Veo 3.1プロンプト
```
Child clings to mother. Child: "ママ、怖い..." Mother: "大丈夫よ、もうすぐ戻るから" Both mouths visible for lipsync. Emotional reassurance moment. Duration: 8 seconds.
```

#### ElevenLabs
- **キャラクター1**: 子供「ママ、怖い…」
- **キャラクター2**: 母親「大丈夫よ、もうすぐ戻るから」

---

### CUT 40 | 激しく揺れる船内
**時間**: 3:55-4:02 | **尺**: 7秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 激しく揺れる船内、荷物が滑る |
| **音声** | 悲鳴、物が落ちる音 |

#### Midjourneyプロンプト
**Frame A**:
```
Cabin shaking violently, bags sliding, fluorescent lights --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Extreme chaos, passengers panicking, lights flickering, items flying --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Violent shaking. Bags slide. Passengers panic. Lights flicker. Extreme camera shake. Duration: 7 seconds.
```

---

### CUT 41 | 手すりを握る手
**時間**: 4:02-4:06 | **尺**: 4秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 必死に手すりを握る複数の手 |
| **音声** | 荒い呼吸 |

#### Midjourneyプロンプト
**Frame A**:
```
Single hand gripping metal handrail, white knuckles --ar 16:9 --v 7 --s 150
```

**Frame B**:
```
Multiple desperate hands - elderly, adult, child - all gripping rail, extreme shake --ar 16:9 --v 7 --s 150
```

#### Veo 3.1プロンプト
```
Accidental footage of desperate hands gripping rail. Different hands visible. White knuckles. Duration: 4 seconds.
```

---

### CUT 42 | 俯瞰・荒れる海のKAZU I
**時間**: 4:06-4:14 | **尺**: 8秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 荒波の中の小さなKAZU I |
| **テロップ（日）** | 波高3メートル |
| **テロップ（英）** | Wave height: 3 meters |

#### Midjourneyプロンプト
**Frame A**:
```
Aerial drone, KAZU I in rough sea, 3m waves beginning --ar 16:9 --v 7 --s 350
```

**Frame B**:
```
Same angle, 4m waves, boat being tossed, white foam everywhere, terrifying scale --ar 16:9 --v 7 --s 350
```

#### Veo 3.1プロンプト
```
Aerial shot of KAZU I in violent storm. Waves grow from 3 to 4 meters. Tiny boat tossed by massive waves. White foam. Terrifying scale contrast. Duration: 8 seconds.
```

---

### CUT 43 | 他社事務所・無線で呼びかけ【Lipsync】⭐
**時間**: 4:14-4:22 | **尺**: 8秒 | **視点**: 🎬 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | 別会社社員が無線で呼びかける |
| **音声（日）** | 「KAZU I、KAZU I、応答してください」 |
| **音声（英）字幕** | "KAZU I, KAZU I, please respond." |
| **Lipsync** | ✅ 必要 |

#### Midjourneyプロンプト（NanoBananaPro）
**Frame A**:
```
Boat company employee at desk, picking up VHF radio handset --ar 16:9
```

**Frame B**:
```
Same employee speaking urgently into radio, desperate expression, mouth visible for lipsync --ar 16:9
```

#### Veo 3.1プロンプト
```
Employee urgently calls on marine radio. He speaks "KAZU I、KAZU I、応答してください" with visible mouth for lipsync. Growing desperation. Duration: 8 seconds.
```

#### ElevenLabs
- **キャラクター**: 他社社員（男性）
- **セリフ**: 「KAZU I、KAZU I、応答してください」

---

### CUT 44 | 無線機・応答なし
**時間**: 4:22-4:26 | **尺**: 4秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 無線機のクローズアップ、ノイズのみ |
| **音声** | 無線ノイズ |

#### Midjourneyプロンプト
**Frame A**:
```
Close-up of VHF radio, LED active, waiting for response --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Extreme close-up of speaker grille, LED blinking red, static noise, no response --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Close-up of radio. LED blinks red. Static noise. No response. Silence. Duration: 4 seconds.
```

---

### CUT 45 | 黒画面・時刻
**時間**: 4:26-4:30 | **尺**: 4秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 黒画面 |
| **テロップ（日）** | 13時13分 |
| **テロップ（英）** | 1:13 PM |
| **音声** | 心臓の鼓動音（低く） |

---

## 第4章：沈没（4:30-6:15）| 18カット

---

### CUT 46 | 浸水の始まり①
**時間**: 4:30-4:35 | **尺**: 5秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 床に水が入り始める |
| **音声** | 「水だ！」という声 |

#### Midjourneyプロンプト
**Frame A**:
```
Cabin floor, first water seeping in from bow, dry floor beginning to wet --ar 16:9 --v 7 --s 250
```

**Frame B**:
```
Water spreading rapidly across floor, passengers' feet getting wet --ar 16:9 --v 7 --s 250
```

#### Veo 3.1プロンプト
```
Water seeps in from bow. Spreads across floor. Camera points down in disbelief. Duration: 5 seconds.
```

---

### CUT 47 | 浸水の始まり②
**時間**: 4:35-4:40 | **尺**: 5秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 水が広がる |
| **音声** | 悲鳴、パニック |

#### Midjourneyプロンプト
**Frame A**:
```
Water ankle-deep, shoes and bags getting wet --ar 16:9 --v 7 --s 250
```

**Frame B**:
```
Water rising rapidly, bags floating, extreme panic, camera shake --ar 16:9 --v 7 --s 250
```

#### Veo 3.1プロンプト
```
Water rises rapidly. Shoes and bags soaked. Extreme camera shake from panic. Duration: 5 seconds.
```

---

### CUT 48 | 傾く船内（15度）
**時間**: 4:40-4:45 | **尺**: 5秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 15度傾いた船内 |
| **音声** | 物が滑る音 |

#### Midjourneyプロンプト
**Frame A**:
```
Cabin beginning to tilt, water starting to pool --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
15 degree tilt clearly visible, water pooling on one side, disorienting --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Cabin tilts to 15 degrees. Water pools on lower side. Disorienting view. Duration: 5 seconds.
```

---

### CUT 49 | 傾く船内（30度）【Lipsync】⭐
**時間**: 4:45-4:52 | **尺**: 7秒 | **視点**: 📱 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | 30度傾いた船内 |
| **音声（日）** | 「傾いてる！」 |
| **音声（英）字幕** | "It's tilting!" |
| **Lipsync** | ✅ 必要 |

#### Midjourneyプロンプト（NanoBananaPro）
**Frame A**:
```
Cabin at 20 degrees tilt, passengers clinging --ar 16:9
```

**Frame B**:
```
30 degree severe tilt, passenger screaming "傾いてる！", life jackets grabbed, terrified faces --ar 16:9
```

#### Veo 3.1プロンプト
```
Cabin reaches 30 degrees. Someone screams "傾いてる！" Life jackets grabbed. Terrified faces. Duration: 7 seconds.
```

#### ElevenLabs
- **キャラクター**: 乗客（男性）
- **セリフ**: 「傾いてる！」

---

### CUT 50 | 救命胴衣を掴む
**時間**: 4:52-4:56 | **尺**: 4秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 救命胴衣を掴む手 |
| **音声** | パニックの声 |

#### Midjourneyプロンプト
**Frame A**:
```
Hands reaching for orange life jacket in tilted cabin --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Hands grabbing life jacket desperately, tilted cabin background --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Close-up of desperate hands grabbing orange life jacket. Tilted cabin background. Panic motion. Duration: 4 seconds.
```

---

### CUT 51 | 海保・118番受信【Lipsync】⭐
**時間**: 4:56-5:04 | **尺**: 8秒 | **視点**: 🎬 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | 海上保安庁通信室 |
| **テロップ（日）** | 第一管区海上保安本部 |
| **テロップ（英）** | 1st Regional Coast Guard HQ |
| **音声（日）** | 通信員「118番です。状況を教えてください」 |
| **音声（英）字幕** | "This is 118. Please describe your situation." |
| **Lipsync** | ✅ 必要 |

#### Midjourneyプロンプト（NanoBananaPro）
**Frame A**:
```
Japan Coast Guard communication center, operator receiving call, monitors visible --ar 16:9
```

**Frame B**:
```
Close-up of operator speaking into headset, mouth visible for lipsync, professional concern --ar 16:9
```

#### Veo 3.1プロンプト
```
Coast Guard receives emergency call. Operator's expression shifts to concern. He speaks "118番です。状況を教えてください" with visible mouth. Professional tension. Duration: 8 seconds.
```

#### ElevenLabs
- **キャラクター**: 海上保安庁通信員（男性）
- **セリフ**: 「118番です。状況を教えてください」

---

### CUT 52 | 船長の通報（後ろ姿）
**時間**: 5:04-5:10 | **尺**: 6秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 電話する船長の後ろ姿 |
| **音声** | 船長の声（遠く） |

#### Midjourneyプロンプト
**Frame A**:
```
Captain glimpsed from behind in flooded wheelhouse, water at ankles --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Captain on phone, back to camera, flooded wheelhouse, desperate posture --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Glimpse of captain making emergency call. Flooded wheelhouse. Water rising. Duration: 6 seconds.
```

---

### CUT 53 | 船長の通報（声）【Lipsync】⭐
**時間**: 5:10-5:18 | **尺**: 8秒 | **視点**: 📱 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | 船長の横顔（一瞬） |
| **音声（日）** | 船長「浸水している…沈みそうだ…」 |
| **音声（英）字幕** | "We're taking on water... We're going to sink..." |
| **Lipsync** | ✅ 必要 |

#### Midjourneyプロンプト（NanoBananaPro）
**Frame A**:
```
Captain's profile barely visible in flooded wheelhouse --ar 16:9
```

**Frame B**:
```
Captain's face visible, speaking into phone, mouth visible for lipsync, desperate expression --ar 16:9
```

#### Veo 3.1プロンプト
```
Brief glimpse of captain's profile. He speaks "浸水している…沈みそうだ…" Desperate expression. Duration: 8 seconds.
```

#### ElevenLabs
- **キャラクター**: 船長（豊田徳幸・男性54歳）
- **セリフ**: 「浸水している…沈みそうだ…」

---

### CUT 54 | 最後の電話①（乗客が電話を取り出す）
**時間**: 5:18-5:22 | **尺**: 4秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 乗客がスマホを取り出す |
| **音声** | 水の音、泣き声 |

#### Midjourneyプロンプト
**Frame A**:
```
Passenger in flooded cabin, taking out smartphone, water at thigh level --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Phone in hand, about to make call, life jacket worn, devastating atmosphere --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Passenger takes out phone. Water at thigh level. Life jacket worn. Devastating moment beginning. Duration: 4 seconds.
```

---

### CUT 55 | 最後の電話②【Lipsync】⭐
**時間**: 5:22-5:32 | **尺**: 10秒 | **視点**: 📱 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | 涙を流しながら電話する乗客 |
| **音声（日）** | 乗客「もう会えないかもしれない…」 |
| **音声（英）字幕** | "I might not see you again..." |
| **Lipsync** | ✅ 必要 |

#### Midjourneyプロンプト（NanoBananaPro）
**Frame A**:
```
Middle-aged Japanese man beginning to speak into phone, tears forming --ar 16:9
```

**Frame B**:
```
Same man with tears on face, speaking final words, mouth visible for lipsync, phone pressed to ear, water rising, life jacket worn, unbearable tragedy --ar 16:9
```

#### Veo 3.1プロンプト
```
Man makes final call. Tears on face. He speaks "もう会えないかもしれない…" Unbearable tragedy. Duration: 10 seconds.
```

#### ElevenLabs
- **キャラクター**: 乗客（中年男性）
- **セリフ**: 「もう会えないかもしれない…」

---

### CUT 56 | 水位上昇①（腰まで）
**時間**: 5:32-5:37 | **尺**: 5秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 腰まで水位上昇 |
| **音声** | 水の音、呼吸音 |

#### Midjourneyプロンプト
**Frame A**:
```
Water at thigh level in sinking boat, camera held above water --ar 16:9 --v 7 --s 250
```

**Frame B**:
```
Water at waist level, life jackets floating, camera desperately held up --ar 16:9 --v 7 --s 250
```

#### Veo 3.1プロンプト
```
Water rises from thigh to waist. Camera held above water desperately. Duration: 5 seconds.
```

---

### CUT 57 | 水位上昇②（胸まで）
**時間**: 5:37-5:42 | **尺**: 5秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 胸まで水位上昇 |
| **音声** | 水の音、泣き声 |

#### Midjourneyプロンプト
**Frame A**:
```
Water at stomach level, ceiling becoming closer --ar 16:9 --v 7 --s 250
```

**Frame B**:
```
Water at chest level, ceiling and flickering lights visible above, terrifying final perspective --ar 16:9 --v 7 --s 250
```

#### Veo 3.1プロンプト
```
Water rises to chest. Ceiling and flickering lights visible above. Terrifying. Duration: 5 seconds.
```

---

### CUT 58 | カメラ水没①（水面ギリギリ）
**時間**: 5:42-5:46 | **尺**: 4秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 水面ギリギリのカメラ |
| **音声** | 水中の音が混じる |

#### Midjourneyプロンプト
**Frame A**:
```
Camera barely above water surface, last glimpse of cabin above --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Half underwater view, distorted image, water at lens level --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Camera at water surface. Half underwater view. Distortion begins. Duration: 4 seconds.
```

---

### CUT 59 | カメラ水没②（完全水没）
**時間**: 5:46-5:52 | **尺**: 6秒 | **視点**: 📱 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 完全に水没、画面が乱れる |
| **音声** | 水中音→ノイズ→無音 |

#### Midjourneyプロンプト
**Frame A**:
```
Camera going under water, air bubbles, light from above --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Underwater view, bubbles rising, screen glitching, light fading, darkness approaching --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Camera submerges completely. Bubbles rise. Light fades. Screen glitches from water damage. Transition to darkness. Duration: 6 seconds.
```

---

### CUT 60 | 黒画面
**時間**: 5:52-5:55 | **尺**: 3秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 完全な黒 |
| **音声** | 完全な無音 |

---

### CUT 61 | テロップ「14時17分」
**時間**: 5:55-5:59 | **尺**: 4秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 黒画面に白テロップ |
| **テロップ（日）** | 14時17分 |
| **テロップ（英）** | 2:17 PM |
| **音声** | 無音 |

---

### CUT 62 | テロップ「通信途絶」
**時間**: 5:59-6:05 | **尺**: 6秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 黒画面に白テロップ |
| **テロップ（日）** | 通信途絶 |
| **テロップ（英）** | Communication Lost |
| **音声** | 無音 |

---

### CUT 63 | 黒画面（長い沈黙）
**時間**: 6:05-6:15 | **尺**: 10秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 完全な黒 |
| **音声** | 完全な無音 |
| **意図** | 沈黙が最も雄弁に語る |

---

## 第5章：捜索（6:15-8:00）| 14カット

---

### CUT 64 | 海保・緊急会議
**時間**: 6:15-6:22 | **尺**: 7秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 海上保安庁の緊急対策室 |
| **テロップ（日）** | 13時30分 |
| **テロップ（英）** | 1:30 PM |

#### Midjourneyプロンプト
**Frame A**:
```
Japan Coast Guard emergency room, officers entering --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Officers around table with Shiretoko maps, urgent planning, screens showing area --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Coast Guard emergency operations. Officers gather around table with Shiretoko maps. Urgent atmosphere. Duration: 7 seconds.
```

---

### CUT 65 | ヘリ・離陸準備
**時間**: 6:22-6:28 | **尺**: 6秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 釧路航空基地、ヘリが離陸準備 |
| **テロップ（日）** | 第一管区海上保安本部 釧路航空基地 |

#### Midjourneyプロンプト
**Frame A**:
```
Japan Coast Guard air station, helicopter on helipad, rotors stationary --ar 16:9 --v 7 --s 300
```

**Frame B**:
```
Ground crew preparing helicopter, urgent departure atmosphere --ar 16:9 --v 7 --s 300
```

#### Veo 3.1プロンプト
```
Helicopter on pad, crew preparing. Urgent rescue mission preparation. Duration: 6 seconds.
```

---

### CUT 66 | ヘリ・ローター回転
**時間**: 6:28-6:33 | **尺**: 5秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | ローターが回り始める |
| **音声** | ローター音 |

#### Midjourneyプロンプト
**Frame A**:
```
Helicopter rotors stationary, about to spin --ar 16:9 --v 7 --s 300
```

**Frame B**:
```
Rotors spinning at full speed, crew clearing area --ar 16:9 --v 7 --s 300
```

#### Veo 3.1プロンプト
```
Rotors spin up. Crew clears area. Urgent departure preparation. Duration: 5 seconds.
```

---

### CUT 67 | ヘリ・離陸
**時間**: 6:33-6:38 | **尺**: 5秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | ヘリが離陸 |
| **音声** | ローター音 |

#### Midjourneyプロンプト
**Frame A**:
```
Helicopter lifting off from helipad, just leaving ground --ar 16:9 --v 7 --s 300
```

**Frame B**:
```
Helicopter in air, dramatic departure, overcast sky --ar 16:9 --v 7 --s 300
```

#### Veo 3.1プロンプト
```
Helicopter lifts off. Dramatic departure. Rescue mission begins. Duration: 5 seconds.
```

---

### CUT 68 | 巡視船・出航準備
**時間**: 6:38-6:44 | **尺**: 6秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 巡視船「くなしり」出航準備 |
| **テロップ（日）** | 巡視船「くなしり」 |
| **テロップ（英）** | Patrol Vessel "Kunashiri" |

#### Midjourneyプロンプト
**Frame A**:
```
Japan Coast Guard patrol vessel at dock, crew preparing --ar 16:9 --v 7 --s 300
```

**Frame B**:
```
Mooring lines being prepared, vessel ready to depart --ar 16:9 --v 7 --s 300
```

#### Veo 3.1プロンプト
```
Patrol vessel preparation. Crew readying lines. Urgent mission. Duration: 6 seconds.
```

---

### CUT 69 | 巡視船・出航
**時間**: 6:44-6:52 | **尺**: 8秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 巡視船が港を出る |
| **音声** | 汽笛、エンジン音 |

#### Midjourneyプロンプト
**Frame A**:
```
Patrol vessel departing dock, lines released --ar 16:9 --v 7 --s 300
```

**Frame B**:
```
Vessel heading out, bow cutting water, crew on deck --ar 16:9 --v 7 --s 300
```

#### Veo 3.1プロンプト
```
Patrol vessel departs. Horn sounds. Ship heads out to search area. Duration: 8 seconds.
```

---

### CUT 70 | ヘリ・海上捜索
**時間**: 6:52-7:00 | **尺**: 8秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 知床の海上を捜索するヘリ |
| **音声** | ローター音 |

#### Midjourneyプロンプト
**Frame A**:
```
Rescue helicopter flying over grey sea, searching --ar 16:9 --v 7 --s 300
```

**Frame B**:
```
Helicopter spotlight scanning water, Shiretoko cliffs in background --ar 16:9 --v 7 --s 300
```

#### Veo 3.1プロンプト
```
Helicopter flying low over Sea of Okhotsk searching. Spotlight scanning. Duration: 8 seconds.
```

---

### CUT 71 | ヘリからの視点①
**時間**: 7:00-7:08 | **尺**: 8秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | ヘリから見下ろす海面 |
| **音声** | ローター音、無線「視認できず」 |

#### Midjourneyプロンプト
**Frame A**:
```
Aerial view from helicopter looking down at ocean, searching --ar 16:9 --v 7 --s 250
```

**Frame B**:
```
Empty grey ocean, rough waves, no survivors visible, devastating search --ar 16:9 --v 7 --s 250
```

#### Veo 3.1プロンプト
```
View from helicopter looking down. Empty ocean. No survivors. Desperate futile search. Duration: 8 seconds.
```

---

### CUT 72 | ヘリからの視点②
**時間**: 7:08-7:15 | **尺**: 7秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 広大な空の海、何も見つからない |
| **音声** | 無線ノイズ |

#### Midjourneyプロンプト
**Frame A**:
```
Wider aerial view, vast empty ocean --ar 16:9 --v 7 --s 250
```

**Frame B**:
```
Vast empty ocean stretching to horizon, overwhelming hopelessness --ar 16:9 --v 7 --s 250
```

#### Veo 3.1プロンプト
```
Vast empty ocean. No debris visible. Overwhelming scale. Hopelessness. Duration: 7 seconds.
```

---

### CUT 73 | 日没①
**時間**: 7:15-7:25 | **尺**: 10秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 知床の海に沈む夕日 |
| **テロップ（日）** | 17時30分 日没 |
| **テロップ（英）** | 5:30 PM — Sunset |

#### Midjourneyプロンプト
**Frame A**:
```
Sun beginning to set over Sea of Okhotsk, orange light --ar 16:9 --v 7 --s 350
```

**Frame B**:
```
Dramatic sunset, orange and crimson sky, dark water, Shiretoko silhouette --ar 16:9 --v 7 --s 350
```

#### Veo 3.1プロンプト
```
Timelapse-style sunset. Colors shift dramatically. Hope fading with light. Duration: 10 seconds.
```

---

### CUT 74 | 日没②（巡視船のシルエット）
**時間**: 7:25-7:32 | **尺**: 7秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 夕日を背に捜索を続ける巡視船 |
| **テロップ（日）** | 捜索は夜を徹して続けられた |
| **テロップ（英）** | The search continued through the night |

#### Midjourneyプロンプト
**Frame A**:
```
Patrol vessel silhouette against sunset sky, still searching --ar 16:9 --v 7 --s 350
```

**Frame B**:
```
Ship continuing as darkness falls, determination, fading light --ar 16:9 --v 7 --s 350
```

#### Veo 3.1プロンプト
```
Patrol vessel silhouette against dying light. Still searching. Determination. Duration: 7 seconds.
```

---

### CUT 75 | 夜間捜索①（サーチライト）
**時間**: 7:32-7:40 | **尺**: 8秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 投光器で照らされた夜の海 |
| **音声** | 波、エンジン音 |

#### Midjourneyプロンプト
**Frame A**:
```
Night sea, searchlight beam appearing in darkness --ar 16:9 --v 7 --s 300
```

**Frame B**:
```
Multiple searchlights sweeping black ocean, urgent night search --ar 16:9 --v 7 --s 300
```

#### Veo 3.1プロンプト
```
Night search. Searchlights sweep black water. Crew silhouettes. Duration: 8 seconds.
```

---

### CUT 76 | 夜間捜索②（巡視船デッキ）
**時間**: 7:40-7:48 | **尺**: 8秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | デッキで捜索を続ける海保職員 |
| **音声** | 無線、波 |

#### Midjourneyプロンプト
**Frame A**:
```
Coast Guard crew on deck at night, binoculars --ar 16:9 --v 7 --s 300
```

**Frame B**:
```
Crew still searching, spotlight behind them, relentless dedication --ar 16:9 --v 7 --s 300
```

#### Veo 3.1プロンプト
```
Dedicated crew searching at night. Binoculars. Relentless. Duration: 8 seconds.
```

---

### CUT 77 | 港で待つ家族
**時間**: 7:48-8:00 | **尺**: 12秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 夜のウトロ港、待ち続ける家族のシルエット |
| **音声** | 波の音、風、静寂 |

#### Midjourneyプロンプト
**Frame A**:
```
Night Utoro Port, distant silhouettes beginning to gather --ar 16:9 --v 7 --s 250
```

**Frame B**:
```
Silhouettes at harbor edge, people huddled together waiting, devastating vigil --ar 16:9 --v 7 --s 250
```

#### Veo 3.1プロンプト
```
Families waiting at night harbor. Silhouettes at water's edge. People huddle together. Devastating vigil. Camera maintains respectful distance. Duration: 12 seconds.
```

---

## 第6章：鎮魂（8:00-10:00）| 12カット

---

### CUT 78 | テロップ「72時間後」
**時間**: 8:00-8:06 | **尺**: 6秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 黒画面に白テロップ |
| **テロップ（日）** | 72時間後 |
| **テロップ（英）** | 72 hours later |
| **音声** | 無音 |

---

### CUT 79 | 救命胴衣発見
**時間**: 8:06-8:18 | **尺**: 12秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 海面に浮かぶオレンジ色の救命胴衣 |
| **音声** | 波の音 |

#### Midjourneyプロンプト
**Frame A**:
```
Grey ocean surface, searching, empty water --ar 16:9 --v 7 --s 250
```

**Frame B**:
```
Orange life jacket floating alone on grey sea, devastating discovery, symbol of tragedy --ar 16:9 --v 7 --s 250
```

#### Veo 3.1プロンプト
```
Camera searches grey ocean surface. Orange life jacket comes into view. Single vest drifting alone. Symbol of tragedy. Camera slowly tracks it. Duration: 12 seconds.
```

---

### CUT 80 | 担架を運ぶ
**時間**: 8:18-8:30 | **尺**: 12秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 担架で運ばれる遺体 |
| **音声** | 静寂 |

#### Midjourneyプロンプト
**Frame A**:
```
White-covered stretcher being lifted, Coast Guard officers --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Officers carrying stretcher with utmost respect, dignified coverage --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Stretcher carried by officers. White covering. Utmost dignity. Duration: 12 seconds.
```

---

### CUT 81 | 敬礼
**時間**: 8:30-8:42 | **尺**: 12秒 | **視点**: 🎬 | **推奨**: NanoBananaPro

| 項目 | 内容 |
|------|------|
| **映像** | 整列して敬礼する海上保安官 |
| **音声** | 静寂（波音のみ） |

#### Midjourneyプロンプト
**Frame A**:
```
Coast Guard officers standing at attention, preparing to salute --ar 16:9
```

**Frame B**:
```
Officers in formal salute as stretcher passes, profound respect, perfect stillness --ar 16:9
```

#### Veo 3.1プロンプト
```
Coast Guard officers in line. They raise hands in formal salute. Perfect stillness. Profound respect. Duration: 12 seconds.
```

---

### CUT 82 | 港に並ぶ花①
**時間**: 8:42-8:52 | **尺**: 10秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | ウトロ港に並べられた花と写真（パン） |
| **音声** | 風の音 |

#### Midjourneyプロンプト
**Frame A**:
```
Memorial flowers beginning, left side of arrangement --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Camera has panned across memorial, many flowers and photos with black ribbons --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Slow pan across memorial. Flowers, photos with black ribbons, incense. Duration: 10 seconds.
```

---

### CUT 83 | 港に並ぶ花②（クローズアップ）
**時間**: 8:52-9:00 | **尺**: 8秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 花と線香のクローズアップ |
| **音声** | 風 |

#### Midjourneyプロンプト
**Frame A**:
```
Mid-distance memorial view, flowers and incense --ar 16:9 --v 7 --s 200
```

**Frame B**:
```
Close-up of flowers and burning incense, smoke rising gently --ar 16:9 --v 7 --s 200
```

#### Veo 3.1プロンプト
```
Close-up of memorial. Incense smoke rises. Wind moves flowers gently. Duration: 8 seconds.
```

---

### CUT 84 | 水中イメージ①
**時間**: 9:00-9:12 | **尺**: 12秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 深い青の水中、光が差し込む |
| **音声** | 深い低音のドローン |

#### Midjourneyプロンプト
**Frame A**:
```
Deep underwater scene, darkness, faint light above --ar 16:9 --v 7 --s 300
```

**Frame B**:
```
Ethereal light rays penetrating from surface, particles floating like souls ascending, peaceful melancholy --ar 16:9 --v 7 --s 300
```

#### Veo 3.1プロンプト
```
Ethereal underwater scene. Light rays gradually intensify. Particles drift upward like souls. Peaceful melancholy. Duration: 12 seconds.
```

---

### CUT 85 | 水中イメージ②（統計テロップ）
**時間**: 9:12-9:24 | **尺**: 12秒 | **Veo**: 不要（テロップ合成）

| 項目 | 内容 |
|------|------|
| **映像** | 水中イメージに統計テロップ |
| **テロップ（日/英）** | 乗客乗員26名 / 26 passengers and crew |

---

### CUT 86 | 統計テロップ②
**時間**: 9:24-9:32 | **尺**: 8秒 | **Veo**: 不要（テロップ合成）

| 項目 | 内容 |
|------|------|
| **映像** | 水中イメージ継続 |
| **テロップ（日/英）** | 20名死亡確認 6名行方不明 / 20 confirmed dead, 6 still missing |

---

### CUT 87 | 知床の海（現在）
**時間**: 9:32-9:45 | **尺**: 13秒 | **視点**: 🎬 | **推奨**: Midjourney V7

| 項目 | 内容 |
|------|------|
| **映像** | 穏やかな知床の海（ドローン） |
| **音声** | 穏やかな波音 |

#### Midjourneyプロンプト
**Frame A**:
```
Calm Sea of Okhotsk, beginning of peaceful view --ar 16:9 --v 7 --s 300
```

**Frame B**:
```
Peaceful serene sea with Shiretoko cliffs, beautiful day, nature unchanged, stunning natural beauty --ar 16:9 --v 7 --s 300
```

#### Veo 3.1プロンプト
```
Drone footage of calm peaceful sea. Nature unchanged. Beautiful day. Stunning natural beauty that conceals horror below. Contemplative ending. Duration: 13 seconds.
```

---

### CUT 88 | 最終テロップ
**時間**: 9:45-9:52 | **尺**: 7秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 黒画面 |
| **テロップ（日）** | 二度と繰り返さないために |
| **テロップ（英）** | So that this never happens again |
| **音声** | 無音 |

---

### CUT 89 | エンドクレジット
**時間**: 9:52-10:00 | **尺**: 8秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 黒画面にクレジット |
| **テロップ** | KAZU I - 72時間 / この作品はAI技術で制作されました / 犠牲者のご冥福をお祈りします |
| **音声** | 穏やかな波音（フェードアウト） |

---

# 4. mCaptions設定ガイド

## 使用プリセット一覧

| プリセット | 用途 | 使用シーン |
|-----------|------|-----------|
| **Book 4492** | 時刻・場所表示、タイトルカード | 客観的情報 |
| **Simple 54NQ** | セリフ字幕（通常〜緊迫） | 会話・Lipsync |
| **Minimalistic 29G3** | ナレーション、追悼テロップ | エンディング |
| **Classic 141L** | 最終タイトル | 映画タイトル |

## フォント設定

| 言語 | フォント | ウェイト |
|------|---------|---------|
| **日本語** | Hiragino Sans | W3〜W6（緊迫度で変化） |
| **英語** | Helvetica Neue | Light〜Medium |

## プリセット詳細設定

### Book 4492（時刻・場所表示用）

| 項目 | 設定値 |
|------|-------|
| Font | Hiragino Sans W3〜W5 |
| Font Size | 60〜65 |
| Alignment | 中央揃え |
| Content Position Y | -380px（下部）または 0px（中央） |
| Fill Color | #FFFFFF |
| Drop Shadow Opacity | 60% |
| Drop Shadow Blur | 5 |
| Animation In | Fade In 0.5秒 |

### Simple 54NQ（セリフ字幕用）

| 項目 | 設定値 |
|------|-------|
| Font | Hiragino Sans W4〜W6 |
| Font Size | 70〜75 |
| Alignment | 中央揃え |
| Content Position Y | -420px（下部） |
| Fill Color | #FFFFFF |
| Drop Shadow Opacity | 65% |
| Drop Shadow Blur | 4 |
| Animation In | Fade In 0.3秒 |

### Minimalistic 29G3（ナレーション・エンディング用）

| 項目 | 設定値 |
|------|-------|
| Font | Hiragino Sans W3 |
| Font Size | 55〜70 |
| Alignment | 中央揃え |
| Content Position Y | 0px（中央）または -420px（下部） |
| Fill Color | #FFFFFF |
| Drop Shadow Opacity | 50% |
| Animation In | Fade In 1.5〜3秒 |

### Classic 141L（最終タイトル用）

| 項目 | 設定値 |
|------|-------|
| Font | Hiragino Sans W3 |
| Font Size | 85 |
| Tracking | 8% |
| Content Position Y | 0px（中央） |
| Animation In | Fade In 2秒 |
| Hold | 3秒 |
| Animation Out | Fade Out 2秒 |

---

# 5. ElevenLabs音声一覧

| CUT | キャラクター | セリフ（日） | セリフ（英）字幕 |
|-----|-------------|-------------|----------------|
| 3 | NHKアナウンサー | 知床半島沖で観光船と連絡が取れなくなっているという情報が入りました | We have reports that contact has been lost with a tour boat off the coast of Shiretoko Peninsula |
| 20 | 子供（7歳女児） | ママ見て！海だよ！ | Mommy, look! It's the ocean! |
| 37 | 子供（7歳女児） | 大丈夫かな... | Will we be okay...? |
| 39 | 子供（7歳女児） | ママ、怖い… | Mommy, I'm scared... |
| 39 | 母親 | 大丈夫よ、もうすぐ戻るから | It's okay, we'll be back soon |
| 43 | 他社社員（男性） | KAZU I、KAZU I、応答してください | KAZU I, KAZU I, please respond |
| 49 | 乗客（男性） | 傾いてる！ | It's tilting! |
| 51 | 海保通信員（男性） | 118番です。状況を教えてください | This is 118. Please describe your situation |
| 53 | 船長（豊田徳幸） | 浸水している…沈みそうだ… | We're taking on water... We're going to sink... |
| 55 | 乗客（中年男性） | もう会えないかもしれない… | I might not see you again... |

---

# 6. 制作統計

## カット統計

| 項目 | 数値 |
|------|------|
| **総カット数** | 89 |
| **総尺** | 10分00秒（600秒） |
| **平均カット尺** | 6.7秒 |
| **視点A（乗客カメラ）📱** | 40カット |
| **視点B（ドキュメンタリー）🎬** | 34カット |
| **テロップのみ** | 15カット |

## AI制作カウント

| ツール | カット数 |
|--------|---------|
| **Veo 3.1生成** | 65カット |
| **Midjourney V7** | 約50カット |
| **NanoBananaPro** | 約15カット |
| **Lipsyncカット** | 9カット |
| **テロップのみ（Veo不要）** | 15カット |

## 章別カット尺分布

| 章 | 最短カット | 最長カット | 平均 |
|----|-----------|-----------|------|
| 序章 | 4秒 | 10秒 | 6.3秒 |
| 第1章 | 4秒 | 8秒 | 5.3秒 |
| 第2章 | 4秒 | 8秒 | 6.4秒 |
| 第3章 | 4秒 | 8秒 | 6.3秒 |
| 第4章 | 3秒 | 10秒 | 5.8秒 |
| 第5章 | 5秒 | 12秒 | 7.5秒 |
| 第6章 | 6秒 | 13秒 | 10.0秒 |

**演出意図**: 沈没シーンはカットを細かく（緊迫感）、鎮魂シーンはカットを長く（余韻）

---

# 📅 更新履歴

| 日付 | 内容 |
|------|------|
| 2025-02-01 | v2.0 作成 - 89カット完全版 |

---

**制作**: KAZU I - 72時間 プロジェクト
**出品先**: WAIFF KYOTO 2026
