const creatGridArray = () => {
  let arr = [];
  for(let i = 0; i < 20; i++) {
    arr.push([i + 1]);
  }
  return arr;
}

let gridArray = creatGridArray();
let positionArray = [[1, 1]];

document.addEventListener('keydown', (e) => {
  const snake = document.querySelector("#snake");
  if(e.code === "KeyA") {

  } else if(e.code === "KeyD") {
    for(let i = 0; i < 20; i++) {
      setTimeout(() => {
        snake.style.gridArea = `${positionArray[0][0]} / ${positionArray[0][1] + 1}`;
        if(positionArray[0][1] < 19) {
          positionArray[0][1] += 1; 
        }
      }, i * 200);


    }

  } else if(e.code === "KeyS") {
    snake.style.gridArea = snake.style.gridArea = `${positionArray[0][0] + 1} / ${positionArray[0][1]}`;;
  } else if(e.code === "KeyW") {
    
  }
}); 
