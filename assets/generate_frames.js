/**
 * REC Overlay Frame Generator
 *
 * このスクリプトは、Final Cut Pro用の透過PNG連番を生成します。
 *
 * 使用方法:
 * 1. npm install puppeteer
 * 2. node generate_frames.js
 *
 * 出力: frames/ フォルダに60フレーム（1秒分のループ素材）
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const CONFIG = {
    width: 1920,
    height: 1080,
    fps: 30,
    duration: 2, // 2秒分（点滅1サイクル = 1秒）
    outputDir: './frames'
};

async function generateFrames() {
    // 出力ディレクトリ作成
    if (!fs.existsSync(CONFIG.outputDir)) {
        fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }

    console.log('Starting frame generation...');
    console.log(`Resolution: ${CONFIG.width}x${CONFIG.height}`);
    console.log(`FPS: ${CONFIG.fps}`);
    console.log(`Duration: ${CONFIG.duration}s`);
    console.log(`Total frames: ${CONFIG.fps * CONFIG.duration}`);

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
    const htmlPath = path.join(__dirname, 'rec_overlay.html');
    await page.goto(`file://${htmlPath}`);

    // 書き出しモードに切り替え（背景を透過）
    await page.evaluate(() => {
        document.body.classList.add('export-mode');
        // タイマーを非表示に（必要に応じて）
        // document.querySelector('.timer').style.display = 'none';
    });

    const totalFrames = CONFIG.fps * CONFIG.duration;

    for (let frame = 0; frame < totalFrames; frame++) {
        // 点滅のopacity計算（1秒周期）
        const t = (frame / CONFIG.fps) % 1; // 0-1の範囲
        const opacity = 0.2 + 0.8 * (0.5 + 0.5 * Math.cos(2 * Math.PI * t));

        // CSSアニメーションを無効化し、手動でopacityを設定
        await page.evaluate((op) => {
            const dot = document.querySelector('.rec-dot');
            dot.style.animation = 'none';
            dot.style.opacity = op;
        }, opacity);

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
    console.log(`Output: ${CONFIG.outputDir}/`);
    console.log('\n📝 Final Cut Proでの使用方法:');
    console.log('1. frames/ フォルダをFinal Cut Proにドラッグ');
    console.log('2. "イメージシーケンス" として読み込み');
    console.log('3. フレームレートを30fpsに設定');
    console.log('4. タイムラインの最上位トラックに配置');
    console.log('5. 必要に応じてループ（オプション+G でコンパウンド→ループ）');
}

generateFrames().catch(console.error);
