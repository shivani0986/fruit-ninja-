var PLAY = 1;
var END = 0;
var gameState = PLAY;

var sword;
var swordImage;
var fruit1;
var fruit2;
var fruit3;
var fruit4;
var alien1;

var fruit1Image;
var fruit2Image;
var fruit3Image;
var fruit4Image;
var alien1Image;

var fruitGroup, fruit1, fruit2, fruit3, fruit4; 
var enemyGroup;

var score;

var gameover;
var gameOverImage;







function preload(){
  swordImage=loadImage("sword.png");
  fruit1Image=loadImage("fruit1.png");
  fruit2Image=loadImage("fruit2.png");
  fruit3Image=loadImage("fruit3.png");
  fruit4Image=loadImage("fruit4.png");
  alien1Image=loadImage("alien1.png");
  gameoverImage=loadImage("gameover.png");


}
function setup() {
  createCanvas(600,600);


  sword=createSprite(300,300,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;

  

  gameover = createSprite(300,300);
  gameover.scale=1; 
  gameover.addImage(gameoverImage);
  gameover.visible=false;

  //create Obstacle and fruits Groups
  fruitGroup = createGroup();
  enemyGroup = createGroup();

 

  score = 0;

}

function draw(){
background("lightblue");
 background.velocityX = -3   
//displaying score
  text("Score: "+ score, 290,17);

  

  

 if(gameState === PLAY){
    


   sword.y = World.mouseY
   sword.x = World.mouseX 


   if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
     score=score+2;
    
   } 

   

    if(enemyGroup.isTouching(sword)){
      enemyGroup.destroyEach();
      gameState = END;
      
     } 

    

   alien1();
   fruits();


 }
  else if (gameState === END) {
    
    
    

    gameover.visible=true;
    
   }

    

  


  drawSprites();
}


function fruits(){
 if (World.frameCount % 80 === 0){
   fruit= createSprite(400,200,20,20);
   fruit.scale=0.2;
   //fruits.debug=true;
   rand = Math.round(random(1,4));
   if (rand == 1){
     fruit.addImage(fruit1Image);
   }else if (rand == 2) {
     fruit.addImage(fruit2Image);
   }else if (rand == 3) {
      fruit.addImage(fruit3Image);
   }else if (rand == 4) {
      fruit.addImage(fruit4Image);
   }

   fruit.y=Math.round(random(50,350));

   fruit.velocityX=-7;
   fruit.setLifetime=100;

   fruitGroup.add(fruit);

  } 
}

function alien1(){
if(World.frameCount%200===0)  {
  alien=createSprite(400,350,30,30);
  alien.addImage(alien1Image);
  alien.scale=0.8;
  alien.y=Math.round(random(100,300));
  alien.velocityX=-6;
  alien.SetLifetime=50;
  enemyGroup.add(alien);

}

}

