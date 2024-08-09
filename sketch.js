function setup() {
  createCanvas(1000, 800);
 background(" blue");
        
}

function draw() {
  
  fill("green");
stroke("lightgreen");
 if(mouseIsPressed)
 rect(mouseX,mouseY,50,70);
}
