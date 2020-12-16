class dustbin
{
    constructor(x,y,width,height)
    {
       var options={
           isStatic:true,
       }
        this.body=Matter.Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.image=loadImage("dustbingreen.png")
    }
    display()
    {
        var roc=this.body.position;
      
        imageMode(CENTER);
        image(this.image, roc.x, roc.y, this.width, this.height);
    }

}