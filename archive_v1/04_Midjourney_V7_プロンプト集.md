# 「KAZU I - 72時間」Midjourney V7 プロンプト集

## WAIFF KYOTO 2026 応募要件準拠

### 技術要件チェックリスト
| 項目 | 要件 | 本作の対応 |
|------|------|-----------|
| フォーマット | MP4 / MOV | ✅ MP4 |
| 解像度 | Full HD以上、**4K推奨** | ✅ 4K (3840×2160) |
| アスペクト比 | 16:9 | ✅ 16:9 |
| 尺 | 5〜10分 | ✅ 約10分15秒 |
| 字幕 | **英語字幕必須** | ✅ 英語字幕 |
| AIツール | 3種類以上（画像生成1つ以上） | ✅ 4種類以上 |
| 締切 | 2026年2月15日 | 確認済み |

### 使用AIツール（3種類以上必須）
1. **Midjourney V7** - 画像生成（必須要件）
2. **Kling AI 2.6** - 動画生成
3. **Runway Gen-4.5** - 動画生成
4. **Pika Labs / Higgs Field AI** - 補助動画生成
5. **ElevenLabs** - AI音声生成・Lipsync

### 審査基準への対応
- **映画としての完成度**：シネマティック撮影スタイル、一貫した色調
- **AI活用の革新性**：4種類のAIツール連携、視点切替技法
- **国際映画祭適性**：英語テロップ、普遍的テーマ
- **オリジナリティ**：実話ベースのドキュメンタリー形式

---

## 概要
- **使用バージョン**：Midjourney V7（2025年6月〜デフォルト）
- **スタイル**：シネマティック映画撮影風
- **アスペクト比**：16:9（--ar 16:9）
- **解像度**：4K推奨（3840×2160）
- **品質**：--q 2（高品質）

---

## V7プロンプトの特徴

### カメラ・レンズ指定
- **Arri Alexa Mini LF**：映画撮影の業界標準
- **35mm / 50mm / 85mm**：レンズ焦点距離
- **Anamorphic lens**：シネマスコープ風のフレア
- **Cooke S4**：暖かみのある映画的描写

### スタイルキーワード
- `cinematic film still`：映画のワンカット
- `shot on 35mm film`：フィルム撮影風
- `directed by [監督名]`：特定の映画監督スタイル
- `film grain`：フィルム粒子
- `depth of field`：被写界深度

---

## 【A視点】乗客カメラ風スタイル
```
handheld camera, amateur footage, documentary style, slight motion blur,
consumer camera aesthetic, natural lighting, film grain, realistic
```

## 【B視点】プロフェッショナル撮影スタイル
```
cinematic film still, shot on Arri Alexa Mini LF, 35mm anamorphic lens,
professional cinematography, documentary photography, natural lighting
```

---

# CUT別プロンプト集（英語・日本語）

---

## CUT 4：車窓からウトロの町並み（0:20-0:28）
**視点：A（乗客カメラ）**

### English Prompt
```
POV shot from inside moving car window, Japanese fishing village Utoro Hokkaido,
small weathered wooden houses, fishing nets hanging, morning spring light,
motion blur on passing scenery, handheld consumer camera footage,
documentary travel video aesthetic, natural daylight,
shot on Sony Handycam, amateur home video feel,
April 2022 Japan, realistic photography --ar 16:9 --v 7
```

### 日本語プロンプト
```
走行中の車内からの窓越しショット、北海道ウトロの漁村、
古びた木造家屋、干されている漁網、春の朝の光、
流れる景色にモーションブラー、手持ちの民生用カメラ映像、
ドキュメンタリー旅行ビデオの美学、自然光、
ソニーハンディカムで撮影、アマチュアホームビデオ感、
2022年4月の日本、リアルな写真 --ar 16:9 --v 7
```

### 動画化指示（Kling AI 2.6）
- カメラ：窓外の景色が横にスクロール
- 動き：車の振動による微細な揺れ
- 時間：8秒

---

## CUT 5：港の駐車場、足元（0:28-0:38）
**視点：A（乗客カメラ）**

### English Prompt
```
POV looking down at feet walking on asphalt parking lot,
Japanese fishing port Utoro, morning sunlight casting long shadows,
casual sneakers stepping on cracked pavement,
handheld camera bobbing with each step,
documentary travel footage, amateur video aesthetic,
slight motion blur, natural lighting,
consumer camera quality, realistic --ar 16:9 --v 7
```

### 日本語プロンプト
```
アスファルトの駐車場を歩く足元を見下ろすPOV、
北海道ウトロの漁港、朝日が長い影を落とす、
ひび割れた舗装を踏むカジュアルなスニーカー、
歩くたびに上下する手持ちカメラ、
ドキュメンタリー旅行映像、アマチュアビデオの美学、
微かなモーションブラー、自然光、
民生用カメラ品質、リアリスティック --ar 16:9 --v 7
```

### 動画化指示（Kling AI 2.6）
- 動き：歩行に合わせたカメラの上下動
- 音声：足音、遠くのカモメ、港の環境音

---

## CUT 6：ウトロ港、KAZU I（0:38-0:52）
**視点：A（乗客カメラ）**

### English Prompt
```
Small white Japanese sightseeing boat moored at concrete dock,
Utoro fishing port Hokkaido, hand-painted boat name on hull,
calm morning harbor water with subtle reflections,
other fishing boats in background, clear spring sky,
handheld tourist camera perspective,
amateur travel documentation, natural morning light,
2022 Japan, realistic photography --ar 16:9 --v 7
```

### 日本語プロンプト
```
コンクリート岸壁に係留された白い小型日本の観光船、
北海道ウトロ漁港、船体に手書きの船名、
微かな反射のある穏やかな朝の港の水面、
背景に他の漁船、晴れた春の空、
手持ちの観光客カメラ視点、
アマチュア旅行記録、自然な朝の光、
2022年の日本、リアルな写真 --ar 16:9 --v 7
```

### 動画化指示（Luma Dream Machine → Pika Labs推奨）
- 動き：穏やかな水面の揺らぎ、係留ロープの微動
- 音声：港の環境音、カモメ、遠くのエンジン音

---

## CUT 6B：事務所内・テレビ【伏線①】（0:52-1:12）
**視点：B（ドキュメンタリー）**
**優先度：最高**

