var videoshow = require('videoshow');


var secondsToShowEachImage = 1;
var finalVideoPath = '/output';

var images = [
{path: 'assets/one.png', loop: 0.1},
{path: 'assets/two.png', loop: 3},
{path: 'assets/three.png', loop: 1.5},
{path: 'assets/four.png', loop: .5},
{path: 'assets/five.png', loop: 1}
]

var videoOptions = {
    fps: 25,
    transition: false,
    videoCodec: 'libx264',
    size: '640x640',
    format: 'mp4',
    outputOptions: ['-pix_fmt yuv420p']
}

videoshow(images, videoOptions)
.save('video.mp4')
.on('start', function(command) {
    console.log('ffmpeg process started:', command)
})
.on('error', function(err, stdout, stderr) {
    console.log('Error:', err);
    console.log('ffmpeg stderr:', stderr)
})
.on('end', function(output) {
    console.log('Video created in:', output)
})