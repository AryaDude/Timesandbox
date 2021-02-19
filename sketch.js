const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState;

var engine, world;
var box1, box2;
var pig, log, bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,300,50,50);
    box3 = new Box(650,300,50,50);
    box2 = new Box(440,100,50,100);
    ground = new Ground(600,height,1200,20)
    pig = new Pig(400, 250);
    pig2 = new Pig(700, 200);
    log = new Log(550,150,70, PI/2);
    log1 = new Log(600,150,70, PI/2);
    bird = new Bird(525,50);
    chain = new Chain(box2.body,{x:200, y:50});
    bruhtime()
}

function draw(){
    if(gameState === "day"){
        background(255)
    }
    else{
        background(0)
    }

    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    bird.display();
    chain.display();
    log1.display();
    box3.display();
    pig2.display();
    
}


async function bruhtime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York")
    var responseJson = await response.json();
    
    console.log(responseJson)
    var jt = responseJson.datetime
    var jte = jt.slice(11,13)
    console.log(jt)
    console.log(jte)

    if(jte >= 8 && jte <= 19){
        gameState = "day"
    }
    else{
        gameState = "night"
    }

}


function background1(){
    if(gameState === "day"){
        background("white")
    }
}