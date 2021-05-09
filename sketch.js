const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var bg;
var myengine, myworld;
var slingshot;
var monster;
var b = [];
function preload() {
  bg = loadImage("images/GamingBackground.png");
}
function setup() {
  createCanvas(1200, 500);

  myengine = Engine.create();
  myworld = myengine.world;

  ball = new Ball(200, 100, 200);
  monster = new Monster(1000, 50, 150);

  boxm = new Box(1100, 400);

  //stack 1
  for (var i = 480; i >= 100; i = i - 60) {
    b.push(new Box(800, i));
  }
  //stack 2
  for (var j = 480; j >= 280; j = j - 60) {
    b.push(new Box(900, j));
  }
  //stack 3
  for (var k = 480; k >= 380; k = k - 60) {
    b.push(new Box(1000, k));
  }
  //ground
  ground = new Ground(600, 490, 1200, 20);
  //chain
  slingshot = new Slingshot(ball.body, { x: 350, y: -70 });
  Engine.run(myengine);
}

function draw() {
  if(bg !== null){
    background(bg);
  }
  
  //display stack 1
  for (var j = 0; j < b.length; j++) {
    if (j < 4) {
      fill(230, 208, 145);
      b[j].display();
    } else {
      fill(145, 168, 230);
      b[j].display();
    }
  }
  //display stack 2
  for (var i = 0; i < b.length; i++) {
    if (i > 6 && i <= 8) {
      fill(212, 236, 114);
      b[i].display();
    } else if (i >= 9) {
      fill("lime");
      b[i].display();
    }
  }
  //display stack 3
  for (var k = 0; k < b.length; k++) {
    if (k > 10 && k <= 12) {
      fill(153, 204, 204);
      b[k].display();
    } else if (k >= 13) {
      fill("lime");
      b[k].display();
    }
  }

  fill("navy");
  ball.display();
  ground.display();
  slingshot.display();
  monster.display();
  boxm.display();
  Matter.Body.setStatic(boxm.body, true);
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
