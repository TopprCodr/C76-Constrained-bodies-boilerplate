const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;


var engine, world;


function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(0);
    Engine.update(engine);
 
}
