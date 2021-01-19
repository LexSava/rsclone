export function arrowPlayAudio() {
    let sound = new Audio();
    sound.src = 'audio/arrow.mp3';

    return sound.play();
}

export function swordPlayAudio() {
    let sound = new Audio();
    sound.src = 'audio/sword.mp3';

    return sound.play();
}