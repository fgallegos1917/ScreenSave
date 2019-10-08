const heart = [];
const totalFrames = 240;
let counter = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  let c1 = color (0, 255, 255);
  let c2 = color (255, 153, 204);
  background(255, 153, 204);
}

function draw() {
	setGradient(0, 0, windowWidth, windowHeight, c1, c2)
}

function draw() {
  const percent = float(counter % totalFrames) / totalFrames;
  render(percent);
  counter++;
}

function render(percent) {
  
  translate(width/2, height/2);
  stroke(2);
  strokeWeight(4);
 
  beginShape();
  for (let v of heart) {
    const a = map(percent, -1, 0, -1, TWO_PI*2);
    const r = map(sin(a), -1, 1, height/100, height/80);
    vertex(r * v.x, r * v.y);
    
  }

  endShape();



  if (percent < 0.5) {
    const a = map(percent, 0, 0.5, 0, TWO_PI);
    const x = 16 * pow(sin(a), 3);
     const y = -(13 * cos(a) - 5*cos(2*a) - 2*cos(3*a)- cos(4*a));
	heart.push(createVector(x, y));
	


  } else {
    heart.splice(0, 1);

    fill(random(0,255), random(0,255), random(0,255));

    
  }
  
}
