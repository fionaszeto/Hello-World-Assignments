class Dot {
  constructor(x, y, diameter) { // Defining the class
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.isInside = false;
    this.wasInside = false;
  }

  display() { // Similar to draw()
    if (this.isInside || this.wasInside) {
      fill(255, 255, 0);
      this.wasInside = true; // Set wasInside to true when inside
    } else {
      noFill();
      stroke(255);
      strokeWeight(2);
    }
    ellipse(this.x, this.y, this.diameter);
  }

  // Check if the ball is inside the dot
  checkInside(ballPosX, ballPosY) {
    this.isInside = dist(ballPosX, ballPosY, this.x, this.y) < this.diameter / 2;
  }
}

// Global variables
let ballPosX;
let ballPosY;
let mouseClickX;
let mouseClickY;
let speed = 10;
let dots = []; // Array to hold the class dots

function setup() {
  createCanvas(700, 700);
  resetGame();
}

function resetGame() {
  // Set ball position
  ballPosX = 350;
  ballPosY = 350;
  mouseClickX = ballPosX;
  mouseClickY = ballPosY;

  // Clear existing dots and create new dots
  dots = []; // Clear the dots array
  dots.push(new Dot(350, 200, 60)); // Center of heart
  dots.push(new Dot(200, 100, 60)); // Upper left
  dots.push(new Dot(500, 100, 60)); // Upper right
  dots.push(new Dot(100, 200, 60)); // Mid left
  dots.push(new Dot(600, 200, 60)); // Mid right
  dots.push(new Dot(200, 350, 60)); // Lower left
  dots.push(new Dot(500, 350, 60)); // Lower right
  dots.push(new Dot(350, 500, 60)); // Lower mid
}

function draw() {
  background(0);

  // Calculate the distance between the point you click and the current ball position
  let dx = mouseClickX - ballPosX;
  let dy = mouseClickY - ballPosY;

  if (dist(ballPosX, ballPosY, mouseClickX, mouseClickY) > 5) {
    // Calculate the angle and move toward the point you clicked
    let angle = atan2(dy, dx);
    ballPosX += cos(angle) * speed;
    ballPosY += sin(angle) * speed;
  }

  // Update and display dots in a loop
  for (let dot of dots) {
    dot.checkInside(ballPosX, ballPosY); // Check if the ball is inside the dot
    dot.display(); // Display the dot
  }

  // Create the ball
  ball();

  // End game
  if (allDotsFilled()) {
    fill(255);
    textSize(20);
    text("Game finished, press ENTER to restart.", 300, 600);
  }
}

// Define other functions
function ball() {
  push();
  fill(255);
  ellipse(ballPosX, ballPosY, 50);
  pop();
}

function mousePressed() {
  mouseClickX = mouseX;
  mouseClickY = mouseY;
}

function allDotsFilled() {
  for (let dot of dots) {
    if (!dot.wasInside) { // If any dot is not filled, ! inverts the boolean value
      return false;
    }
  }
  return true;
}

function keyPressed() {
  if (keyCode === ENTER) {
    resetGame(); // Restart the game when ENTER is pressed
  }
}
