export function arrowPlayAudio() {
    let sound = new Audio();
    sound.src = 'audio/arrow.mp3';
    
    return sound.play();
}