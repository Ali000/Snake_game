let gameStart = true;
let gridArray;
let snakeArray = [];
let directionArray = [[1, 1]];
let turnArray = [];
let counter = 0;
let lastKey = "";
let foodx;
let foody;
const snake = document.querySelector("#snake");
const food = document.querySelector(".food");
const grid = document.querySelector(".grid");

const growSnake = (positionX, positionY) => {
  snakeArray.push([positionX, positionY]);
  snakeArray.forEach((value) => {
    let growth = document.createElement("div");
    growth.setAttribute('class', 'snake-default');
    growth.style.gridArea = `${positionX} / ${positionY}`;
    grid.append(growth);
  });
};

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
  // gridArray[directionArray[0][0] -1][directionArray[0][1] -1] = lastKey;
  move(key.code);
});

const move = (key) => {
  if((directionArray[0][0] > 19 || directionArray [0][1] > 19) || directionArray[0][0] < 1 || directionArray[0][1] < 1) {
    gameStart = false;
  }
  if(gameStart === true && key === lastKey) {
    setTimeout(() => {
      if(key === "KeyD") {
        directionArray[0][1] += 1;
      } else if(key === "KeyA") {
        directionArray[0][1] -= 1;
      } else if(key === "KeyS") {
        directionArray[0][0] += 1;
      } else if(key === "KeyW") {
        directionArray[0][0] -= 1;
      }
      snake.style.gridArea = `${directionArray[0][0]} / ${directionArray[0][1]}`;
      // console.table(gridArray);
      if(directionArray[0][0] === foodx && directionArray[0][1] === foody) {
        food.style.display = "none";
        growSnake(foodx, foody);
        generateFood();
      }
      move(key);
    }, 200);
  }
};

// setInterval(() => {
  //   if(lastKey === "KeyD") {
  //     directionArray[0][1] += 1;
  //   } else if(lastKey === "KeyA") {
  //     directionArray[0][1] -= 1;
  //   } else if(lastKey === "KeyS") {
  //     directionArray[0][0] += 1;
  //   } else if(lastKey === "KeyW") {
  //     directionArray[0][0] -= 1;
  //   }
  //   if((directionArray[0][0] > 19 || directionArray [0][1] > 19) || directionArray[0][0] < 1 || directionArray[0][1] < 1) {
  //     clearInterval();
  //   }
  // }, 200);