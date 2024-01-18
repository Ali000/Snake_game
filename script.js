const creatGridArray = () => {
  let arr = [];
  for(let i = 0; i < 20; i++) {
    arr.push([i + 1]);
  }
  return arr;
}

let gridArray = creatGridArray();
// console.log(gridArray);

document.addEventListener('keydown', (e) => {
  if(e.code === "KeyA" || e.code === "KeyD" || e.code === "KeyS" || e.code === "KeyW") {
    console.log(true);
  } else {
    console.log(false);
  }
}); 
