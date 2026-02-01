# 🎬 KAZU I - 72時間 | Google Flow nanobanana pro プロンプト v5.0

---

## 📋 概要

90カット版に対応したGoogle Flow（nanobanana pro）画像生成プロンプト集です。
- **JSON形式**で構造化
- **Sora2風の荒い映像品質**を再現するための指示を含む
- 事故資料に基づき、映像の一貫性を保つための詳細設定

---

# 🎨 映像品質設定（Sora2風）

全プロンプトに以下の品質指定を含めています：

```json
{
  "quality_settings": {
    "style": "raw documentary footage",
    "film_grain": "heavy visible grain",
    "resolution": "degraded, slightly soft focus",
    "color": "muted, desaturated colors with slight color bleeding",
    "artifacts": "subtle compression artifacts, noise in shadows",
    "motion": "natural motion blur, slight judder",
    "lens": "imperfect optics, subtle chromatic aberration"
  }
}
```

---

# 🎭 キャラクター設定（一貫性）

```json
{
  "characters": {
    "girl_7yo": {
      "age": 7,
      "hair": "short black hair, bob cut",
      "clothing": "bright pink winter jacket, white sneakers",
      "face": "round childish face, innocent expression"
    },
    "mother": {
      "age": "mid-30s",
      "hair": "black hair in ponytail",
      "clothing": "beige wool coat",
      "face": "gentle, warm features"
    },
    "male_passenger": {
      "age": "mid-40s",
      "hair": "short black hair",
      "clothing": "navy blue down jacket",
      "accessories": "rectangular glasses",
      "face": "ordinary middle-aged Japanese man"
    },
    "elderly_couple": {
      "husband": {
        "age": "60s",
        "hair": "grey-white mixed hair",
        "clothing": "grey casual jacket"
      },
      "wife": {
        "age": "60s",
        "hair": "white bob cut",
        "clothing": "light purple sweater"
      }
    },
    "captain_toyoda": {
      "age": 54,
      "hair": "short black hair, slightly thinning",
      "clothing": "captain's uniform, white shirt",
      "face": "weathered, tired expression"
    },
    "deckhand_soyama": {
      "age": 27,
      "hair": "black hair",
      "clothing": "work jacket, casual clothes",
      "face": "young, nervous on first day"
    }
  }
}
```

---

# 🚢 船体・場所設定

```json
{
  "vessel": {
    "name": "KAZU I",
    "type": "small sightseeing boat",
    "tonnage": "19 tons",
    "length": "12 meters",
    "age": "37 years (built 1985)",
    "color": "white hull with vessel name in dark letters",
    "capacity": "65 persons",
    "condition": "aged, weathered paint, functional but old"
  },
  "locations": {
    "utoro_port": {
      "description": "small fishing harbor in Hokkaido",
      "features": "wooden docks, fishing boats, low buildings, cold April atmosphere"
    },
    "office": {
      "description": "cramped tour boat company office",
      "features": "cluttered desks, old CRT TV, fluorescent lights, dirty windows, April 2022 calendar, ashtrays, faded posters"
    },
    "shiretoko_coast": {
      "description": "UNESCO World Heritage dramatic cliff coastline",
      "features": "towering volcanic cliffs, waterfalls, brown bears on shore"
    }
  }
}
```

---

# 🎬 全90カット JSON プロンプト

---

## 序章：プロローグ（0:00-0:25）

### CUT 1-2 | 黒画面・テロップ
```json
{
  "cut_id": "cut_01_02",
  "type": "text_only",
  "generation_required": false,
  "description": "Black screen with date and location text overlays"
}
```

---

### CUT 3 | NHKニュース速報

```json
{
  "cut_id": "cut_03",
  "duration": 10,
  "perspective": "B_documentary",
  "frame_a": {
    "prompt": "A Japanese television screen showing NHK news broadcast, red breaking news banner appearing at top, news anchor desk visible in background, CRT television texture with visible scan lines, heavy film grain, slightly degraded video quality, muted colors, subtle noise artifacts, raw broadcast footage aesthetic",
    "quality": "Sora2 style: grainy, soft focus, color bleeding, compression artifacts visible"
  },
  "frame_b": {
    "prompt": "Japanese NHK television news broadcast in full breaking news mode, prominent red banner with text 速報 at top, main headline 知床 観光船と連絡取れず in large white text on dark blue background, detailed map of Shiretoko Peninsula on right side, news ticker at bottom, CRT television aesthetic with scan lines, heavy visible grain, degraded resolution, muted desaturated colors, noise in darker areas, authentic early 2020s broadcast feel",
    "quality": "Sora2 style: raw footage look, imperfect colors, visible artifacts"
  },
  "veo_prompt": "TV news broadcast animation, breaking news banner slides in with slight judder, text fades in, map graphic appears, CRT flicker effect, static camera, grainy degraded video quality, 10 seconds"
}
```

---

### CUT 4 | 事務所への移行

