// Adapted from p5's radial gradient example
// https://editor.p5js.org/p5/sketches/Color:_Radial_Gradient
// or try in the wayback machine:
// https://p5js.org/examples/color-radial-gradient.html

let dim;
let c1, c2, c3, c4;

let nameInput;
let button;
let greeting;

async function setup() {
  img = await loadImage("/angelic ativity/Angel.jpg");
  img1 = await loadImage("/angelic ativity/asa.png");
  img2 = await loadImage("/angelic ativity/musical.png");
  img3 = await loadImage("/angelic ativity/sanidade.jpg");

  console.log("angelloaded!");

  createCanvas(1265, 1400);
  dim = width * 1.5;
  background(0);
  noStroke();
  ellipseMode(RADIUS);
  c1 = color("white");
  c2 = color("blue");
  c3 = color(random(255), random(255), random(255));
  c4 = color(random(100), random(255), random(255));

  // Use the greeting variable to ask for the person's name.
  greeting = createElement("h2", "");
  greeting.position(20, 5);

  // Create the input and button in the canvas.
  nameInput = createInput();
  nameInput.position(570, 295);

  button = createButton("submit");
  button.position(460 + nameInput.width, 276);

  // Use the mousePressed() method to call the greet()
  // function when the button is pressed.
  button.mousePressed(greet);

  // Also call greet when input is changed and enter/return button is pressed
  nameInput.changed(greet);
}

function draw() {
  background(0);
  drawGradient(
    width / 2,
    height / 2,
    lerpColor(c1, c3, mouseX / width),
    lerpColor(c2, c4, mouseY / height),
  );

  textAlign(CENTER);
  textSize(20);
  // textFont( 'C')
  text(
    "well well well... if it isnt a sinner looking for confinment, tell me all of your secrets :p priomese im good",
    50,
    50,
    480,
    500,
  );

  image(img, 55, 140, 450, 800);
  // cut angel to clear background
  image(img1, 455, 140, 450, 300);

  image(img2, 55, 140, 450, 300);
  image(img3, 945, 20, 290, 300);
}

function drawGradient(x, y, c1, c2) {
  let radius = dim / 2;
  for (let r = radius; r > 0; --r) {
    const c3 = lerpColor(c1, c2, r / (dim / 2));
    fill(c3);
    circle(x, y, r);
  }
}

function keyPressed() {
  c1 = color(random(255), random(255), random(255));
  c2 = color(random(255), random(255), random(255));
  c3 = color(random(255), random(255), random(255));
  c4 = color(random(255), random(255), random(255));
}
function greet() {
  // Refresh the canvas background to clear any
  // previous inputs.
  background(255);

  // Connect the name variable to the input's value.
  let name = nameInput.value();

  // Update the greeting to state the person's name.
  greeting.html(`Hello, ${name}!`);

  // Clear the input's value.
  nameInput.value("");

  // Draw name on the canvas
  textSize(100);
  textAlign(CENTER, CENTER);
  text(name, width / 2, height / 2);
}
//could add the circles i did for brief 04 maybe to load the chat box
//make chat box rly cute and 3d
//make the chat boxvery evident, maybe have the type bar always on, in other words remove the mousepress----chat
