import { Scene } from '../scene';
import { SpriteSheet } from '../sprite-sheet';
import { Player } from '../player';
import { Camera } from '../camera';
import { Collider } from '../collider';
import { Arrow } from '../projectiles/arrow';
import { Waves } from '../waves';
import { Interface } from '../interface';
import { RemoveFromArray } from '../remove-from-array';
import { isAgressive } from '../ais/isAgressive';
import { arrowPlayAudio, gamePlayAudio } from '../audio-playback/audios';

export class GameLevel extends Scene {
  constructor(game) {
    super(game);
    this.tiles = new SpriteSheet({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640,
    });
  }

  init() {
    super.init();
    isAgressive.becomePeaceful();// Сделать орков мирными
    gamePlayAudio();
    this.player = new Player(this.game.control, this);
    // this.player.x = 120;
    // this.player.y = 20;
    this.player.x = 990;
    this.player.y = 1040;

    this.collider = new Collider();// Учитывает взаимодействие между объектами, например, не даёт проходить объектам сквозь друг друга

    // Используем webpack поэтому загрузчик json файлов работает по умолчанию
    const mapData = require('../maps/level1.json');
    this.map = this.game.screen.createMap('level1', mapData, this.tiles);// createMap возвращает объект TileMap
    this.mainCamera = new Camera({
      width: this.game.screen.width,
      height: this.game.screen.height,
      limitX: this.map.width - this.game.screen.width,
      limitY: this.map.height - this.game.screen.height,
    });
    this.mainCamera.specialPosition();// Загнать камеру в самый угол
    this.mainCamera.watch(this.player);
    this.game.screen.setCamera(this.mainCamera);

    this.collider.addStaticShapes(mapData);
    this.collider.addKinematicBody(this.player);

    this.orcArmy = [];// Массив орков, новые стрелы будут добавляться сюда, а метод render будет отрисовывать все объекты из этого массива
    this.waves = new Waves(this.game);// Контролирует появление противников
    this.waves.init();

    this.interface = new Interface(this.game, this.waves);// Шкала здоровья, таймер в углу экрана
    this.projectiles = [];// Массив стрел, новые стрелы будут добавляться сюда, а метод render будет отрисовывать все объекты из этого массива
    this.gameOverTrigger = false;// Если interface сделает эту переменную true, переходим к проигрышной сцене
    this.winTrigger = false;// Если interface сделает эту переменную true, переходим к победной сцене
  }

  update(time) {
    if (this.gameOverTrigger) { // Закончим игру
      this.finish(Scene.GAME_OVER);
    }

    // if (this.winTrigger) {//Закончим игру
    //   this.finish(Scene.GAME_WIN);
    // }

    this.player.update(time);

    if (this.projectiles.length > 0) {
      this.projectiles.forEach((arrow, index) => {
        if (arrow.active) { // active становится true в методе Player -> Body.shoot()
          arrow.update(time);
        }
        if (arrow.deleted) {
          this.projectiles = RemoveFromArray.remove(this.projectiles, index);
        }
      });
    }

    if (this.orcArmy.length > 0) {
      this.orcArmy.forEach((orc) => {
        orc.update(time);
      });
    }

    this.collider.update(time);
    this.mainCamera.update(time);
  }

  render(time) {
    this.update(time);
    this.game.screen.fill('#000000');
    this.game.screen.drawSprite(this.map);

    if (this.orcArmy.length > 0) {
      this.orcArmy.forEach((orc) => {
        this.game.screen.drawSprite(orc.view);
      });
    }

    this.game.screen.drawSprite(this.player.view);

    if (this.projectiles.length > 0) { // Отрисовка стрел
      this.projectiles.forEach((arrow) => {
        if (arrow.active) { // active становится true в методе Player -> Body.shoot()
          this.game.screen.drawSprite(arrow.view);
        }
      });
    }

    this.waves.update(time);
    super.render(time);
    this.interface.update(time);
  }

  shooting() { // Стрельба игрока
    const arrow = new Arrow('down', 400, this.player.x, this.player.y);
    this.player.addArrow(arrow);
    this.projectiles.push(arrow);// Все объекты из этого массива будут отрисованы в методе render
    this.collider.addKinematicBody(arrow);
    setTimeout(() => arrowPlayAudio(), 500);

  }
}
