const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground,bgImg,bg;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29;
var ball;
var rope;
var heroImg,monster;


function preload() {
//preload the images here
bgImg=loadImage("images/GamingBackground.png")
heroImg=loadImage("images/Superhero-01.png")
}


function setup(){
  var canvas=createCanvas(1500,800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(450,600,900,10)

  box1=new Box(500,100,50,50)
  box2=new Box(500,100,50,50)
  box3=new Box(500,100,50,50)
  box4=new Box(500,100,50,50)
  box5=new Box(500,100,50,50)
  box6=new Box(500,100,50,50)
  box7=new Box(500,100,50,50)
  box8=new Box(600,100,50,50)
  box9=new Box(600,100,50,50)
  box10=new Box(600,100,50,50)
  box11=new Box(600,100,50,50)
  box12=new Box(600,100,50,50)
  box13=new Box(700,100,50,50)
  box14=new Box(700,100,50,50)
  box15=new Box(700,100,50,50)
  box16=new Box(700,100,50,50)
  box17=new Box(700,100,50,50)
  box18=new Box(700,100,50,50)
  box19=new Box(700,100,50,50)
  box20=new Box(700,100,50,50)
  box21=new Box(700,100,50,50)
  box22=new Box(800,100,50,50)
  box23=new Box(800,100,50,50)
  box24=new Box(800,100,50,50)
  box25=new Box(800,100,50,50)
  box26=new Box(800,100,50,50)
  box27=new Box(800,100,50,50)
  box28=new Box(800,100,50,50)
  box29=new Box(800,100,50,50)

  ball=new Ball(10,10,50)
  
  rope=new Rope(ball.body,{x:100,y:100})

  monster=new Monster(850,500,10,10)
}


function draw() {
  background(bgImg);
  Engine.update(engine)

  ball.display();

  ground.display();

  rope.display();

  monster.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
}


function keyDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}