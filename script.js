// Back up from this version
let gameStart = true; // Boolean to stop/start the game
let snakeArray = [{x: 1, y: 1}]; // Array of objects each object is a snake body segment
let directionArray = [[1, 1]]; // Array to steer the head of the snake, doesn't have to be an array
let lastKey = ""; // lastkey should equal current key, if not it will stop the recursive function from executing
let ateFood = false; // Boolean to check if food is eaten or not, if not don't grow the snake
let foodx; // Food coordinates on the grid, random generation
let foody; // Food coordinates on the grid, random generation
let score = 0; // Score for each round
let highScore = 0; // High score of all rounds played, refres will reset this.

const pausePlayButton = document.querySelector("#pause-play") // Icon to play/pause the game
const pause = document.querySelector("#pause-game"); // pause icon to be shown if game is ongoing 
const play = document.querySelector("#play-game"); // play icon to be shown when the game is paused
const food = document.querySelector(".food"); // the food to be generated on the grid
const grid = document.querySelector(".grid"); // the grid, area of movement of snake
const restartMsg = document.querySelector(".restart-msg"); // the restart message to be shown in case the player lost the round
const restartBtn = document.querySelector(".restart-btn"); // a button for the player if they wish to restart
const highScoreCount = document.querySelector("#high-score-count"); // high score display on the page
const scoreCount = document.querySelector("#score-count"); // score display on the page

// restart function, will reset variables, and show appropriate message.
const restartGame = () => {
  const snakeOnGrid = document.querySelectorAll(".snake-default");
  for(let i = 0; i < snakeArray.length; i++) {
    snakeOnGrid[i].remove();
  }
  score = 0;
  snakeArray = [];
  directionArray = [[1, 1]];
  growSnake(directionArray[0][0], directionArray[0][1]);
  food.style.display = "none";
  restartMsg.style.display = "none";
  scoreCount.innerText = score;
  generateFood();
  gameStart = true;
}

// function to grow the snake
const growSnake = (x, y) => {
  const newSegment = document.createElement("div");
  snakeArray.push({x: x, y: y});
  for(let i = 0; i < snakeArray.length; i++) {
    newSegment.className = "snake-default";
    newSegment.style.gridArea = `${x} / ${y}`;
    grid.append(newSegment);
  }
  if(ateFood === true) {
    ateFood = false;
  } else {
    snakeArray.shift();
    const snakeOnGrid = document.querySelectorAll(".snake-default");
    if(snakeOnGrid.length > 1) {
      snakeOnGrid[0].remove();
    }
  }
};

// function to generate the food, once on page load & then each time a food is eaten
const generateFood = () => {
  foodx = Math.floor(Math.random() * 15) + 3;
  foody = Math.floor(Math.random() * 15) + 3;
  food.style.gridArea = `${foodx} / ${foody}`;
  food.style.display = "block";
};

// function to toggle the game between pause & play, while showing appropriate icons
const playPause = () => {
  if(gameStart) {
    gameStart = false;
    play.style.display = "block";
    pause.style.display = "none";
  } else {
    gameStart = true;
    play.style.display = "none";
    pause.style.display = "block";
  }
}

//checks for collision of the head into the wall or other body segments
const collision = () => {
  if((directionArray[0][0] > 19 || directionArray[0][1] > 19) || directionArray[0][0] < 1 || directionArray[0][1] < 1) {
    gameStart = false;
    restartMsg.style.display = "flex";
  }

  for(let i = 0; i < snakeArray.length -1; i++) {
    if((snakeArray.length > 1) && snakeArray[snakeArray.length -1].x === snakeArray[i].x && snakeArray[snakeArray.length -1].y === snakeArray[i].y) {
      gameStart = false;
      restartMsg.style.display = "flex";
    }
  }
};

//updates the score if food is eaten
const scoreUpdate = () => {
  score += 1;
  highScore = score > highScore ? score : highScore;
  highScoreCount.innerText = highScore;
  scoreCount.innerText = score;
}

// event listener for and key pressed
document.addEventListener("keydown", (key) => {
  lastKey = key.code;
  move(key.code);
});

//event listener for the restart button
restartBtn.addEventListener("click", restartGame);
//event listener for pause/play buttons
pausePlayButton.addEventListener("click", playPause);

// on page load creates a snake segment (snake head)
growSnake(directionArray[0][0], directionArray[0][1]);
// on page load generate food.
generateFood();

// function to move the snake around the grid
const move = (key) => {
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
      growSnake(directionArray[0][0], directionArray[0][1]);
      if(directionArray[0][0] === foodx && directionArray[0][1] === foody) {
        ateFood = true;
        scoreUpdate();
        generateFood();
      }
      collision();
      move(key);
    }, 200);
  }
}