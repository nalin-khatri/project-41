const Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies,
Body = Matter.Body;

var engine, world;

var bruce;

var maxDrop = 100;
var drops = [];

var animateImg1, animateImg2, animateImg3, animateImg4;
var thunder;

var thunderFrameCount;

var rand;

function preload(){
    animateImg1 = loadImage("images/thunderbolt/1.png");
    animateImg2 = loadImage("images/thunderbolt/2.png");
    animateImg3 = loadImage("images/thunderbolt/3.png");
    animateImg4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(400,625);

   engine = Engine.create();
   world = engine.world;
    
   //create bodies here
   bruce = new Umbrella(150,500);

    for(var i=0; i<maxDrop; i++){
        drops.push(new Droplet(random(0,400), random(0,400)));
    }
}

function draw(){
    background(0);

    Engine.update(engine);

    bruce.display();

    for(var i=0; i<drops.length; i++){
        drops[i].display();
    }

    for(var i=0; i<drops.length; i++){
        drops[i].update();
    }

    thunderBolt();

    // thunderFrameCount = frameCount;
    // // console.log(thunderFrameCount);

    // if(thunderFrameCount + 12 === frameCount && thunder){
    //     thunder.destroy();
    // } 

    drawSprites();
} 

function thunderBolt(){
    if(frameCount % 70 === 0){
        thunder = createSprite(Math.floor(random(100,300)),0,2,2);

        rand = Math.floor(random(1,4));
    
        switch(rand){
            case 1: thunder.addImage("animation1", animateImg1);
            break;
    
            case 2: thunder.addImage("animation2", animateImg2);
            break;
    
            case 3: thunder.addImage("animation3", animateImg3);
            break;
    
            case 4: thunder.addImage("animation4", animateImg4);
            break;
    
            default: break;
        }

        thunder.lifetime = 17;
    } 
}




