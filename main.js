const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;
const rotationValue = 270;
let isMouseDown = false;
let currentX = 0
let currentY = 0;


let rotateX = 0;
let rotateY = 0;
const rotationSpeed = 0.5;

const diagonalLine = document.getElementById('diagonal-line');
const moveLeftLink = document.getElementById('move-left-link');

moveLeftLink.addEventListener('click', () => {
  // Update the background position to move the diagonal line to the left
  console.log("xd")
  diagonalLine.style.backgroundPosition = 'left bottom';
});


// const handleMouseMove = (event) => {
//     if (isMouseDown){
//         mouseX = event.clientX;
//         mouseY = event.clientY;
//         rotateX = currentX -(mouseY/ window.innerHeight - 0.5) * rotationValue;
//         rotateY = currentY +  (mouseX / window.innerWidth - 0.5) * rotationValue;
//         cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//     }
// }






window.addEventListener("mousedown", () => {
    isMouseDown = true;
    cube.style.transition = `transform 0s`;
})

window.addEventListener("mouseup", () => {
    isMouseDown = false;
    currentX = rotateX;
    currentY = rotateY;
    cube.style.transition = `transform 0.3s`;
})

function rotateCube() {
    rotateX += rotationSpeed;
    rotateY += rotationSpeed;
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
  
  // Set an interval to continuously update the rotation
  const rotationInterval = setInterval(rotateCube, 16); // 60 frames per second
  

window.addEventListener("mousemove", handleMouseMove )