
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var world;
var ropeObject,roofObject;

function setup() {
	createCanvas(500, 500);
	
	engine = Engine.create();
	world = engine.world;
	roofObject = new Roof(95,70,300,30);
	bobObject1 = new Bob(155,300,41,41);
	bobObject2 = new Bob(195,300,41,41);
	bobObject3 = new Bob(235,300,41,41);
	bobObject4 = new Bob(275,300,41,41);
	bobObject5 = new Bob(315,300,41,41);
	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*2,0);
	rope3 = new Rope(bobObject3.body,roofObject.body,-bobDiameter*2,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,-bobDiameter*2,0);
	rope5 = new Rope(bobObject5.body,roofObject.body,-bobDiameter*2,0);
	//Create the Bodies Here.
	Engine.run(engine);
}


function draw() {
  background(0);
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  Engine.update(engine);
  drawSprites();
 
}