```json
{
  "cut_id": "cut_04",
  "duration": 7,
  "perspective": "B_documentary",
  "frame_a": {
    "prompt": "Fading Japanese TV news screen showing red 速報 banner dimming and transitioning toward darkness, CRT TV aesthetic with scan lines, heavy film grain, degraded quality",
    "quality": "Sora2 style: grainy, artifacts, color bleeding"
  },
  "frame_b": {
    "prompt": "Wide establishing shot inside cramped Japanese tour boat company office in Hokkaido, cluttered desks with papers and boat schedules, old CRT television in corner showing weather forecast, harsh fluorescent tube lighting, calendar showing April 2022 on wall, dirty windows with condensation showing harbor view, ashtrays with cigarette butts and cold coffee cups on desks, faded tour posters, negligent atmosphere, documentary cinematography, heavy visible film grain, soft focus, muted desaturated colors, noise in shadows, raw documentary footage feel, ominous mood",
    "quality": "Sora2 style: degraded resolution, color bleeding, imperfect optics"
  },
  "veo_prompt": "Transition from fading TV news to boat company office interior, grainy documentary footage, harsh fluorescent lights, ominous atmosphere, 7 seconds"
}
```

---

## 第1章：出発（0:25-1:50）

### CUT 5 | 事務所・波浪注意報

```json
{
  "cut_id": "cut_05",
  "duration": 5,
  "perspective": "B_documentary",
  "frame_a": {
    "prompt": "Old CRT television in dim Japanese office, weather broadcast starting on screen, TV glow illuminating darkness, papers scattered on desk in foreground slightly out of focus, heavy film grain, degraded video quality, muted colors",
    "quality": "Sora2 style: grainy, soft focus, noise artifacts"
  },
  "frame_b": {
    "prompt": "Close-up of old CRT television displaying Japanese weather warning with text 波浪注意報 in yellow on blue background, weather map showing Hokkaido coastal region with warning symbols, TV screen glowing in dim office room, reflections of fluorescent lights on glass, documentary evidence shot, heavy visible grain, degraded resolution, muted desaturated colors, noise in darker areas",
    "quality": "Sora2 style: raw footage, imperfect colors, compression artifacts"
  },
  "veo_prompt": "Camera slowly pushes toward TV showing weather warning, text becomes clearer, CRT flicker effect, grainy degraded quality, ominous, 5 seconds"
}
```

---

### CUT 6 | 社員の無関心

```json
{
  "cut_id": "cut_06",
  "duration": 5,
  "perspective": "B_documentary",
  "frame_a": {
    "prompt": "Japanese male office worker in his 40s wearing casual button-up shirt, standing with back turned to CRT TV showing weather warning, reaching for telephone on cluttered desk, fluorescent lighting, documentary reconstruction style, heavy film grain, soft focus, muted colors",
    "quality": "Sora2 style: grainy, degraded, noise"
  },
  "frame_b": {
    "prompt": "Same Japanese male office worker now on phone speaking casually, back still turned to TV clearly showing 波浪注意報 weather warning behind him, indifferent relaxed posture, one hand in pocket, negligent body language ignoring warning, damning evidence moment, documentary style, heavy visible grain, degraded resolution, muted desaturated colors, noise in shadows, raw footage aesthetic",
    "quality": "Sora2 style: imperfect optics, color bleeding, artifacts"
  },
  "veo_prompt": "Office worker picks up phone and speaks while TV warning plays behind him ignored, casual indifferent demeanor, documentary damning evidence, grainy quality, 5 seconds"
}
```

---

### CUT 7-A | 車内・前方を見る

```json
{
  "cut_id": "cut_07a",
  "duration": 5,
  "perspective": "A_passenger",
  "frame_a": {
    "prompt": "Point of view from back seat of rental car driving in Hokkaido late April, looking forward through windshield, two adults visible from behind in front seats wearing casual spring jackets, coastal road ahead with mountains in distance, overcast grey sky, typical Japanese compact car interior, smartphone video quality with natural shake, heavy film grain, degraded resolution, slightly soft focus, muted colors, timestamp overlay 2022/04/23 09:15",
    "quality": "Sora2 style: iPhone footage aesthetic, grainy, soft, imperfect"
  },
  "frame_b": {
    "prompt": "Same backseat POV inside moving rental car, two people in front seats visible from behind, through windshield road curves along coast and Sea of Okhotsk becoming visible as grey-blue water in distance, overcast morning light diffused atmosphere, 7-year-old girl in pink jacket reflected in window, family vacation excitement, smartphone video aesthetic with natural movement, heavy visible grain, degraded quality, muted desaturated colors, noise",
    "quality": "Sora2 style: raw smartphone footage, imperfect colors, artifacts"
  },
  "veo_prompt": "POV from backseat of moving car, two people in front seats, looking through windshield at coastal road, sea becoming visible ahead, car interior sounds, smartphone footage quality with grain and soft focus, 5 seconds"
}
```

---

### CUT 7-B | 車窓から見えるウトロ港