### English Prompt
```
Interior of old Japanese fishing company office,
CRT television displaying weather forecast with wave warning graphics,
cluttered desk with papers and radio equipment,
window showing harbor view with moored boats,
single person in casual work clothes sitting with back to camera,
watching TV motionlessly, fluorescent ceiling light,
mundane yet foreboding atmosphere,
cinematic documentary style, shot on Arri Alexa,
35mm lens, natural mixed lighting,
subtle tension beneath ordinary scene --ar 16:9 --v 7
```

### 日本語プロンプト
```
古い日本の船会社事務所の内部、
波浪警報のグラフィックを表示する気象予報のブラウン管テレビ、
書類と無線機器で散らかったデスク、
係留された船が見える港の窓、
カメラに背を向けて座るカジュアルな作業着の一人、
動かずにテレビを見ている、蛍光灯の天井照明、
平凡だが不吉な雰囲気、
シネマティックドキュメンタリースタイル、Arri Alexaで撮影、
35mmレンズ、自然なミックス照明、
日常的なシーンの下に潜む微妙な緊張感 --ar 16:9 --v 7
```

### テレビ画面用（別途生成）
```
Japanese NHK weather forecast screen,
Hokkaido map with wave warning symbols in red,
text overlay showing "波浪注意報" wave advisory,
wind direction arrows, sea condition graphics,
broadcast television aesthetic, 2022 Japan TV style --ar 16:9 --v 7
```

### 動画化指示（Kling AI 2.6）
- カメラ：ゆっくりドリーイン（テレビ→人物の後ろ姿）
- 動き：人物は動かない、テレビ画面だけが動く
- 音声：テレビの気象予報音声、時計の秒針

---

## CUT 7：乗船受付（1:12-1:25）
**視点：A（乗客カメラ）**

### English Prompt
```
Close-up of hands filling out boarding registration form,
Japanese tour boat check-in counter outdoors,
ballpoint pen writing on paper,
other tourists waiting in soft focus background,
portable folding table with clipboard,
morning outdoor light, casual tourist documentation,
handheld camera perspective, amateur video aesthetic,
realistic photography --ar 16:9 --v 7
```

### 日本語プロンプト
```
乗船登録用紙に記入する手のクローズアップ、
屋外の日本の観光船チェックインカウンター、
紙に書くボールペン、
ソフトフォーカスの背景で待つ他の観光客、
クリップボード付きの折りたたみテーブル、
朝の屋外光、カジュアルな観光記録、
手持ちカメラ視点、アマチュアビデオの美学、
リアルな写真 --ar 16:9 --v 7
```

---

## CUT 8：乗船、タラップ（1:25-1:35）
**視点：A（乗客カメラ）**

### English Prompt
```
POV walking up narrow metal gangway boarding small boat,
feet visible at bottom of frame stepping on ribbed metal,
white boat railing on sides,
harbor water visible below through gaps,
slight camera shake from walking motion,
handheld tourist video perspective,
amateur footage aesthetic, natural daylight,
excitement of boarding moment --ar 16:9 --v 7
```

### 日本語プロンプト
```
小型船に乗船する狭い金属タラップを上がるPOV、
溝付き金属を踏む足がフレーム下部に見える、
両側に白い船の手すり、
隙間から下に港の水が見える、
歩行による微かなカメラの揺れ、
手持ち観光ビデオ視点、
アマチュア映像の美学、自然な日光、
乗船の瞬間の期待感 --ar 16:9 --v 7
```

---

## CUT 9：船内、子供の手（1:35-1:45）
**視点：A（乗客カメラ）**
**優先度：最高**（フラッシュバック用）
**Lipsync：必要** ⚠️

### English Prompt（Lipsync対応版）
```
Interior of small Japanese tour boat cabin,
5-year-old Japanese girl in profile view speaking excitedly,
child's face visible from side angle, mouth clearly visible,
small hand pointing at window while talking,
warm morning light illuminating child's face,
silhouettes of other passengers in background,
innocent moment of anticipation,
amateur family video perspective,
handheld camera, natural warm lighting,
emotional and nostalgic atmosphere --ar 16:9 --v 7
```

### 日本語プロンプト（Lipsync対応版）
```
小型日本観光船のキャビン内部、
横顔で興奮して話す5歳の日本人女の子、
横からの角度で見える子供の顔、口元がはっきり見える、
話しながら窓を指差す小さな手、
子供の顔を照らす暖かい朝の光、
背景に他の乗客のシルエット、
期待に満ちた無垢な瞬間、
アマチュア家族ビデオ視点、
手持ちカメラ、自然な暖かい照明、
感情的でノスタルジックな雰囲気 --ar 16:9 --v 7
```

### ElevenLabs音声
```
セリフ：「ねえ、いつ出るの？」
Voice: Young Female Child (5-6 years)
Style: Curious, Innocent, Excited
Language: Japanese
```

### Lipsync指示
- **ツール**: Kling AI 2.6 または Higgs Field AI
- **注意**: 口の動きと「ねえ、いつ出るの？」の音声を同期
- **表情**: 期待に満ちた笑顔、目がキラキラ

### 動画化指示（Kling AI 2.6 / Higgs Field AI）
- 動き：子供の手が窓を指す動作
- 音声：「ねえ、いつ出るの？」という子供の声
- **重要**：CUT 51でフラッシュバックとして再利用

---

## CUT 10：出航、岸壁離れる（1:45-1:55）
**視点：A（乗客カメラ）**

### English Prompt
```
View through boat window of Japanese fishing port dock receding,
concrete pier slowly moving away,
people waving goodbye becoming smaller,
calm harbor water between boat and dock widening,
morning light reflecting on water surface,
departure moment filled with anticipation,
handheld tourist camera perspective,
amateur travel video, nostalgic atmosphere --ar 16:9 --v 7
```

### 日本語プロンプト
```
日本の漁港岸壁が遠ざかる船窓からの眺め、
ゆっくり離れていくコンクリート桟橋、
小さくなっていく手を振る人々、
船と岸壁の間で広がる穏やかな港の水面、
水面に反射する朝の光、
期待に満ちた出航の瞬間、
手持ち観光客カメラ視点、
アマチュア旅行ビデオ、ノスタルジックな雰囲気 --ar 16:9 --v 7
```

