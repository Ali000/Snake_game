let gameStart = true;
let gridArray;
let snakeArray = [{x: 1, y: 1}];
let directionArray = [[1, 1]];
let turnArray = [];
let counter = 0;
let lastKey = "";
let foodx;
let foody;
// const snake = document.querySelector("#snake");
const food = document.querySelector(".food");
const grid = document.querySelector(".grid");

const growSnake = (foodx, foody) => {
  console.log("🚀 ~ growSnake ~ snakeArray:", snakeArray)
    const genSnake = document.createElement("div");
    genSnake.style.gridArea = `${snakeArray[snakeArray.length -1].x} / ${snakeArray[snakeArray.length -1].y}`;
    genSnake.className = "snake-default";
    grid.append(genSnake);
};
growSnake();

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
  if((directionArray[0][0] > 19 || directionArray [0][1] > 19) || directionArray[0][0] < 1 || directionArray[0][1] < 1) {
    gameStart = false;
  }
  if(gameStart === true && key === lastKey) {
    setTimeout(() => {
      if(key === "KeyD") {
        for(let i = 0; i < snakeArray.length; i++) {
          snakeArray[i].y += 1;
        }
      } else if(key === "KeyA") {
        for(let i = 0; i < snakeArray.length; i++) {
          snakeArray[i].y -= 1;
        }
      } else if(key === "KeyS") {
        for(let i = 0; i < snakeArray.length; i++) {
          snakeArray[i].x += 1;
        }
      } else if(key === "KeyW") {
        for(let i = 0; i < snakeArray.length; i++) {
          snakeArray[i].x -= 1;
        }
      }
      const snakeAll = document.querySelectorAll(".snake-default");
      for(let i = 0; i < snakeArray.length; i++) {
        snakeAll[i].style.gridArea = `${snakeArray[i].x} / ${snakeArray[i].y}`
      }
      if(snakeArray[0].x === foodx && snakeArray[0].y === foody) {
         let tailX = snakeArray[snakeArray.length - 1].x;
         let tailY = snakeArray[snakeArray.length - 1].y;
        if(key === "KeyD") {
          snakeArray.push({x: tailX, y: tailY - 1});
        } else if(key === "KeyA") {
          snakeArray.push({x: tailX, y: tailY + 1});
        } else if(key === "KeyS") {
          snakeArray.push({x: tailX - 1, y: tailY});
        } else if(key === "KeyW") {
          snakeArray.push({x: tailX + 1, y: tailY});
        } 
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