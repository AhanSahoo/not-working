var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  bullet= createSprite(50, 200, 25, 30);
  bullet.shapeColor="red";
  wall= createSprite(1200, 200,thickness,height/2);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
 else if(damage<10){
    wall.shapeColor=colour(0,255,0);
  }
}
  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{
bulletRightEdge=Lbullet.x+Lbullet.width;
wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
  return false;
}