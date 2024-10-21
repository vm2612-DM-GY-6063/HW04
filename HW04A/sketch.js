let circles = [];

function setup() {
  createCanvas(500, 600); // Adjust canvas size
  background(255); // White background
  noStroke(); // No borders for circles
  fill(255, 0, 0); // Red fill color
  
  let maxRadius = 40; // Maximum radius for circles
  let minRadius = 5;  // Minimum radius for smaller circles
  
  let attempts = 0;
  while (circles.length < 500 && attempts < 10000) { // Limit the number of circles and attempts to avoid endless loops
    let newCircle = {
      x: random(width),
      y: random(height),
      r: random(minRadius, maxRadius)
    };
    
    // Check if the new circle overlaps any existing circle
    let overlapping = false;
    for (let i = 0; i < circles.length; i++) {
      let other = circles[i];
      let distance = dist(newCircle.x, newCircle.y, other.x, other.y);
      if (distance < newCircle.r + other.r) {
        overlapping = true;
        break;
      }
    }
    
    // If no overlap, add the circle
    if (!overlapping) {
      circles.push(newCircle);
    }
    
    attempts++;
  }

  // Draw all circles
  for (let i = 0; i < circles.length; i++) {
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  }
}

function draw() {
  noLoop(); // Stop looping after drawing the pattern once
}