```json
{
  "cut_id": "cut_07b",
  "duration": 5,
  "perspective": "A_passenger",
  "frame_a": {
    "prompt": "Backseat POV inside moving car, camera turning to look out left side window, view transitioning from forward to left, two adults in front seats visible in peripheral vision, Hokkaido coastline coming into view through left window with small buildings appearing, smartphone video quality with natural panning movement, heavy film grain, soft focus, muted colors",
    "quality": "Sora2 style: grainy smartphone footage, degraded"
  },
  "frame_b": {
    "prompt": "Smartphone video from backseat of car looking directly out left side window, Utoro Port clearly visible through car window with small Japanese fishing harbor and multiple fishing boats at wooden docks, low-rise coastal town buildings, window frame creating natural border, excited framing implying child voice, iPhone video quality, heavy visible grain, degraded resolution, muted desaturated colors, noise, timestamp 2022/04/23 09:25 style",
    "quality": "Sora2 style: raw iPhone footage, imperfect, artifacts"
  },
  "veo_prompt": "POV from backseat, camera pans from forward view to left side window, Utoro Port comes into view through car window, fishing boats visible, smartphone footage with natural pan movement and grain, 5 seconds"
}
```

---

### CUT 8 | ウトロ港が近づく

```json
{
  "cut_id": "cut_08",
  "duration": 8,
  "perspective": "A_passenger",
  "frame_a": {
    "prompt": "Smartphone video through car window showing Utoro Port in Hokkaido, small fishing harbor becoming clearly visible with traditional Japanese fishing boats moored at docks, few low buildings of coastal town, Sea of Okhotsk beyond, overcast April sky, iPhone video quality with window reflections, heavy film grain, degraded resolution, soft focus, muted colors",
    "quality": "Sora2 style: grainy, soft, imperfect optics"
  },
  "frame_b": {
    "prompt": "Smartphone video through car window showing Utoro Port in clear detail, harbor with fishing boats and dock infrastructure with wooden pilings and small coastal buildings all visible, among boats small white sightseeing vessel KAZU I spotted, excited tourist perspective capturing arrival moment, atmosphere of anticipation before tragedy, iPhone video quality with slight oversaturation from auto-exposure, heavy visible grain, degraded quality, noise",
    "quality": "Sora2 style: raw footage, color bleeding, artifacts"
  },
  "veo_prompt": "Smartphone footage approaching Utoro Port, harbor gets progressively clearer, car vibration, tourist anticipation, grainy degraded quality, 8 seconds"
}
```

---

### CUT 9-10 | 駐車場シーケンス

```json
{
  "cut_id": "cut_09",
  "duration": 4,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone POV inside car at Utoro Port parking lot, looking down at car floor mat and door beginning to open, gravel parking lot glimpsed through opening door, cold April air implied, heavy film grain, soft focus, muted colors",
    "frame_b": "Smartphone POV looking down as feet step onto gravel parking lot, white sneakers visible, casual downward filming angle with motion blur from movement, grey-brown gravel typical of Hokkaido parking areas, heavy visible grain, degraded quality, noise"
  },
  "quality": "Sora2 style: raw smartphone footage, grainy, imperfect"
}
```

```json
{
  "cut_id": "cut_10",
  "duration": 6,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video from Utoro Port parking lot, camera rising from ground level, beginning to pan toward harbor, grey gravel visible at bottom of frame, cold April morning atmosphere with overcast sky, heavy film grain, soft focus",
    "frame_b": "Smartphone video panning across Utoro Port from parking lot vantage point, multiple fishing boats moored at docks, harbor buildings including small tour company office, dramatic Shiretoko mountains in background under overcast skies, small white hull of KAZU I visible among boats, handheld movement quality, heavy visible grain, degraded resolution, muted colors, noise"
  },
  "quality": "Sora2 style: grainy, degraded, imperfect optics"
}
```

---

### CUT 11-13 | KAZU I発見〜近づく

```json
{
  "cut_id": "cut_11",
  "duration": 6,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video of Utoro Port harbor, small white sightseeing boat KAZU I visible in distance among fishing boats, white hull stands out against darker fishing vessels, tourist has spotted tour boat, morning overcast light, iPhone video quality, heavy film grain, soft focus, muted colors",
    "frame_b": "Same harbor view but tourist has focused on KAZU I with slight digital zoom beginning, small white boat more prominent in frame, modest 12-meter vessel for coastal sightseeing, 37 years age masked from distance, heavy visible grain, degraded quality"
  },
  "quality": "Sora2 style: raw iPhone footage, grainy, imperfect"
}
```

```json
{
  "cut_id": "cut_12",
  "duration": 6,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video walking along Utoro Port dock toward KAZU I, small white tourist boat at medium distance about 30 meters away, handheld walking movement creates natural shake, wooden dock planks underfoot, other tourists walking same direction, harbor atmosphere, heavy film grain, muted colors",
    "frame_b": "KAZU I getting closer as tourist walks along dock, more detail of white hull becoming visible, boat clearly old but functional about 12 meters long, vessel name almost readable on hull, mooring ropes secure it to dock, modest size apparent, heavy visible grain, degraded resolution, noise"
  },
  "quality": "Sora2 style: grainy smartphone footage, soft focus"
}
```

