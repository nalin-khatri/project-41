class Droplet{
    constructor(x,y){

        var option = {
            friction: 0.1
        }

        this.body = Bodies.circle(x,y,3,option);
        this.radius = 3;

        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,400)});
        }   
    }

    display(){
        var pos = this.body.position;

        fill("darkblue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,3,3);
    }
}