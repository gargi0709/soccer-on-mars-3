var astronaut1Img, astronaut2Img,astronaut1,astronaut2;
var goal1, goal2,goal1Img,goal2Img;
var bg, bgImg;
var ball,ballImg, marsImg

function preload(){
  bgImg = loadImage("images/mars.png")
  astronaut1Img = loadImage("images/astronaut 1.png")
  astronaut2Img = loadImage("images/astronaut 2.png")
  goal1Img = loadImage("images/goal 1.png")
  goal2Img = loadImage("images/goal 2.png")
  ballImg = loadImage("images/ballimg.png")
  marsImg = loadImage("images/mars.png")
}

function setup(){
  createCanvas (2000,700)
  astronaut1 = createSprite(1300,500,30,30)
 astronaut1.addImage(astronaut1Img)
  astronaut1.scale = 0.75

  astronaut2 = createSprite(380,500,30,30)
  astronaut2.addImage(astronaut2Img)
  astronaut2.scale = 0.75

  goal1 = createSprite(100,600,120,120)
  goal1.addImage(goal1Img)
  goal1.scale = 2.5
  
  goal2 = createSprite(1600,600,120,120)
  goal2.addImage(goal2Img)
  goal2.scale = 2.5

  ball = createSprite(1000,650,30,30)
  ball.addImage(ballImg)
  ball.scale = 0.5
}

function draw(){
background(marsImg)










 drawSprites()
}