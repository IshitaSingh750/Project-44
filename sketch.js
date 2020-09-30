var flybot, flybotIMG;

var alien, alienIMG;
var alien2, alien2IMG;
var alien3, alien3IMG;
var alien4, alien4IMG;
var alien5, alien5IMG;

var bullets;

var score = 0;


function preload()
{
	flybotIMG = loadImage("helicopter.png");
	alienIMG = loadImage("alien.png");
	alien2IMG = loadImage("alien2.png");
	alien3IMG = loadImage("alien3.png");
	alien4IMG = loadImage("alien4.png");
	alien5IMG = loadImage("alien5.png");
}

function setup() {
	createCanvas(displayWidth, displayHeight);

	flybot = createSprite(800,700,40,40);
	flybot.addImage(flybotIMG);
	flybot.scale = 2;

	bullets = createSprite(0.0,5,10);
    bullets.shapeColor = "black";

	alien = createSprite(displayWidth/2,-40,-20,20);
	alien.shapeColor = "yellow";
	alien.addImage(alienIMG);
	alien.scale = 0.1;

	alien2 = createSprite(displayWidth/3.5,-40,20,20);
	alien2.shapeColor = "yellow";
	alien2.addImage(alien2IMG);
	alien2.scale = 0.6;

	alien3 = createSprite(displayWidth*0.7,-40,20,20);
	alien3.shapeColor = "yellow";
	alien3.addImage(alien3IMG);
	alien3.scale = 0.6;

	alien4 = createSprite(displayWidth/8,-40,20,20);
	alien4.shapeColor = "yellow";
	alien4.addImage(alien4IMG);
	alien4.scale = 0.6;

	alien5 = createSprite(displayWidth*0.85,-40,20,20);
	alien5.shapeColor = "yellow";
	alien5.addImage(alien5IMG);
	alien5.scale = 0.6;
}


function draw() {
  
  background("black");


if(keyWentDown(RIGHT_ARROW)){
	flybot.velocityX = 12;
	flybot.velocityY = 0;
}

if(keyWentDown(LEFT_ARROW)){
	flybot.velocityX = -12;
	flybot.velocityY = 0;
}

if(keyWentDown("space")){
	spawnBullets();
}



if(frameCount === 100){
	alien.velocityY = random(2,5);
}

if(frameCount === 200){
	alien2.velocityY = random(3,6);
}

if(frameCount === 300){
	alien3.velocityY = random(1,4);
}

if(frameCount === 400){
	alien4.velocityY = random(4,7);
}

if(frameCount === 500){
	alien5.velocityY = random(5,8);
}




if(alien.isTouching(flybot)){
	alien.y = 0;
	score = score-10;
}

if(alien2.isTouching(flybot)){
	alien2.y = 0;
	score = score-10;
}

if(alien3.isTouching(flybot)){
	alien3.y = 0;
	score = score-10;
}

if(alien4.isTouching(flybot)){
	alien4.y = 0;
	score = score-10;
}

if(alien4.isTouching(flybot)){
	alien4.y = 0;
	score = score-10;
}

if(alien5.isTouching(flybot)){
	alien5.y = 0;
	score = score-10;
}



if(bullets.isTouching(alien)){
	alien.y = 0;
	score = score+10;
}

if(bullets.isTouching(alien2)){
	alien2.y = 0;
	score = score+10;
}

if(bullets.isTouching(alien3)){
	alien3.y = 0;
	score = score+10;
}

if(bullets.isTouching(alien4)){
	alien4.y = 0;
	score = score+10;
}

if(bullets.isTouching(alien5)){
	alien5.y = 0;
	score = score+10;
}




if(alien.y>=displayHeight){
	alien.y = 0;
	score = score-10;
}

if(alien2.y>=displayHeight){
	alien2.y = 0;
	score = score-10;
}

if(alien3.y>=displayHeight){
	alien3.y = 0;
	score = score-10;
}

if(alien4.y>=displayHeight){
	alien4.y = 0;
	score = score-10;
}

if(alien5.y>=displayHeight){
	alien5.y = 0;
	score = score-10;
}

if(score >= 10000){
	fill("blue");
    textSize(60);
	text("YOU WON!!",670,300);
}

if(score <= 1){
	fill("blue");
    textSize(60); 
	text("YOU LOST",670,300);
}


fill("red");
textSize(20);
text("Score : "+score, 200,100);



  drawSprites();
 
}

function spawnBullets(){

    bullets = createSprite(200.200,5,10);
    bullets.shapeColor = "yellow";

    bullets.scale = 0.5;
    bullets.velocityY = -30;
	bullets.x = flybot.x;
	bullets.y = flybot.y;
    bullets.depth = flybot.depth;
    flybot.depth = flybot.depth+1; 
}


