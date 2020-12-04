class Umbrella{
    constructor(x,y){

        var option = {
            isStatic: true
        }
        
        this.body = Bodies.circle(x,y,110,option);
        this.radius = 110;
        this.image = loadImage("images/Walking Frame/walking_1.png");

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,280,300);
    }
}