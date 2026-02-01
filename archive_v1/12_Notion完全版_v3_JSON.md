# 🎬 KAZU I - 72時間 | Notion完全版 v3.0 (JSON形式)

> **最終更新**: 2025年2月1日
> **出品先**: WAIFF KYOTO 2026
> **総尺**: 10分00秒（600秒）
> **総カット**: 90カット
> **プロンプト形式**: JSON構造
> **映像品質**: Sora2風（荒い映像）

---

# 📋 目次

1. [作品概要](#1-作品概要)
2. [制作ワークフロー](#2-制作ワークフロー)
3. [映像品質設定（Sora2風）](#3-映像品質設定sora2風)
4. [キャラクター・船体設定](#4-キャラクター船体設定)
5. [全90カット詳細（JSON）](#5-全90カット詳細json)
6. [mCaptions設定ガイド](#6-mcaptions設定ガイド)
7. [ElevenLabs音声一覧](#7-elevenlabs音声一覧)
8. [制作統計](#8-制作統計)

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
| **第1章** | 出発 | 0:25-1:50 | 17 | 平穏・期待 |
| **第2章** | 航海 | 1:50-3:20 | 14 | 喜び・伏線 |
| **第3章** | 異変 | 3:20-4:35 | 12 | 不安・緊張 |
| **第4章** | 沈没 | 4:35-6:20 | 18 | 恐怖・絶望 |
| **第5章** | 捜索 | 6:20-8:05 | 14 | 焦燥・希望 |
| **第6章** | 鎮魂 | 8:05-10:00 | 12 | 悲しみ・祈り |

## 視点の定義

| 視点 | 記号 | 説明 | 映像特徴 |
|------|------|------|----------|
| **視点A** | 📱 | 乗客のスマートフォン映像 | 手ブレ、iPhone画質、REC表示、荒い映像 |
| **視点B** | 🎬 | ドキュメンタリー（客観） | プロ撮影、ドローン、報道映像、フィルムグレイン |

---

# 2. 制作ワークフロー

## AI制作ツール一覧

| ツール | 用途 | 対象カット |
|--------|------|-----------|
| **Google Flow (nanobanana pro)** | 全画像生成（Sora2風品質） | 全67カット |
| **Veo 3.1** | Frame A→B補間・動画生成 | 67カット |
| **ElevenLabs** | 日本語音声合成 | 9カット（Lipsync） |
| **Kling AI** | Lipsync動画生成 | 9カット |
| **mCaptions** | 字幕・テロップ | 全カット |

## 動画生成ワークフロー

```
1. Frame A（始まり画像）生成 → Google Flow (nanobanana pro) + Sora2風品質指定
2. Frame B（終わり画像）生成 → Google Flow (nanobanana pro) + Sora2風品質指定
3. 動画生成 → Veo 3.1 で Frame A → Frame B を補間
4. Lipsyncカットのみ → ElevenLabs音声 + Kling AI
5. 編集・字幕 → Final Cut Pro + mCaptions
```

---

# 3. 映像品質設定（Sora2風）

## 品質プリセット（全カット共通）

```json
{
  "quality_preset": "sora2_style",
  "settings": {
    "film_grain": "heavy visible grain throughout",
    "resolution": "slightly degraded, soft focus effect",
    "color_grading": "muted desaturated colors, subtle color bleeding",
    "artifacts": "visible compression artifacts, noise in shadow areas",
    "motion": "natural motion blur, occasional judder",
    "lens_characteristics": "imperfect optics, subtle chromatic aberration at edges",
    "overall_feel": "raw documentary footage, authentic imperfection"
  }
}
```

## 視点別品質指定

### 視点A（乗客スマホ）追加指定
```json
{
  "perspective_a_additions": {
    "camera_shake": "natural handheld movement, increased during stress",
    "auto_exposure": "occasional adjustment artifacts",
    "digital_zoom": "severe pixelation when zoomed",
    "timestamp_overlay": "2022/04/23 format visible",
    "compression": "iPhone video compression artifacts"
  }
}
```

### 視点B（ドキュメンタリー）追加指定
```json
{
  "perspective_b_additions": {
    "camera_work": "more stable but still documentary feel",
    "grain_pattern": "film-like grain texture",
    "color_science": "slightly desaturated news footage look",
    "lens_flare": "occasional subtle flares"
  }
}
```

---

# 4. キャラクター・船体設定

## キャラクター一貫性設定

```json
{
  "characters": {
    "girl_7yo": {
      "id": "char_girl",
      "age": 7,
      "description": "7-year-old Japanese girl",
      "hair": "short black hair, bob cut style",
      "clothing": "bright pink winter jacket, white sneakers",
      "face": "round childish face, innocent expression",
      "consistency_tags": ["short black hair", "pink jacket", "7 year old girl"]
    },
    "mother": {
      "id": "char_mother",
      "age": "mid-30s",
      "description": "Mother of 7-year-old girl",
      "hair": "black hair in ponytail",
      "clothing": "beige wool coat",
      "face": "gentle warm features, Japanese woman",
      "consistency_tags": ["ponytail", "beige coat", "30s Japanese woman"]
    },
    "male_passenger": {
      "id": "char_man",
      "age": "mid-40s",
      "description": "Middle-aged male passenger",
      "hair": "short black hair",
      "clothing": "navy blue down jacket",
      "accessories": "rectangular glasses",
      "face": "ordinary middle-aged Japanese man",
      "consistency_tags": ["navy jacket", "glasses", "40s man"]
    },
    "elderly_husband": {
      "id": "char_elder_m",
      "age": "60s",
      "description": "Elderly male passenger",
      "hair": "grey-white mixed hair",
      "clothing": "grey casual jacket",
      "consistency_tags": ["grey hair", "grey jacket", "elderly man"]
    },
    "elderly_wife": {
      "id": "char_elder_f",
      "age": "60s",
      "description": "Elderly female passenger",
      "hair": "white bob cut",
      "clothing": "light purple sweater",
      "consistency_tags": ["white bob hair", "purple sweater", "elderly woman"]
    },
    "captain_toyoda": {
      "id": "char_captain",
      "age": 54,
      "description": "Captain Toyoda Noriyuki",
      "hair": "short black hair, slightly thinning",
      "clothing": "captain's uniform, white shirt",
      "face": "weathered tired expression, 50s Japanese man",
      "consistency_tags": ["captain uniform", "54 year old", "tired face"]
    },
    "deckhand_soyama": {
      "id": "char_deckhand",
      "age": 27,
      "description": "Deckhand Soyama Akira (first day)",
      "hair": "black hair",
      "clothing": "work jacket, casual clothes",
      "face": "young nervous expression",
      "consistency_tags": ["young man", "work clothes", "nervous"]
    }
  }
}
```

## 船体設定

```json
{
  "vessel": {
    "name": "KAZU I",
    "name_japanese": "カズワン",
    "type": "small sightseeing tourist boat",
    "specifications": {
      "tonnage": "19 tons",
      "length": "12 meters",
      "capacity": "65 persons",
      "built": "1985 (37 years old at accident)",
      "origin": "originally built for calm Seto Inland Sea"
    },
    "appearance": {
      "hull_color": "white",
      "name_display": "KAZU I in dark letters on hull",
      "condition": "aged, weathered paint, functional but old",
      "details": "small deck, cabin with bench seating, large windows"
    },
    "consistency_tags": ["white hull", "KAZU I", "small 12 meter boat", "aged vessel"]
  }
}
```

## 場所設定

```json
{
  "locations": {
    "utoro_port": {
      "description": "Utoro fishing port in Shari, Hokkaido",
      "features": [
        "small fishing harbor",
        "wooden docks with pilings",
        "multiple fishing boats",
        "low-rise coastal buildings",
        "tour company office nearby",
        "cold April atmosphere"
      ],
      "weather_at_departure": "overcast, relatively calm"
    },
    "company_office": {
      "description": "Shiretoko Sightseeing Ship company office",
      "features": [
        "cramped space",
        "cluttered desks with papers",
        "old CRT television showing weather",
        "harsh fluorescent lighting",
        "calendar showing April 2022",
        "dirty windows with harbor view",
        "ashtrays and cold coffee cups",
        "faded tour posters",
        "negligent atmosphere"
      ]
    },
    "shiretoko_coast": {
      "description": "Shiretoko Peninsula western coastline",
      "features": [
        "UNESCO World Heritage site",
        "dramatic volcanic cliffs",
        "Oshinkoshin Falls (twin waterfall)",
        "Kamuiwakka Falls",
        "Kashuni no Taki (accident site)",
        "brown bears on shore",
        "cold Sea of Okhotsk"
      ]
    }
  }
}
```

---

# 5. 全90カット詳細（JSON）

---

## 序章：プロローグ（0:00-0:25）| 4カット

---

### CUT 1 | 黒画面・日付

```json
{
  "cut": {
    "id": "cut_01",
    "title": "黒画面・日付",
    "time": "0:00-0:04",
    "duration": 4,
    "perspective": null,
    "generation_required": false,
    "content": {
      "video": "完全な黒画面",
      "text_ja": "2022年4月23日",
      "text_en": "April 23, 2022",
      "audio": "完全な無音"
    }
  }
}
```

---

### CUT 2 | 黒画面・場所

```json
{
  "cut": {
    "id": "cut_02",
    "title": "黒画面・場所",
    "time": "0:04-0:08",
    "duration": 4,
    "perspective": null,
    "generation_required": false,
    "content": {
      "video": "完全な黒画面",
      "text_ja": "北海道・知床半島沖",
      "text_en": "Off the coast of Shiretoko Peninsula, Hokkaido",
      "audio": "遠くの波音がかすかにフェードイン"
    }
  }
}
```

---

### CUT 3 | NHKニュース速報

```json
{
  "cut": {
    "id": "cut_03",
    "title": "NHKニュース速報",
    "time": "0:08-0:18",
    "duration": 10,
    "perspective": "B_documentary",
    "generation_required": true,
    "content": {
      "video": "テレビ画面のニュース速報",
      "text_overlay": "【速報】知床 観光船と連絡取れず",
      "audio_ja": "NHKアナウンサー「知床半島沖で観光船と連絡が取れなくなっているという情報が入りました」",
      "audio_en_subtitle": "We have reports that contact has been lost with a tour boat off the coast of Shiretoko Peninsula."
    },
    "prompts": {
      "frame_a": {
        "prompt": "A Japanese television screen showing NHK news broadcast, red breaking news banner 速報 just appearing at top of screen, news anchor desk visible in background, CRT television texture with visible scan lines, heavy film grain, slightly degraded video quality, muted colors, raw broadcast footage aesthetic, 16:9 aspect ratio",
        "quality": "sora2_style: grainy, soft focus, color bleeding, compression artifacts"
      },
      "frame_b": {
        "prompt": "Japanese NHK television news broadcast in full breaking news mode, prominent red 速報 banner at top, main headline text 知床 観光船と連絡取れず clearly displayed in large white text on dark blue background, detailed map of Shiretoko Peninsula on right side with incident location marked, news ticker scrolling at bottom, CRT television aesthetic with scan lines, heavy visible grain, degraded resolution, muted desaturated colors, noise in darker areas, 16:9 aspect ratio",
        "quality": "sora2_style: raw footage, imperfect colors, visible artifacts"
      },
      "veo": "TV news broadcast animation, breaking news banner slides in with slight judder, text fades in, map graphic appears, CRT flicker effect, static camera, grainy degraded video quality, 10 seconds"
    }
  }
}
```

---

### CUT 4 | 事務所への移行

```json
{
  "cut": {
    "id": "cut_04",
    "title": "事務所への移行",
    "time": "0:18-0:25",
    "duration": 7,
    "perspective": "B_documentary",
    "generation_required": true,
    "content": {
      "video": "事故を起こした船会社事務所（広角・引き）",
      "text_ja": "これは、その12時間前の記録である。",
      "text_en": "This is a record from 12 hours before.",
      "audio": "テレビ音声がフェードアウト→静寂"
    },
    "prompts": {
      "frame_a": {
        "prompt": "Fading Japanese TV news screen showing red 速報 banner dimming and transitioning toward darkness, CRT TV aesthetic with scan lines, heavy film grain, degraded quality, 16:9 aspect ratio",
        "quality": "sora2_style: grainy, artifacts, color bleeding"
      },
      "frame_b": {
        "prompt": "Wide establishing shot inside cramped Japanese tour boat company office in Hokkaido, cluttered desks with papers and boat schedules, old CRT television in corner showing weather forecast, harsh fluorescent tube lighting from above, calendar showing April 2022 on wall, dirty windows with condensation showing harbor view, ashtrays with cigarette butts and cold coffee cups on desks, faded tour posters on walls, negligent atmosphere, documentary cinematography, heavy visible film grain, soft focus, muted desaturated colors, noise in shadows, raw documentary footage feel, ominous mood, 16:9 aspect ratio",
        "quality": "sora2_style: degraded resolution, color bleeding, imperfect optics"
      },
      "veo": "Transition from fading TV news to boat company office interior, grainy documentary footage, harsh fluorescent lights, ominous atmosphere, 7 seconds"
    }
  }
}
```

---

## 第1章：出発（0:25-1:50）| 17カット

---

### CUT 5 | 事務所・波浪注意報

```json
{
  "cut": {
    "id": "cut_05",
    "title": "事務所・波浪注意報",
    "time": "0:25-0:30",
    "duration": 5,
    "perspective": "B_documentary",
    "generation_required": true,
    "content": {
      "video": "事務所のテレビ、波浪注意報表示",
      "audio": "テレビの気象情報音声",
      "intent": "【重要伏線】警報を無視した証拠"
    },
    "prompts": {
      "frame_a": {
        "prompt": "Old CRT television in dim Japanese office, weather broadcast starting on screen, TV glow illuminating darkness, papers scattered on desk in foreground slightly out of focus, heavy film grain, degraded video quality, muted colors, 16:9 aspect ratio",
        "quality": "sora2_style: grainy, soft focus, noise artifacts"
      },
      "frame_b": {
        "prompt": "Close-up of old CRT television displaying Japanese weather warning with text 波浪注意報 in yellow on blue background, weather map showing Hokkaido coastal region with warning symbols, TV screen glowing in dim office room, reflections of fluorescent lights on glass, documentary evidence shot, heavy visible grain, degraded resolution, muted desaturated colors, noise in darker areas, 16:9 aspect ratio",
        "quality": "sora2_style: raw footage, imperfect colors, compression artifacts"
      },
      "veo": "Camera slowly pushes toward TV showing weather warning, text becomes clearer, CRT flicker effect, grainy degraded quality, ominous, 5 seconds"
    }
  }
}
```

---

### CUT 6 | 事務所・社員の無関心

```json
{
  "cut": {
    "id": "cut_06",
    "title": "事務所・社員の無関心",
    "time": "0:30-0:35",
    "duration": 5,
    "perspective": "B_documentary",
    "generation_required": true,
    "content": {
      "video": "テレビを背にして電話する社員",
      "audio": "電話の声「はい、予定通り出航します」",
      "intent": "警告無視の決定的瞬間"
    },
    "prompts": {
      "frame_a": {
        "prompt": "Japanese male office worker in his 40s wearing casual button-up shirt, standing with back turned to CRT TV showing weather warning, reaching for telephone on cluttered desk, fluorescent lighting, documentary reconstruction style, heavy film grain, soft focus, muted colors, 16:9 aspect ratio",
        "quality": "sora2_style: grainy, degraded, noise"
      },
      "frame_b": {
        "prompt": "Same Japanese male office worker now on phone speaking casually, back still turned to TV clearly showing 波浪注意報 weather warning behind him, indifferent relaxed posture, one hand in pocket, negligent body language ignoring warning, damning evidence moment, documentary style, heavy visible grain, degraded resolution, muted desaturated colors, noise in shadows, raw footage aesthetic, 16:9 aspect ratio",
        "quality": "sora2_style: imperfect optics, color bleeding, artifacts"
      },
      "veo": "Office worker picks up phone and speaks while TV warning plays behind him ignored, casual indifferent demeanor, documentary damning evidence, grainy quality, 5 seconds"
    }
  }
}
```

---

### CUT 7-A | 車内・前方を見る（新規追加）

```json
{
  "cut": {
    "id": "cut_07a",
    "title": "車内・前方を見る",
    "time": "0:35-0:40",
    "duration": 5,
    "perspective": "A_passenger",
    "generation_required": true,
    "content": {
      "video": "後部座席から前方を見る視点。前席に2人、フロントガラス越しに道路",
      "audio": "車内の静かな音、エンジン音",
      "intent": "家族旅行の期待感"
    },
    "prompts": {
      "frame_a": {
        "prompt": "Point of view from back seat of rental car driving in Hokkaido late April, looking forward through windshield, two adults visible from behind in front seats wearing casual spring jackets, coastal road ahead with mountains in distance, overcast grey sky, typical Japanese compact car interior, smartphone video quality with natural shake, heavy film grain, degraded resolution, slightly soft focus, muted colors, timestamp overlay 2022/04/23 09:15, 16:9 aspect ratio",
        "quality": "sora2_style: iPhone footage aesthetic, grainy, soft, imperfect"
      },
      "frame_b": {
        "prompt": "Same backseat POV inside moving rental car, two people in front seats visible from behind, through windshield road curves along coast and Sea of Okhotsk becoming visible as grey-blue water in distance, overcast morning light diffused atmosphere, 7-year-old girl in pink jacket reflected in window, family vacation excitement, smartphone video aesthetic with natural movement, heavy visible grain, degraded quality, muted desaturated colors, noise, 16:9 aspect ratio",
        "quality": "sora2_style: raw smartphone footage, imperfect colors, artifacts"
      },
      "veo": "POV from backseat of moving car, two people in front seats, looking through windshield at coastal road, sea becoming visible ahead, smartphone footage quality with grain and soft focus, 5 seconds"
    }
  }
}
```

---

### CUT 7-B | 車窓から見えるウトロ港（新規追加）

```json
{
  "cut": {
    "id": "cut_07b",
    "title": "車窓から見えるウトロ港",
    "time": "0:40-0:45",
    "duration": 5,
    "perspective": "A_passenger",
    "generation_required": true,
    "content": {
      "video": "カメラが左に向き、車窓からウトロ港が見える",
      "audio": "子供の声「あ、港だ！」",
      "intent": "目的地への到着"
    },
    "prompts": {
      "frame_a": {
        "prompt": "Backseat POV inside moving car, camera turning to look out left side window, view transitioning from forward to left, two adults in front seats visible in peripheral vision, Hokkaido coastline coming into view through left window with small buildings appearing, smartphone video quality with natural panning movement, heavy film grain, soft focus, muted colors, 16:9 aspect ratio",
        "quality": "sora2_style: grainy smartphone footage, degraded"
      },
      "frame_b": {
        "prompt": "Smartphone video from backseat of car looking directly out left side window, Utoro Port clearly visible through car window with small Japanese fishing harbor and multiple fishing boats at wooden docks, low-rise coastal town buildings, window frame creating natural border, excited framing implying child voice, iPhone video quality, heavy visible grain, degraded resolution, muted desaturated colors, noise, timestamp 2022/04/23 09:25 style, 16:9 aspect ratio",
        "quality": "sora2_style: raw iPhone footage, imperfect, artifacts"
      },
      "veo": "POV from backseat, camera pans from forward view to left side window, Utoro Port comes into view, fishing boats visible, smartphone footage with natural pan movement and grain, 5 seconds"
    }
  }
}
```

---

### CUT 8 | ウトロ港が近づく

```json
{
  "cut": {
    "id": "cut_08",
    "title": "ウトロ港が近づく",
    "time": "0:45-0:53",
    "duration": 8,
    "perspective": "A_passenger",
    "generation_required": true,
    "content": {
      "video": "ウトロ港がより鮮明に見える",
      "audio": "興奮した声"
    },
    "prompts": {
      "frame_a": {
        "prompt": "Smartphone video through car window showing Utoro Port in Hokkaido, small fishing harbor becoming clearly visible with traditional Japanese fishing boats moored at docks, few low buildings of coastal town, Sea of Okhotsk beyond, overcast April sky, iPhone video quality with window reflections, heavy film grain, degraded resolution, soft focus, muted colors, 16:9 aspect ratio",
        "quality": "sora2_style: grainy, soft, imperfect optics"
      },
      "frame_b": {
        "prompt": "Smartphone video through car window showing Utoro Port in clear detail, harbor with fishing boats and dock infrastructure with wooden pilings and small coastal buildings all visible, among boats small white sightseeing vessel KAZU I spotted, excited tourist perspective capturing arrival moment, atmosphere of anticipation before tragedy, iPhone video quality with slight oversaturation from auto-exposure, heavy visible grain, degraded quality, noise, 16:9 aspect ratio",
        "quality": "sora2_style: raw footage, color bleeding, artifacts"
      },
      "veo": "Smartphone footage approaching Utoro Port, harbor gets progressively clearer, car vibration, tourist anticipation, grainy degraded quality, 8 seconds"
    }
  }
}
```

---

[以下、CUT 9-90まで同様のJSON形式で記載]

---

# 6. mCaptions設定ガイド

## 日本語字幕設定

```json
{
  "mcaptions_settings": {
    "japanese_subtitles": {
      "font": "Noto Sans JP Bold",
      "size": "48px",
      "color": "#FFFFFF",
      "stroke": "2px #000000",
      "position": "bottom_center",
      "margin_bottom": "80px"
    },
    "english_subtitles": {
      "font": "Arial Bold",
      "size": "36px",
      "color": "#CCCCCC",
      "stroke": "1px #000000",
      "position": "below_japanese",
      "margin_bottom": "40px"
    },
    "telop_style": {
      "font": "Noto Sans JP Black",
      "size": "64px",
      "color": "#FFFFFF",
      "background": "rgba(0,0,0,0.7)",
      "padding": "10px 20px"
    }
  }
}
```

---

# 7. ElevenLabs音声一覧

```json
{
  "elevenlabs_voices": [
    {
      "cut_id": "cut_03",
      "character": "NHKアナウンサー",
      "voice_type": "professional_male",
      "line_ja": "知床半島沖で観光船と連絡が取れなくなっているという情報が入りました",
      "line_en": "We have reports that contact has been lost with a tour boat off the coast of Shiretoko Peninsula."
    },
    {
      "cut_id": "cut_20",
      "character": "7歳女児",
      "voice_type": "child_female_7yo",
      "line_ja": "ママ見て！海だよ！",
      "line_en": "Mommy look! It's the ocean!",
      "lipsync": true
    },
    {
      "cut_id": "cut_37",
      "character": "7歳女児",
      "voice_type": "child_female_7yo",
      "line_ja": "大丈夫かな...",
      "line_en": "Will we be okay...?",
      "lipsync": true
    },
    {
      "cut_id": "cut_39",
      "character": "7歳女児",
      "voice_type": "child_female_7yo",
      "line_ja": "ママ、怖い…",
      "line_en": "Mommy, I'm scared...",
      "lipsync": true
    },
    {
      "cut_id": "cut_39",
      "character": "母親",
      "voice_type": "adult_female_30s",
      "line_ja": "大丈夫よ、もうすぐ戻るから",
      "line_en": "It's okay, we'll be back soon.",
      "lipsync": true
    },
    {
      "cut_id": "cut_43",
      "character": "他社社員",
      "voice_type": "adult_male_50s",
      "line_ja": "KAZU I、KAZU I、応答してください",
      "line_en": "KAZU I, KAZU I, please respond.",
      "lipsync": true
    },
    {
      "cut_id": "cut_51",
      "character": "海保通信員",
      "voice_type": "adult_male_40s_professional",
      "line_ja": "118番です。状況を教えてください",
      "line_en": "This is 118. Please describe your situation.",
      "lipsync": true
    },
    {
      "cut_id": "cut_53",
      "character": "船長",
      "voice_type": "adult_male_50s_stressed",
      "line_ja": "浸水している…沈みそうだ…",
      "line_en": "We're taking on water... We're going to sink...",
      "lipsync": true
    },
    {
      "cut_id": "cut_55",
      "character": "乗客（中年男性）",
      "voice_type": "adult_male_40s_emotional",
      "line_ja": "もう会えないかもしれない…",
      "line_en": "I might not see you again...",
      "lipsync": true
    }
  ]
}
```

---

# 8. 制作統計

```json
{
  "production_stats": {
    "total_cuts": 90,
    "nanobanana_pro_cuts": 67,
    "text_only_cuts": 15,
    "lipsync_cuts": 9,
    "perspective_a_cuts": 43,
    "perspective_b_cuts": 32,
    "average_cut_duration": 6.7,
    "total_duration": "10:00 (600 seconds)"
  },
  "chapter_breakdown": [
    {"chapter": "序章", "cuts": 4, "duration": "0:25"},
    {"chapter": "第1章", "cuts": 17, "duration": "1:25"},
    {"chapter": "第2章", "cuts": 14, "duration": "1:30"},
    {"chapter": "第3章", "cuts": 12, "duration": "1:15"},
    {"chapter": "第4章", "cuts": 18, "duration": "1:45"},
    {"chapter": "第5章", "cuts": 14, "duration": "1:45"},
    {"chapter": "第6章", "cuts": 12, "duration": "1:55"}
  ],
  "quality_settings": {
    "style": "sora2_raw_documentary",
    "film_grain": "heavy",
    "color_grading": "muted_desaturated",
    "artifacts": "visible"
  }
}
```

---

# 📦 一括エクスポート用マスターJSON

```json
{
  "project": {
    "title": "KAZU I - 72時間",
    "title_en": "KAZU I - 72 Hours",
    "version": "3.0",
    "format": "JSON",
    "quality_preset": "sora2_style",
    "image_generator": "nanobanana_pro",
    "video_generator": "veo_3.1",
    "target": "WAIFF KYOTO 2026"
  },
  "quality_settings": {
    "style": "raw documentary footage",
    "film_grain": "heavy visible grain",
    "resolution": "degraded, slightly soft focus",
    "color": "muted, desaturated colors with slight color bleeding",
    "artifacts": "subtle compression artifacts, noise in shadows",
    "motion": "natural motion blur, slight judder",
    "lens": "imperfect optics, subtle chromatic aberration"
  },
  "characters": {
    // キャラクター設定JSON
  },
  "vessel": {
    // 船体設定JSON
  },
  "cuts": [
    // 全90カットのJSONオブジェクト
  ]
}
```

---

**制作**: KAZU I - 72時間
**出品**: WAIFF KYOTO 2026
**最終更新**: 2025年2月1日
