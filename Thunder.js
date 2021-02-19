class umberallaMan{
    constructor(x,y){
        var options={
            'isStatic':true,
            /*'restitution':0.3,
            'friction':0.1,
            'density':1.2*/
        }
        this.x = x;
        this.y = y;
        
       this.image = loadImage('walking_1.png')
    
    
    this.paper = Bodies.circle(this.x,this.y,50,options)

    World.add(world,this.paper);
}
display()
{
    var posPaper = this.paper.position;
    imageMode(CENTER)
    image(this.image,posPaper.x,posPaper.y,100,100)

    /*ellipseMode(RADIUS)
    ellipse(posPaper.x,posPaper.y,this.radius,this.radius)*/
}
}