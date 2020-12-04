
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box1=new Box(400,200,600,20);
ball1=new Ball(200,500,30,30);
ball2=new Ball(100,500,30,30);
ball3=new Ball(300,500,30,30);
ball4=new Ball(400,500,30,30);
ball5=new Ball(500,500,30,30);
chain2=new Chain(ball2.body,{x:100,y:210});
chain1=new Chain(ball1.body,{x:200,y:210});
chain3=new Chain(ball3.body,{x:300,y:210});
chain4=new Chain(ball4.body,{x:400,y:210});
chain5=new Chain(ball5.body,{x:500,y:210});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  box1.display();
  ball1.display();
  chain1.display();
  ball2.display();
  chain2.display();
  ball3.display();
  chain3.display();
  ball4.display();
  chain4.display();
  ball5.display();
  chain5.display();

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(ball2.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
  Matter.Body.applyForce(ball2.body,ball2.body.position,{x:85,y:-85})
}



