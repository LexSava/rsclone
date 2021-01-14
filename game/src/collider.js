export class Collider {
  constructor() {
    this.staticShapes = [];
    this.bodies = [];
  }

  addStaticShapes(data) {
    data.layers.forEach((layer) => {
      if (layer.type == 'objectgroup') {
        this.staticShapes.push(...layer.objects);
      }
    });
    // Добавим ограничение по краям карты. За карту нельзя выйти
    this.staticShapes.push({
      x: 0, y: 0, width: 1300, height: 1,
    });
    this.staticShapes.push({
      x: 0, y: 0, width: 1, height: 1300,
    });
    // this.staticShapes.push({x:1280,y:0,width:1,height:1300});
    this.staticShapes.push({
      x: 1280, y: 0, width: 1300, height: 1,
    });
  }

  addKinematicBody(body) {
    this.bodies.push({
      x: body.x,
      y: body.y,
      obj: body,
    });
  }

  update(time) {
    this.checkStatic(time);
  }

  checkStatic(time) {
    this.bodies.forEach((body) => {
      const oldX = body.x;
      const oldY = body.y;
      let { x } = body.obj;
      let { y } = body.obj;
      // moving right
      if (x > oldX) {
        this.staticShapes.forEach((shape) => {
          if (
            ((oldX - 1 + body.obj.collisionShape.x + body.obj.collisionShape.width) < shape.x)
                        && ((x + body.obj.collisionShape.x + body.obj.collisionShape.width) > shape.x)
                        && ((y + body.obj.collisionShape.y) < (shape.y + shape.height))
                        && ((y + body.obj.collisionShape.y + body.obj.collisionShape.height) > shape.y)
          ) {
            x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.x)
                            - body.obj.collisionShape.x - body.obj.collisionShape.width;
          }
        });
      }

      // moving left
      if (x < oldX) {
        this.staticShapes.forEach((shape) => {
          if (
            ((oldX + 1 + body.obj.collisionShape.x) > (shape.x + shape.width))
                        && ((x + body.obj.collisionShape.x) < (shape.x + shape.width))
                        && ((y + body.obj.collisionShape.y) < (shape.y + shape.height))
                        && ((y + body.obj.collisionShape.y + body.obj.collisionShape.height) > shape.y)
          ) {
            x = Math.max(x + body.obj.collisionShape.x, shape.x + shape.width)
                            - body.obj.collisionShape.x;
          }
        });
      }

      // moving down
      if (y > oldY) {
        this.staticShapes.forEach((shape) => {
          if (
            ((oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height) < shape.y)
                        && ((y + body.obj.collisionShape.y + body.obj.collisionShape.height) > shape.y)
                        && ((x + body.obj.collisionShape.x) < (shape.x + shape.width))
                        && ((x + body.obj.collisionShape.x + body.obj.collisionShape.width) > shape.x)
          ) {
            y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, shape.y) - body.obj.collisionShape.y - body.obj.collisionShape.height;
          }
        });
      }

      // moving up
      if (y < oldY) {
        this.staticShapes.forEach((shape) => {
          if (
            ((oldY + 1 + body.obj.collisionShape.y) > (shape.y + shape.height))
                        && ((y + body.obj.collisionShape.y) < (shape.y + shape.height))
                        && ((x + body.obj.collisionShape.x) < (shape.x + shape.width))
                        && ((x + body.obj.collisionShape.x + body.obj.collisionShape.width) > shape.x)
          ) {
            y = Math.max(y + body.obj.collisionShape.y, shape.y + shape.height) - body.obj.collisionShape.y;
          }
        });
      }

      body.x = x;
      body.y = y;
      body.obj.x = x;
      body.obj.y = y;
    });
  }
}
