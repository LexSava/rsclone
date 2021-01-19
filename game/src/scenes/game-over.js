import { Scene } from '../scene';

export class GameOver extends Scene {
    constructor(game) {
        super(game);
    }

    init() {
        super.init();
    }

    update(time) {
        if (this.game.control.enter) {//При нажатии на "enter" начать новую игру
            this.finish(Scene.LOADED);
        }
    }

    render(time) {
        this.update(time);
        this.game.screen.fill('#000000');
        this.game.screen.print(50, 70, 'Game over!');
        super.render(time);
    }
}
