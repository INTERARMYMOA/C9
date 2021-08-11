var box
function setup() {
  createCanvas(400,400);
  box = createSprite(250,360,9,10)
}

function draw() 
{
background(30);
if(keyDown(RIGHT_ARROW)){
box.x = box.x+5 
}
if(keyDown(LEFT_ARROW)){
  box.x = box.x-5 
  }


drawSprites()
}




