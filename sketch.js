const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var count = 0
var score = 0

var particle;
var particles = [particle];
var plinkos = [];
var divisions = [];

var gameState = "PLAY";
var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  
  textSize(37);
  text("score : " + score, 20, 40);
  fill("white");

  text("500", 10, 550);
  text("500", 90, 550);
  text("500", 170, 550);
  text("500", 250, 550);
  text("100", 330, 550);
  text("100", 410, 550);
  text("100", 490, 550);
  text("200", 570, 550);
  text("200", 650, 550);
  text("200", 730, 550);


  if(gameState == "END"){
    background("black");
    fill("red");
    textSize(100);
    text("GAME OVER!!", 100, 250);
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle!= null)
   {
     particle.display();

        if(particle.body.position.y > 700)
        {
            if(particle.body.position.x < 300)
            {
              score += 500;
              particle = null;
              if(count >= 5) gameState = "END";
            }
            else if(particle.body.position.x < 600 && particle.body.position.x > 301)
            {
              score += 100;
              particle = null;
              if(count >= 5) gameState = "END";
            }
            else if(particle.body.position.x < 900 && particle.body.position.x > 601)
            {
              score += 200;
              particle = null;
              if(count >= 5) gameState = "END";
            }
        }
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState!== "END"){
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}