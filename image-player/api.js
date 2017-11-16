var videoshow = require('videoshow');

var images = [
    'screenshots/1510814550089_KeyboardHideEvent.jpg',
    'screenshots/1510814551343_KeyboardShowEvent.jpg',
    'screenshots/1510814550837_InputFocusedLostEvent.jpg',
    'screenshots/1510814554535_KeyboardHideEvent.jpg',
    'screenshots/1510814551006_InputFocusedGainEvent.jpg',
    'screenshots/1510814555226_TouchEvent.jpg',
    'screenshots/1510814551113_InputEditingEvent.jpg',
    'screenshots/1510814561936_ScreenPaused.jpg'
]

var videoOptions = {
    fps: 8,
    loop: images.length,
    transition: false,
    transisitionDuration: 0,
    videoBitrate: 128,
    videoCodec: 'libx264',
    size: '640x640',
    format: 'mp4',
    pixelFormat: 'yuv420p'
}


videoshow(images, videoOptions)
    .save('video.mp4')
    .on('start', function (command) {
        console.log('ffmpeg process started:', command)
    })
    .on('error', function (err, stdout, stderr) {
        console.error('Error:', err)
        console.error('ffmpeg stderr:', stderr)
    })
    .on('end', function (output) {
        console.error('Video created in:', output)
    })