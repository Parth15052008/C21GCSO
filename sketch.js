var car,wall;
var speed,weight;

function setup() {
  speed=random(55,90);
  weight=random(400.1500);
  createCanvas(800,400,car);
  createSprite(400, 200, 50, 50);
  car=createSprite(50,200,50,10);
  car.velocity.X=speed;
  wall = createSprite(1500,200,10,25);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}