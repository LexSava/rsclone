export let allDeathOrks = 0;
export let showQuestInterface = false;

export function updateQuest() {
  allDeathOrks = 0;
  showQuestInterface = false;
}

export function getQuest() {
  showQuestInterface = true;
}

export function deathOrcs() {
  if (showQuestInterface) {
    allDeathOrks++;
  }
}
