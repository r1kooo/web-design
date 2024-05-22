let irisColor;
let eyeballColor;

function setup() {
  createCanvas(400, 400);
  color(HSB);
  irisColor=color(0,0,0)
  eyeballColor=color(0,0,0)
}

function draw() {
  background('#669da3');
  
  //eyeball
  noStroke()
  fill(eyeballColor)
  let eyeballX=constrain(mouseX,180,220)
  let eyeballY=constrain(mouseY,180,220)
  circle(eyeballX,eyeballY,200)
  //eye
  //circle(width/2,height/2,200);
  //constrain(n,low,high)
  fill(irisColor)
  let irisX=constrain(mouseX,eyeballX-30,230)
  let irisY=constrain(mouseY,eyeballY-30,230)
  circle(irisX,irisY,100)
  //glare
  fill(255)
  circle(irisX+20,irisY-20,20)
  
  
}
function mouseMoved(){
  irisColor=color(185,random(70,250),random(0,150))
  eyeballColor=color(random(200,255),random(200,250),random(200,250))
}