
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

function preload()
{ 
	 
}

function setup() {
	canvas = createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();

	let options ={
		mouse:canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options);	

	World.add(world,mConstraint);


	//Create the Bodies Here.
	
	pendulum1 = new Pendulum(300,200);
	rope1 = new Sling(pendulum1.body,{x:300,y:200});
	pendulum2 = new Pendulum(360,200);
	rope2 = new Sling(pendulum2.body,{x:360,y:200});
	pendulum3 = new Pendulum(420,200);
	rope3 = new Sling(pendulum3.body,{x:420,y:200});
	pendulum4 = new Pendulum(480,200);
	rope4 = new Sling(pendulum4.body,{x:480,y:200}); 
	pendulum5 = new Pendulum(540,200);
	rope5 = new Sling(pendulum5.body,{x:540,y:200}); 

	ground = new Ground(500,690,1200,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  drawSprites();
 
  pendulum1.display();
  rope1.display();
 
  pendulum2.display();
  rope2.display();
 
  pendulum3.display();
  rope3.display();
  
  pendulum4.display();
  rope4.display();

  pendulum5.display();
  rope5.display();
  
  ground.display();

  
}


