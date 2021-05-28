var fixed, moving;
function setup() {
  createCanvas(1200,800);
  fixed=createSprite(600, 400, 50, 80);
  fixed.shapeColor="green"
  moving=createSprite(400, 200, 80, 50)
  moving.shapeColor="green"
}

function draw() {
  background("black");  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if(fixed.x-moving.x<fixed.width/2+moving.width/2
    &&moving.x-fixed.x<fixed.width/2+moving.width/2
    &&moving.y-fixed.y<fixed.height/2+moving.height/2
    &&fixed.y-moving.y<fixed.height/2+moving.height/2){
  fixed.shapeColor="red"
  moving.shapeColor="red"
  }
  else{
    fixed.shapeColor="green"
  moving.shapeColor="green"
  }
  drawSprites();
}