```json
{
  "cut_id": "cut_13",
  "duration": 4,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone close-up of KAZU I at Utoro Port dock, white painted hull fills much of frame, vessel name KAZU I in dark letters becoming visible on side, paint shows wear consistent with 37-year age, harbor water laps against hull, heavy film grain, soft focus",
    "frame_b": "Clear close-up of KAZU I hull, vessel name KAZU I prominently displayed on white hull, small sightseeing boat shows age with weathered paint, deck rail and equipment visible, documentary evidence shot, heavy visible grain, degraded resolution, muted colors"
  },
  "quality": "Sora2 style: raw footage, grainy, imperfect optics"
}
```

---

### CUT 14-15 | 乗船受付

```json
{
  "cut_id": "cut_14",
  "duration": 4,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video of tour boat company reception counter inside small cramped office, faded tourism brochures featuring Shiretoko wildlife displayed on counter, staff member in casual clothes barely visible behind counter, fluorescent lighting creates harsh shadows, papers and forms scattered on counter, heavy film grain, muted colors",
    "frame_b": "Counter view clearer, middle-aged Japanese woman staff member welcomes tourists from behind counter, passenger registration forms visible on counter surface, handwritten price list shows tour options, cramped neglected office atmosphere, fluorescent lighting, heavy visible grain, degraded resolution, noise"
  },
  "quality": "Sora2 style: grainy, soft focus, degraded"
}
```

```json
{
  "cut_id": "cut_15",
  "duration": 6,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone close-up of blank passenger registration form on counter, ballpoint pen positioned ready to write, form has fields for name address emergency contact in Japanese, paper slightly yellowed from age, heavy film grain, soft focus",
    "frame_b": "Hands writing on passenger registration form, pen moves across paper Japanese characters being written, adult passenger filling out required information, close-up documentary style, this form will later become evidence, heavy visible grain, degraded quality, muted colors"
  },
  "quality": "Sora2 style: raw footage aesthetic, grainy, imperfect"
}
```

---

### CUT 16-18 | 乗船シーケンス

```json
{
  "cut_id": "cut_16",
  "duration": 4,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone POV at bottom of metal gangway leading up to KAZU I, looking up at small boat above, simple metal ramp with rope handrails typical of small tour boats, white hull of KAZU I looms above, heavy film grain, muted colors",
    "frame_b": "Same angle but other passengers visible climbing gangway ahead, family with parents helping child in pink jacket (the 7-year-old girl), boat deck visible at top of gangway, excited chatter implied, gangway creaks under weight, heavy visible grain, degraded quality"
  },
  "quality": "Sora2 style: grainy smartphone footage, soft focus"
}
```

```json
{
  "cut_id": "cut_17",
  "duration": 4,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone POV climbing metal gangway of KAZU I, rope handrail gripped in foreground, view shaky from climbing motion, harbor water glimpsed below through gaps in gangway, heavy film grain, soft focus",
    "frame_b": "Almost at top of gangway now, wooden deck of KAZU I approaching, boat deck rail and life-saving equipment visible, harbor water of Utoro Port below, perspective shifts as climber reaches top step, heavy visible grain, degraded resolution"
  },
  "quality": "Sora2 style: raw footage, grainy, motion blur"
}
```

```json
{
  "cut_id": "cut_18",
  "duration": 4,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone POV stepping onto deck of KAZU I, worn wooden deck surface visible underfoot, deck small but clean, deck equipment like coiled ropes and life ring visible at edges, heavy film grain, muted colors",
    "frame_b": "Now standing on deck, crew member visible welcoming passengers - young Japanese man late 20s wearing work jacket (this is Soyama the deckhand on his first day) with nervous smile, other tourists moving toward cabin entrance, small scale of boat apparent, heavy visible grain, degraded quality, noise"
  },
  "quality": "Sora2 style: grainy, soft focus, imperfect"
}
```

---

### CUT 19 | 船内・席を探す

```json
{
  "cut_id": "cut_19",
  "duration": 7,
  "perspective": "A_passenger",
  "frame_a": {
    "prompt": "Smartphone video entering KAZU I cabin interior, modest cabin with rows of bench seating along walls, large windows on both sides, passengers settling into seats, low ceiling, soft April daylight through windows, heavy film grain, soft focus, muted colors"
  },
  "frame_b": {
    "prompt": "Smartphone video inside KAZU I cabin, Japanese families with children settling in, 7-year-old girl in pink jacket visible by window with her mother in beige coat, elderly couple in 60s sits nearby (husband in grey jacket wife in light purple sweater), young man checks his phone, warm anticipatory atmosphere, 26 people unaware of what lies ahead, soft daylight through cabin windows showing grey sky outside, heavy visible grain, degraded resolution, muted desaturated colors, noise"
  },
  "quality": "Sora2 style: raw smartphone footage, grainy, imperfect optics"
}
```

---

## 第2章：航海（1:50-3:20）

### CUT 20 | 窓の外を見る子供【Lipsync】⭐