### 動画化指示（Pika Labs / Runway Gen-4.5）
- 動き：岸壁がゆっくり遠ざかる
- 音声：エンジン音、短い汽笛

---

## CUT 11：知床の海、水平線（1:55-2:05）
**視点：A（乗客カメラ）**

### English Prompt
```
View from bow of small tour boat heading into open sea,
vast blue ocean stretching to horizon,
Shiretoko Peninsula dramatic cliffs in distance,
morning sunlight sparkling on calm water surface,
sense of adventure and freedom,
handheld camera from passenger perspective,
amateur travel documentation,
beautiful natural scenery, hopeful atmosphere --ar 16:9 --v 7
```

### 日本語プロンプト
```
外洋に向かう小型観光船の船首からの眺め、
水平線まで広がる広大な青い海、
遠くに知床半島の劇的な断崖、
穏やかな水面にきらめく朝日、
冒険と自由の感覚、
乗客視点の手持ちカメラ、
アマチュア旅行記録、
美しい自然の風景、希望に満ちた雰囲気 --ar 16:9 --v 7
```

---

## CUT 12：オシンコシンの滝（2:05-2:20）
**視点：A（乗客カメラ）**

### English Prompt
```
Oshinkoshin Falls Shiretoko Peninsula viewed from sea,
dramatic twin waterfall cascading down rocky cliff face,
white water crashing into dark ocean below,
seen from moving tour boat offshore,
slight camera shake from boat motion,
amateur wildlife documentary perspective,
breathtaking natural wonder, spring daylight,
handheld zoom attempt, tourist excitement --ar 16:9 --v 7
```

### 日本語プロンプト
```
海から見たオシンコシンの滝、知床半島、
岩の崖を流れ落ちる劇的な二条の滝、
下の暗い海に砕ける白い水、
沖合を航行する観光船から見える、
船の動きによる微かなカメラの揺れ、
アマチュア自然ドキュメンタリー視点、
息をのむ自然の驚異、春の日光、
手持ちズームの試み、観光客の興奮 --ar 16:9 --v 7
```

---

## CUT 13：岸辺のヒグマ（2:20-2:33）
**視点：A（乗客カメラ）**

### English Prompt
```
Distant view of brown bear Ursus arctos walking on rocky Shiretoko coastline,
seen from offshore tour boat through telephoto zoom,
bear foraging among coastal rocks,
slightly blurry from maximum zoom and boat motion,
amateur wildlife video moment of discovery,
excited camera shake, natural daylight,
authentic wildlife encounter documentation --ar 16:9 --v 7
```

### 日本語プロンプト
```
知床の岩場の海岸線を歩くヒグマの遠景、
沖合の観光船から望遠ズームで見た、
海岸の岩の間で餌を探すクマ、
最大ズームと船の動きで若干ぼやけている、
発見の瞬間のアマチュア野生動物ビデオ、
興奮したカメラの揺れ、自然な日光、
本物の野生動物との遭遇の記録 --ar 16:9 --v 7
```

### 動画化指示（Kling AI 2.6）
- 動き：クマがゆっくり歩く、カメラがズームしようとして揺れる
- 音声：「熊だ！」という興奮した声

---

## CUT 14：船内の穏やかな雰囲気（2:33-2:45）
**視点：A（乗客カメラ）**

### English Prompt
```
Interior of tour boat during pleasant cruise,
passenger's hand holding camera near window,
glimpse of child sitting on parent's lap in foreground,
someone drinking from plastic bottle,
peaceful relaxed atmosphere,
warm daylight through windows,
amateur family travel documentation,
slice of life moment, calm before storm --ar 16:9 --v 7
```

### 日本語プロンプト
```
快適なクルーズ中の観光船内部、
窓際でカメラを持つ乗客の手、
前景に親の膝に座る子供のちらりと見える姿、
ペットボトルから飲む誰か、
穏やかでリラックスした雰囲気、
窓から差し込む暖かい日光、
アマチュア家族旅行記録、
日常の一コマ、嵐の前の静けさ --ar 16:9 --v 7
```

---

## CUT 14B：事務所・伏線②（2:45-2:58）
**視点：B（ドキュメンタリー）**
**優先度：最高**

### English Prompt
```
Same Japanese fishing company office interior,
wall clock showing 11:30 AM prominently,
CRT television still displaying weather warnings,
window view now showing darker clouds gathering outside,
desk telephone with blinking light,
same person still sitting motionless with back to camera,
increased tension in mundane setting,
cinematic documentary photography,
Arri Alexa, 35mm lens, foreboding atmosphere,
unease building beneath surface --ar 16:9 --v 7
```

### 日本語プロンプト
```
同じ日本の船会社事務所内部、
11時30分を示す壁時計が目立つ、
まだ気象警報を表示するブラウン管テレビ、
外に暗い雲が集まっている窓の景色、
ランプが点滅する机上の電話、
まだカメラに背を向けて動かない同じ人物、
平凡な環境の中で高まる緊張、
シネマティックドキュメンタリー写真、
Arri Alexa、35mmレンズ、不吉な雰囲気、
表面下で募る不安 --ar 16:9 --v 7
```

### 動画化指示（Kling AI 2.6）
- カメラ：CUT 6Bと同じ構図、時間経過を示す
- 動き：電話のランプ点滅、雲の動き
- 音声：テレビ音声、電話の呼び出し音

---

