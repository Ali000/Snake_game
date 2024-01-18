const creatGridArray = () => {
  let arr = [];
  for(let i = 0; i < 20; i++) {
    arr.push([i + 1]);
  }
  return arr;
}

let gridArray = creatGridArray();


document.addEventListener('keydown', (e) => {
  const snake = document.querySelector("#snake");
  if(e.code === "KeyA" || e.code === "KeyD" || e.code === "KeyS" || e.code === "KeyW") {
    snake.style.gridArea = "1 /2";
  }
}); 