```json
{
  "cut_id": "cut_20",
  "duration": 7,
  "perspective": "A_passenger",
  "lipsync": true,
  "frame_a": {
    "prompt": "Smartphone video inside KAZU I cabin, 7-year-old Japanese girl with short black hair wearing bright pink jacket sits by window looking outside, profile visible showing cute round childish face, Sea of Okhotsk visible as grey-blue water through window behind her, mother in beige coat sits beside her mostly out of frame, heavy film grain, soft focus, muted colors"
  },
  "frame_b": {
    "prompt": "Same 7-year-old girl with short black hair and pink jacket has turned toward camera with pure joy on face, pointing excitedly at window with right hand, mouth open in big smile speaking ママ見て！海だよ！, lips must be clearly visible for lip-sync, blue-grey Sea of Okhotsk clearly visible through window behind her, mother face now partially visible smiling warmly, parent filming excited child precious memory, heavy visible grain, degraded resolution, muted colors, noise"
  },
  "audio": {
    "character": "7歳女児",
    "line": "ママ見て！海だよ！",
    "english": "Mommy look! It's the ocean!"
  },
  "quality": "Sora2 style: raw iPhone footage, grainy, soft focus, imperfect"
}
```

---

### CUT 21-24 | 出航シーケンス

```json
{
  "cut_id": "cut_21",
  "duration": 6,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Inside KAZU I cabin looking up at small speaker mounted on low ceiling, passengers visible in seats below settling for journey, cabin fluorescent lights create functional atmosphere, heavy film grain, muted colors",
    "frame_b": "Same cabin interior at moment of departure announcement, 26 passengers have quieted to listen, speaker crackles with captain voice, faces show anticipation for 3-hour Shiretoko sightseeing cruise, time is 10:00 AM April 23 2022, heavy visible grain, degraded quality"
  },
  "quality": "Sora2 style: grainy, soft focus, degraded"
}
```

```json
{
  "cut_id": "cut_22",
  "duration": 5,
  "perspective": "B_documentary",
  "prompt": {
    "frame_a": "Documentary style shot at Utoro Port dock, harbor worker in work clothes stands at mooring post with thick rope securing KAZU I to dock, small white boat still secured, morning overcast light, heavy film grain, soft focus",
    "frame_b": "Harbor worker releasing KAZU I mooring rope from dock post, thick rope uncoils and falls toward water, boat begins to drift away from dock as freed, documentary evidence style - moment of departure sealing fate of 26 people, 10:00 AM April 23 2022, heavy visible grain, degraded resolution, muted colors"
  },
  "quality": "Sora2 style: raw documentary footage, grainy, imperfect"
}
```

```json
{
  "cut_id": "cut_23",
  "duration": 7,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video from KAZU I deck as boat begins to move, Utoro Port harbor still close behind showing dock fishing boats small buildings of town, boat wake just beginning to form in water, heavy film grain, muted colors",
    "frame_b": "Utoro Port now receding into distance as KAZU I heads out to sea, harbor buildings become smaller, boat white wake trail extends behind, other passengers on deck filming departure, excitement of journey beginning, last view of safety, heavy visible grain, degraded quality, noise"
  },
  "quality": "Sora2 style: grainy smartphone footage, soft focus"
}
```

```json
{
  "cut_id": "cut_24",
  "duration": 8,
  "perspective": "B_documentary",
  "prompt": {
    "frame_a": "Aerial drone view of KAZU I just departing from Utoro Port, small white boat (19 tons 12 meters) leaving harbor with white wake trail beginning to form behind it, port facilities and town of Utoro visible, Sea of Okhotsk stretches ahead, overcast April sky, heavy film grain, soft focus",
    "frame_b": "Higher aerial angle showing KAZU I now further from Utoro Port, boat has clear white wake trail extending behind, Shiretoko Peninsula coastline stretches ahead with dramatic cliffs, boat appears small against vast grey sea - tiny vessel heading into dangerous waters, cinematic drone footage style, timestamp overlay 午前10時00分 出航, heavy visible grain, degraded resolution, muted colors"
  },
  "quality": "Sora2 style: grainy aerial footage, imperfect optics"
}
```

---

### CUT 25-28 | 知床航海

```json
{
  "cut_id": "cut_25",
  "duration": 8,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video from KAZU I deck filming sea horizon, Sea of Okhotsk stretches ahead grey-blue under overcast April sky, boat now in open water, gentle waves perhaps 0.3 meters, heavy film grain, soft focus",
    "frame_b": "Wider ocean panorama from KAZU I deck, Sea of Okhotsk extends to horizon, Shiretoko Peninsula coastline visible to right with dramatic cliffs covered in early spring vegetation, water relatively calm, peaceful atmosphere before storm, gentle boat movement, heavy visible grain, degraded quality, muted colors"
  },
  "quality": "Sora2 style: grainy, soft focus, degraded"
}
```

