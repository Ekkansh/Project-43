var ground, player, playerPlatform, enemy;
var platformGroup;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = createSprite(100, height-100, 50, 50);
  
  playerPlatform = createSprite(100, height-50, 70, 25);

  platformGroup = new Group();


}

function draw() {
  background(0);
    

  move();
  respawn();

  createPlatform();
  player.collide(playerPlatform);
  player.collide(platformGroup);
  drawSprites();
}

function move(){
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+10;
  }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x-10;
  }
  if(keyDown(UP_ARROW)){
    player.velocityY = -10;
  }
  //adding gravity
  player.velocityY = player.velocityY+0.5;
}

function createPlatform(){
   if(frameCount%150===0){
    platform = createSprite(width, height-50, 150, 25)
    platform.velocityX = -5;
    platformGroup.add(platform);

    enemy = createSprite(width, height-100, 50, 50);
  }
}

function respawn(){
  if( player.x >windowWidth ||player.x < 0 || player.y > windowHeight || player.y < 0 ){
    player.x = 100;
    player.y = height-100;
  }
}
