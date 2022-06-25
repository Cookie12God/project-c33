const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var snow3 , snow4
var engine , world
var snow = [];
var maxSnow = 200


function preload(){

snow3 = loadImage("snow3.jpg")
  
}



function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  if(frameCount % 150 === 0) {
  for(var i = 0; i < maxSnow; i++ ){
    snow.push(new Snow(random(0,700), random(0,10)))
  }
  }

}


function draw() {
  background(snow3); 
  Engine.update(engine) 
  
  for(var i = 0; i < maxSnow ; i++){
    snow[i].display();
    snow[i].updateY();
  }
}