const creatGridArray = () => {
  let arr = [];
  for(let i = 0; i < 20; i++) {
    arr.push([]);
  }
  return arr;
}

let gameStart = false;
let gridArray = creatGridArray();
let positionArray = [[1, 1]];
let directionArray = [[1, 1]];
let counter = 0; //counter to stop the while loop incase I miss up
let lastKey = ""; // last key pressed on keyboard
const snake = document.querySelector("#snake"); // the snake that should move (its a green square at the moment)

//listen for key pressed
document.addEventListener('keyup', (e) => {
  lastKey = e.code;
  console.log(lastKey);
  moveLeft(e.code);
});

//function to move left, right now it doesn't move the snake.
// the Idea is the while loop will keep going till another key is pressed.
const moveLeft = (key) => {
  // while(lastKey === "KeyD") {
  //   console.log(key);
  //   counter++;
  //   if(counter === 5000) {
  //     break;
  //   }
  // }
}
// 

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
