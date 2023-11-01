const playGif = document.querySelector('#music')
const recordPlayer = document.querySelector('#recordPlayer')
let playing = false;


function play() {
    playing = !playing;
    playGif.style.visibility === 'visible' ?playGif.style.visibility ='hidden': playGif.style.visibility ='visible';
    if (playing) {
        recordPlayer.src = 'assets/playing.gif';
    }else{
        recordPlayer.src = 'assets/paused.gif';
    }
    
}