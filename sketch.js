//Matter.js---->World, Engine, Bodies
// World-->used to create the physical world and add objects to it
//Engine--> create a physics engine in our game
//Bodies--> Used to create physical bodies

//Namespacing in programming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1;
var box2
var box3
var box4, box5


var bird;
var engine, world;

var ground;
var pig1, pig2;
var log1, log2, log3, log4;
var backGroundimage,backupImage;
var platform;
var sling;
var gameState="onSling"
var score=0;
function preload() {
   // backGroundimage = loadImage("sprites/bg.png")
   getTime()
   backupImage=loadImage("sprites/bg.png")
}

function setup() {
    var canvas = createCanvas(1200, 400);

    engine = Engine.create();
    world = engine.world;
    platform = new Ground(150, 305, 300, 170);

    noStroke()
    textSize(35);
    fill("white");
    text("score"+score,1000,200);


    smalllog = new Log(230, 180, 80, PI / 2)

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    ground = new Ground(600, height, 1200, 20);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2)
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig2 = new Pig(810, 220)
    log2 = new Log(810, 180, 300, PI / 2)
    box5 = new Box(810, 160, 70, 70);
    log3 = new Log(760, 120, 150, PI / 7);
    log4 = new Log(870, 120, 150, -PI / 7);
    bird = new Bird(100, 100);
    sling= new  Slingshot(bird.body,{x:200,y:50});
    
    
}


function draw() {
    if(backGroundimage){
    background(backGroundimage);
    }
    else{
        background(backupImage);
    }
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();
    pig2.display();
    
    log2.display();
    box3.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    platform.display();
   // smalllog.display();
    sling.display();
}
function mouseDragged(){
   if(gameState!="launch"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
   }

}
function mouseReleased(){
    sling.fly();
    gameState="launch"
}
function keyPressed(){
    if(keyCode===32){
        sling.attach(bird.body);
        bird.trajectory=[]
        Matter.Body.setPosition(bird.body,{x:200,y:50}) 
        gameState="onSling"
    }
}

async function getTime(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log(response);
   var responseJson= await response.json();
    console.log(responseJson);
    var dateTime= responseJson.datetime;
    console.log(dateTime) 
    var hour=dateTime.slice(11,13);
    console.log(hour)
    if(hour>=06 && hour<18){
        bg="sprites/bg.png"
    }
    else{
        bg="sprites/bg2.jpg"
    }
    backGroundimage=loadImage(bg);
}

