function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  beginShape()
  scale(1, mouseY/100, 1);
  noStroke();
  
  fill("rgb(255,239,189)");
  triangle(150, 200, 150, 125, 220, 200);
  triangle(180, 200, 250, 125, 250, 200);
  ellipse(200, 200, 100, 100);
  
  fill(0, 0, 0);
  ellipse(175, 185, 10, 10);
  ellipse(225, 185, 10, 10);
  endShape()
}