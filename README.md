<details>
<summary>Table of Contents</summary>

* About the project
  * Snake Game
  * Built with
  * Live Link
* Game Flow
* How to Play
* Code Snippte
   * Grow Snake Logic
   * Recursion Logic
* Learned Outcomes
* Future Improvments
* Sources

</details>
<br>

---

# About the project

### Snake Game

![Snake Game](snakeGame.png)

This project was built as part of the **General Assembly's Software Engineering Immersive** course, the project is built without the use of any libraries or frameworks.<br>
The purpose of the project is to practice DOM manipulation with javascript.

### Built with
- ![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 
- ![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) 
- ![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) 


### Live Link
https://acidic-friction.surge.sh/
---

# Game Flow
The snake would respawn on the grid and the goal is to navigate the area for food and not hit the wall or the body of the snake.<br>
The snake would start as a head only and would grow in length when food is eaten.<br>

---

# How to play
* W, A, S, & D keys are used to control the snake.
* Initially the snake will be still, till the player moves it.
* A pause/play buttons are available. After pausing the player will have to use WASD to move the snake again.
* score & high score are tracked.
* If the player loses at the game they will be prompted to restart.
* The player can navigate between the instructions page & the game page.

![Instruction page](snakeInstructions.png)

---

# Code Snippet

## Snake Gworth Logic
```
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
```

This code will be updated constanlty, with every movement the body segment is shown and then removed, giving the illusion of motion around the grid. When food is eaten one segment of the body will not be removed, which will increase the length of the snake.

---

## Recursion Logic

```
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
        score += 1;
        highScore = score > highScore ? score : highScore;
        highScoreCount.innerText = highScore;
        scoreCount.innerText = score;
        generateFood();
      }
      selfHit();
      move(key);
    }, 200);
  }
}

```
The Recusive function will allow to input interruptions to change the direction of the snake.

---

# Learned Outcomes
1- Loops executes as fast as possible, setTimer or setInterval will not prevent that. \
2- Each event listener trigger adds new commands to the execution stack. \
3- Recusion can be used to detect user input, however each event listener will create a seperate recursive command in the execution stack. \
4- setInterval offers better control over recuring commands, as they can be cleared using clearInterval. \
5- DOM manipulation, functions such as:
  * addEventListener
  * classList.toggle
  * createElement
  * append
  * querySelector

---

# Future Improvments
1- Use setInterval function instead of recursion to continuously move the snake. \
2- Improve the snake design. Make the snake head & the tail distinct from other body segments. \
3- Create a logo for the game. \
4- Code refactor. \
5- Add options to make the game more challenging.
  * Obstacles on the map.
  * Multiple maps.
  * Multiple food types.
  * Add harmful food or enemies.




# Sources
https://www.freecodecamp.org/news/javascript-2d-arrays/ \
https://css-tricks.com/snippets/css/complete-guide-grid/ \
https://www.youtube.com/watch?v=EiNiSFIPIQE&t=641s&ab_channel=SlayingTheDragon \
https://forum.freecodecamp.org/t/display-css-grid-lines/440618 \
https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event \
https://www.toptal.com/developers/keycode \
https://developer.mozilla.org/en-US/docs/Web/API/setInterval \
https://travishorn.com/delaying-foreach-iterations-2ebd4b29ad30 \
https://stackoverflow.com/questions/11488014/asynchronous-process-inside-a-javascript-for-loop \
https://www.freecodecamp.org/news/recursion-in-javascript/ \
https://medium.com/codex/how-to-get-the-last-element-in-an-array-in-javascript-c106f2f4b830 \
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift \
https://community.zapier.com/featured-articles-65/add-remove-items-in-an-array-with-push-pop-shift-unshift-14074 \
https://www.tutorialrepublic.com/faq/how-to-stop-setinterval-call-in-javascript.php \
