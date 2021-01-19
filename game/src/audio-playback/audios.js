export function arrowPlayAudio() {
    let sound = new Audio();
    sound.src = 'audio/arrow.mp3';
    return sound.play();
}

export function swordPlayAudio() {
    let sound = new Audio();
    sound.src = 'audio/sword.mp3';
    sound.volume = 0.2;
    return sound.play();
}

export function gamePlayAudio() {
    let sound = new Audio();
    sound.src = 'audio/game.mp3';
    sound.volume = 0.1;
    sound.loop = true;
    return sound.play();
}
export function deathOrcPlayAudio() {
    let sound = new Audio();
    sound.src = 'audio/death-orc.mp3';
    sound.volume = 0.1;
    return sound.play();
}