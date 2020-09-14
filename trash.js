class box{
    constructor(x,y,width,height){
        var boxoptions = {
            isStatic: false,
            restitution: 0.8,
            friction: 0.3,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height, boxoptions);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("green");
        fill("white");
        rect(0, 0, this.width, this.height)
        pop();
    }
}