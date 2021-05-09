class Box{
    constructor(x,y){
        var options ={
            restitution : 0.8,
            friction:0.3,
            density : 0.3
        }
        this.w = 60;
        this.h = 60;
        this.body = Bodies.rectangle(x,y,60,60,options);
        World.add(myworld,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        angleMode(RADIANS)
        rect(0,0,this.w,this.h);
        pop();
    }
}