const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Thunder,Man
var drops = []

function preload(){
    Bolt1 = loadImage("1.png")
    Bolt2 = loadImage("2.png")
    Bolt3 = loadImage("3.png")
    Bolt4 = loadImage("4.png")
    Man = loadImage("walking_1.png")
}

function setup(){
   var canvas = createCanvas(1600,800)

   engine = Engine.create();
   world = engine.world;

   umberalla = new umberallaMan(200,500)
   //var Drop = 100;
   if(frameCount%200 === 0){
   for(var i=0; i<100; i++){
    drops.push(new Drop(random(0,400), random(0,400)));
}
}
rand = Math.round(random(1,4));
if(frameCount%80 === 0){
    thunderCreatedFrame = frameCount;
    thunder = createSprite(random(10,370), random(10,30),10 ,10);
    switch(rand){
        case 1:thunder.addImage(Bolt1);
            break;
        case 2:thunder.addImage(Bolt2);
                break;
        case 3:thunder.addImage(Bolt3);
                break;
        case 4:thunder.addImage(Bolt4);
                    break;        
                default: break;
    }
        thunder.scale = random(0.3,0.6)
if(thunderCreatedFrame+10 === frameCount && thunder){
    thunder.destroy();
}

Engine.run(engine)
}

function draw(){
    //var Drop = 100;
    for(var i=0; i<100; i++){
        drops[i].display();
  }
  umberalla.display();

  drawSprites();
}   
}
/*function repositionDrops(){

    if(this.rain.position.y > height){
    Matter.Body.setPosition(bird.rain,{x:random(0,400),y:random(0,400)})
    }*/


