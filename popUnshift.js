snakeSegments = [{x: 9, y: 8}, {x: 8, y: 8}, {x: 7, y: 8}, {x: 6, y: 8}];

// unshift first then pop
// console.log("🚀 ~ snakeSegments:", snakeSegments)
// snakeSegments.unshift(snakeSegments[snakeSegments.length - 1]);
// console.log("🚀 ~ snakeSegments unshift:", snakeSegments)
// snakeSegments.pop();
// console.log("🚀 ~ snakeSegments pop:", snakeSegments)

//pop then shift
console.log("🚀 ~ snakeSegments:", snakeSegments)
snakeSegments.pop();
console.log("🚀 ~ snakeSegments pop:", snakeSegments)
snakeSegments.shift();
console.log("🚀 ~ snakeSegments shift:", snakeSegments)