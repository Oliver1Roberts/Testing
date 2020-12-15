const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint
var engine,world;
var menu;
var retroFont

function preload() { 
  retroFont = loadFont("Fonts/Retro8Bit-6AjD.ttf"); 
} 
  
function setup(){
  createCanvas(windowWidth, windowHeight);
  engine=Engine.create();
  world=engine.world;
  menu=new Menu();
}

function draw(){
  background("black");
  Engine.update(engine);
  menu.setUp();
}