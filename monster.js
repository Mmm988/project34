class Monster{
    constructor(x,y,radius){
        var option={
            'isStatic': false,
            'density':1
        }
        this.image=loadImage("images/Monster-01.png");
        this.body=Bodies.circle(x,y,radius,option)
        World.add(world,this.body)
        this.radius=radius;
    }
    display(){
        var pos=this.body.position
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius)
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, 90,90);
    }
}