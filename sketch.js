var fixedRectangle,movingRectangle;
var gameObject1;
var gameObject2;
var gameObject3;
var gameObject4;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixedRectangle=createSprite(600,400,50,80);
  movingRectangle=createSprite(400,200,80,20);
  fixedRectangle.shapeColor="red";
  movingRectangle.shapeColor="green";
  gameObject1=createSprite(100,100,50,50);
  gameObject2=createSprite(200,100,50,50);
  gameObject3=createSprite(300,100,50,50);
  gameObject4=createSprite(400,100,50,50);
}

function draw() {
  background(255,255,255);
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;
  if (collide(movingRectangle,gameObject2)){
  gameObject2.shapeColor="purple";
  movingRectangle.shapeColor="purple";

  }
  else{
    gameObject2.shapeColor="yellow";
    movingRectangle.shapeColor="yellow";
  
  }
  drawSprites();
}

function collide(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object1.width/2+object2.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2){
     return true;
    }
    else{
      return false; 
    }
}