```json
{
  "cut_id": "cut_26",
  "duration": 6,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video looking up at Shiretoko Peninsula cliffs from KAZU I deck, dramatic rock faces tower above small boat, dense forest clings to clifftops, impressive scale, heavy film grain, muted colors",
    "frame_b": "Impressive view of towering Shiretoko cliffs with slight digital zoom, volcanic rock formations dramatic with waterfalls visible in some sections, UNESCO World Heritage coastline, phone camera struggles with scale typical tourist footage, heavy visible grain, degraded resolution"
  },
  "quality": "Sora2 style: raw smartphone footage, grainy, imperfect"
}
```

```json
{
  "cut_id": "cut_27",
  "duration": 6,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video from KAZU I showing Shiretoko coastline, in distance Oshinkoshin Falls famous twin waterfall cascading down cliff face visible as white streak against dark rock, other passengers point excitedly, heavy film grain, soft focus",
    "frame_b": "Tourist has spotted Oshinkoshin Falls and aims camera more directly at twin waterfall, distinctive double cascade becoming clearer, excited passengers heard in implied audio, boat continues along coast, heavy visible grain, degraded quality, muted colors"
  },
  "quality": "Sora2 style: grainy, soft focus, noise"
}
```

```json
{
  "cut_id": "cut_28",
  "duration": 8,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone view of Oshinkoshin Falls from KAZU I at normal zoom, twin waterfall visible cascading down dark cliff face into sea below, scale of falls apparent, heavy film grain, muted colors",
    "frame_b": "Extreme digital zoom on Oshinkoshin Falls, image severely pixelated and degraded from over-zooming typical of smartphone maximum zoom, footage shaky as tourist tries to capture detail from moving boat, auto-focus hunts, authentic degradation part of iPhone tourist footage aesthetic, heavy visible grain, very poor resolution, noise artifacts"
  },
  "quality": "Sora2 style: extremely degraded zoom footage, heavily pixelated"
}
```

---

### CUT 29-30 | ヒグマ発見

```json
{
  "cut_id": "cut_29",
  "duration": 4,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video from KAZU I showing Shiretoko coastline, on rocky shore tiny brown figure visible - Hokkaido brown bear foraging along water edge, what tourists hope to see on cruise, heavy film grain, soft focus",
    "frame_b": "Excited camera movement as tourist spotted bear, camera jerks toward shore where brown bear walks along rocky beach, animal small in frame but definitely bear, excited voices implied 熊！熊がいる！, heavy visible grain, degraded quality, motion blur"
  },
  "quality": "Sora2 style: grainy, shaky, imperfect"
}
```

```json
{
  "cut_id": "cut_30",
  "duration": 8,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone view of Hokkaido brown bear on Shiretoko shore at normal zoom, bear small brown figure against grey rocks foraging along waterline, distance makes detail difficult, heavy film grain, soft focus",
    "frame_b": "Extreme digital zoom attempting to capture bear, image severely pixelated almost abstract, very shaky excited footage as tourist desperately tries to photograph wildlife from moving boat, auto-focus hunts constantly unable to lock on, bear barely discernible through digital noise, frustrated zoom attempt authentic tourist behavior, heavy visible grain, extremely poor resolution, severe noise artifacts"
  },
  "quality": "Sora2 style: extremely degraded, heavily pixelated, shaky"
}
```

---

### CUT 31-33 | 穏やかな時間〜伏線

```json
{
  "cut_id": "cut_31",
  "duration": 6,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video inside KAZU I cabin, passengers relaxed enjoying cruise, through windows Shiretoko coastline passes by, 7-year-old girl in pink jacket visible looking out window, mother in beige coat beside her, heavy film grain, soft focus",
    "frame_b": "Different angle of KAZU I cabin interior, warm atmosphere of families enjoying trip, elderly couple in 60s chatting happily - husband in grey jacket wife in light purple sweater, other passengers smile and point at views outside, calm before storm, heavy visible grain, degraded quality, muted colors"
  },
  "quality": "Sora2 style: grainy smartphone footage, soft focus"
}
```

```json
{
  "cut_id": "cut_32",
  "duration": 4,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone candid footage inside KAZU I, young male tourist in 30s wearing navy down jacket and glasses checking his phone with slight smile, elderly couple continues conversation nearby, natural unposed moments, heavy film grain, muted colors",
    "frame_b": "Same scene from slightly different angle, peaceful normalcy of passengers enjoying sightseeing cruise, no one suspects what is coming, gentle rocking of boat grey sky visible through windows warmth of cabin, heavy visible grain, degraded quality"
  },
  "quality": "Sora2 style: raw footage, grainy, imperfect"
}
```

```json
{
  "cut_id": "cut_33",
  "duration": 7,
  "perspective": "B_documentary",
  "prompt": {
    "frame_a": "Documentary reconstruction shot inside cramped boat company office at Utoro, Japanese man in 40s sits at cluttered desk, telephone ringing, CRT TV in corner shows weather information, he reaches for phone with neutral expression, fluorescent lighting, heavy film grain, soft focus",
    "frame_b": "Same man now on phone expression changed to concern, brow furrowed as he listens, weather fax machine printout with wave warnings visible on desk, through dirty window harbor visible, this is warning call from another boat company - warning that will be ignored, ominous atmosphere of decision costing 26 lives, documentary style with slow zoom feeling, heavy visible grain, degraded resolution, muted colors"
  },
  "quality": "Sora2 style: raw documentary footage, grainy, imperfect optics"
}
```

