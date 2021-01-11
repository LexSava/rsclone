import { Screen } from './screen';

export class Game {

  constructor() {
    this.screen = new Screen(480, 480);
  }

  time() {
    requestAnimationFrame(time => this.frame(time));
  }

  run() {
    requestAnimationFrame(time => this.frame(time));
  }
}
