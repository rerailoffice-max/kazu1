# 🎬 KAZU I - 72時間 | Notion完全版 v2.1

> **最終更新**: 2025年2月1日
> **出品先**: WAIFF KYOTO 2026
> **総尺**: 10分00秒（600秒）
> **総カット**: 90カット

---

# 📋 目次

1. [作品概要](#1-作品概要)
2. [制作ワークフロー](#2-制作ワークフロー)
3. [全90カット詳細](#3-全90カット詳細)
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
| **総カット数** | 90カット |
| **出品先** | WAIFF KYOTO 2026（AI国際映画祭） |

## 構成概要

| 章 | タイトル | 時間 | カット数 | 雰囲気 |
|----|---------|------|---------|--------|
| **序章** | プロローグ | 0:00-0:25 | 4 | 衝撃・導入 |
| **第1章** | 出発 | 0:25-1:48 | 16 | 平穏・期待 |
| **第2章** | 航海 | 1:48-3:18 | 14 | 喜び・伏線 |
| **第3章** | 異変 | 3:18-4:33 | 12 | 不安・緊張 |
| **第4章** | 沈没 | 4:33-6:18 | 18 | 恐怖・絶望 |
| **第5章** | 捜索 | 6:18-8:03 | 14 | 焦燥・希望 |
| **第6章** | 鎮魂 | 8:03-10:00 | 12 | 悲しみ・祈り |

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
| **Google Flow (NanoBananaPro)** | 全画像生成（人物・風景・iPhone映像） | 全66カット |
| **Veo 3.1** | Frame A→B補間・動画生成 | 66カット |
| **ElevenLabs** | 日本語音声合成 | 9カット（Lipsync） |
| **Kling AI** | Lipsync動画生成 | 9カット |
| **mCaptions** | 字幕・テロップ | 全カット |

## 動画生成ワークフロー

```
1. Frame A（始まり画像）生成 → Google Flow (NanoBananaPro)
2. Frame B（終わり画像）生成 → Google Flow (NanoBananaPro)
3. 動画生成 → Veo 3.1 で Frame A → Frame B を補間
4. Lipsyncカットのみ → ElevenLabs音声 + Kling AI
5. 編集・字幕 → Final Cut Pro + mCaptions
```

---

# 3. 全90カット詳細

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
**時間**: 0:08-0:18 | **尺**: 10秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | テレビ画面のニュース速報 |
| **テロップ** | 【速報】知床 観光船と連絡取れず |
| **音声（日）** | NHKアナウンサー「知床半島沖で観光船と連絡が取れなくなっているという情報が入りました」 |
| **音声（英）字幕** | "We have reports that contact has been lost with a tour boat off the coast of Shiretoko Peninsula." |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Japanese TV news broadcast screen, NHK style, red "速報" banner just appearing at top, news anchor desk background, broadcast beginning, CRT TV texture, 16:9 aspect ratio
```

**Frame B**:
```
Japanese TV news broadcast screen, NHK style breaking news fully displayed, red "速報" banner, "知床 観光船と連絡取れず" text prominent, map of Shiretoko Peninsula on screen, news ticker at bottom, CRT TV texture, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
TV news broadcast animation. Breaking news banner pulses and slides in. Text "知床 観光船と連絡取れず" fades in. Map graphic appears from right. News ticker scrolls at bottom. CRT flicker effect. Static camera. Duration: 10 seconds.
```

---

### CUT 4 | 事務所への移行（引き）
**時間**: 0:18-0:25 | **尺**: 7秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 事故を起こした船会社事務所（広角・引き） |
| **テロップ（日）** | これは、その12時間前の記録である。 |
| **テロップ（英）** | This is a record from 12 hours before. |
| **音声** | テレビ音声がフェードアウト→静寂 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Fading TV news screen with "速報" banner, transitioning to darkness, broadcast audio implied fading, 16:9 aspect ratio
```

**Frame B**:
```
Wide establishing shot of small Japanese tour boat company office interior, cramped space, cluttered desks with papers, old CRT TV showing weather forecast, fluorescent lights, calendar showing April 2022, dirty window with harbor view, ashtrays and coffee cups, negligent atmosphere, documentary style, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Transition from TV news to boat company office. News fades out. Wide shot of cramped Japanese office fades in. Fluorescent lights harsh. TV in corner shows weather warning being ignored. Ominous atmosphere. Foreshadowing tension. This is where tragedy began. Duration: 7 seconds.
```

---

## 第1章：出発（0:25-1:48）| 16カット

---

### CUT 5 | 事務所・波浪注意報（テレビ）
**時間**: 0:25-0:30 | **尺**: 5秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 事務所のテレビ、波浪注意報表示 |
| **音声** | テレビの気象情報音声 |
| **意図** | 【重要伏線】警報を無視した証拠 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Old CRT television in dim Japanese office, weather broadcast starting, screen glow in darkness, 16:9 aspect ratio
```

**Frame B**:
```
Close-up of CRT television showing "波浪注意報" wave warning text clearly, weather map visible, TV screen glow, documentary evidence shot, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Camera slowly pushes in toward TV showing weather warning. "波浪注意報" text becomes clearer. TV screen flickers with CRT effect. Ominous revelation of ignored warning. Duration: 5 seconds.
```

---

### CUT 6 | 事務所・社員の無関心
**時間**: 0:30-0:35 | **尺**: 5秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | テレビを背にして電話する社員 |
| **音声** | 電話の声「はい、予定通り出航します」 |
| **意図** | 警告無視の決定的瞬間 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Japanese office worker in boat company, middle-aged man standing with back to TV showing warning, phone not yet to ear, cluttered desk visible, fluorescent lighting, 16:9 aspect ratio
```

**Frame B**:
```
Japanese office worker on phone, back still turned to TV warning, casual posture, speaking into phone, negligent body language, damning evidence moment, documentary style, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Office worker picks up phone and speaks while TV warning plays behind him ignored. His back remains turned to the warning. Casual indifferent demeanor. "予定通り出航します" implied in his manner. Documentary damning evidence. Duration: 5 seconds.
```

---

### CUT 7 | 車窓から見える海（遠景）
**時間**: 0:35-0:42 | **尺**: 7秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 車窓から見えるオホーツク海（遠景） |
| **音声** | 車内の静かな音、遠くのカモメ |
| **カメラ** | iPhone撮影、軽い揺れ |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone video through car window, distant Sea of Okhotsk barely visible, Shiretoko mountains in far background, morning overcast sky, window reflection, iPhone video quality, timestamp "2022/04/23 09:15" in corner, tourist anticipation, 16:9 aspect ratio
```

**Frame B**:
```
Smartphone video through car window, Sea of Okhotsk closer now, coastline more visible, overcast sky, window reflection shifting, iPhone video quality, tourist anticipation atmosphere, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Smartphone footage through moving car window. Sea gradually becomes more visible as car approaches coast. Subtle car vibration. Window reflections shift. Auto-exposure adjusts. Tourist anticipation atmosphere. Duration: 7 seconds.
```

---

### CUT 7B | 車内・フロントガラス越し（後部座席から）【NEW】
**時間**: 0:42-0:50 | **尺**: 8秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 後部座席から撮影。前席に2人（運転席と助手席）のシルエット。フロントガラス越しに道路と景色が見える |
| **音声** | 車内の会話、ラジオの音、エンジン音 |
| **カメラ** | iPhone撮影、後部座席視点 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone video from back seat of car, view through windshield, two people silhouettes in front seats (driver and passenger), Japanese rural road ahead, Hokkaido scenery through windshield, overcast morning, iPhone video quality, rear passenger POV, dashboard visible, 16:9 aspect ratio
```

**Frame B**:
```
Same back seat POV, camera beginning to turn left toward side window, front passengers still visible on right edge, road through windshield transitioning to side view, motion blur from camera movement, iPhone video quality, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Smartphone footage from back seat of car. Two people visible in front seats. View through windshield shows Hokkaido road. Camera gradually turns left toward side window. Natural car movement and conversation atmosphere. Transition to side window view. Duration: 8 seconds.
```

---

### CUT 8 | 車窓・ウトロ港が近づく
**時間**: 0:50-0:58 | **尺**: 8秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 左側の車窓からウトロ港が見えてくる（CUT 7Bからの連続） |
| **音声** | 子供の声「あ、港だ！」 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone video through left car window, camera just turned from front, Utoro Port becoming visible in distance, fishing boats appearing, side window view, iPhone video quality, timestamp "2022/04/23 09:25", 16:9 aspect ratio
```

**Frame B**:
```
Smartphone video through left car window, Utoro Port clearly visible now, harbor detail, fishing boats, small coastal town, iPhone video quality, timestamp "2022/04/23 09:28", excited tourist perspective, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Smartphone footage through left car window (continuing from previous cut's camera turn). Utoro Port becomes visible. Harbor gets progressively clearer and more detailed. Car vibration. Child's voice "あ、港だ！" excitement. Duration: 8 seconds.
```

---

### CUT 9 | 駐車場・車を降りる
**時間**: 0:58-1:02 | **尺**: 4秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 車から降りる足元 |
| **音声** | 砂利を踏む音、風 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone POV inside car, looking at car floor mat, door beginning to open, gravel parking lot glimpsed outside, 16:9 aspect ratio
```

**Frame B**:
```
Smartphone POV, feet stepping onto gravel parking lot, Japanese tourist shoes, casual downward angle, motion blur, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
POV smartphone footage exiting car. Door opens. View shifts down erratically. Feet step onto gravel. Gravel crunch implied by motion. Brief disorienting movement typical of tourist casually filming. Duration: 4 seconds.
```

---

### CUT 10 | 駐車場・港を見渡す
**時間**: 1:02-1:08 | **尺**: 6秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 駐車場から港を見渡す |
| **音声** | 港の環境音、カモメ |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone video from parking lot, camera rising from ground level, beginning to pan toward harbor, 16:9 aspect ratio
```

**Frame B**:
```
Smartphone video panning across Utoro Port from parking lot, fishing boats, harbor buildings, overcast sky, tourist arrival establishing shot, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Smartphone footage panning across Utoro Port. Camera rises from ground and pans right showing harbor panorama. Fishing boats, buildings, overcast sky. Handheld movement. Tourist arrival moment. Duration: 6 seconds.
```

---

### CUT 11 | KAZU I初登場（遠景）
**時間**: 1:08-1:14 | **尺**: 6秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 港に停泊するKAZU I（遠景） |
| **音声** | 「あれが今日乗る船かな？」 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone video of Utoro Port, small white sightseeing boat KAZU I visible in distance among fishing boats, harbor scene, 16:9 aspect ratio
```

**Frame B**:
```
Same view, tourist has spotted KAZU I, slight zoom beginning toward white boat, excited discovery moment, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Tourist spots KAZU I in harbor. Camera movement toward boat. Slight zoom. Excitement of finding their boat. Duration: 6 seconds.
```

---

### CUT 12 | KAZU Iに近づく
**時間**: 1:14-1:20 | **尺**: 6秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | KAZU Iに歩いて近づく |
| **音声** | 足音、エンジンのアイドリング |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone video walking toward KAZU I boat at dock, white vessel medium distance, handheld movement, harbor atmosphere, 16:9 aspect ratio
```

**Frame B**:
```
KAZU I getting closer, more detail visible, walking continues, hull details clearer, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Tourist walks toward KAZU I. Boat gets progressively closer. Handheld movement. Anticipation. Duration: 6 seconds.
```

---

### CUT 13 | KAZU I船体アップ
**時間**: 1:20-1:24 | **尺**: 4秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | KAZU Iの船名が見える船体 |
| **音声** | エンジン音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone close-up of KAZU I boat hull approaching, vessel name beginning to be visible, white hull, 16:9 aspect ratio
```

**Frame B**:
```
Clear view of KAZU I hull and name painted on side, white painted hull, harbor water below, tourist filming boat they will board, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Close-up of KAZU I hull. Name clearly visible. Tourist documenting boat. Duration: 4 seconds.
```

---

### CUT 14 | 乗船受付・受付カウンター
**時間**: 1:24-1:28 | **尺**: 4秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 受付カウンター |
| **音声** | 「お名前をこちらにご記入ください」 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone video of tour boat company counter, faded brochures, staff barely visible behind counter, 16:9 aspect ratio
```

**Frame B**:
```
Counter view clearer, Japanese staff welcoming, registration forms visible, fluorescent lighting, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Counter view at tour company. Staff interaction implied. Forms being prepared. Duration: 4 seconds.
```

---

### CUT 15 | 乗船受付・記入する手元
**時間**: 1:28-1:34 | **尺**: 6秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 乗船名簿に記入する手元 |
| **音声** | ペンの音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone close-up of blank passenger registration form, pen positioned, counter background blurred, 16:9 aspect ratio
```

**Frame B**:
```
Hands writing on form, pen moving, Japanese characters being written, passenger registration moment, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Close-up of hands writing on passenger form. Pen moves across paper. Natural writing motion. Duration: 6 seconds.
```

---

### CUT 16 | 乗船・タラップ下から
**時間**: 1:34-1:38 | **尺**: 4秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | タラップの下から上を見上げる |
| **音声** | 金属音、他の乗客の足音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone POV at bottom of metal gangway, looking up at boat, passengers ahead climbing, 16:9 aspect ratio
```

**Frame B**:
```
Same angle, other passengers climbing gangway visible, boat deck visible above, anticipation, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Looking up at gangway. Other passengers climbing ahead. Boarding anticipation. Duration: 4 seconds.
```

---

### CUT 17 | 乗船・タラップを上がる
**時間**: 1:38-1:42 | **尺**: 4秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | タラップを上がるPOV |
| **音声** | 金属のタラップ音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone POV on metal gangway, climbing, handrail visible, harbor water below through gaps, 16:9 aspect ratio
```

**Frame B**:
```
Almost at top of gangway, boat deck approaching, handheld shake, boarding moment, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
POV climbing gangway. Handheld shake. Metal sounds implied. Boat deck approaching. Duration: 4 seconds.
```

---

### CUT 18 | デッキに到着
**時間**: 1:42-1:46 | **尺**: 4秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | デッキに足を踏み入れる |
| **音声** | 「いらっしゃいませ」 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone POV stepping onto boat deck, crew member visible welcoming, 16:9 aspect ratio
```

**Frame B**:
```
On deck, Japanese crew member welcoming passengers, other passengers visible in background, boat interior glimpsed, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Stepping onto deck. Crew welcomes passengers. First moments aboard. Duration: 4 seconds.
```

---

### CUT 19 | 船内・席を探す
**時間**: 1:46-1:53 | **尺**: 7秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 船内を歩いて席を探す |
| **音声** | 乗客の話し声、子供の声 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone video entering boat cabin, passengers settling, looking for seats, daylight through windows, 16:9 aspect ratio
```

**Frame B**:
```
Inside boat cabin, Japanese families with children visible, warm atmosphere, soft daylight through windows, happy tourists, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
POV walking through boat cabin finding seats. Passengers settling in. Families with children visible. Warm happy atmosphere. Duration: 7 seconds.
```

---

### CUT 20 | 船内・窓の外を見る子供【Lipsync】⭐
**時間**: 1:53-2:00 | **尺**: 7秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 窓の外を見る子供の横顔 |
| **音声（日）** | 子供「ママ見て！海だよ！」 |
| **音声（英）字幕** | "Mommy, look! It's the ocean!" |
| **Lipsync** | ✅ 必要 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone video of 7-year-old Japanese girl by window, looking outside, profile view, mouth visible but neutral expression, boat cabin interior, 16:9 aspect ratio
```

**Frame B**:
```
Same 7-year-old Japanese girl pointing excitedly at window, joyful expression, mouth open speaking clearly visible for lipsync, profile with clear lips, ocean visible through window behind her, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Child looks out window then turns excitedly. She points and speaks "ママ見て！海だよ！" with clear mouth movement for lipsync. Natural child energy. Duration: 7 seconds.
```

#### ElevenLabs
- **キャラクター**: 子供（7歳女児）
- **セリフ**: 「ママ見て！海だよ！」

---

## 第2章：航海（1:53-3:23）| 14カット

---

### CUT 21 | 出航アナウンス
**時間**: 2:00-2:06 | **尺**: 6秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 船内スピーカー |
| **音声** | 「まもなく出航いたします」 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Boat cabin interior, speaker on ceiling visible, passengers settling into seats, 16:9 aspect ratio
```

**Frame B**:
```
Same view, announcement moment, passengers react slightly looking up, cabin atmosphere, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Cabin interior. Announcement plays. Passengers settle. Duration: 6 seconds.
```

---

### CUT 22 | 出航・ロープを解く
**時間**: 2:06-2:11 | **尺**: 5秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 係留ロープを解く作業員 |
| **音声** | ロープの音、エンジン音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Harbor worker at mooring rope, KAZU I boat still secured to pier, documentary style shot, 16:9 aspect ratio
```

**Frame B**:
```
Rope being released from bollard, KAZU I beginning to move away from pier, coiled rope, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Documentary shot of mooring rope released. Boat pulls away from pier. Duration: 5 seconds.
```

---

### CUT 23 | 出航・港を離れる（船上から）
**時間**: 2:11-2:18 | **尺**: 7秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | デッキから港が離れていく |
| **音声** | 波の音、エンジン音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone video from boat deck, Utoro harbor close, just departed, wake beginning to form, 16:9 aspect ratio
```

**Frame B**:
```
Harbor receding in distance, clear wake visible in water, tourist filming departure moment, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Tourist filming departure from deck. Harbor gets smaller. Wake forms behind boat. Duration: 7 seconds.
```

---

### CUT 24 | 出航・ドローン俯瞰
**時間**: 2:18-2:26 | **尺**: 8秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 港を離れるKAZU I（空撮） |
| **テロップ（日）** | 午前10時00分 出航 |
| **テロップ（英）** | 10:00 AM — Departure |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Aerial drone shot, KAZU I white boat just departing Utoro Port, small wake beginning, harbor visible, 16:9 aspect ratio
```

**Frame B**:
```
Higher angle aerial view, KAZU I with clear white wake trail, Shiretoko coastline visible in background, cinematic drone shot, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Aerial drone shot, KAZU I departing. Wake trail forms. Port shrinks. Shiretoko coastline visible. Cinematic. Duration: 8 seconds.
```

---

### CUT 25 | 航海・知床の海
**時間**: 2:26-2:34 | **尺**: 8秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 船から見る知床の海 |
| **音声** | 波の音、風 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone video from boat deck, sea horizon, beginning of scenic filming, overcast sky, 16:9 aspect ratio
```

**Frame B**:
```
Wider ocean view with Shiretoko coastline visible on right, gentle waves, overcast sky, peaceful atmosphere, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Tourist filming ocean panorama from deck. Gentle waves. Peaceful atmosphere. Duration: 8 seconds.
```

---

### CUT 26 | 航海・断崖を見上げる
**時間**: 2:34-2:40 | **尺**: 6秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 知床の断崖を見上げる |
| **音声** | 歓声 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Smartphone video looking up at cliffs, beginning of dramatic Shiretoko cliff view, 16:9 aspect ratio
```

**Frame B**:
```
Dramatic towering Shiretoko cliff view with digital zoom effect, tourist awe perspective, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Looking up at towering Shiretoko cliffs. Tourist awe. Slight digital zoom. Duration: 6 seconds.
```

---

### CUT 27 | オシンコシンの滝（遠景）
**時間**: 2:40-2:46 | **尺**: 6秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | オシンコシンの滝（遠景） |
| **音声** | 「あ、滝だ！」 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Coastline view from boat, Oshinkoshin twin waterfall as distant feature on cliff, 16:9 aspect ratio
```

**Frame B**:
```
Oshinkoshin Falls spotted more clearly, tourist beginning to aim camera at waterfall, excited discovery, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Tourist spots Oshinkoshin Falls. "あ、滝だ！" excitement. Camera turns toward waterfall. Duration: 6 seconds.
```

---

### CUT 28 | オシンコシンの滝（ズーム）
**時間**: 2:46-2:54 | **尺**: 8秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | オシンコシンの滝（デジタルズーム） |
| **音声** | カメラのシャッター音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Oshinkoshin Falls at normal zoom view, twin waterfall visible on cliff face, 16:9 aspect ratio
```

**Frame B**:
```
Extreme digital zoom on Oshinkoshin waterfall, pixelation and quality loss visible, shaky footage effect, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Dramatic digital zoom on waterfall. Quality degrades severely. Shaky attempt to capture detail. Duration: 8 seconds.
```

---

### CUT 29 | ヒグマ発見！（遠景）
**時間**: 2:54-2:58 | **尺**: 4秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 岸辺にヒグマを発見 |
| **音声** | 「熊！熊がいる！」 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Shiretoko coastline view from boat, tiny brown bear figure visible on rocky shore in distance, 16:9 aspect ratio
```

**Frame B**:
```
Tourist has spotted bear, excited camera movement toward shore, brown bear small but visible, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Tourist spots bear on shore. "熊！" excitement. Camera jerks toward shore. Duration: 4 seconds.
```

---

### CUT 30 | ヒグマ（必死のズーム）
**時間**: 2:58-3:06 | **尺**: 8秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | ヒグマに必死でズーム |
| **音声** | 興奮した声 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Hokkaido brown bear in distance at normal zoom, rocky shore, foraging, 16:9 aspect ratio
```

**Frame B**:
```
Extreme digital zoom on brown bear, severely pixelated image, very shaky excited footage, auto-focus hunting effect, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Desperate zoom attempt on distant bear. Severe quality loss. Extremely shaky excited footage. Auto-focus hunting. Duration: 8 seconds.
```

---

### CUT 31 | 船内の穏やかな時間①
**時間**: 3:06-3:12 | **尺**: 6秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | くつろぐ乗客たち |
| **音声** | 穏やかな会話、笑い声 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Boat cabin interior, Japanese passengers relaxing, families looking out windows smiling, 16:9 aspect ratio
```

**Frame B**:
```
Different angle of cabin, warm happy atmosphere, passengers enjoying the cruise, soft daylight, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Candid cabin footage. Passengers relaxed. Families smiling. Peaceful. Duration: 6 seconds.
```

---

### CUT 32 | 船内の穏やかな時間②
**時間**: 3:12-3:16 | **尺**: 4秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | スマホを見る若者、おしゃべりする老夫婦 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Young Japanese tourist checking smartphone in boat cabin, elderly couple visible in background, 16:9 aspect ratio
```

**Frame B**:
```
Same scene, natural unposed moments, elderly Japanese couple chatting warmly, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
More candid footage. Young person on phone. Elderly couple chatting. Duration: 4 seconds.
```

---

### CUT 33 | 【伏線】事務所・電話を受ける
**時間**: 3:16-3:23 | **尺**: 7秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 事務所で電話を受ける社員（焦りの表情） |
| **音声** | 電話の声（聞き取れない） |
| **意図** | 他社からの警告電話を無視 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Japanese man in boat company office, phone ringing, neutral expression, fluorescent lighting, messy desk, 16:9 aspect ratio
```

**Frame B**:
```
Same man on phone, worried expression developing, weather fax visible on desk, ominous atmosphere, documentary style, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Documentary reconstruction. Man answers phone. Expression changes from neutral to worried. He's receiving warning but will ignore it. Slow zoom. Ominous. Duration: 7 seconds.
```

---

## 第3章：異変（3:23-4:38）| 12カット

---

### CUT 34 | 俯瞰・KAZU I（不穏な空）
**時間**: 3:23-3:30 | **尺**: 7秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 上空からのKAZU I、空が暗くなる |
| **音声** | 風の音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Aerial drone shot, KAZU I white boat navigating along Shiretoko coast, sky beginning to darken with clouds, 16:9 aspect ratio
```

**Frame B**:
```
Same aerial angle, sky noticeably darker and more ominous, boat looking more isolated and vulnerable against grey sea, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Aerial shot of KAZU I along Shiretoko coast. Sky darkens ominously. Boat appears increasingly isolated and tiny. Foreboding atmosphere builds. Duration: 7 seconds.
```

---

### CUT 35 | 波が高くなる①
**時間**: 3:30-3:36 | **尺**: 6秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 窓越しに見える波（やや荒れ始める） |
| **テロップ（日）** | 午後12時30分頃 |
| **テロップ（英）** | Around 12:30 PM |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
View through boat window, waves starting to grow larger, whitecaps beginning to form, 16:9 aspect ratio
```

**Frame B**:
```
Larger waves visible through window, more whitecaps, boat rocking slightly, concerning weather, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Waves through window growing. Whitecaps appearing. Boat rocking. Duration: 6 seconds.
```

---

### CUT 36 | 波が高くなる②
**時間**: 3:36-3:42 | **尺**: 6秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | さらに高くなる波 |
| **音声** | 波の音が大きくなる |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Rougher waves through boat window, 2 meter swells beginning, grey sky, 16:9 aspect ratio
```

**Frame B**:
```
Water splashing against window, very rough seas, shaky footage effect, alarming conditions, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Waves continue growing. Water splashes window. Increasingly shaky camera. Duration: 6 seconds.
```

---

### CUT 37 | 不安そうな表情【Lipsync】⭐
**時間**: 3:42-3:50 | **尺**: 8秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 子供の不安そうな顔 |
| **音声（日）** | 子供「大丈夫かな...」 |
| **音声（英）字幕** | "Will we be okay...?" |
| **Lipsync** | ✅ 必要 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
7-year-old Japanese girl looking worried in shaking boat cabin, profile view, anxious expression, 16:9 aspect ratio
```

**Frame B**:
```
Same worried girl speaking with anxious expression, mouth clearly visible for lipsync, mother's arm entering frame to comfort her, 16:9 aspect ratio
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
**時間**: 3:50-3:55 | **尺**: 5秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 揺れる船内、荷物が滑る |
| **音声** | 荷物の音、小さな悲鳴 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Boat cabin beginning to rock noticeably, bags starting to shift on floor, passengers concerned, 16:9 aspect ratio
```

**Frame B**:
```
More severe rocking, bags sliding across floor, passengers gripping seats tightly, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Cabin rocks increasingly. Bags begin sliding. Passengers grip seats. Camera shake intensifies. Duration: 5 seconds.
```

---

### CUT 39 | 母親が子供を抱きしめる【Lipsync】⭐
**時間**: 3:55-4:03 | **尺**: 8秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 母親が子供を抱きしめる |
| **音声（日）** | 子供「ママ、怖い…」母親「大丈夫よ、もうすぐ戻るから」 |
| **音声（英）字幕** | "Mommy, I'm scared..." / "It's okay, we'll be back soon." |
| **Lipsync** | ✅ 必要 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Japanese mother and 7-year-old daughter in shaking boat cabin, child about to speak, both faces clearly visible, emotional moment beginning, 16:9 aspect ratio
```

**Frame B**:
```
Child clinging tightly to mother, both mouths clearly visible for lipsync, emotional reassurance moment, cabin tilting noticeably, 16:9 aspect ratio
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
**時間**: 4:03-4:10 | **尺**: 7秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 激しく揺れる船内、荷物が滑る |
| **音声** | 悲鳴、物が落ちる音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Boat cabin shaking violently, bags sliding across floor, fluorescent lights, passengers panicking, 16:9 aspect ratio
```

**Frame B**:
```
Extreme chaos in cabin, passengers in full panic, lights flickering, items flying, severe camera shake effect, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Violent shaking. Bags slide. Passengers panic. Lights flicker. Extreme camera shake. Duration: 7 seconds.
```

---

### CUT 41 | 手すりを握る手
**時間**: 4:10-4:14 | **尺**: 4秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 必死に手すりを握る複数の手 |
| **音声** | 荒い呼吸 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Single hand gripping metal handrail desperately, white knuckles, boat interior blurred, 16:9 aspect ratio
```

**Frame B**:
```
Multiple desperate hands visible - elderly hand, adult hand, child's hand - all gripping same rail, extreme shake effect, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Accidental footage of desperate hands gripping rail. Different hands visible. White knuckles. Duration: 4 seconds.
```

---

### CUT 42 | 俯瞰・荒れる海のKAZU I
**時間**: 4:14-4:22 | **尺**: 8秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 荒波の中の小さなKAZU I |
| **テロップ（日）** | 波高3メートル |
| **テロップ（英）** | Wave height: 3 meters |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Aerial drone shot, KAZU I in rough stormy sea, 3 meter waves beginning, boat being tossed, 16:9 aspect ratio
```

**Frame B**:
```
Same aerial angle, 4 meter waves now, tiny boat being tossed by massive waves, white foam everywhere, terrifying scale contrast, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Aerial shot of KAZU I in violent storm. Waves grow from 3 to 4 meters. Tiny boat tossed by massive waves. White foam. Terrifying scale contrast. Duration: 8 seconds.
```

---

### CUT 43 | 他社事務所・無線で呼びかけ【Lipsync】⭐
**時間**: 4:22-4:30 | **尺**: 8秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 別会社社員が無線で呼びかける |
| **音声（日）** | 「KAZU I、KAZU I、応答してください」 |
| **音声（英）字幕** | "KAZU I, KAZU I, please respond." |
| **Lipsync** | ✅ 必要 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Japanese boat company employee at desk, picking up VHF marine radio handset, concerned expression, 16:9 aspect ratio
```

**Frame B**:
```
Same employee speaking urgently into radio, desperate worried expression, mouth clearly visible for lipsync, radio equipment visible, 16:9 aspect ratio
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
**時間**: 4:30-4:34 | **尺**: 4秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 無線機のクローズアップ、ノイズのみ |
| **音声** | 無線ノイズ |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Close-up of VHF marine radio, LED indicator active, waiting for response, 16:9 aspect ratio
```

**Frame B**:
```
Extreme close-up of radio speaker grille, LED blinking red, static noise implied, no response atmosphere, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Close-up of radio. LED blinks red. Static noise. No response. Silence. Duration: 4 seconds.
```

---

### CUT 45 | 黒画面・時刻
**時間**: 4:34-4:38 | **尺**: 4秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 黒画面 |
| **テロップ（日）** | 13時13分 |
| **テロップ（英）** | 1:13 PM |
| **音声** | 心臓の鼓動音（低く） |

---

## 第4章：沈没（4:38-6:23）| 18カット

---

### CUT 46 | 浸水の始まり①
**時間**: 4:38-4:43 | **尺**: 5秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 床に水が入り始める |
| **音声** | 「水だ！」という声 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Boat cabin floor, first water seeping in from bow direction, dry floor beginning to wet, 16:9 aspect ratio
```

**Frame B**:
```
Water spreading rapidly across cabin floor, passengers' feet getting wet, alarming discovery, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Water seeps in from bow. Spreads across floor. Camera points down in disbelief. Duration: 5 seconds.
```

---

### CUT 47 | 浸水の始まり②
**時間**: 4:43-4:48 | **尺**: 5秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 水が広がる |
| **音声** | 悲鳴、パニック |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Water at ankle level in boat cabin, shoes and bags getting soaked, 16:9 aspect ratio
```

**Frame B**:
```
Water rising rapidly, bags beginning to float, extreme panic atmosphere, severe camera shake, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Water rises rapidly. Shoes and bags soaked. Extreme camera shake from panic. Duration: 5 seconds.
```

---

### CUT 48 | 傾く船内（15度）
**時間**: 4:48-4:53 | **尺**: 5秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 15度傾いた船内 |
| **音声** | 物が滑る音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Boat cabin beginning to tilt noticeably, water starting to pool on one side, 16:9 aspect ratio
```

**Frame B**:
```
Cabin at 15 degree tilt clearly visible, water pooling on lower side, disorienting view, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Cabin tilts to 15 degrees. Water pools on lower side. Disorienting view. Duration: 5 seconds.
```

---

### CUT 49 | 傾く船内（30度）【Lipsync】⭐
**時間**: 4:53-5:00 | **尺**: 7秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 30度傾いた船内 |
| **音声（日）** | 「傾いてる！」 |
| **音声（英）字幕** | "It's tilting!" |
| **Lipsync** | ✅ 必要 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Boat cabin at 20 degree tilt, passengers clinging desperately to anything stable, 16:9 aspect ratio
```

**Frame B**:
```
Severe 30 degree tilt, passenger screaming with mouth visible for lipsync, orange life jackets being grabbed, terrified faces, 16:9 aspect ratio
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
**時間**: 5:00-5:04 | **尺**: 4秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 救命胴衣を掴む手 |
| **音声** | パニックの声 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Hands reaching desperately for orange life jacket in severely tilted cabin, 16:9 aspect ratio
```

**Frame B**:
```
Hands grabbing orange life jacket with desperate grip, tilted cabin background, panic motion, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Close-up of desperate hands grabbing orange life jacket. Tilted cabin background. Panic motion. Duration: 4 seconds.
```

---

### CUT 51 | 海保・118番受信【Lipsync】⭐
**時間**: 5:04-5:12 | **尺**: 8秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 海上保安庁通信室 |
| **テロップ（日）** | 第一管区海上保安本部 |
| **テロップ（英）** | 1st Regional Coast Guard HQ |
| **音声（日）** | 通信員「118番です。状況を教えてください」 |
| **音声（英）字幕** | "This is 118. Please describe your situation." |
| **Lipsync** | ✅ 必要 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Japan Coast Guard communication center, operator receiving emergency call, monitors showing maritime maps visible, professional atmosphere, 16:9 aspect ratio
```

**Frame B**:
```
Close-up of operator speaking into headset, mouth clearly visible for lipsync, expression shifting to concern, professional tension, 16:9 aspect ratio
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
**時間**: 5:12-5:18 | **尺**: 6秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 電話する船長の後ろ姿 |
| **音声** | 船長の声（遠く） |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Captain glimpsed from behind in flooded wheelhouse, water at ankles, making phone call, 16:9 aspect ratio
```

**Frame B**:
```
Captain on phone, back to camera, flooded wheelhouse with water rising, desperate posture, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Glimpse of captain making emergency call. Flooded wheelhouse. Water rising. Duration: 6 seconds.
```

---

### CUT 53 | 船長の通報（声）【Lipsync】⭐
**時間**: 5:18-5:26 | **尺**: 8秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 船長の横顔（一瞬） |
| **音声（日）** | 船長「浸水している…沈みそうだ…」 |
| **音声（英）字幕** | "We're taking on water... We're going to sink..." |
| **Lipsync** | ✅ 必要 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Captain's profile barely visible in flooded wheelhouse, water all around, 16:9 aspect ratio
```

**Frame B**:
```
Captain's face visible in profile, speaking desperately into phone, mouth clearly visible for lipsync, hopeless expression, flooded surroundings, 16:9 aspect ratio
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
**時間**: 5:26-5:30 | **尺**: 4秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 乗客がスマホを取り出す |
| **音声** | 水の音、泣き声 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Japanese passenger in flooded boat cabin, taking out smartphone from pocket, water at thigh level, 16:9 aspect ratio
```

**Frame B**:
```
Phone in trembling hand, about to make final call, orange life jacket worn, devastating atmosphere, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Passenger takes out phone. Water at thigh level. Life jacket worn. Devastating moment beginning. Duration: 4 seconds.
```

---

### CUT 55 | 最後の電話②【Lipsync】⭐
**時間**: 5:30-5:40 | **尺**: 10秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 涙を流しながら電話する乗客 |
| **音声（日）** | 乗客「もう会えないかもしれない…」 |
| **音声（英）字幕** | "I might not see you again..." |
| **Lipsync** | ✅ 必要 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Middle-aged Japanese man beginning to speak into phone, tears forming in eyes, water rising around him, 16:9 aspect ratio
```

**Frame B**:
```
Same man with tears streaming down face, speaking final heartbreaking words, mouth clearly visible for lipsync, phone pressed to ear, water at chest level, orange life jacket worn, unbearable human tragedy, 16:9 aspect ratio
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
**時間**: 5:40-5:45 | **尺**: 5秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 腰まで水位上昇 |
| **音声** | 水の音、呼吸音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Inside sinking boat, water at thigh level, camera held desperately above water, 16:9 aspect ratio
```

**Frame B**:
```
Water at waist level now, orange life jackets floating, camera held up high desperately, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Water rises from thigh to waist. Camera held above water desperately. Duration: 5 seconds.
```

---

### CUT 57 | 水位上昇②（胸まで）
**時間**: 5:45-5:50 | **尺**: 5秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 胸まで水位上昇 |
| **音声** | 水の音、泣き声 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Inside sinking boat, water at stomach level, cabin ceiling getting closer, 16:9 aspect ratio
```

**Frame B**:
```
Water at chest level, ceiling and flickering fluorescent lights visible just above, terrifying final perspective, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Water rises to chest. Ceiling and flickering lights visible above. Terrifying. Duration: 5 seconds.
```

---

### CUT 58 | カメラ水没①（水面ギリギリ）
**時間**: 5:50-5:54 | **尺**: 4秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 水面ギリギリのカメラ |
| **音声** | 水中の音が混じる |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Camera barely above water surface inside sinking boat, last glimpse of cabin ceiling above, 16:9 aspect ratio
```

**Frame B**:
```
Half underwater view, distorted image, water at lens level, split view above and below water, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Camera at water surface. Half underwater view. Distortion begins. Duration: 4 seconds.
```

---

### CUT 59 | カメラ水没②（完全水没）
**時間**: 5:54-6:00 | **尺**: 6秒 | **視点**: 📱

| 項目 | 内容 |
|------|------|
| **映像** | 完全に水没、画面が乱れる |
| **音声** | 水中音→ノイズ→無音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Camera going completely under water, air bubbles rising, faint light from above, 16:9 aspect ratio
```

**Frame B**:
```
Completely underwater murky view, bubbles rising toward surface, screen glitching effect, light fading to darkness, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Camera submerges completely. Bubbles rise. Light fades. Screen glitches from water damage. Transition to darkness. Duration: 6 seconds.
```

---

### CUT 60 | 黒画面
**時間**: 6:00-6:03 | **尺**: 3秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 完全な黒 |
| **音声** | 完全な無音 |

---

### CUT 61 | テロップ「14時17分」
**時間**: 6:03-6:07 | **尺**: 4秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 黒画面に白テロップ |
| **テロップ（日）** | 14時17分 |
| **テロップ（英）** | 2:17 PM |
| **音声** | 無音 |

---

### CUT 62 | テロップ「通信途絶」
**時間**: 6:07-6:13 | **尺**: 6秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 黒画面に白テロップ |
| **テロップ（日）** | 通信途絶 |
| **テロップ（英）** | Communication Lost |
| **音声** | 無音 |

---

### CUT 63 | 黒画面（長い沈黙）
**時間**: 6:13-6:23 | **尺**: 10秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 完全な黒 |
| **音声** | 完全な無音 |
| **意図** | 沈黙が最も雄弁に語る |

---

## 第5章：捜索（6:23-8:08）| 14カット

---

### CUT 64 | 海保・緊急会議
**時間**: 6:23-6:30 | **尺**: 7秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 海上保安庁の緊急対策室 |
| **テロップ（日）** | 13時30分 |
| **テロップ（英）** | 1:30 PM |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Japan Coast Guard emergency operations room, officers entering urgently, 16:9 aspect ratio
```

**Frame B**:
```
Officers gathered around large table with Shiretoko maps, urgent planning atmosphere, screens showing search area, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Coast Guard emergency operations. Officers gather around table with Shiretoko maps. Urgent atmosphere. Duration: 7 seconds.
```

---

### CUT 65 | ヘリ・離陸準備
**時間**: 6:30-6:36 | **尺**: 6秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 釧路航空基地、ヘリが離陸準備 |
| **テロップ（日）** | 第一管区海上保安本部 釧路航空基地 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Japan Coast Guard air station helipad, rescue helicopter on pad, rotors stationary, ground crew visible, 16:9 aspect ratio
```

**Frame B**:
```
Ground crew preparing helicopter for urgent departure, crew running to positions, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Helicopter on pad, crew preparing. Urgent rescue mission preparation. Duration: 6 seconds.
```

---

### CUT 66 | ヘリ・ローター回転
**時間**: 6:36-6:41 | **尺**: 5秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | ローターが回り始める |
| **音声** | ローター音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Rescue helicopter rotors stationary, about to spin up, 16:9 aspect ratio
```

**Frame B**:
```
Rotors spinning at full speed creating blur effect, crew clearing area, dust being blown, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Rotors spin up. Crew clears area. Urgent departure preparation. Duration: 5 seconds.
```

---

### CUT 67 | ヘリ・離陸
**時間**: 6:41-6:46 | **尺**: 5秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | ヘリが離陸 |
| **音声** | ローター音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Coast Guard rescue helicopter lifting off from helipad, just leaving ground, 16:9 aspect ratio
```

**Frame B**:
```
Helicopter rising into overcast sky, dramatic urgent departure, rescue mission beginning, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Helicopter lifts off. Dramatic departure. Rescue mission begins. Duration: 5 seconds.
```

---

### CUT 68 | 巡視船・出航準備
**時間**: 6:46-6:52 | **尺**: 6秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 巡視船「くなしり」出航準備 |
| **テロップ（日）** | 巡視船「くなしり」 |
| **テロップ（英）** | Patrol Vessel "Kunashiri" |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Japan Coast Guard patrol vessel at dock, white hull with blue stripe, crew preparing, 16:9 aspect ratio
```

**Frame B**:
```
Mooring lines being prepared for release, vessel ready for urgent departure, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Patrol vessel preparation. Crew readying lines. Urgent mission. Duration: 6 seconds.
```

---

### CUT 69 | 巡視船・出航
**時間**: 6:52-7:00 | **尺**: 8秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 巡視船が港を出る |
| **音声** | 汽笛、エンジン音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Patrol vessel departing dock, mooring lines released, ship moving, 16:9 aspect ratio
```

**Frame B**:
```
Vessel heading out to sea urgently, bow cutting through water, crew visible on deck, dramatic departure, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Patrol vessel departs. Horn sounds. Ship heads out to search area. Duration: 8 seconds.
```

---

### CUT 70 | ヘリ・海上捜索
**時間**: 7:00-7:08 | **尺**: 8秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 知床の海上を捜索するヘリ |
| **音声** | ローター音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Rescue helicopter flying low over grey Sea of Okhotsk, searching, 16:9 aspect ratio
```

**Frame B**:
```
Helicopter spotlight beam scanning dark water, Shiretoko cliffs visible in background, desperate search, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Helicopter flying low over Sea of Okhotsk searching. Spotlight scanning. Duration: 8 seconds.
```

---

### CUT 71 | ヘリからの視点①
**時間**: 7:08-7:16 | **尺**: 8秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | ヘリから見下ろす海面 |
| **音声** | ローター音、無線「視認できず」 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Aerial view from rescue helicopter looking down at ocean, searching grey water, 16:9 aspect ratio
```

**Frame B**:
```
Empty grey rough ocean seen from above, no survivors or debris visible, devastating futile search, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
View from helicopter looking down. Empty ocean. No survivors. Desperate futile search. Duration: 8 seconds.
```

---

### CUT 72 | ヘリからの視点②
**時間**: 7:16-7:23 | **尺**: 7秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 広大な空の海、何も見つからない |
| **音声** | 無線ノイズ |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Wider aerial view from helicopter, vast empty ocean stretching out, 16:9 aspect ratio
```

**Frame B**:
```
Vast empty ocean stretching to horizon, no debris anywhere visible, overwhelming hopelessness and scale, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Vast empty ocean. No debris visible. Overwhelming scale. Hopelessness. Duration: 7 seconds.
```

---

### CUT 73 | 日没①
**時間**: 7:23-7:33 | **尺**: 10秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 知床の海に沈む夕日 |
| **テロップ（日）** | 17時30分 日没 |
| **テロップ（英）** | 5:30 PM — Sunset |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Sun beginning to set over Sea of Okhotsk near Shiretoko, orange light on water, 16:9 aspect ratio
```

**Frame B**:
```
Dramatic sunset over ocean, deep orange and crimson sky, dark water below, Shiretoko silhouette, melancholic beauty, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Timelapse-style sunset. Colors shift dramatically. Hope fading with light. Duration: 10 seconds.
```

---

### CUT 74 | 日没②（巡視船のシルエット）
**時間**: 7:33-7:40 | **尺**: 7秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 夕日を背に捜索を続ける巡視船 |
| **テロップ（日）** | 捜索は夜を徹して続けられた |
| **テロップ（英）** | The search continued through the night |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Patrol vessel silhouette against dramatic sunset sky, still searching, 16:9 aspect ratio
```

**Frame B**:
```
Ship continuing search as darkness falls, silhouette against dying orange light, determination, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Patrol vessel silhouette against dying light. Still searching. Determination. Duration: 7 seconds.
```

---

### CUT 75 | 夜間捜索①（サーチライト）
**時間**: 7:40-7:48 | **尺**: 8秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 投光器で照らされた夜の海 |
| **音声** | 波、エンジン音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Night sea completely dark, single searchlight beam appearing, 16:9 aspect ratio
```

**Frame B**:
```
Multiple powerful searchlights sweeping black ocean surface, urgent night search operation, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Night search. Searchlights sweep black water. Crew silhouettes. Duration: 8 seconds.
```

---

### CUT 76 | 夜間捜索②（巡視船デッキ）
**時間**: 7:48-7:56 | **尺**: 8秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | デッキで捜索を続ける海保職員 |
| **音声** | 無線、波 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Coast Guard crew on patrol vessel deck at night, using binoculars to search, 16:9 aspect ratio
```

**Frame B**:
```
Crew still searching relentlessly, spotlight illuminating behind them, dedicated professionals, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Dedicated crew searching at night. Binoculars. Relentless. Duration: 8 seconds.
```

---

### CUT 77 | 港で待つ家族
**時間**: 7:56-8:08 | **尺**: 12秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 夜のウトロ港、待ち続ける家族のシルエット |
| **音声** | 波の音、風、静寂 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Night scene at Utoro Port, distant silhouettes of people beginning to gather at water's edge, 16:9 aspect ratio
```

**Frame B**:
```
Silhouettes of families at harbor edge, people huddled together in devastating vigil, harbor lights reflecting on dark water, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Families waiting at night harbor. Silhouettes at water's edge. People huddle together. Devastating vigil. Camera maintains respectful distance. Duration: 12 seconds.
```

---

## 第6章：鎮魂（8:08-10:00）| 12カット

---

### CUT 78 | テロップ「72時間後」
**時間**: 8:08-8:14 | **尺**: 6秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 黒画面に白テロップ |
| **テロップ（日）** | 72時間後 |
| **テロップ（英）** | 72 hours later |
| **音声** | 無音 |

---

### CUT 79 | 救命胴衣発見
**時間**: 8:14-8:26 | **尺**: 12秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 海面に浮かぶオレンジ色の救命胴衣 |
| **音声** | 波の音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Grey ocean surface, searching view, empty water, overcast sky, 16:9 aspect ratio
```

**Frame B**:
```
Single orange life jacket floating alone on grey sea, devastating discovery, profound symbol of tragedy, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Camera searches grey ocean surface. Orange life jacket comes into view. Single vest drifting alone. Symbol of tragedy. Camera slowly tracks it. Duration: 12 seconds.
```

---

### CUT 80 | 担架を運ぶ
**時間**: 8:26-8:38 | **尺**: 12秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 担架で運ばれる遺体 |
| **音声** | 静寂 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
White-covered stretcher being lifted by Coast Guard officers in uniform, 16:9 aspect ratio
```

**Frame B**:
```
Officers carrying white-covered stretcher with utmost respect and dignity, solemn atmosphere, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Stretcher carried by officers. White covering. Utmost dignity. Duration: 12 seconds.
```

---

### CUT 81 | 敬礼
**時間**: 8:38-8:50 | **尺**: 12秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 整列して敬礼する海上保安官 |
| **音声** | 静寂（波音のみ） |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Japan Coast Guard officers standing at attention in uniform, preparing to salute, 16:9 aspect ratio
```

**Frame B**:
```
Officers in formal synchronized salute as stretcher passes by, profound respect, perfect stillness, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Coast Guard officers in line. They raise hands in formal salute. Perfect stillness. Profound respect. Duration: 12 seconds.
```

---

### CUT 82 | 港に並ぶ花①
**時間**: 8:50-9:00 | **尺**: 10秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | ウトロ港に並べられた花と写真（パン） |
| **音声** | 風の音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Memorial flowers at Utoro Port beginning of arrangement, left side, white chrysanthemums, 16:9 aspect ratio
```

**Frame B**:
```
Camera has panned across full memorial, many flower bouquets and framed photos with black ribbons, incense burning, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Slow pan across memorial. Flowers, photos with black ribbons, incense. Duration: 10 seconds.
```

---

### CUT 83 | 港に並ぶ花②（クローズアップ）
**時間**: 9:00-9:08 | **尺**: 8秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 花と線香のクローズアップ |
| **音声** | 風 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Mid-distance view of memorial flowers and incense at port, 16:9 aspect ratio
```

**Frame B**:
```
Close-up of white chrysanthemum flowers and burning incense sticks, smoke rising gently in wind, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Close-up of memorial. Incense smoke rises. Wind moves flowers gently. Duration: 8 seconds.
```

---

### CUT 84 | 水中イメージ①
**時間**: 9:08-9:20 | **尺**: 12秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 深い青の水中、光が差し込む |
| **音声** | 深い低音のドローン |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Deep underwater scene, darkness with faint light from surface above, 16:9 aspect ratio
```

**Frame B**:
```
Ethereal light rays penetrating from surface into deep blue water, floating particles like souls ascending, peaceful melancholic atmosphere, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Ethereal underwater scene. Light rays gradually intensify. Particles drift upward like souls. Peaceful melancholy. Duration: 12 seconds.
```

---

### CUT 85 | 水中イメージ②（統計テロップ）
**時間**: 9:20-9:32 | **尺**: 12秒 | **Veo**: 不要（テロップ合成）

| 項目 | 内容 |
|------|------|
| **映像** | 水中イメージに統計テロップ |
| **テロップ（日/英）** | 乗客乗員26名 / 26 passengers and crew |

---

### CUT 86 | 統計テロップ②
**時間**: 9:32-9:40 | **尺**: 8秒 | **Veo**: 不要（テロップ合成）

| 項目 | 内容 |
|------|------|
| **映像** | 水中イメージ継続 |
| **テロップ（日/英）** | 20名死亡確認 6名行方不明 / 20 confirmed dead, 6 still missing |

---

### CUT 87 | 知床の海（現在）
**時間**: 9:40-9:53 | **尺**: 13秒 | **視点**: 🎬

| 項目 | 内容 |
|------|------|
| **映像** | 穏やかな知床の海（ドローン） |
| **音声** | 穏やかな波音 |

#### Google Flow (NanoBananaPro) プロンプト
**Frame A**:
```
Calm Sea of Okhotsk, beginning of peaceful drone view, 16:9 aspect ratio
```

**Frame B**:
```
Peaceful serene sea with dramatic Shiretoko cliffs, beautiful clear day, stunning natural beauty unchanged, contemplative ending, 16:9 aspect ratio
```

#### Veo 3.1プロンプト
```
Drone footage of calm peaceful sea. Nature unchanged. Beautiful day. Stunning natural beauty that conceals horror below. Contemplative ending. Duration: 13 seconds.
```

---

### CUT 88 | 最終テロップ
**時間**: 9:53-10:00 | **尺**: 7秒 | **Veo**: 不要

| 項目 | 内容 |
|------|------|
| **映像** | 黒画面 |
| **テロップ（日）** | 二度と繰り返さないために |
| **テロップ（英）** | So that this never happens again |
| **音声** | 無音 |

---

### CUT 89 | エンドクレジット
**時間**: 9:53-10:00 | **尺**: 7秒 | **Veo**: 不要

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
| **総カット数** | 90（CUT 7B追加） |
| **総尺** | 10分00秒（600秒） |
| **平均カット尺** | 6.7秒 |
| **視点A（乗客カメラ）📱** | 41カット |
| **視点B（ドキュメンタリー）🎬** | 34カット |
| **テロップのみ** | 15カット |

## AI制作カウント

| ツール | カット数 |
|--------|---------|
| **Google Flow (NanoBananaPro)** | 66カット |
| **Veo 3.1生成** | 66カット |
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
| 2025-02-01 | v2.1 作成 - Google Flow/NanoBananaProに統一、CUT 7B追加（90カット） |

---

**制作**: KAZU I - 72時間 プロジェクト
**出品先**: WAIFF KYOTO 2026
