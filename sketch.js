var backgroundimage, scimage, scimage1, scimage2, scimage3;
var hasDocked = false




function preload(){
backgroundimage = loadImage("spacebg.jpg")
issimage = loadImage("iss.png")
scimage = loadImage("spacecraft1.png")
scimage1 = loadImage("spacecraft2.png")
scimage2 = loadImage("spacecraft3.png")
scimage3 = loadImage("spacecraft4.png")
}






function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(scimage)
  spacecraft.scale = 0.15


  iss = createSprite(330,130)
  iss.addImage(issimage)
  iss.scale = 0.25
}

function draw() {
  background(backgroundimage);

  if(spacecraft.y<=(iss.y+70)&&spacecraft<=(iss.x-10)){
    hasDocked = true
    textSize (25)
    fill (255)
    text ("DOCKING SUCCESFULL",200,300)
  }

  if(!hasDocked){
spacecraft.x = spacecraft.x+random(-1,1)

if (keyDown("UP_ARROW")){
  spacecraft.y = spacecraft.y-2
}

if (keyDown("DOWN_ARROW")){
  spacecraft.addImage(scimage1)
}


if (keyDown("LEFT_ARROW")){
  spacecraft.x = spacecraft.x-1
  spacecraft.addImage(scimage3)
}

if (keyDown("RIGHT_ARROW")){
  spacecraft.x+=1
  spacecraft.addImage(scimage2)
}
  }
  drawSprites();
}