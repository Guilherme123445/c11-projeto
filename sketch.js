
function preload(){
  shipi1=loadAnimation("ship.1png","ship.2png","ship.3.png",)
  
    sea = loadAnimation("sea.png")


  
  
  
  

}

function setup(){
  createCanvas(600,500);

  sea = createSprites(600,500);
  sea.addAnimation("running", sea1)
  sea.scale=0.5;
  sea.velocityX=+1;


  ship = createSprites(50,200,20,50);
  ship.addAnimation("running", ship1);
  edges = createEdgesSprites();


  ship.scale+0.25;
  ship.x = 90;
  ship.y = 300;

  
}

function draw() {
  background("blue");
if(keyDown("enter")){
  ship.velocityX = 5;

}
if(keyDown("left")) {
  ship.velocityX = -5;
  
}
if(keyDown("space")) {
  ship.velocityX = 0;
}

if(sea.x < 0) {
  sea.x = sea.width/2;

  ship.collide(edges[3])
}


    drawSprites();

 
}
