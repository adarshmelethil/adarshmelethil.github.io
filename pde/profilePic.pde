
PImage profilePic;
int mode = 0;
int totalModes = 10;
int iteration = 0;

int minStrokeLen, maxStrokeLen;
int minStrokeThickness, maxStrokeThickness;
int iterationCount;

void setup() {
  size(300, 300);
  background(0xdddddd);
  profilePic = loadImage("assets/profile.jpeg");
  profilePic.resize(width, height);
  
  minStrokeLen = 150;
  maxStrokeLen = 250;
  
  minStrokeThickness = 20;
  maxStrokeThickness = 40;
  iterationCount = 300;
}

void updateMode() {
  minStrokeLen -= int(minStrokeLen/2);
  maxStrokeLen -= int(maxStrokeLen/2);
  
  minStrokeThickness -= int(minStrokeThickness/2);
  maxStrokeThickness -= int(maxStrokeThickness/2);
  
  iterationCount += int(iterationCount/2);
}

void draw() {
  translate(width/2, height/2);
  int x = int(random(profilePic.width));
  int y = int(random(profilePic.height));
  
  color pixelColor = profilePic.pixels[x + y * profilePic.height];
  pixelColor = color(red(pixelColor), green(pixelColor), blue(pixelColor), 100);
  
  pushMatrix();
  translate(x-profilePic.width/2, y-profilePic.height/2);
  rotate(radians(random(-90, 90)));
  //paintStroke(random(strokeType[mode][0], strokeType[mode][1]), pixelColor, (int)random(strokeType[mode][2], strokeType[mode][3]));
  paintStroke(random(minStrokeLen, maxStrokeLen), pixelColor, (int)random(minStrokeThickness, maxStrokeThickness));
  
  popMatrix();
  
  iteration++;
  if (iteration >= iterationCount){
    iteration = 0;
    mode++;
    updateMode();
  }
  if (mode >= totalModes) {
    noLoop();
  }
}


void paintStroke(float strokeLength, color strokeColor, int strokeThickness) {
  float stepLength = strokeLength/4.0;

  // Determines if the stroke is curved. A straight line is 0.
  float tangent1 = 0;
  float tangent2 = 0;

  float odds = random(1.0);

  if (odds < 0.7) {
    tangent1 = random(-strokeLength, strokeLength);
    tangent2 = random(-strokeLength, strokeLength);
  } 

  // Draw a big stroke
  noFill();
  stroke(strokeColor);
  strokeWeight(strokeThickness);
  curve(tangent1, -stepLength*2, 0, -stepLength, 0, stepLength, tangent2, stepLength*2);

  int z = 1;

  // Draw stroke's details
  for (int num = strokeThickness; num > 0; num --) {
    float offset = random(-50, 25);
    color newColor = color(red(strokeColor)+offset, green(strokeColor)+offset, blue(strokeColor)+offset, random(100, 255));

    stroke(newColor);
    strokeWeight((int)random(0, 3));
    curve(tangent1, -stepLength*2, z-strokeThickness/2, -stepLength*random(0.9, 1.1), z-strokeThickness/2, stepLength*random(0.9, 1.1), tangent2, stepLength*2);
    
    z += 1;
  }
}
