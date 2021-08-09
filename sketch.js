
var bullet, wall, speed, weight, thickness;


function setup() {


  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);


  speed = random(223,321);

  weight = random(30,52);

  wall = createSprite(1500,200,60,height/2);
    wall.shapeColor = color(80,80,80);

  bullet = createSprite(50,200,60,20);
    bullet.velocityX = speed;
    bullet.shapeColor = color(230,230,230);

  thickness = random(22,83);
}

function draw() {
  background(0,0,0);
 
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * Math.pow(speed, 2 / Math.pow(thickness, 3))
    
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
  console.log(damage)
  drawSprites();
}


function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x
  
  if(bulletRightEdge >= wallLeftEdge){
    return true
  } else{
    return false
  }

  
}