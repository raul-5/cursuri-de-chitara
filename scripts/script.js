
/*
var audio, playbtn, seek_bar;

function initAudioPlayer() {
    audio = new Audio();
    audio.src = "audio/californication1.mp3";
    audio.loop = true;
    audio.play();

    mutebtn = document.getElementById("mutebtn");
    mutebtn.addEventListener("click", mute);
    
    function mute() {
        if(audio.muted) {
                            audio.muted = false;
        } else {
                audio.muted = true;
                
        }
        
        
    }



}
window.addEventListener("load", initAudioPlayer);
*/

    // functie pentru nav bar cu scroll

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scrollNav").style.top = "0";
      } else {
        document.getElementById("scrollNav").style.top = "-120px";
      }
    }