## CUT 15：俯瞰、KAZU I（2:58-3:10）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Aerial drone view of small white tour boat KAZU I,
sailing along dramatic Shiretoko Peninsula coastline,
towering volcanic cliffs on one side,
deep blue Sea of Okhotsk stretching endlessly,
boat appears tiny against vast wilderness,
high altitude cinematic perspective,
shot on RED Komodo with DJI Inspire drone,
documentary film aesthetic,
ominous beauty, nature's indifference --ar 16:9 --v 7
```

### 日本語プロンプト
```
小型白色観光船KAZU Iの空撮ドローンビュー、
劇的な知床半島の海岸線に沿って航行、
片側にそびえる火山性の断崖、
果てしなく広がる深い青のオホーツク海、
広大な荒野に対して小さく見える船、
高高度シネマティック視点、
DJI InspireドローンでRED Komodoにて撮影、
ドキュメンタリー映画の美学、
不吉な美しさ、自然の無関心 --ar 16:9 --v 7
```

### 動画化指示（Runway Gen-4.5）
- カメラ：ドローン風、船を追従しながら高度を変える
- 動き：波の動き、船の航跡
- 音声：風の音のみ

---

## CUT 16：波が高くなる（3:10-3:20）
**視点：A（乗客カメラ）**

### English Prompt
```
View through boat window of increasing ocean waves,
whitecaps beginning to form on gray-green water,
horizon tilting slightly with boat motion,
clouds gathering in previously clear sky,
subtle transition from calm to rough conditions,
passenger camera perspective with slight shake,
amateur video documenting weather change,
growing unease, natural lighting shifting --ar 16:9 --v 7
```

### 日本語プロンプト
```
高くなる海の波の船窓からの眺め、
灰緑色の水面に白波が立ち始める、
船の動きで水平線が微かに傾く、
以前は晴れていた空に雲が集まる、
穏やかから荒れた状態への微妙な変化、
微かな揺れを伴う乗客カメラ視点、
天候変化を記録するアマチュアビデオ、
募る不安、変化する自然光 --ar 16:9 --v 7
```

---

## CUT 17：船内、不安（3:20-3:25）
**視点：A（乗客カメラ）**
**Lipsync：必要**（子供のセリフ） ⚠️

### English Prompt（Lipsync対応版）
```
Interior of tour boat cabin during increasing waves,
5-year-old Japanese girl's face visible speaking to parent,
child's profile with mouth clearly visible saying something,
worried expression beginning to show,
parent's hand comforting child,
other passengers gripping seats in background,
horizon visible through window at slight angle,
subtle fear on faces, handheld camera perspective,
amateur footage of growing anxiety,
natural lighting becoming grayer --ar 16:9 --v 7
```

### 日本語プロンプト（Lipsync対応版）
```
波が高くなる中の観光船キャビン内部、
親に話しかける5歳の日本人女の子の顔が見える、
何か言っている口元がはっきり見える子供の横顔、
現れ始める心配そうな表情、
子供を慰める親の手、
背景で座席を握りしめる他の乗客、
窓越しに見える傾いた水平線、
顔に浮かぶ微かな恐怖、手持ちカメラ視点、
募る不安のアマチュア映像、
灰色になっていく自然光 --ar 16:9 --v 7
```

### ElevenLabs音声
```
子供：「揺れるね」
乗客B（女性、小声）：「大丈夫かな...」

Child Voice: Same as CUT 9
Style: Slightly worried but still innocent
Adult Voice: Adult Female, Worried whisper
```

### Lipsync指示
- **ツール**: Kling AI 2.6 または Higgs Field AI
- **対象**: 子供の「揺れるね」のみLipsync
- **表情**: 少し不安だが、まだ無邪気さが残る

---

## CUT 18：激しく揺れる船内（3:25-3:37）
**視点：A（乗客カメラ）**
**優先度：最高**

### English Prompt
```
Interior of small boat being violently tossed by rough seas,
extreme camera shake and motion blur,
tilted horizon at 20 degrees through window,
passengers clinging desperately to handrails and seats,
objects sliding across floor,
pure chaos and terror,
amateur disaster footage aesthetic,
dramatic natural lighting from storm clouds,
visceral fear captured on camera --ar 16:9 --v 7
```

### 日本語プロンプト
```
荒波に激しく翻弄される小型船の内部、
極端なカメラの揺れとモーションブラー、
窓越しに20度傾いた水平線、
手すりや座席に必死にしがみつく乗客、
床を滑る物品、
純粋な混乱と恐怖、
アマチュア災害映像の美学、
嵐雲からの劇的な自然光、
カメラに捉えられた内臓的な恐怖 --ar 16:9 --v 7
```

### 動画化指示（Kling AI 2.6 / Higgs Field AI）
- 動き：激しい揺れ、傾き、物が落ちる
- 音声：衝撃音、悲鳴、きしみ音

---

## CUT 19：手すりを握る手（3:37-3:47）
**視点：A（乗客カメラ）**

### English Prompt
```
Extreme close-up of white-knuckled hands gripping metal handrail,
boat interior severely tilted in background,
child's small trembling hands visible nearby,
spilled drink and scattered items on floor,
knuckles white from desperate grip,
moment of pure terror,
amateur footage during disaster,
natural dramatic lighting,
visceral human fear --ar 16:9 --v 7
```

### 日本語プロンプト
```
金属手すりを握る白くなった拳のエクストリームクローズアップ、
背景で激しく傾いた船内、
近くに見える子供の小さな震える手、
床にこぼれた飲み物と散らばった物品、
必死の握りで白くなった指関節、
純粋な恐怖の瞬間、
災害時のアマチュア映像、
自然な劇的照明、
内臓的な人間の恐怖 --ar 16:9 --v 7
```

---

## CUT 20：俯瞰、荒れる海のKAZU I（3:47-3:57）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Aerial view of small white tour boat being tossed by 3 meter waves,
Shiretoko Peninsula dark cliffs in background,
massive spray and whitecaps surrounding vessel,
boat listing dangerously,
nature's overwhelming power versus human fragility,
cinematic documentary drone footage,
shot on RED V-Raptor,
stormy dramatic lighting,
terrifying beauty of disaster --ar 16:9 --v 7
```

### 日本語プロンプト
```
3メートルの波に翻弄される小型白色観光船の空撮、
背景に知床半島の暗い断崖、
船を囲む大きな飛沫と白波、
危険に傾く船、
自然の圧倒的な力対人間の脆さ、
シネマティックドキュメンタリードローン映像、
RED V-Raptorで撮影、
嵐の劇的な照明、
災害の恐ろしい美しさ --ar 16:9 --v 7
```

### 動画化指示（Runway Gen-4.5）
- カメラ：高所からの俯瞰、ゆっくりズームイン
- 動き：船が波に翻弄される
- 音声：風の轟音

---

