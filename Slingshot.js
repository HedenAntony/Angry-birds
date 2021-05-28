class Slingshot {
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:5,
            stiffness:0.091,
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        
       this.Slingshot= Constraint.create(options);
        World.add(world,this.Slingshot);
    }
display(){
    image(this.sling1,200,20);
    image(this.sling2,170,20);

 if(this.Slingshot.bodyA!=null){
    var pointA=this.Slingshot.bodyA.position;
 var pointB=this.Slingshot.pointB;
  strokeWeight(4);
  //line(pointA.x,pointA.y,pointB.x,pointB.y);
  stroke(48,22,8);
  if(pointA.x<220){
  line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
  line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
  image(this.sling3,pointA.x-30,pointA.y-10,15,30)
  }
  else{
  line(pointA.x+20,pointA.y,pointB.x-10,pointB.y);
  line(pointA.x+20,pointA.y,pointB.x+30,pointB.y);
  image(this.sling3,pointA.x+20,pointA.y-10,15,30)
  }
}
}
fly(){
    this.Slingshot.bodyA=null;
}
attach(body){
    this.Slingshot.bodyA=body;
}
}
