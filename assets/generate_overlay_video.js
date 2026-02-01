/**
 * iPhone Camera Style Recording Overlay - Video Generator (v3)
 *
 * 5分間（300秒）の録画オーバーレイ動画を生成します。
 * タイマーは実際に 00:00:00 → 00:05:00 まで進みます。
 *
 * 使用方法:
 * 1. npm install puppeteer
 * 2. node generate_video_overlay.js
 *
 * 出力: video_frames/ フォルダに9000フレーム（5分×30fps）
 *
 * ⚠️ 注意: 9000フレーム生成には時間がかかります（約15-30分）
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const CONFIG = {
    width: 1920,
    height: 1080,
    fps: 30,
    duration: 300, // 300秒 = 5分
    outputDir: './video_frames_5min'
};

async function generateVideoFrames() {
    // 出力ディレクトリ作成
    if (!fs.existsSync(CONFIG.outputDir)) {
        fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }

    const totalFrames = CONFIG.fps * CONFIG.duration;

    console.log('🎬 iPhone Camera Recording Overlay - Video Generator');
    console.log('=====================================================');
    console.log(`Resolution: ${CONFIG.width}x${CONFIG.height}`);
    console.log(`FPS: ${CONFIG.fps}`);
    console.log(`Duration: ${CONFIG.duration}s (${Math.floor(CONFIG.duration/60)}分${CONFIG.duration%60}秒)`);
    console.log(`Total frames: ${totalFrames.toLocaleString()}`);
    console.log(`Estimated time: ${Math.round(totalFrames / 60)} minutes`);
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
    let lastPercent = -1;

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

        // フレームをキャプチャ
        const frameNumber = String(frame).padStart(6, '0');
        const outputPath = path.join(CONFIG.outputDir, `frame_${frameNumber}.png`);

        await page.screenshot({
            path: outputPath,
            type: 'png',
            omitBackground: true // 背景を透過
        });

        // 進捗表示（1%ごと）
        const percent = Math.floor((frame / totalFrames) * 100);
        if (percent !== lastPercent) {
            const elapsed = (Date.now() - startTime) / 1000;
            const eta = (elapsed / (frame + 1)) * (totalFrames - frame - 1);
            console.log(`Progress: ${percent}% (${frame + 1}/${totalFrames}) - ETA: ${Math.round(eta)}s`);
            lastPercent = percent;
        }
    }

    await browser.close();

    const totalTime = Math.round((Date.now() - startTime) / 1000);

    console.log('\n✅ Video frame generation complete!');
    console.log(`📁 Output: ${CONFIG.outputDir}/`);
    console.log(`⏱️ Total time: ${Math.floor(totalTime/60)}分${totalTime%60}秒`);
    console.log(`📊 Total frames: ${totalFrames.toLocaleString()}`);
    console.log('\n📝 動画への変換方法:');
    console.log('');
    console.log('【FFmpegで透過MOV（ProRes 4444）に変換】');
    console.log(`ffmpeg -framerate 30 -i ${CONFIG.outputDir}/frame_%06d.png -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le -an rec_overlay_5min.mov`);
    console.log('');
    console.log('【FFmpegで透過WebMに変換（軽量版）】');
    console.log(`ffmpeg -framerate 30 -i ${CONFIG.outputDir}/frame_%06d.png -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 2M -an rec_overlay_5min.webm`);
    console.log('');
    console.log('📝 Final Cut Proでの使用方法:');
    console.log('1. rec_overlay_5min.mov をプロジェクトにインポート');
    console.log('2. タイムラインの最上位トラックに配置');
    console.log('3. ブレンドモードは「通常」のままでOK（透過背景）');
}

generateVideoFrames().catch(console.error);
