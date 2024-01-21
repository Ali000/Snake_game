let gameStart = true;
let gridArray;
let snakeArray = [{x: 1, y: 1}];
let directionArray = [[1, 1]];
let turnArray = [];
let counter = 0;
let lastKey = "";
let ateFood = false;
let foodx;
let foody;
const food = document.querySelector(".food");
const grid = document.querySelector(".grid");

const selfHit = () => {
  for(let i = 0; i < snakeArray.length -1; i++) {
    if((snakeArray.length > 1) && snakeArray[snakeArray.length -1].x === snakeArray[i].x && snakeArray[snakeArray.length -1].y === snakeArray[i].y) {
      gameStart = false;
    }
  }
}

const growSnake = (x, y) => {
  const newSegment = document.createElement("div");
  snakeArray.push({x: x, y: y});
  for(let i = 0; i < snakeArray.length; i++) {
    newSegment.className = "snake-default";
    newSegment.style.gridArea = `${x} / ${y}`;
    grid.append(newSegment);
  }
  if(ateFood === true) {
    ateFood = false;
  } else {
    snakeArray.shift();
    const snakeOnGrid = document.querySelectorAll(".snake-default");
    if(snakeOnGrid.length > 1) {
      snakeOnGrid[0].remove();
    }
  }
};
growSnake(directionArray[0][0], directionArray[0][1]);

const creatGridArray = () => {
  let arr = [];
  for(let i = 0; i < 20; i++) {
    arr.push([]);
    for(let j = 0; j < 20; j++) {
      arr[i].push(0);
    }
  }
  return arr;
}
gridArray = creatGridArray();

const generateFood = () => {
  foodx = Math.floor(Math.random() * 15) + 3;
  foody = Math.floor(Math.random() * 15) + 3;
  food.style.gridArea = `${foodx} / ${foody}`;
  food.style.display = "block";
  gridArray[foodx][foody] = "Food";
};
generateFood();

document.addEventListener("keydown", (key) => {
  lastKey = key.code;
  move(key.code);
});

const move = (key) => {
  if((directionArray[0][0] > 19 || directionArray[0][1] > 19) || directionArray[0][0] < 1 || directionArray[0][1] < 1) {
    gameStart = false;
  }
  if(gameStart === true && key === lastKey) {
    setTimeout(() => {
      if(key === "KeyD") {
        directionArray[0][1] += 1;
        growSnake(directionArray[0][0], directionArray[0][1]);
      } else if(key === "KeyA") {
        directionArray[0][1] -= 1;
        growSnake(directionArray[0][0], directionArray[0][1]);
      } else if(key === "KeyS") {
        directionArray[0][0] += 1;
        growSnake(directionArray[0][0], directionArray[0][1]);
      } else if(key === "KeyW") {
        directionArray[0][0] -= 1;
        growSnake(directionArray[0][0], directionArray[0][1]);
      }
      if(directionArray[0][0] === foodx && directionArray[0][1] === foody) {
        ateFood = true;
        generateFood();
      }
      selfHit();
      move(key);
    }, 200);
  }
}