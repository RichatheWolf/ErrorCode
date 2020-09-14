class ball {
    constructor(x, y, r) {
        var balloptions = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x, this.y, this.r/2, balloptions);
        //var body2 = Bodies.ellipse(x, y, 50, 50);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("green");
        fill("red");
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}