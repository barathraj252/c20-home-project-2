var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 50, 50);
  
  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  
}
 

function draw() {
  background(0,0,0);
  car.velocityX = speed;
 deformation();
  

  drawSprites();
}

function deformation(){
  if(wall.x-car.x < car.width/2+wall.width/2  ){
    var deformation= 0.5*weight*weight*speed*speed/22059;
    if(deformation>180 ){
      car.shapeColor=color(255,0,0);
      wall.shapeColor=color("blue")
    }
    if(deformation<180 && deformation>100){
      
      car.shapeColor=color("yellow");
    }
    if(deformation<100 ){
      car.shapeColor=color("green");
    }
    
    car. velocityX=0;
  }  
 
}