
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;
var paper1, ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(100,350,45);
    ground1 = new ground(550,680,1300,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.Display();
  ground1.display();

  wall1 = createSprite(720,660,300,5);
	wall1.shapeColor = 'red';

	wall2 = createSprite(570,590,5,150)
	wall2.shapeColor = 'red';

	wall3 = createSprite(870,590,5,150);
	wall3.shapeColor = 'red';
  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  
	}
}



