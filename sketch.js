const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
function setup(){
    createCanvas(1300,1000)
    engine = Engine.create();
    world = engine.world;
ball=new Ball(500,500,40)
    ground= new Ground(650,900,1300,20)
    
    box1= new Box(1200,850,70,70);
    box2= new Box(1200,850,70,70);
    box3= new Box(1200,850,70,70);
    box4= new Box(1200,850,70,70);
    box5= new Box(1200,850,70,70);
    box6= new Box(1200,850,70,70);
    box7= new Box(1200,850,70,70);
    box8= new Box(1200,850,70,70);

    mbox1= new Box(1100,850,70,70);
    mbox2= new Box(1100,850,70,70);
    mbox3= new Box(1100,850,70,70);
    mbox4= new Box(1100,850,70,70);
    mbox5= new Box(1100,850,70,70);
    mbox6= new Box(1100,850,70,70);
    mbox7= new Box(1100,850,70,70);
    mbox8= new Box(1100,850,70,70);

    lbox1= new Box(1000,850,70,70);
    lbox2= new Box(1000,850,70,70);
    lbox3= new Box(1000,850,70,70);
    lbox4= new Box(1000,850,70,70);
    lbox5= new Box(1000,850,70,70);
    lbox6= new Box(1000,850,70,70);
    lbox7= new Box(1000,850,70,70);
    lbox8= new Box(1000,850,70,70);



    rope= new Rope(ball.body,{x:650,y:110})
}
function draw(){
    
    background(0)
    Engine.update(engine);
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();

 mbox1.display();
 mbox2.display();
 mbox3.display();
 mbox4.display();
 mbox5.display();
 mbox6.display();
 mbox7.display();
 mbox8.display();

 lbox1.display();
 lbox2.display();
 lbox3.display();
 lbox4.display();
 lbox5.display();
 lbox6.display();
 lbox7.display();
 lbox8.display();
 ball.display();
 rope.display();


}


function keyPressed() {
	console.log("click")
	 if (keyCode === 32) { 
		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-85});
 } }
