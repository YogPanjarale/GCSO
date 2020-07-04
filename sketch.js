var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(5, 90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = rgb(80,80,80);
  car.velocityX= speed

}

function draw() {
  background(2);
  if(car.x>width){
    car.velocityX =0;
  }
  if(wall.x-car.x < (wall.width +car.width)/2){4
    if(wall.x-car.x < (wall.width +car.width)/2){
      car.x= wall.x -((wall.width +car.width)/2);
    }
   
    car.velocityX =0;
     var deformation = (0.5*weight*speed*speed)/22500;
     if(deformation > 180){
       car.shapeColor = rgb(255,0,0);
     }
    if(deformation < 180&& deformation>100){
      car.shapeColor = rgb(230,230,0);
    }
    if(deformation < 100){
      car.shapeColor = rgb(0,230,0);
    }
    console.log(deformation)
  }
  drawSprites();
}