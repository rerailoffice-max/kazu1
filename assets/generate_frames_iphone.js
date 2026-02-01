/**
 * iPhone Camera Style Recording Overlay Frame Generator
 *
 * このスクリプトは、Final Cut Pro用の透過PNG連番を生成します。
 * iPhoneカメラアプリ風のオーバーレイ（グリッド線 + 右上タイマー + 緑インジケーター）
 *
 * 使用方法:
 * 1. npm install puppeteer
 * 2. node generate_frames_iphone.js
 *
 * 出力: frames_iphone/ フォルダに60フレーム（2秒分のループ素材）
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const CONFIG = {
    width: 1920,
    height: 1080,
    fps: 30,
    duration: 2, // 2秒分
    outputDir: './frames_iphone'
};

async function generateFrames() {
    // 出力ディレクトリ作成
    if (!fs.existsSync(CONFIG.outputDir)) {
        fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }

    console.log('🎬 iPhone Camera Style Overlay Generator');
    console.log('=========================================');
    console.log(`Resolution: ${CONFIG.width}x${CONFIG.height}`);
    console.log(`FPS: ${CONFIG.fps}`);
    console.log(`Duration: ${CONFIG.duration}s`);
    console.log(`Total frames: ${CONFIG.fps * CONFIG.duration}`);
    console.log('');

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox']
    });

    const page = await browser.newPage();

    await page.setViewport({
        width: CONFIG.width,
        height: CONFIG.height,
        deviceScaleFactor: 1
    });

    // HTMLファイルを読み込み
    const htmlPath = path.join(__dirname, 'rec_overlay_iphone_camera.html');
    await page.goto(`file://${htmlPath}`);

    // 書き出しモードに切り替え（背景を透過）
    await page.evaluate(() => {
        document.body.classList.add('export-mode');
    });

    const totalFrames = CONFIG.fps * CONFIG.duration;

    for (let frame = 0; frame < totalFrames; frame++) {
        // 緑インジケーターのpulseアニメーション計算（2秒周期）
        const t = (frame / CONFIG.fps) % 2; // 0-2の範囲
        const greenOpacity = 0.7 + 0.3 * (0.5 + 0.5 * Math.cos(Math.PI * t));

        // CSSアニメーションを無効化し、手動でopacityを設定
        await page.evaluate((op) => {
            const indicator = document.querySelector('.rec-indicator-top');
            if (indicator) {
                indicator.style.animation = 'none';
                indicator.style.opacity = op;
            }
        }, greenOpacity);

        // フレームをキャプチャ
        const frameNumber = String(frame).padStart(4, '0');
        const outputPath = path.join(CONFIG.outputDir, `frame_${frameNumber}.png`);

        await page.screenshot({
            path: outputPath,
            type: 'png',
            omitBackground: true // 背景を透過
        });

        if (frame % 10 === 0) {
            console.log(`Progress: ${frame + 1}/${totalFrames} frames`);
        }
    }

    await browser.close();

    console.log('\n✅ Frame generation complete!');
    console.log(`📁 Output: ${CONFIG.outputDir}/`);
    console.log('\n📝 Final Cut Proでの使用方法:');
    console.log('1. frames_iphone/ フォルダをFinal Cut Proにドラッグ');
    console.log('2. 「イメージシーケンス」として読み込み');
    console.log('3. フレームレートを30fpsに設定');
    console.log('4. タイムラインの最上位トラックに配置');
    console.log('5. 必要に応じてループ（Option+G → ループをON）');
    console.log('\n🎨 含まれる要素:');
    console.log('   - 3x3 グリッド線（白・半透明）');
    console.log('   - 右上の赤い録画タイマー（00:00:01）');
    console.log('   - 上部中央の緑の録画インジケーター（点滅）');
}

generateFrames().catch(console.error);
