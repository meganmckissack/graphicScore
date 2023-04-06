

function setup() {
  createCanvas(600, 800);
}

function draw() {
  background(255);

  fill(0);
  //section1
  for(let i = 0; i < 3; i++) {
    rect(40, 50 + (i * 30), 520, 12);
  }

   //section2
   for(let i = 0; i < 6; i++) {
    rect(40 + (i * 90), 180, 65, 12);
  }

  //section3
  for(let i = 0; i < 12; i++) {
    rect(40 + (i * 45), 240, 22, 12);
  }

  //section4
  for(let i = 0; i < 12; i++) {
    for(let j = 0; j < 11; j++) {
      rect(40 + (i * 45), 300, 22, 12);
      rect(62 + (j * 45), 312, 22, 12);
    }
  }

 

  //section5
  for(let i = 0; i < 7; i++) {
    for(let j = 0; j < 6; j++) {
      rect(40 + (i * 80), 380, 44, 12);
      rect(84 + (j * 80), 392, 44, 12);
      rect(40 + (i * 80), 404, 44, 12);
    }
  }

   //section6
   for(let i = 0; i < 5; i++) {
    rect(40, 480 + (i * 30), 520, 12);
  }

  //section7
  for(let i = 0; i < 21; i++) {
    // rect(40, 480 + (i * 30), 520, 12);
    textFont('Futura');
    textSize(43);
    text("X", 40 + (i * 25), 680);
  }
 
}


