const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
//var box1, box2, box3, box4, box5, ground1, ball1, ball2;

function setup(){
    var canvas = createCanvas(1600,700);
    
    engine = Engine.create();
    world = engine.world;
    box1 = new box(700, 320, 70, 70);
    box2 = new box(920, 320, 70, 70);
    ground1 = new ground(width/2, 670, width, 20)
    ball1 = new ball(200, 350, 40);
}
Engine.run(engine);
function draw(){
    background(0);
    
    //Engine.update(engine);
    box1.display();
    box2.display();
    ball1.display();
    ground1.display();
}
function keyPressed(){
    if (keyCode == UP_ARROW){
        Matter.Body.applyForce(ball1.body, ball1.body.position, {x:85,y:-85});
    }
}