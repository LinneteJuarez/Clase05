const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

var mouseX = 0;
var mouseY = 0;

const lines = [];

// Function to generate random positions for lines
function generateRandomLines() {
  lines.length = 0; // Clear previous lines
  for (let i = 0; i < 11; i++) {
    const randomX = Math.random() * CANVAS.width;
    const randomY = Math.random() * CANVAS.height;
    lines.push({ startX: randomX, startY: randomY });
  }
}

function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
  generateRandomLines(); // Generate new random positions when canvas is resized
}

function updateCoords(eventData) {
  mouseX = eventData.clientX;
  mouseY = eventData.clientY;

  console.log(mouseX, mouseY);
}

function renderLines() {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  
  lines.forEach(line => {
    CTX.strokeStyle = "red";
    CTX.lineWidth = 3;
    CTX.beginPath();
    CTX.moveTo(line.startX, line.startY); // Start at the random position
    CTX.lineTo(mouseX, mouseY); // End at the current mouse position
    CTX.stroke();
  });

  requestAnimationFrame(renderLines);
}

// Initialize the random lines
generateRandomLines();

window.addEventListener("mousemove", updateCoords);
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(renderLines);
