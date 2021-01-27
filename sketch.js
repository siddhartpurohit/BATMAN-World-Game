const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1, thunder2, thunder3, thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops = 100;

var thunderCreatedFrame = 0;
var seige2 = 0;
var gameState = "seige1";
var seige3 = 1;
function preload() {
     thunder1 = loadImage("1.png");
     thunder2 = loadImage("2.png");
     thunder3 = loadImage("3.png");
     thunder4 = loadImage("4.png");
}

function setup() {
     engine = Engine.create();
     world = engine.world;

     createCanvas(400, 700);
     umbrella = new Umbrella(200, 500);
     if (frameCount % 150 === 0) {

          for (var i = 0; i < maxDrops; i++) {
               drops.push(new createDrop(random(0, 400), random(0, 400)));
          }

     }

}

function draw() {
     Engine.update(engine);
     if (keyDown("Enter")) {
          gameState = seige3;
     }
     if(keyDown("Space")){
          gameState=seige2;
     }
     if (gameState === "seige1") {
          createCanvas(2000, 800);
          background("black")
          fill("green");
          textSize(40);
          text("Microsoft/dell/whiteHatJ Jr/siddharth PUROhit/Project/BATman GaMe/ENJOY THanks", 25, 50);
          fill("red");
          textSize(40);
          text("WElcome To THE World Of Batman This IS THE BATMAN GAme AND also There IS A StoRY In The Game", 25, 150);
          text("STry:Young Bruce was walking on the streets of Gotham planning to avenge his parents’ death", 25, 300);
          text("and make Gotham crime free. He wanted to remain incorruptible.", 25, 360);
          text("It was a dark rainy night when he suddenly saw a bat flying. He remembered his fear of bats", 25, 420);
          text("and got an idea. He decided that he will be disguised and call himself Batman.", 25, 480)
          text("Bruce wants you to portray his dark rainy night, so he can keep it as a reminder of the day", 25.550);
          text("when he decided to become Batman!", 25, 550);
          fill("yellow");
          textSize(50);
          
          fill("yellow");
          textSize(60);
          text(" Press ENter To See The Contributors", 25, 680);
          fill("green");
          textSize(60);
          text("PRess Enter",25,760);
     }
     if(gameState===seige3){
          createCanvas(2000,800)
          background(0);
          fill("yellow")
          textSize(50);
          text("DIRECTED BY : Student/ Sidddharth Purohit",50,100);
          text("Produced By:Siddharth Purohit",50,200);
          text("Teacher:Maa'm/Anindita Banerrgee",50,300)
          text("studied By:student/Siddharth Purohit",50,400);
          text("storyied By: siddharth Purohit",50,500)
          text("Coded by:siddharth Purohit",50,600);
          fill("red");
          textSize(60);
          text("PRESS Space To Go To The BatMAn DArk Rainy World ENJOYYYYYY ", 25, 680);
          fill("green");
          textSize(80);
          text("PRESS SPACE",25,760);
     }
     if (gameState === seige2) {
          createCanvas(400, 700)
          background(0);
          rand = Math.round(random(1, 4));
          if (frameCount % 80 === 0) {
               thunderCreatedFrame = frameCount;
               thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
               switch (rand) {
                    case 1: thunder.addImage(thunder1);
                         break;
                    case 2: thunder.addImage(thunder2);
                         break;
                    case 3: thunder.addImage(thunder3);
                         break;
                    case 4: thunder.addImage(thunder4);
                         break;
                    default: break;
               }
               thunder.scale = random(0.3, 0.6)
          }

          if (thunderCreatedFrame + 10 === frameCount && thunder) {
               thunder.destroy();
          }

          umbrella.display();
          for (var i = 0; i < maxDrops; i++) {
               drops[i].showDrop();
               drops[i].updateY()

          }
     }


     drawSprites();
}   