---

## 第3章：異変（3:20-4:35）

### CUT 34 | 俯瞰・不穏な空

```json
{
  "cut_id": "cut_34",
  "duration": 7,
  "perspective": "B_documentary",
  "frame_a": {
    "prompt": "Aerial drone shot of KAZU I navigating along Shiretoko Peninsula western coast, sky has darkened noticeably compared to departure with thick grey clouds gathering, small white boat (12 meters 19 tons) appears isolated against grey sea, dramatic cliffs rise to right, time approximately 12:30 PM, heavy film grain, soft focus"
  },
  "frame_b": {
    "prompt": "Same aerial angle but conditions worsened significantly, storm clouds now dominate sky dark and threatening, sea changed color to darker grey-green, KAZU I appears increasingly isolated and vulnerable tiny white speck against darkening sea and towering cliffs, whitecaps beginning to form on water, foreboding cinematic atmosphere, tragedy approaching, heavy visible grain, degraded resolution, muted desaturated colors, noise"
  },
  "quality": "Sora2 style: grainy aerial footage, ominous, imperfect"
}
```

---

### CUT 35-36 | 波が高くなる

```json
{
  "cut_id": "cut_35",
  "duration": 6,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video from inside KAZU I looking through cabin window, waves outside starting to grow larger with whitecaps forming, sky through window noticeably darker than before, boat has begun to rock, heavy film grain, soft focus",
    "frame_b": "Same window view but waves grown further, larger swells with prominent whitecaps roll past window, boat rocking more noticeably causing camera to shake, grey-green sea looks increasingly hostile, timestamp would read approximately 12:30 PM, heavy visible grain, degraded quality, noise"
  },
  "quality": "Sora2 style: shaky smartphone footage, grainy"
}
```

```json
{
  "cut_id": "cut_36",
  "duration": 6,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video through KAZU I window showing rougher seas, wave heights increased to approximately 2 meters, small boat pitches and rolls with swells, camera shake more pronounced, heavy film grain, soft focus",
    "frame_b": "Very rough conditions visible through window, water splashes against glass, horizon tilts as KAZU I tossed by waves exceeding 2 meters, camera shake intense, worried faces of passengers might be reflected in glass, heavy visible grain, degraded resolution, noise"
  },
  "quality": "Sora2 style: very shaky, grainy, degraded"
}
```

---

### CUT 37 | 不安そうな子供【Lipsync】⭐

```json
{
  "cut_id": "cut_37",
  "duration": 8,
  "perspective": "A_passenger",
  "lipsync": true,
  "frame_a": {
    "prompt": "Smartphone video inside shaking KAZU I cabin, 7-year-old girl with short black hair still wearing pink jacket now looking worried, previously joyful expression changed to anxiety, sits rigidly as cabin shakes, profile visible, heavy film grain, soft focus"
  },
  "frame_b": {
    "prompt": "Same worried 7-year-old girl now speaking with anxious expression saying 大丈夫かな... (Will we be okay), mouth must be clearly visible for lip-sync, mother arm in beige coat sleeve enters frame from right reaching to comfort her, cabin tilting from rough seas, heartbreaking moment of child sensing danger, heavy visible grain, degraded resolution, muted colors, noise"
  },
  "audio": {
    "character": "7歳女児",
    "line": "大丈夫かな...",
    "english": "Will we be okay...?"
  },
  "quality": "Sora2 style: shaky, grainy, emotional, imperfect"
}
```

---

### CUT 38-41 | パニック

```json
{
  "cut_id": "cut_38",
  "duration": 5,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video inside KAZU I cabin as it rocks severely, bags on floor beginning to shift and slide, passengers grip seats, fluorescent lights flicker briefly, heavy film grain, soft focus",
    "frame_b": "More severe rocking, bags and belongings slide across cabin floor, passengers gripping seat edges with white knuckles, small screams implied, camera shake intense as person filming struggles to stay stable, peaceful cruise has become terrifying, heavy visible grain, degraded quality, noise"
  },
  "quality": "Sora2 style: extremely shaky, grainy, chaotic"
}
```

```json
{
  "cut_id": "cut_39",
  "duration": 8,
  "perspective": "A_passenger",
  "lipsync": true,
  "frame_a": {
    "prompt": "Smartphone video inside violently shaking KAZU I cabin, mother (30s black hair ponytail beige coat) and 7-year-old daughter (short black hair pink jacket) visible together, child about to speak looking up at mother with fear in eyes, both faces visible in frame, heavy film grain, soft focus"
  },
  "frame_b": {
    "prompt": "Daughter now clings tightly to mother, speaks with tears forming ママ、怖い… (Mommy I'm scared), mother responds mouth clearly visible for lip-sync 大丈夫よ、もうすぐ戻るから (It's okay we'll be back soon), both mouths must be visible, emotional moment of maternal reassurance tragically false, cabin tilts at angle, heavy visible grain, degraded resolution, noise"
  },
  "audio": {
    "characters": ["7歳女児", "母親"],
    "lines": ["ママ、怖い…", "大丈夫よ、もうすぐ戻るから"],
    "english": ["Mommy, I'm scared...", "It's okay, we'll be back soon."]
  },
  "quality": "Sora2 style: shaky, grainy, emotional, imperfect"
}
```

