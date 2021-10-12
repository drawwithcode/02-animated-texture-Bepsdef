var start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  slider = createSlider(0, 255, 100);
  slider.position(30, 30);
  slider.style("width", "80px");

  noiseDetail(1);
}

function draw() {
  background("black");

  scale(3);
  translate(0, 0, -width);
  rotateX(frameCount / 3);
  rotateY(frameCount / 3);
  rotateZ(mouseX);

  translate(-width / 2, -height / 2, -width / 2);

  var spaceX = width / 10;
  var spaceY = height / 6;
  var spaceZ = width / 6;

  var indexX = 0;

  for (var x = 0; x < width; x += spaceX) {
    var indexY = 0;
    for (var y = 0; y < height; y += spaceY) {
      var indexZ = 0;
      for (var z = 0; z < width; z += spaceZ) {
        push();
        var h = noise(indexX + start, indexY + start, indexZ + start) * 255;
        noStroke();

        var r = map(h, 0, 255, 255, 100);
        var g = map(h, 0, 255, mouseY, 255);
        var b = map(h, 0, 255, mouseX, 255);

        let val = slider.value();
        let big = map(val, 0, width, 2, 300);
        fill(r, g, b);
        translate(x, y, z);

        sphere(big);

        text("a");
        pop();

        indexZ += 0.5;
      }

      indexY += 0.4;
    }
    indexX += 0.3;
  }

  start += 0.01;
}
