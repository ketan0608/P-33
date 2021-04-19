const World = Matter.World;
const Bodies = Matter. Bodies;
const Engine = Matter.Engine;

var backgroundIMG,humanImage,human;
var snow1 = [];
var maxsnow = 100;
function preload(){
  backgroundIMG = loadImage("BG.jpg");
  humanImage = loadImage("Human-figure0.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  human = createSprite(500, 200,10,10);
  human.addImage(humanImage);
  human.scale = 0.5;
  if(frameCount%60===0){
    for(var p = 0;p < maxsnow;p++){
    snow1.push(new snow(random(0,800),random(0,400)))
  } 
}
Engine.run(engine);
}

function draw() {
  background(backgroundIMG);  
  
  for(var p = 0;p < maxsnow;p++){
     snow1[p].display();
     snow1[p].updateY();
   }
  drawSprites();
}