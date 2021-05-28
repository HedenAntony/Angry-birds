class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.ground = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        World.add(world, this.ground)
    }
    display() {
        fill("green")
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y, this.width, this.height);
    }

}