## CUT 21：他社事務所、無線機（3:57-4:10）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Interior of different Japanese fishing company office,
man's silhouette standing at window looking at stormy sea,
wall clock showing 1:00 PM,
amateur radio transceiver on desk with LED lights,
tense atmosphere of someone sensing something wrong,
cinematic documentary photography,
natural window light mixed with fluorescent,
moment of dawning realization --ar 16:9 --v 7
```

### 日本語プロンプト
```
別の日本の船会社事務所内部、
嵐の海を見て窓に立つ男のシルエット、
午後1時を示す壁時計、
LEDライト付きのデスク上のアマチュア無線機、
何か異変を感じている人の緊張した雰囲気、
シネマティックドキュメンタリー写真、
蛍光灯と混ざった自然な窓の光、
気づきの瞬間 --ar 16:9 --v 7
```

---

## CUT 22：無線機クローズアップ（4:10-4:23）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Extreme close-up of vintage marine radio transceiver,
frequency display glowing, speaker grille prominent,
someone's hand reaching for telephone in soft focus background,
static and silence implied,
urgent atmosphere building,
cinematic documentary macro photography,
shallow depth of field,
dramatic side lighting --ar 16:9 --v 7
```

### 日本語プロンプト
```
ビンテージ船舶無線機のエクストリームクローズアップ、
光る周波数ディスプレイ、目立つスピーカーグリル、
ソフトフォーカスの背景で電話に手を伸ばす誰か、
暗示される静電気と沈黙、
高まる緊迫した雰囲気、
シネマティックドキュメンタリーマクロ写真、
浅い被写界深度、
劇的なサイドライティング --ar 16:9 --v 7
```

---

## CUT 23：黒画面＋テロップ
*画像生成不要 - 13:13 通報テロップ*

---

## CUT 24：浸水の始まり（4:33-4:55）
**視点：A（乗客カメラ）**
**優先度：最高**

### English Prompt
```
POV looking down at feet in boat cabin,
dark seawater flowing across tilted floor,
orange life jackets scattered,
camera tilting with boat's severe list,
water level rising visibly,
beginning of flooding disaster,
amateur footage during sinking,
terror and desperation,
natural dramatic lighting from outside --ar 16:9 --v 7
```

### 日本語プロンプト
```
船内のキャビンで足元を見下ろすPOV、
傾いた床を流れる暗い海水、
散らばるオレンジの救命胴衣、
船の激しい傾きに合わせて傾くカメラ、
目に見えて上昇する水位、
浸水災害の始まり、
沈没中のアマチュア映像、
恐怖と絶望、
外からの自然な劇的照明 --ar 16:9 --v 7
```

### 動画化指示（Kling AI 2.6）
- 動き：水が床を這うように広がる
- 音声：悲鳴、「水が入ってきた！」

---

## CUT 25：傾く船内（30度）（4:55-5:07）
**視点：A（乗客カメラ）**
**優先度：最高**

### English Prompt
```
Interior of severely listing boat at 30 degree angle,
passengers desperately clinging to fixtures and each other,
window showing diagonal horizon with dark stormy sky,
water now ankle deep and rising,
seats and belongings sliding,
chaos and impending doom,
amateur disaster footage,
dramatic natural lighting,
final moments aesthetic --ar 16:9 --v 7
```

### 日本語プロンプト
```
30度の角度で激しく傾いた船の内部、
備品や互いに必死にしがみつく乗客、
暗い嵐の空と斜めの水平線を示す窓、
今や足首まであり上昇する水、
滑る座席と持ち物、
混乱と迫り来る破滅、
アマチュア災害映像、
劇的な自然光、
最期の瞬間の美学 --ar 16:9 --v 7
```

### 動画化指示（Kling AI 2.6 / Higgs Field AI）
- 動き：傾きながら揺れる、水が上昇
- 音声：パニックの声、きしみ音

---

## CUT 26：海保、118番受信（5:07-5:20）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Japan Coast Guard operations center,
officer's hands taking urgent notes while on phone,
multiple monitors showing maritime maps,
other officers moving in background,
professional emergency response atmosphere,
cinematic documentary style,
fluorescent and monitor lighting,
tension and professionalism --ar 16:9 --v 7
```

### 日本語プロンプト
```
海上保安庁運用センター、
電話中に緊急メモを取る職員の手、
海図を表示する複数のモニター、
背景で動く他の職員、
プロフェッショナルな緊急対応の雰囲気、
シネマティックドキュメンタリースタイル、
蛍光灯とモニターの照明、
緊張とプロ意識 --ar 16:9 --v 7
```

---

## CUT 27：船長、携帯電話（5:20-5:30）
**視点：A（乗客カメラ）**

### English Prompt
```
Back view of boat captain in blue uniform,
holding mobile phone desperately to ear,
severely tilted cabin visible around him,
water visible on floor,
desperate final call for help,
amateur footage during disaster,
natural dramatic lighting from windows,
moment of professional desperation --ar 16:9 --v 7
```

### 日本語プロンプト
```
青い制服の船長の後ろ姿、
必死に耳に当てる携帯電話、
周囲に見える激しく傾いたキャビン、
床に見える水、
必死の最後の救助要請、
災害時のアマチュア映像、
窓からの自然な劇的照明、
プロの絶望の瞬間 --ar 16:9 --v 7
```

---

## CUT 28：乗客、親族への電話（5:30-5:43）
**視点：A（乗客カメラ）**
**優先度：最高**

### English Prompt
```
Extreme close-up of trembling hands holding smartphone,
water droplets and condensation on screen,
severely tilted boat interior in blurred background,
this is the final call to family,
profound emotional moment,
amateur footage of last moments,
natural dramatic lighting,
ultimate human tragedy --ar 16:9 --v 7
```

### 日本語プロンプト
```
スマートフォンを持つ震える手のエクストリームクローズアップ、
画面上の水滴と結露、
ぼやけた背景に激しく傾いた船内、
これが家族への最後の電話、
深い感情的な瞬間、
最期の瞬間のアマチュア映像、
自然な劇的照明、
究極の人間の悲劇 --ar 16:9 --v 7
```

### 動画化指示（Kling AI 2.6 / Higgs Field AI）
- 動き：震える手、画面の揺れ
- 音声：泣き声、波の音

---

## CUT 29：水位上昇、救命胴衣（5:43-5:55）
**視点：A（乗客カメラ）**
**優先度：最高**

### English Prompt
```
Lower bodies of passengers standing in knee-deep dark seawater,
inside sinking boat cabin,
orange life jackets visible on some people,
tilted window showing gray stormy sky,
water rising every second,
final moments before submersion,
amateur disaster documentation,
devastating natural lighting --ar 16:9 --v 7
```

### 日本語プロンプト
```
膝まである暗い海水の中に立つ乗客の下半身、
沈む船のキャビン内部、
何人かに見えるオレンジの救命胴衣、
灰色の嵐の空を示す傾いた窓、
毎秒上昇する水位、
水没直前の最後の瞬間、
アマチュア災害記録、
壊滅的な自然光 --ar 16:9 --v 7
```

### 動画化指示（Kling AI 2.6）
- 動き：水位がゆっくり上昇
- 音声：泣き声、水の音

---

## CUT 30：カメラ水没（5:55-6:05）
**視点：A（乗客カメラ）**
**優先度：最高**

### English Prompt
```
POV camera being submerged into cold dark seawater,
transition from air to underwater,
air bubbles rising past lens,
distorted fading light from surface above,
final frame before camera dies,
last visual record,
underwater photography aesthetic,
haunting final image,
transition to darkness --ar 16:9 --v 7
```

### 日本語プロンプト
```
冷たい暗い海水に沈むPOVカメラ、
空気から水中への移行、
レンズを過ぎて上る気泡、
上の水面からの歪んで消えゆく光、
カメラが消える前の最後のフレーム、
最後の視覚記録、
水中写真の美学、
忘れられない最後の画像、
暗闘への移行 --ar 16:9 --v 7
```

### 動画化指示（Runway Gen-4.5）
- 動き：水が下から上がってくる
- エフェクト：ノイズ、グリッチ、最後に完全暗転
- 音声：水中の歪んだ音、その後完全な沈黙

---

## CUT 31-33：暗転・沈黙
*画像生成不要 - 15秒の完全な沈黙*

---

## CUT 34：釧路航空基地（6:35-6:50）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Japan Coast Guard helicopter hangar Kushiro Air Station,
orange and white rescue helicopter on maintenance,
empty rain-wet helipad visible through hangar door,
mechanics working urgently,
sense of helplessness against weather,
cinematic documentary photography,
natural overcast lighting,
institutional atmosphere --ar 16:9 --v 7
```

