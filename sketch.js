const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const  constraint =Matter.constraint;
var engine,world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_img;


function setup() { 
  engine  = Engine.create();
  world  = egone.world;

  createCanvas(800,400);
  ground = new Ground();
  stand1 = new stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);


  block1 = new block(280,275,30,40);
  block2 = new block(310,275,30,40);
  block3 = new block(340,275,30,40);
  block4 = new block(370,275,30,40);
  block5 = new block(400,275,30,40);
  block7 = new block(430,275,30,40);
  block8 = new block(460,275,30,40);
  block1 = new block(490,275,30,40);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}