```json
{
  "cut_id": "cut_40",
  "duration": 7,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone video inside KAZU I cabin during violent shaking, bags and belongings slide across floor in multiple directions, camera footage extremely unstable, heavy film grain, soft focus",
    "frame_b": "Extreme chaos inside KAZU I cabin, passengers panicking grabbing for support, fluorescent lights flicker erratically, bags water bottles personal items scattered everywhere, horizon through windows tilted at severe angle, screams and cries fill air implied, disaster footage raw and terrifying, heavy visible grain, degraded resolution, severe noise"
  },
  "quality": "Sora2 style: extremely shaky, chaotic, grainy"
}
```

```json
{
  "cut_id": "cut_41",
  "duration": 4,
  "perspective": "A_passenger",
  "prompt": {
    "frame_a": "Smartphone close-up accidentally capturing hands desperately gripping metal handrail inside KAZU I, single adult hand with white knuckles visible gripping cold metal bar, heavy film grain, soft focus",
    "frame_b": "Multiple hands now visible gripping same handrail - elderly person weathered hand with age spots, woman hand with wedding ring, small child hand, all show white knuckles from desperate grip, accidental footage shows shared terror of strangers united in fear, heavy visible grain, degraded quality"
  },
  "quality": "Sora2 style: grainy, emotional, raw"
}
```

---

### CUT 42-44 | 無線・応答なし

```json
{
  "cut_id": "cut_42",
  "duration": 8,
  "perspective": "B_documentary",
  "frame_a": {
    "prompt": "Aerial drone shot of KAZU I in violent storm, small white boat (19 tons 12 meters) tossed by waves approximately 3 meters, white foam and spray surround vessel, dark sky and dark sea merge at horizon, heavy film grain, soft focus"
  },
  "frame_b": {
    "prompt": "Conditions worsened further, waves now exceeding 3-4 meters, tiny KAZU I thrown about by massive swells scale terrifying as small boat appears helpless against enormous grey-green waves, white foam covers much of sea surface, wind speed reached approximately 16 m/s, boat in mortal danger, timestamp overlay 波高3メートル以上, heavy visible grain, degraded resolution, muted colors, noise"
  },
  "quality": "Sora2 style: grainy aerial, ominous, imperfect"
}
```

```json
{
  "cut_id": "cut_43",
  "duration": 8,
  "perspective": "B_documentary",
  "lipsync": true,
  "frame_a": {
    "prompt": "Documentary style shot inside another boat company office at Utoro, Japanese man in 50s wearing fishing company jacket sits at desk with VHF marine radio, worried expression, picks up radio handset, clock on wall shows approximately 1:00 PM, heavy film grain, soft focus"
  },
  "frame_b": {
    "prompt": "Man speaking urgently into radio, mouth clearly visible for lip-sync as calls KAZU I、KAZU I、応答してください (KAZU I KAZU I please respond), expression increasingly desperate, radio LED indicators blink, no response comes, this is 13:13 call triggering emergency response, heavy visible grain, degraded resolution, noise"
  },
  "audio": {
    "character": "他社社員",
    "line": "KAZU I、KAZU I、応答してください",
    "english": "KAZU I, KAZU I, please respond."
  },
  "quality": "Sora2 style: grainy documentary, imperfect"
}
```

```json
{
  "cut_id": "cut_44",
  "duration": 4,
  "perspective": "B_documentary",
  "prompt": {
    "frame_a": "Close-up of VHF marine radio unit on desk, LED indicator light glowing green showing active and waiting for response, speaker grille visible, heavy film grain, soft focus",
    "frame_b": "Extreme close-up of radio speaker grille, LED indicator now blinks red signaling no response, static crackles from speaker implied by visual context, silence deafening, KAZU I not responding, time 13:13, heavy visible grain, degraded resolution"
  },
  "quality": "Sora2 style: grainy, tense, imperfect"
}
```

---

### CUT 45 | 黒画面・13時13分

```json
{
  "cut_id": "cut_45",
  "duration": 4,
  "type": "text_only",
  "generation_required": false,
  "text": {
    "japanese": "13時13分",
    "english": "1:13 PM"
  }
}
```

---

## 第4章：沈没（4:35-6:20）

[続きのカットは同様のJSON形式で記載]

---

# 📦 一括エクスポート用JSON

全90カットを一括でエクスポートする場合は以下の形式を使用：

```json
{
  "project": {
    "title": "KAZU I - 72時間",
    "version": "5.0",
    "total_cuts": 90,
    "quality_preset": "sora2_style",
    "generator": "nanobanana_pro"
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
  "cuts": [
    // 全カットのJSONオブジェクトをここに配置
  ]
}
```

---

**制作**: KAZU I - 72時間
**出品**: WAIFF KYOTO 2026
