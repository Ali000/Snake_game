let snakeSegments = [{x: 9, y: 8}]; //snake size
let directionArray = [[1, 1]]; //where snake is headed
foodX = 10;
foodY = 8;
let intervalID;

const grid = document.querySelector('.grid');

const createSnake = () => {
  for(let i = 0; i < snakeSegments.length; i++) {
    const snakeDiv = document.createElement("div");
    snakeDiv.className = "snake-default";
    snakeDiv.style.gridArea = `${snakeSegments[i].x} / ${snakeSegments[i].y}`;
    grid.append(snakeDiv);
  }
}

const move = () => {

    snakeSegments.unshift(snakeSegments[snakeSegments.length -1]);
    snakeSegments.pop();
    for(let i = 0; i < snakeSegments.length; i++) {
      snakeSegments[0].x += 1;
    }
    createSnake();
    console.log(snakeSegments);
    clearInterval();

}


function start(){

intervalID = setInterval(move, 2000);

}

// Function to stop setInterval call
function stop(){
  clearInterval(intervalID);
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("stopBtn").addEventListener("click", stop);