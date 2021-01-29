//namespacing or alias
const Engine = Matter.Engine; //Universe
const World = Matter.World; //World/Earth
const Bodies = Matter.Bodies; //living or non living objects that live inside the world and follow laws of physics

var engine, world;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);

    //create your own engine/universe
    engine = Engine.create();

    //create your own world
    world = engine.world;

    //create a box object using Box class
   box1 = new Box(200,300,50,50);
   box2 = new Box(240,100,50,100);

    //create ground
   ground = new Ground(200,390,400,20);
    //create a ball
    var ball_options = {
        restitution: 1.0
    }
    ball = Bodies.circle(100,100,20,ball_options);
    World.add(world,ball);
   

}

function draw(){
    background(0);
    Engine.update(engine);

    //the object box is calling the function display from the Class Box.js
    box1.display();
    box2.display();
  
   ground.display(); 

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}
