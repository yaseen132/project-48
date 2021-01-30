var spaceShip;
var bg;
var asteroid;
var asteroidImage;
var asteroidsGroup;
var levelwall

//var gameState="play"
var score=0;
var invisibleWall;
//sajnazy@gmail.com
function preload(){
spaceshipImage=loadImage("images/hero.png")
bg=loadImage("images/bg.jpg");
asteroidImage=loadImage("images/asteroid.png")
asteroid2Image=loadImage("images/hero2.png")
bg2=loadImage("images/bg2.jpg");
spaceship2Image=loadImage("images/warrior2.png")
}
function setup(){
createCanvas(1000,300);

spaceShip=createSprite(50,200,20,20);
spaceShip.addImage(spaceshipImage)
spaceShip.scale=0.3
spaceShip.debug=false

invisibleWall=createSprite(20,250,20,500)
invisibleWall.visible=false

asteroidsGroup=createGroup()

}
function draw(){
background(bg)

//if(gameState==="play"){

if(frameCount<4000){
level1()
}
else{
  level2()
}

















drawSprites();
textSize(20)
text("SCORE:"+score,400,30)
}
function goup(){
spaceShip.velocityY=spaceShip.velocityY-3

}







function level1(){
if(keyDown(UP_ARROW)){
  spaceShip.velocityY=-4
}
spaceShip.velocityY=spaceShip.velocityY+0.5

 if(asteroidsGroup.isTouching(spaceShip)){
 spaceShip.velocityY=0;
}
if(asteroidsGroup.isTouching(invisibleWall)){
  score=score+1;
}
if(score===50){
asteroid.velocityY=-(3+score/50)
}
if(frameCount%4000===0){
var levelwall=createSprite(950,150,5,300)
levelwall.velocityX=-3
//console.log("hi")
}
//if(spaceShip.isTouching(levelwall)){

//}
//}















if(frameCount%60===0){




    var asteroid=createSprite(1000,200,20,20)
    asteroid.addImage(asteroidImage) 
    asteroid.scale=0.3
    asteroid.velocityX=-3
    asteroid.debug=true
    asteroid.lifetime=309
    asteroid.y=Math.round(random(40,250))
    asteroid.y=Math.round(random(150,300))
    asteroidsGroup.add(asteroid)
    
    asteroid.setCollider("circle",0,0,160)
    
    
   

}
}














function level2(){
  if(keyDown(UP_ARROW)){
    spaceShip.velocityY=-4
  }
  //spaceShip.velocityY=spaceShip.velocityY+0.5
  
   if(asteroidsGroup.isTouching(spaceShip)){
   spaceShip.velocityY=0;
  }
  if(asteroidsGroup.isTouching(invisibleWall)){
    score=score+1;
  }
  if(score===50){
  asteroid.velocityY=-(3+score/50)
  }
  if(frameCount%4000===0){
  var levelwall=createSprite(950,150,5,300)
  levelwall.velocityX=-3
  //console.log("hi")
  }
  //if(spaceShip.isTouching(levelwall)){
  

}















