class Drop{
    constructor(x,y){
        var options={
            //'isStatic':true,
            'restitution':0.3,
            'friction':0.1,
            'density':1.2
        }
        this.x = x;
        this.y = y;
       this.radius = 5;
    
    this.paper = Bodies.circle(this.x,this.y,5,options)

    World.add(world,this.paper);
}
display()
{
    var posPaper = this.paper.position;

    ellipseMode(RADIUS)
    ellipse(posPaper.x,posPaper.y,this.radius,this.radius)
}
}