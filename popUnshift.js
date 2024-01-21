let snakeSegments = [{x: 1, y: 8}]; //snake size
let directionArray = [[1, 1]]; //where snake is headed
foodX = 5;
foodY = 8;
let intervalID;

const grid = document.querySelector('.grid');

const growSnake = () => {
  console.log("Snake should grow by 1");
};

const createSnake = () => {
  for(let i = 0; i < snakeSegments.length; i++) {
    const snakeDiv = document.createElement("div");
    snakeDiv.className = "snake-default";
    snakeDiv.style.gridArea = `${snakeSegments[i].x} / ${snakeSegments[i].y}`;
    grid.append(snakeDiv);
  }
}
createSnake();

const move = () => {
  const snakeBody = document.querySelectorAll(".snake-default");
  // snakeSegments.unshift(snakeSegments[snakeSegments.length -1]);
  // snakeSegments.pop();

  snakeSegments[0].x += 1;
  snakeBody[0].style.gridArea = `${snakeSegments[0].x} / ${snakeSegments[0].y}`;
  if(snakeSegments[0].x === foodX && snakeSegments[0].y === foodY) {
    console.log("🚀 ~ move ~ snakeSegments[0].x:", snakeSegments[0].x)
    console.log("🚀 ~ move ~ snakeSegments[0].y:", snakeSegments[0].y)
    console.log("🚀 ~ move ~ foodX:", foodX)
    console.log("🚀 ~ move ~ foodY:", foodY)
    growSnake();
  }
  const gridSnake = document.querySelectorAll(".snake-default")
  if(gridSnake.length > 1) {
    gridSnake[0].remove();
  }
  console.log(snakeSegments);
}


function start() {
intervalID = setInterval(move, 1000);
}

// Function to stop setInterval call
function stop() {
  clearInterval(intervalID);
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("stopBtn").addEventListener("click", stop);