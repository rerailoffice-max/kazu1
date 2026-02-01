/**
 * iPhone Camera Style Recording Overlay - Test Version (30秒)
 * 透過PNG画像のテスト生成
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const CONFIG = {
    width: 1920,
    height: 1080,
    fps: 30,
    duration: 30, // 30秒のテスト版
    outputDir: './overlay_test'
};

async function generateTestFrames() {
    // 出力ディレクトリ作成
    if (!fs.existsSync(CONFIG.outputDir)) {
        fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }

    const totalFrames = CONFIG.fps * CONFIG.duration;

    console.log('🎬 透過オーバーレイ テスト生成（30秒版）');
    console.log('==========================================');
    console.log(`Total frames: ${totalFrames}`);
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
    const htmlPath = path.join(__dirname, 'rec_overlay_iphone.html');
    await page.goto(`file://${htmlPath}`);

    // 書き出しモードに切り替え（背景を透過）
    await page.evaluate(() => {
        document.body.classList.add('export-mode');
    });

    const startTime = Date.now();

    for (let frame = 0; frame < totalFrames; frame++) {
        // 現在の秒数を計算
        const currentSeconds = Math.floor(frame / CONFIG.fps);

        // タイマー表示を更新
        const hrs = Math.floor(currentSeconds / 3600);
        const mins = Math.floor((currentSeconds % 3600) / 60);
        const secs = currentSeconds % 60;
        const timeString = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        await page.evaluate((time) => {
            document.getElementById('timer').textContent = time;
        }, timeString);

        // フレームをキャプチャ（透過背景）
        const frameNumber = String(frame).padStart(6, '0');
        const outputPath = path.join(CONFIG.outputDir, `frame_${frameNumber}.png`);

        await page.screenshot({
            path: outputPath,
            type: 'png',
            omitBackground: true // ← 重要：背景を透過
        });

        // 進捗表示（10%ごと）
        if (frame % Math.floor(totalFrames / 10) === 0) {
            console.log(`Progress: ${Math.floor((frame / totalFrames) * 100)}%`);
        }
    }

    await browser.close();

    const totalTime = Math.round((Date.now() - startTime) / 1000);

    console.log('\n✅ テスト生成完了！');
    console.log(`📁 Output: ${CONFIG.outputDir}/`);
    console.log(`⏱️ Time: ${totalTime}秒`);
    console.log('\n📝 MOVへの変換コマンド:');
    console.log(`ffmpeg -framerate 30 -i ${CONFIG.outputDir}/frame_%06d.png -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le -an overlay_test.mov`);
}

generateTestFrames().catch(console.error);
