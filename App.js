// const board = new Board();
const player = new Player();
console.log(player.getLocation());

// document.addEventListener("keypress", () => {

// })

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

  if(isMoveSuccess){
    // Move success
    // TODO: Board::isMonsterOnSquare() -> start fight -> if 0 HP to player = GAME OVER || else -> print stats
    const monsterInPosition = getMonsterInPosition(player.getLocation.x, player.getLocation.y)
    if(monsterInPosition != null){
      player.startFight(monsterInPosition)
      if(player.getHp === 0){
        //Player dead
        console.log("GAME OVER - YOU LOSE!");
      }else {
        // Player killed the monster
        player.setMonsterKilled();
      }
    }

    // TODO: Board::isItemOnSquare() -> take item -> print stats

    // TODO: Board::isOnEndSquare() -> WIN! -> ask to play again
    
  }
}
