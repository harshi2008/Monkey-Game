var monkey , monkey_running
var bananaImage, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground, groundImage, invisibleground
var survivaltime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  groundImage = loadImage("Ground.PNG")
}



function setup() {
  monkey = createSprite(60, 300, 40, 40);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  
  ground = createSprite(200,350,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
   
  invisibleground = createSprite(200, 350, 400, 20);
  invisibleground.visible = false;
}


function draw() {
background("lightgreen");
  ground.velocityX = -4;
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.6; 
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
    
  monkey.collide(invisibleground);
  
  spawnBananas();
  spawnObstacles();
  
  stroke("white");
  textSize(20);
  fill("black");
  text("Score:"+score, 250, 50);
  
  stroke("black");
  textSize(20);
  fill("red");
  survivaltime=Math.ceil(frameCount/frameRate());
  text("Survivaltime:"+survivaltime, 100, 50);
  
  drawSprites();
  
}

function spawnBananas(){
  if(frameCount%70===0){
    var banana = createSprite(200, 230, 40, 40);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,220));
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 50; 
    
    //bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount%300===0){
    var obstacle = createSprite(200, 305, 40, 40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.2;
    obstacle.lifetime = 50; 
    //obstacleGroup.add(obstacle);
  }
}


