// var music = document.getElementById('music'); // id for audio element
// var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
// var pButton = document.getElementById('pButton'); // play button
// var playhead = document.getElementById('playhead'); // playhead
// var timeline = document.getElementById('timeline'); // timeline

// // timeline width adjusted for playhead
// var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// // play button event listenter
// pButton.addEventListener("click", play);

// // timeupdate event listener
// music.addEventListener("timeupdate", timeUpdate, false);

// // makes timeline clickable
// timeline.addEventListener("click", function (event) {
//     moveplayhead(event);
//     music.currentTime = duration * clickPercent(event);
// }, false);

// // returns click as decimal (.77) of the total timelineWidth
// function clickPercent(event) {
//     return (event.clientX - getPosition(timeline)) / timelineWidth;
// }

// // makes playhead draggable
// playhead.addEventListener('mousedown', mouseDown, false);
// window.addEventListener('mouseup', mouseUp, false);

// // Boolean value so that audio position is updated only when the playhead is released
// var onplayhead = false;

// // mouseDown EventListener
// function mouseDown() {
//     onplayhead = true;
//     window.addEventListener('mousemove', moveplayhead, true);
//     music.removeEventListener('timeupdate', timeUpdate, false);
// }

// // mouseUp EventListener
// // getting input from all mouse clicks
// function mouseUp(event) {
//     if (onplayhead == true) {
//         moveplayhead(event);
//         window.removeEventListener('mousemove', moveplayhead, true);
//         // change current time
//         music.currentTime = duration * clickPercent(event);
//         music.addEventListener('timeupdate', timeUpdate, false);
//     }
//     onplayhead = false;
// }
// // mousemove EventListener
// // Moves playhead as user drags
// function moveplayhead(event) {
//     var newMargLeft = event.clientX - getPosition(timeline);

//     if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
//         playhead.style.marginLeft = newMargLeft + "px";
//     }
//     if (newMargLeft < 0) {
//         playhead.style.marginLeft = "0px";
//     }
//     if (newMargLeft > timelineWidth) {
//         playhead.style.marginLeft = timelineWidth + "px";
//     }
// }

// // timeUpdate
// // Synchronizes playhead position with current point in audio
// function timeUpdate() {
//     var playPercent = timelineWidth * (music.currentTime / duration);
//     playhead.style.marginLeft = playPercent + "px";
//     if (music.currentTime == duration) {
//         pButton.className = "";
//         pButton.className = "play";
//     }
// }

// //Play and Pause
// function play() {
//     // start music
//     if (music.paused) {
//         music.play();
//         // remove play, add pause
//         pButton.className = "";
//         pButton.className = "pause";
//     } else { // pause music
//         music.pause();
//         // remove pause, add play
//         pButton.className = "";
//         pButton.className = "play";
//     }
// }

// // Gets audio file duration
// music.addEventListener("canplaythrough", function () {
//     duration = music.duration;
// }, false);

// // getPosition
// // Returns elements left position relative to top-left of viewport
// function getPosition(el) {
//     return el.getBoundingClientRect().left;
// }

document.addEventListener('DOMContentLoaded', function () {
    initialiseMediaPlayer();
}, false);
var mediaPlayer;
var playPauseBtn;
var progressBar;

function initialiseMediaPlayer() {
    mediaPlayer = document.getElementById('media-video');
    playPauseBtn = document.getElementById('play-pause-button');
    progressBar = document.getElementById('progress-bar');
    mediaPlayer.controls = false;
    mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);
    mediaPlayer.addEventListener('play', function () {
        changeButtonType(playPauseBtn, 'pause');
    }, false);
    mediaPlayer.addEventListener('pause', function () {
        changeButtonType(playPauseBtn, 'play');
    }, false);
}
function togglePlayPause() {
    if (mediaPlayer.paused || mediaPlayer.ended) {
        changeButtonType(playPauseBtn, 'pause');
        mediaPlayer.play();
    }
    else {
        changeButtonType(playPauseBtn, 'play');
        mediaPlayer.pause();
    }

}
function changeButtonType(btn, value) {
    btn.title = value;
    btn.innerHTML = value;
    btn.className = value;
}
mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);

function updateProgressBar() {
    var percentage = Math.floor((100 / mediaPlayer.duration) * mediaPlayer.currentTime);
    progressBar.value = percentage;
    progressBar.innerHTML = percentage + '% played';
}
function resetPlayer() {
    progressBar.value = 0;
    mediaPlayer.currentTime = 0;
    changeButtonType(playPauseBtn, 'play');
}
// Loads a video item into the media player
function loadVideo() {
    for (var i = 0; i < arguments.length; i++) {
        var file = arguments[i].split('.');
        var ext = file[file.length - 1];
        // Check if this media can be played
        if (canPlayVideo(ext)) {
            // Reset the player, change the source file and load it
            resetPlayer();
            mediaPlayer.src = arguments[i];
            mediaPlayer.load();
            break;
        }
    }
}