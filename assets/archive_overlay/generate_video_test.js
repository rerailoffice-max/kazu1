/**
 * テスト用 - 10秒分のオーバーレイ動画を生成
 *
 * 使用方法:
 * 1. npm install puppeteer
 * 2. node generate_video_test.js
 * 3. ffmpeg -framerate 30 -i video_frames_test/frame_%06d.png -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le -an rec_overlay_test.mov
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const CONFIG = {
    width: 1920,
    height: 1080,
    fps: 30,
    duration: 10, // 10秒テスト
    outputDir: './video_frames_test'
};

async function generateVideoFrames() {
    if (!fs.existsSync(CONFIG.outputDir)) {
        fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }

    const totalFrames = CONFIG.fps * CONFIG.duration;

    console.log('🎬 テスト用オーバーレイ生成（10秒）');
    console.log(`Total frames: ${totalFrames}`);

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: CONFIG.width, height: CONFIG.height, deviceScaleFactor: 1 });

    const htmlPath = path.join(__dirname, 'rec_overlay_iphone_v3.html');
    await page.goto(`file://${htmlPath}`);

    await page.evaluate(() => {
        document.body.classList.add('export-mode');
    });

    for (let frame = 0; frame < totalFrames; frame++) {
        const currentSeconds = Math.floor(frame / CONFIG.fps);
        const hrs = Math.floor(currentSeconds / 3600);
        const mins = Math.floor((currentSeconds % 3600) / 60);
        const secs = currentSeconds % 60;
        const timeString = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        await page.evaluate((time) => {
            document.getElementById('timer').textContent = time;
        }, timeString);

        const frameNumber = String(frame).padStart(6, '0');
        await page.screenshot({
            path: path.join(CONFIG.outputDir, `frame_${frameNumber}.png`),
            type: 'png',
            omitBackground: true
        });

        if (frame % 30 === 0) {
            console.log(`Progress: ${Math.floor(frame/30)}/${CONFIG.duration}秒`);
        }
    }

    await browser.close();

    console.log('\n✅ 完了！');
    console.log('\n動画に変換:');
    console.log(`cd ${__dirname}`);
    console.log(`ffmpeg -framerate 30 -i video_frames_test/frame_%06d.png -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le -an rec_overlay_test.mov`);
}

generateVideoFrames().catch(console.error);
