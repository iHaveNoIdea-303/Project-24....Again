class Junk{
    constructor(x,y,radius){
        var options={
            'restitution':0.3,
            'friction':5,
            'density':0.6

        }
        this.body=Bodies.circle(x,y,radius,options)
        
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var rad=this.body.radius
        var ang=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(ang)
        ellipseMode(CENTER)
        ellipse(0,0,rad,rad) 
        pop()
    }
}