import { getQuest } from './get-quest';

const TAKE_QUEST = document.getElementById('take_quest');
const ADANDON_THE_QUEST = document.getElementById('abandon_the_quest');
export let runOnceQuest = false;

TAKE_QUEST.onclick = () => {
  console.log('You take quest!');
  $('#staticBackdrop').modal('hide');
  runOnceQuest = true;
  getQuest();
};
ADANDON_THE_QUEST.onclick = () => {
  console.log('Abandon the quest!');
  $('#staticBackdrop').modal('hide');
  runOnceQuest = false;
};

export function showModalDialog() {
  $('#staticBackdrop').modal('show');
}

export function updateModalDialog() {
  $('#staticBackdrop').modal('handleUpdate');
}