### 日本語プロンプト
```
釧路航空基地の海上保安庁ヘリコプター格納庫、
整備中のオレンジと白の救難ヘリコプター、
格納庫のドアから見える雨に濡れた空のヘリパッド、
緊急に作業する整備士、
天候に対する無力感、
シネマティックドキュメンタリー写真、
自然な曇りの照明、
機関の雰囲気 --ar 16:9 --v 7
```

---

## CUT 35：巡視船「くなしり」（6:50-7:03）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Japan Coast Guard patrol vessel Kunashiri battling through heavy seas,
bow crashing into 3 meter waves with massive spray,
crew visible on bridge through spray,
heroic struggle against overwhelming nature,
dramatic maritime documentary photography,
shot on RED V-Raptor with telephoto lens,
stormy dramatic lighting,
courage in the face of disaster --ar 16:9 --v 7
```

### 日本語プロンプト
```
荒海を突き進む海上保安庁巡視船くなしり、
大きな飛沫を上げて3メートルの波に突っ込む船首、
飛沫越しに艦橋に見える乗組員、
圧倒的な自然に対する英雄的な戦い、
劇的な海洋ドキュメンタリー写真、
望遠レンズ付きRED V-Raptorで撮影、
嵐の劇的な照明、
災害に直面した勇気 --ar 16:9 --v 7
```

### 動画化指示（Runway Gen-4.5）
- カメラ：横からの追従ショット
- 動き：波を切り裂く船、飛沫
- 音声：エンジン音、波の音

---

## CUT 36：ヘリコプター捜索（7:03-7:15）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Japan Coast Guard orange and white rescue helicopter,
flying low over stormy gray Sea of Okhotsk,
crew member visible in open door searching water below,
rescue basket visible on side,
dramatic search and rescue operation,
cinematic aerial documentary photography,
shot from chase helicopter,
overcast dramatic lighting --ar 16:9 --v 7
```

### 日本語プロンプト
```
海上保安庁のオレンジと白の救難ヘリコプター、
嵐のオホーツク海上空を低く飛行、
開いたドアから下の水面を捜索する乗組員、
側面に見える救助バスケット、
劇的な捜索救助活動、
シネマティック空撮ドキュメンタリー写真、
追跡ヘリコプターから撮影、
曇りの劇的な照明 --ar 16:9 --v 7
```

### 動画化指示（Runway Gen-4.5）
- カメラ：別のヘリからの追従ショット
- 動き：ヘリの飛行、ローター回転
- 音声：ローター音、無線通信

---

## CUT 37：ヘリからの視点（7:15-7:27）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Aerial POV from rescue helicopter looking down at stormy ocean,
endless gray waves with whitecaps stretching to horizon,
no boats no people visible anywhere,
searching for something that cannot be found,
vast empty hostile sea,
helicopter window frame visible in shot,
tragic hopelessness,
cinematic documentary photography --ar 16:9 --v 7
```

### 日本語プロンプト
```
救難ヘリコプターから嵐の海を見下ろす空撮POV、
水平線まで続く白波のある果てしない灰色の波、
どこにも見えない船も人も、
見つけられないものを捜す、
広大で空っぽで敵対的な海、
ショットに見えるヘリコプターの窓枠、
悲劇的な絶望、
シネマティックドキュメンタリー写真 --ar 16:9 --v 7
```

---

## CUT 38：日没（7:27-7:37）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Sunset over stormy Shiretoko coast ocean,
orange sun sinking into gray cloudy horizon,
still rough dark seas in foreground,
end of first day with no survivors found,
transition from hope to despair,
cinematic landscape documentary photography,
shot on Arri Alexa with anamorphic lens,
melancholic golden hour --ar 16:9 --v 7
```

### 日本語プロンプト
```
嵐の知床沖の海に沈む夕日、
灰色の曇った水平線に沈むオレンジの太陽、
前景にまだ荒れた暗い海、
生存者が見つからないまま終わる初日、
希望から絶望への移行、
シネマティック風景ドキュメンタリー写真、
アナモルフィックレンズ付きArri Alexaで撮影、
メランコリックなゴールデンアワー --ar 16:9 --v 7
```

