let circles = [];

function setup() {
   createCanvas(windowWidth, windowHeight);
  background(255); 
  noStroke(); 
  fill(255, 0, 0); 
  
  let maxRadius = 25; 
  let minRadius = 5;  
  
  let attempts = 0;
  while (circles.length < 95000 && attempts < 100000) { 
    let newCircle = {
      x: random(width),
      y: random(height),
      r: random(minRadius, maxRadius)
    };
    
   
    let overlapping = false;
    for (let i = 0; i < circles.length; i++) {
      let other = circles[i];
      let distance = dist(newCircle.x, newCircle.y, other.x, other.y);
      if (distance < newCircle.r + other.r) {
        overlapping = true;
        break;
      }
    }
    
    
    if (!overlapping) {
      circles.push(newCircle);
    }
    
    attempts++;
  }

  
  for (let i = 0; i < circles.length; i++) {
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  }
}

function draw() {
  noLoop(); 
}
