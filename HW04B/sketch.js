function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();

  let centerX = width / 2;
  let centerY = height / 2;
  let size = 400; // Size of the cube

  // Define the vertices for the cube
  let topFront = createVector(centerX, centerY - size / 2);
  let bottomFront = createVector(centerX, centerY + size / 2);
  let topBack = createVector(centerX - size/2, centerY - size);
  let bottomBack = createVector(centerX - size/2, centerY);

  // Draw the faces with different shades
  drawFace(topBack, topFront, bottomFront, bottomBack, color(100)); // Left face
  drawFace(topFront, bottomFront, bottomFront.copy().add(size, 0), topFront.copy().add(size, 0), color(180)); // Front face
  drawFace(topBack, topFront, topFront.copy().add(size, 0), topBack.copy().add(size, 0), color(60)); // Top face
}

// Function to draw a face of the cube with shading
function drawFace(v1, v2, v3, v4, shade) {
  fill(shade);
  beginShape();
  vertex(v1.x, v1.y);
  vertex(v2.x, v2.y);
  vertex(v3.x, v3.y);
  vertex(v4.x, v4.y);
  endShape(CLOSE);
}
