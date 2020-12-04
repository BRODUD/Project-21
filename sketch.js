var bullet,wall,thickness;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed = random(233,331);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,10);
  bullet.velocityX = speed;
  bullet.shapeColor = ("white")
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background("black");  
  drawSprites();
  if (wall.x-bullet.x<wall.width/2+bullet.width/2){
  bullet.velocityX = 0;
    deformation = (.5*weight*speed*speed)/(thickness*thickness*thickness);
 if (deformation<10){
   wall.shapeColor = ("green");

 } 
 else if (deformation>10){
   wall.shapeColor = ("red");
  }

}

}

