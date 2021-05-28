class Baseclass {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8,
            friction: 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");



    }
    display() {
        push()
        var angle = this.body.angle;

        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER);


        image(this.image, 0, 0, this.width, this.height)
        pop()
    }
}