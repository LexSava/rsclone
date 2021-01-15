import { Scene } from '../scene';
import { SpriteSheet } from '../sprite-sheet';
import { CharacterSheet } from '../character-sheet';
import { Player } from '../player';
import { Camera } from '../camera';
import { Collider } from '../collider';
import { Orc } from '../orc';
import { Elf } from '../elf';
import { Arrow } from '../projectiles/arrow';
import { RemoveFromArray } from '../remove-from-array'
import { isAgressive } from '../ais/isAgressive';
export class GameLevel extends Scene {
  constructor(game) {
    super(game);
    this.tiles = new SpriteSheet({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640,
    });
    // this.tree = this.tiles.getSprite(7);
    // this.tree.setXY(10, 10);
    // this.orcTiles = new CharacterSheet({imageName: "orc"});
    this.orc = new Orc();
    this.orc.x = 500;
    this.orc.y = 300;

    this.elf = new Elf();
    this.elf.x = 310;
    this.elf.y = 110;

    //this.arrow = new Arrow('down', 200);
    // this.player = new Player(this.game.control);
    // this.player.x = 100;
    // this.player.y = 100;
    //this.player.addArrow(this.arrow);
    // this.collider = new Collider();
  }

  init() {
    super.init();
    isAgressive.becomePeaceful();
    this.player = new Player(this.game.control, this);
    this.player.x = 100;
    this.player.y = 100;

    this.collider = new Collider();

    const mapData = require('../maps/level1.json');
    this.map = this.game.screen.createMap('level1', mapData, this.tiles);

    this.mainCamera = new Camera({
      width: this.game.screen.width,
      height: this.game.screen.height,
      limitX: this.map.width - this.game.screen.width,
      limitY: this.map.height - this.game.screen.height,
    });
    this.mainCamera.specialPosition();
    this.mainCamera.watch(this.player);
    this.game.screen.setCamera(this.mainCamera);

    this.collider.addStaticShapes(mapData);
    this.collider.addKinematicBody(this.player);
    this.collider.addKinematicBody(this.orc);
    this.collider.addKinematicBody(this.elf);


    this.projectiles = [];
  }

  update(time) {
    this.orc.update(time);
    this.elf.update(time);
    this.player.update(time);
    this.collider.update(time);
    this.mainCamera.update(time);
    //this.arrow.update(time);

    if (this.projectiles.length > 0) {
      this.projectiles.forEach((arrow, index) => {
        if (arrow.active) {//active становится true в методе Player -> Body.shoot()
          arrow.update(time);
        }
        if (arrow.deleted) {
          this.projectiles = RemoveFromArray.remove(this.projectiles, index);
        }
      });
    }
  }

  render(time) {
    this.update(time);
    this.game.screen.fill('#000000');
    this.game.screen.drawSprite(this.map);
    // this.game.screen.drawSprite(this.tree);
    this.game.screen.drawSprite(this.orc.view);
    this.game.screen.drawSprite(this.elf.view);
    this.game.screen.drawSprite(this.player.view);
    // if (this.arrow.active) {
    //   this.game.screen.drawSprite(this.arrow.view);
    // }

    if (this.projectiles.length > 0) {//Отрисовка стрел
      this.projectiles.forEach(arrow => {
        if (arrow.active) {//active становится true в методе Player -> Body.shoot()
          this.game.screen.drawSprite(arrow.view);
        }
      });
    }
    super.render(time);
  }
  shooting() {//Стрельба игрока
    let arrow = new Arrow('down', 400, this.player.x, this.player.y);
    this.player.addArrow(arrow);
    this.projectiles.push(arrow);//Все объекты из этого массива будут отрисованы в методе render
    this.collider.addKinematicBody(arrow);
  }
}
