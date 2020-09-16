var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,packageOptions,packOptions;
var rectSprite1,rectSprite2,rectSprite3;
var rectBody1,rectBody2,rectBody3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height -35, width,10);
	groundSprite.shapeColor=color(255)

	rectSprite1=createSprite(400,649,200,20);
rectSprite1.shapeColor=color("red");

rectSprite2=createSprite(300,609,20,100);
rectSprite2.shapeColor=color("red");

rectSprite3=createSprite(500,609,20,100);
rectSprite3.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;
	
rectBody1=Bodies.rectangle(width/2,634,200,20,{isStatic:true});
World.add(world,rectBody1);





	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0,isStatic:true});
	World.add(world, packageBody);
	
	ground3=
	{
	 isStatic:true
	}
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10  ,ground3);
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
//	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);
  // packageBody.restitution = 1.0;
  
  }
}



