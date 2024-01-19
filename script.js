let gameStart = true;
let gridArray;
let snakeArray = [[1, 1]];
let directionArray = [[1, 1]];
let counter = 0; //counter to stop the while loop in case I miss up
let lastKey = ""; // last key pressed on keyboard
let foodx;
let foody;
const snake = document.querySelector("#snake");
const food = document.querySelector(".food");

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

const growSnake = () => {

};
document.addEventListener("keydown", (key) => {
  lastKey = key.code;
  move(lastKey);
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
      if(directionArray[0][0] === foodx && directionArray[0][1] === foody) {
        console.log("🚀 ~ setTimeout ~ directionArray[0][1]:", directionArray[0][1])
        console.log("🚀 ~ setTimeout ~ directionArray:[0][0]", directionArray[0][0])
        console.log("🚀 ~ setTimeout ~ foody:", foody)
        console.log("🚀 ~ setTimeout ~ foodx:", foodx)
        food.style.display = "none";
        generateFood();
      }
      move(key);
  }, 150);
}
};
//listen for key pressed
// document.addEventListener('keyup', (e) => {
//   lastKey = e.code;
//   console.log(lastKey);
//   gridArray.forEach(() => {
//     counter++;
//     console.log("outside timeout counter " + counter);
//     setTimeout(() => {
//       moveLeft(e.code);
//       console.log(counter);
//     }, counter * 200);
//   });
// });

//function to move left, right now it doesn't move the snake.
// the Idea is the while loop will keep going till another key is pressed.
const moveLeft = (key) => {
      snake.style.gridArea = `${positionArray[0][0]} / ${positionArray[0][1] + 1}`;
      positionArray[0][1] += 1;
      console.log(key);
  }

//   if(e.code === "KeyD" && lastKey !== "KeyD") {
//     lastKey = "KeyD";
//     while(lastKey === "KeyD") {
//       counter++;
//       if(counter === 20000) {
//         break;
//       }
//     }
//       setTimeout(() => {
//         snake.style.gridArea = `${positionArray[0][0]} / ${positionArray[0][1] + 1}`;
//         if(positionArray[0][1] < 19) {
//           positionArray[0][1] += 1;
//           console.log("positionArray " + positionArray[0][1]);
//         } else {
//           gameStart = false;
//         }
//       },200);
    
//   } else if(e.code === "KeyA") {
//     console.log("A ");
//     lastKey = "KeyA";
//   } else if(e.code === "KeyS") {
//     console.log("S ");
//     lastKey = "KeyS";
//   } else if(e.code === "KeyW") {
//     console.log("W ");
//     lastKey = "KeyW";
//   }
