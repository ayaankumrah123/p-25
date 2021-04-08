class paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false		
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.circle(this.x,this. y, w, h , options);
 		World.add(world, this.body);

	} 
	display()
    {
        var paperPos=this.body.position;		



    }
}
