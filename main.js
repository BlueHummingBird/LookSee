
// Put event listeners into place
var context = canvas.getContext("2d");
var videoOn = true;

window.addEventListener("DOMContentLoaded", function() {
  // Grab elements, create settings, etc.
  var canvas = document.getElementById("canvas"),
  
    video = document.getElementById("video"),
    videoObj = { "video": true },
    errBack = function(error) {
      console.log("Video capture error: ", error.code); 
    };

function hasGetUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
  console.log('YYEEESSS'); // Good to go!
} else {
  alert('getUserMedia() is not supported in your browser');
}


console.log('navigator', navigator);
  // Put video listeners into place
  if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia(videoObj, function(stream) {
      video.src = stream;
      video.play();
    }, errBack);
  } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
      console.log('navigator.webkitGetUserMedia ', navigator.webkitGetUserMedia);
    navigator.webkitGetUserMedia(videoObj, function(stream){
      console.log('stream ', stream)
      video.src = window.webkitURL.createObjectURL(stream);
      // video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    }, errBack);
  }
  else if(navigator.mozGetUserMedia) { // Firefox-prefixed
    navigator.mozGetUserMedia(videoObj, function(stream){
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, errBack);
  }
}, false);

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
  context.drawImage(video, 0, 0, 640, 480);
});


// turn video on/off
document.getElementById("videoOnOff").addEventListener("click", function() {
  if (videoOn){
    video.pause();
    videoOn = false;
  } else {
    video.play();
    videoOn = true;
  }
});
////////////////////////////////////////////////////////
// code from https://davidwalsh.name/browser-camera
////////////////////////////////////////////////////////

// var errorCallback = function(e) {
//     console.log('Reeeejected!', e);
//   };

//   // Not showing vendor prefixes.
//   navigator.webkitGetUserMedia({video: true, audio: true}, function(localMediaStream) {
//     var video = document.querySelector('video');
//     video.src = window.URL.createObjectURL(localMediaStream);

//     // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
//     // See crbug.com/110938.
//     video.onloadedmetadata = function(e) {
//       // Ready to go. Do some stuff.
//     };
//   }, errorCallback);