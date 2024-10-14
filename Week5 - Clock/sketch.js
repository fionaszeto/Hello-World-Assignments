let hLength = 25;
let mLength = 40;
let sLength = 50;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255, 255, 255);
  translate(width/2, height/2);
  rotate(-90);

  //define time
  let h = hour();
  let m = minute();
  let s = second();

  //ellipse parameters
  let centerX = 0;
  let centerY = 0;
  let radiusX = 50;
  let radiusY = 150;

  //mapping time angles
  let hAngle = map(h-12, 0, 12, 0, 360);
  let mAngle = map(m, 0, 60, 0, 360);
  let sAngle = map(s, 0, 60, 0, 360);

  //need clarification on how cos and sin works...
  let hx = hLength*cos(hAngle);
  let hy = hLength*sin(hAngle);
  let mx = mLength*cos(mAngle);
  let my = mLength*sin(mAngle);
  let sx = sLength*cos(sAngle);
  let sy = sLength*sin(sAngle);

  //shadow color
  let c = color(150, 150, 150);
  c.setAlpha(128);

  //draw the ellipse (only for reference)
  //noFill();
  //stroke(0);
  //ellipse(centerX, centerY, radiusX * 2, radiusY * 2);

  //draw seconds human
  push();
  stroke(0, 0, 0);
  fill(255, 255, 255); //first human = red
  ellipse(120, 0, 20, 20);
  triangle(100, -10, 0, 0, 100, 10);
  pop();

  //draw minutes human
  push();
  stroke(0, 0, 0);
  fill(255, 255, 255); 
  ellipse(100, 15, 20, 20);
  triangle(80, 0, 0, 0, 80, 30);
  pop();

  //draw hour human
  push();
  stroke(0, 0, 0);
  fill(255, 255, 255); 
  ellipse(85, -15, 20, 20);
  triangle(65, -25, 0, 0, 65, 0);
  pop();

  //seconds hand
  push();
  stroke(c);
  fill(c);
  scale(1, radiusY / radiusX);
  triangle(sx*0.7, sy, 0, 0, sx*1.3, sy);
  pop();
  
  //minutes hand
  push();
  stroke(c);
  fill(c);
  scale(1, radiusY / radiusX);
  triangle(mx*0.7, my, 0, 0, mx*1.3, my);
  pop();

  //hours hand
  push();
  stroke(c);
  fill(c);
  scale(1, radiusY / radiusX);
  triangle(hx*0.7, hy, 0, 0, hx*1.3, hy);
  pop();
  
}
