class Ball{
    constructor(x,y,radius){
        var option={
            'density':1,
            'frictionAir':0.005 
        }
        //this.image=loadImage(heroImg)
        this.body=Bodies.circle(x,y,radius,option)
        World.add(world,this.body)
        this.radius=radius;
    }
    display(){
        var pos=this.body.position
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius)
        imageMode(CENTER);
        //image(this.image, pos.x,pos.y, 100,100);
    }
}