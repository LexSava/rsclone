import { getQuest, updateQuest } from './get-quest';

const BODY = document.createElement('body');
const TAKE_QUEST = document.getElementById("take_quest");
const ADANDON_THE_QUEST = document.getElementById("abandon_the_quest");
export let runOnceQuest = false;

TAKE_QUEST.onclick = function () {
    console.log('You take quest!');
    $('#staticBackdrop').modal('hide');
    runOnceQuest = true;
    getQuest();
};
ADANDON_THE_QUEST.onclick = function () {
    console.log('Abandon the quest!');
   
    $('#staticBackdrop').modal('hide');
    
    runOnceQuest = false;
    // updateQuest();
};

export function showModalDialog() {
    $('#staticBackdrop').modal('show');
    // $('#staticBackdrop').modal('handleUpdate');
}