---

## CUT 39：夜間捜索（7:37-7:55）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Night search and rescue operation at sea,
powerful searchlights from patrol vessel cutting through darkness,
illuminating black waves,
coast guard helicopter with spotlight in distance,
desperate nighttime search continuing,
cinematic documentary photography,
high contrast dramatic lighting,
persistence against impossible odds --ar 16:9 --v 7
```

### 日本語プロンプト
```
夜間の海上捜索救助活動、
暗闘を切り裂く巡視船からの強力なサーチライト、
照らし出される黒い波、
遠くにスポットライトを持つ海上保安庁ヘリコプター、
続く必死の夜間捜索、
シネマティックドキュメンタリー写真、
ハイコントラストの劇的な照明、
不可能な状況に対する粘り強さ --ar 16:9 --v 7
```

### 動画化指示（Runway Gen-4.5）
- カメラ：サーチライトの動きを追う
- 動き：光が波を照らす、ヘリのライト
- 音声：波の音、サーチライトの唸り

---

## CUT 40：港で待つ家族（7:55-8:07）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Silhouettes of grieving family members waiting at Utoro fishing port at night,
some wrapped in blankets staring at dark sea,
one person collapsed being supported by others,
fishing port lights in background,
tragic vigil for those who will not return,
cinematic documentary photography,
backlit silhouettes,
profound human sorrow --ar 16:9 --v 7
```

### 日本語プロンプト
```
夜のウトロ漁港で待つ悲しむ家族のシルエット、
毛布に包まれて暗い海を見つめる人々、
他の人に支えられて崩れ落ちた一人、
背景に漁港の明かり、
帰らない人々を待つ悲劇的な徹夜、
シネマティックドキュメンタリー写真、
逆光のシルエット、
深い人間の悲しみ --ar 16:9 --v 7
```

### 動画化指示（Kling AI 2.6）
- カメラ：静かにドリーイン
- 動き：風で揺れる毛布、人々の微かな動き
- 音声：風の音、すすり泣き

---

## CUT 41：黒画面＋テロップ
*画像生成不要 - 「発見」テロップ*

---

