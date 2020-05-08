/*
var ONLYONETIME_EXECUTE = null;
window.addEventListener('load', function(){ // on page load

  document.body.addEventListener('touchstart', function(e){

    if (ONLYONETIME_EXECUTE == null) {

      const videos = document.querySelectorAll("video.loop")
      videos.forEach(video => {
        video.play();
      })

      ONLYONETIME_EXECUTE = 0;
    }

  }, false)

}, false)
*/

// ############################################################
//                  START MUTE STOP
// ############################################################
const videosStartMuteStop = document.querySelectorAll("video.startMuteStop")
videosStartMuteStop.forEach(video => {
  video.addEventListener("click", function () {
    if (this.paused) {
      this.play();
    } else if (!this.paused && !this.muted) {
      this.muted=true;
    } else if (!this.paused && this.muted) {
      this.pause();
      this.muted=false;
    }
  })
  /*
  video.addEventListener("touchstart", function () {
    this.play()
  })
  video.addEventListener("touchend", function () {
    this.pause()
  })
  */
})

/*
// ############################################################
//                  mouseoverStopIfOut
// ############################################################
const videos = document.querySelectorAll("video.mouseoverStopIfOut")
videos.forEach(video => {
  video.addEventListener("mouseover", function () {
    this.play()
  })
  video.addEventListener("mouseout", function () {
    this.pause()
  })
  video.addEventListener("touchstart", function () {
    this.play()
  })
  video.addEventListener("touchend", function () {
    this.pause()
  })
})

// ############################################################
//                  MOUSE OVER NON STOP
// ############################################################
const videosNoLoop = document.querySelectorAll("video.mouseoverNonStop")
videosNoLoop.forEach(video => {
  video.addEventListener("mouseover", function () {
    this.play()
  })
})

// ############################################################
//                  clickStartPause
// ############################################################
const videosClick = document.querySelectorAll("video.clickStartPause")
videosClick.forEach(video => {
  video.addEventListener("click", function () {
    this.paused?this.play():this.pause();
  })
})

// ############################################################
//                  RESTART
// ############################################################
const videosRestart = document.querySelectorAll("video.restartOnMouseOver")
videosRestart.forEach(video => {
  video.addEventListener("click", function () {
    this.paused?this.play():this.pause();
  })
  video.addEventListener("mouseover", function () {
    this.currentTime = 0;
    this.play()
  })
})

// ############################################################
//                  TIME
// ############################################################
const videosTime = document.querySelectorAll("video.quickerOnMouseOver")
videosTime.forEach(video => {
  video.addEventListener("click", function () {
    this.paused?this.play():this.pause();
  })
  video.addEventListener("mouseover", function () {
    this.playbackRate = 5.0;
  })
  video.addEventListener("mouseout", function () {
    this.playbackRate = 1.0;
  })
})

// ############################################################
//                  TIME
// ############################################################
const videosSlow = document.querySelectorAll("video.slowerOnMouseOver")
videosSlow.forEach(video => {
  video.addEventListener("click", function () {
    this.paused?this.play():this.pause();
  })
  video.addEventListener("mouseover", function () {
    this.playbackRate = 0.35;
  })
  video.addEventListener("mouseout", function () {
    this.playbackRate = 1.0;
  })
})

// ############################################################
//                  MUTE
// ############################################################
const videosMute = document.querySelectorAll("video.muteVideo")
videosMute.forEach(video => {
  video.addEventListener("mouseover", function () {
    this.play()
  })
  video.addEventListener("click", function () {
    this.muted?this.muted=false:this.muted=true;
  })
})

// ############################################################
//                  SOUND PLAY
// ############################################################
const videosSoundPlay = document.querySelectorAll("video.soundPlay")
videosSoundPlay.forEach(video => {
  video.addEventListener("click", function () {
    if (this.paused) {
      this.play();
      this.muted=true;
    } else if (!this.paused && this.muted) {
      this.play();
      this.muted=false;
    }
    else if (!this.paused && !this.muted) {
      this.pause();
      this.muted=false;
    }
  })
})

// ############################################################
//                  AUTOPLAY click
// ############################################################
const videosAutoplayClick = document.querySelectorAll("video.autoplayClick")
videosAutoplayClick.forEach(video => {
  video.addEventListener("click", function () {
    if (this.paused) {
      for(video of videosAutoplayClick) { // use var video if "strict mode" is enabled
        video.addEventListener('loadstart', function() { // during the loading process
          this.play();
        })
        video.load(); // now reload
      }
    } else {
      this.pause();
    }
  })
})

// ############################################################
//                  AUTOPLAY HOVER
// ############################################################
const videosAutoplayHover = document.querySelectorAll("video.autoplayHover")
videosAutoplayHover.forEach(video => {
  video.addEventListener("mouseover", function () {
    if (this.paused) {
      for(video of videosAutoplayHover) { // use var video if "strict mode" is enabled
        video.addEventListener('loadstart', function() { // during the loading process
          this.play();
        })
        video.load(); // now reload
      }
    } else {
      for(video of videosAutoplayHover) { // use var video if "strict mode" is enabled
        video.addEventListener('loadstart', function() { // during the loading process
          this.pause();
        })
        video.pause();
      }
    }
  })
  video.addEventListener("mouseout", function () {
    this.pause()
  })
})

// ############################################################
//                  REWIND
// ############################################################
//var video = document.getElementById('video');
const videosRewind = document.querySelectorAll("video.rewindOnMouseOver")
var intervalRewind;
const fps = 30;
videosRewind.forEach(video => {
  video.addEventListener("mouseover", function () {
    intervalRewind = setInterval(function(){
       video.playbackRate = 1.0;
       if(video.currentTime == 0){
           clearInterval(intervalRewind);
           video.pause();
       }
       else{
           video.muted = true;
           video.currentTime += -(1 / fps);
       }
    },fps);
  })
  video.addEventListener("mouseout", function () {
    video.muted = false;
    this.playbackRate = 1.0;
    this.play()
  })
})

// ############################################################
//                  soundOnlyMouseOver
// ############################################################
const videosSoundMouseOver = document.querySelectorAll("video.soundOnlyMouseOver")
videosSoundMouseOver.forEach(video => {
  video.addEventListener("click", function () {
    this.play()
  })
  video.addEventListener("mouseout", function () {
    video.muted = true;
  })
  video.addEventListener("mouseover", function () {
    video.muted = false;
  })
})

/*
$("video").each(function(){
    $(this).get(0).pause();
});
*/
