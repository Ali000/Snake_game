snakeSegments = [{x: 9, y: 8}, {x: 8, y: 8}, {x: 7, y: 8}];
console.log("🚀 ~ snakeSegments:", snakeSegments)
snakeSegments.unshift(snakeSegments[snakeSegments.length - 1]);
console.log("🚀 ~ snakeSegments unshift:", snakeSegments)
snakeSegments.pop();
console.log("🚀 ~ snakeSegments pop:", snakeSegments)
