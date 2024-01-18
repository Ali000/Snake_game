const creatGridArray = () => {
  let arr = [];
  for(let i = 0; i < 20; i++) {
    arr.push([]);
  }
  return arr;
}

let gridArray = creatGridArray();
console.log(gridArray);