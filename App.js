function printGame(player, board) {
  // TODO: print player stat
  board.print();
}

// const board = new Board();
const player = new Player();
// const board = new Board();
let gameOn = true;
console.log(player.getLocation());

// document.addEventListener("keypress", () => {

// })

if (gameOn) {
  document.onkeydown = checkKey;

  function checkKey(e) {
    let isMoveSuccess = false;
    e = e || window.event;

    if (e.keyCode == "38" || e.key == "w" || e.key == "W") {
      // up arrow
      isMoveSuccess = player.moveUp();
    } else if (e.keyCode == "40" || e.key == "s" || e.key == "S") {
      // down arrow
      isMoveSuccess = player.moveDown();
    } else if (e.keyCode == "37" || e.key == "a" || e.key == "A") {
      // left arrow
      isMoveSuccess = player.moveLeft();
    } else if (e.keyCode == "39" || e.key == "d" || e.key == "D") {
      // right arrow
      isMoveSuccess = player.moveRight();
    }

    if (isMoveSuccess) {
      // Move success
      

      // TODO: Board::isMonsterOnSquare() -> start fight -> if 0 HP to player = GAME OVER || else -> print stats
      const monsterInPosition = board.getMonsterInPosition(
        player.getLocation.x,
        player.getLocation.y
      );
      const itemInPosition = board.getMonsterInPosition(
        player.getLocation.x,
        player.getLocation.y
      );
      
      if (monsterInPosition != null) {
        player.startFight(monsterInPosition);
        if (player.getHp === 0) {
          //Player dead
          gameOn = false;
          console.log("GAME OVER - YOU LOSE!");
        } else {
          // Player killed the monster
          player.setMonsterKilled();
        }
      }

      // TODO: Board::isItemOnSquare() -> take item -> print stats
      else if (itemInPosition != null) {
        player.takeItem(itemInPosition);
      }

      // TODO: isOnEndSquare() -> WIN! -> ask to play again
      else if (player.getLocation.x === 24 && player.getLocation.y === 24) {
        gameOn = false;
        console.log("YOU WIN!");
      }

      printGame(player, board);
    }
  }
}else {
  console.log("Press on keyboard to restart");
}