## CUT 42：救命胴衣、発見（8:17-8:30）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Single orange life jacket floating on gray ocean waves,
patrol vessel approaching in background,
moment of tragic discovery,
evidence of disaster,
somber documentary photography,
natural overcast lighting,
calm after the storm,
silent testimony --ar 16:9 --v 7
```

### 日本語プロンプト
```
灰色の海の波に浮かぶ一枚のオレンジの救命胴衣、
背景で近づく巡視船、
悲劇的な発見の瞬間、
災害の証拠、
厳粛なドキュメンタリー写真、
自然な曇りの照明、
嵐の後の静けさ、
沈黙の証言 --ar 16:9 --v 7
```

### 動画化指示（Pika Labs）
- 動き：波に揺れる救命胴衣
- 音声：静かな波の音

---

## CUT 43：担架、敬礼（8:30-8:40）
**視点：B（ドキュメンタリー）**

### English Prompt
```
Distant respectful view of stretcher covered with white sheet,
being carried slowly on harbor dock,
Japan Coast Guard officers saluting in line,
family members visible in far background,
moment of solemn dignity,
cinematic documentary photography,
natural overcast lighting,
profound respect for the lost --ar 16:9 --v 7
```

### 日本語プロンプト
```
白いシーツで覆われた担架の敬意を込めた遠景、
港の岸壁をゆっくり運ばれる、
列をなして敬礼する海上保安庁職員、
遠い背景に見える家族、
厳粛な尊厳の瞬間、
シネマティックドキュメンタリー写真、
自然な曇りの照明、
失われた命への深い敬意 --ar 16:9 --v 7
```

### 動画化指示（Kling AI 2.6）
- カメラ：固定、遠距離からの敬意ある撮影
- 動き：ゆっくり運ばれる担架、敬礼する職員
- 音声：静かな波の音のみ

---

## CUT 44：黒画面＋テロップ
*画像生成不要 - 「海水温」テロップ*

---

## CUT 45-46：冷たい海、水中（8:50-9:20）
**視点：なし（抽象的）**

### English Prompt
```
Deep underwater view of cold dark Sea of Okhotsk,
faint dappled light filtering from distant surface above,
endless dark blue void below,
sense of extreme cold and isolation,
abstract representation of hypothermia,
peaceful yet haunting atmosphere,
underwater cinematography,
shot on RED with underwater housing --ar 16:9 --v 7
```

### 日本語プロンプト
```
冷たく暗いオホーツク海の深い水中ビュー、
遠い水面から差し込むかすかな木漏れ日のような光、
下に続く果てしない暗い青の虚空、
極度の寒さと孤独の感覚、
低体温症の抽象的表現、
穏やかだが忘れられない雰囲気、
水中撮影、
水中ハウジング付きREDで撮影 --ar 16:9 --v 7
```

### 動画化指示（Pika Labs）
- 動き：ゆっくり沈んでいく視点
- エフェクト：光の揺らぎ、泡
- 音声：水中の静けさ、低い持続音

---

## CUT 47-50：黒画面＋テロップ
*画像生成不要 - エピローグのテロップ群*

---

## CUT 51：フラッシュバック（9:57-10:02）
*CUT 9の映像を再利用*
*子供の手、船内の暖かい光*

---

## CUT 52-53：黒画面＋テロップ
*画像生成不要 - 最終テロップ*

---

# 制作メモ

## Midjourney V7 設定（WAIFF 4K推奨対応）

### 基本設定
- バージョン：--v 7（必須）
- アスペクト比：--ar 16:9（必須）
- 品質：--q 2（高品質）
- Draft Mode：初期テストに使用（高速・低コスト）

### 4K出力のためのワークフロー
1. Midjourney V7で画像生成（デフォルト1024×576）
2. **Upscale**で高解像度化
3. **Topaz Gigapixel AI**で4K (3840×2160) にアップスケール
4. 動画化ツールに入力

### 解像度対応表
| 段階 | 解像度 | 用途 |
|------|--------|------|
| 生成時 | 1024×576 | Midjourney出力 |
| Upscale後 | 2048×1152 | 中間解像度 |
| 最終 | 3840×2160 | **4K（WAIFF推奨）** |

---

## ツール対応表（WAIFF 3ツール以上必須）

| ツール | バージョン | 役割 | カット数 |
|--------|-----------|------|----------|
| **Midjourney** | V7 | 画像生成（必須） | 全40カット |
| **Kling AI** | 2.6 | 動画生成① | 22カット |
| **Runway** | Gen-4.5 | 動画生成② | 7カット |
| **Pika Labs** | 最新 | 動画生成③ | 9カット |
| **ElevenLabs** | 最新 | AI音声生成・Lipsync | 10カット |
| Higgs Field AI | 最新 | 人物表現・Lipsync補助 | 必要に応じて |
| Topaz Video AI | 最新 | アップスケール・補間 | 全カット |

**使用AIツール計：5種類以上** ✅ （WAIFF要件：3種類以上）

---

## 最終出力仕様（WAIFF KYOTO 2026準拠）

| 項目 | 仕様 |
|------|------|
| ファイル形式 | MP4（H.264/H.265） |
| 解像度 | 3840×2160（4K） |
| フレームレート | 24fps（映画標準） |
| アスペクト比 | 16:9 |
| 音声 | AAC 48kHz |
| 尺 | 10分15秒 |
| 字幕 | **英語字幕必須** |

---

## 英語テロップ一覧（字幕必須対応）

| CUT | 日本語 | English |
|-----|--------|---------|
| 1 | 2022年4月23日 | April 23, 2022 |
| 2 | 北海道 知床半島沖 | Off the coast of Shiretoko Peninsula, Hokkaido |
| 23 | 13:13 最初の通報 | 13:13 - First Distress Call |
| 31 | 14:17 通信途絶 | 14:17 - Communication Lost |
| 33 | 72時間の捜索が始まった | The 72-hour search began |
| 41 | 発見 | Discovery |
| 44 | 海水温 3〜4度 | Water Temperature: 3-4°C (37-39°F) |
| 47 | 乗客乗員26名 | 26 passengers and crew |
| 48 | 20名死亡確認 | 20 confirmed dead |
| 49 | 6名 行方不明のまま | 6 still missing |
| 50 | 二度と繰り返さないために | So that this never happens again |
| 52 | 犠牲者のご冥福をお祈りします | In memory of the victims |
| 53 | KAZU I - 72時間 | KAZU I - 72 Hours |

---

## ナレーション
**なし** - テロップと環境音のみで構成

---

## ElevenLabs 音声生成・Lipsync対応

### 音声生成対象カット

| CUT | 音声内容 | 話者 | Lipsync |
|-----|----------|------|---------|
| 6B | テレビ気象情報 | NHKアナウンサー風 | 不要 |
| 9 | 「ねえ、いつ出るの？」 | 子供（5-6歳女児） | **必要** |
| 12 | 「すごい...」 | 乗客（複数） | 不要 |
| 13 | 「熊だ！」「どこどこ？」 | 乗客（複数） | 不要 |
| 14B | テレビ気象情報（続き） | NHKアナウンサー風 | 不要 |
| 17 | 「揺れるね」「大丈夫かな...」 | 子供・乗客 | **必要**（子供） |
| 19 | 「怖い...」 | 子供 | 不要（顔なし） |
| 21-22 | 無線通信「沈む...」 | 無線音声 | 不要 |
| 24 | 「水が入ってきた！」 | 乗客（パニック） | 不要 |
| 26 | 船長の118番通報 | 船長 | 不要 |
| 51 | 「ねえ、いつ出るの？」 | CUT 9再利用 | 再利用 |

### ElevenLabs Voice設定

| キャラクター | Voice Type | Style | 言語 |
|-------------|------------|-------|------|
| 子供（5-6歳女児） | Young Female Child | Curious, Innocent | 日本語 |
| 乗客A（成人男性） | Adult Male | Casual → Panicked | 日本語 |
| 乗客B（成人女性） | Adult Female | Calm → Worried | 日本語 |
| NHKアナウンサー | Professional Male | Formal, Broadcast | 日本語 |
| 無線音声 | Adult Male | Urgent, Breaking up | 日本語 |
| 船長 | Adult Male | Strained, Desperate | 日本語 |

### Lipsyncワークフロー

1. **Midjourney V7** で静止画生成（口を閉じた状態）
2. **ElevenLabs** で音声生成（WAV 48kHz）
3. **Kling AI 2.6** または **Higgs Field AI** でLipsync適用
4. 映像と音声の同期確認
5. 最終編集で微調整

### 音声エフェクト

| 効果 | 対象CUT | 設定 |
|------|---------|------|
| ラジオ・無線エフェクト | 21, 22 | 帯域制限、ノイズ追加 |
| 電話品質 | 26 | 圧縮、歪み |
| 水中エフェクト | 30 | ローパス、リバーブ |
| エコー・回想 | 51 | リバーブ、フェード |

---

## 制作スケジュール

| Phase | 作業 | 締切目安 |
|-------|------|---------|
| 1 | 静止画生成（Midjourney V7） | 1月31日 |
| 2 | 動画化（Kling/Runway/Pika） | 2月5日 |
| 2.5 | **ElevenLabs音声生成・Lipsync** | 2月7日 |
| 3 | 編集・音声・テロップ | 2月10日 |
| 4 | 最終調整・4Kレンダリング | 2月13日 |
| **提出** | WAIFF提出 | **2月15日** |

---

## 審査アピールポイント

### 映画としての完成度
- デュアル視点（乗客カメラ＋ドキュメンタリー）
- 一貫したシネマティック撮影スタイル
- 緻密な時系列構成

### AI活用の革新性
- 5種類以上のAIツール連携（画像・動画・音声）
- 視点切替技法のAI実装
- ElevenLabs音声生成＋Lipsync技術
- リアルタイム再構築手法

### 国際映画祭適性
- 英語テロップ完備
- 普遍的テーマ（海難事故、人命の尊厳）
- ナレーションなしで言語の壁を排除

### オリジナリティ
- 実話ベースのドキュメンタリー
- 元海上保安庁広報官の視点
- 「忘れない、繰り返さない」のメッセージ

---

*このプロンプト集は2026年1月時点の最新情報に基づいています*
*WAIFF KYOTO 2026（2026年3月12-13日開催）応募要件準拠*
