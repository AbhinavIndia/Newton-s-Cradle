class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX,
            this.offsetY = offsetY,
        varoptions = {
            bodyA:body1,
            bodyB:body2,
           pointB:{x:this.offsetX,y:this.offsetY}
        }
        var rope=Constraint.create(options);
        World.add(world,rope);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
};