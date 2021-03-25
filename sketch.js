
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var rod,ball1,sling1;

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
rod =new Ground(600,200,300,20);
ball1 =new Ball(600,400,20);
sling1=new Slingshot(ball1.body,{x:600,y:200});
ball2 =new Ball(560,400,20);
sling2=new Slingshot(ball2.body,{x:560,y:200});
ball3 =new Ball(520,400,20);
sling3=new Slingshot(ball3.body,{x:520,y:200});
ball4 =new Ball(640,400,20);
sling4=new Slingshot(ball4.body,{x:640,y:200});
ball5 =new Ball(680,400,20);
sling5=new Slingshot(ball5.body,{x:680,y:200});
}


function draw() {
 
  background(0);
  Engine.update(engine);
 
  fill("red");
  textSize(30);
  text("NEWTON'S CRADLE",350,70)
  textSize(25);
  fill("white");
  text("press up arrow to move the left ball up",20,130)
rod.display();
sling1.display();
ball1.display();
sling2.display();
ball2.display();
sling3.display();
ball3.display();
sling4.display();
ball4.display();
sling5.display();
ball5.display();
}

function keyPressed(){
if(keyCode==UP_ARROW){
Matter.Body.applyForce(ball3.body,ball3.body.position,{x:-85,y:-85});
}
}


