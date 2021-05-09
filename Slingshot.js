class Slingshot{

    constructor(body1,point){
        var options = {
            bodyA : body1,
            pointB : point,
            stiffness : 1,
            length : 130
        }
        this.pointB = point;
        this.sling = Constraint.create(options);
        
        World.add(myworld,this.sling);

    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
       
        stroke(26, 31, 32)
        strokeWeight(0)
        line(pointA.x,pointA.y-43,pointB.x,pointB.y);
        pop();
    }

}