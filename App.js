// const logWrapper = document.getElementById("log-text-wrapper");
{
  /* <p class="log-text last">check3</p> */
}

function printGame(player, board) {
  // TODO: print player stat
  // player.printStats();

  // board.printBoard();
}

let player = new Player();
let board = new Board();
board.generateBoard(player);
board.printBoard();
hpElement.innerText = player.getHp();
armorElement.innerText = player.getArmor();
adElement.innerText = player.getAttackDamage();
let gameOn = true;

document.addEventListener("keypress", () => {
  if (gameOn === true) {
    document.onkeydown = checkKey;

    function checkKey(e) {
      let isMoveSuccess = false;
      e = e || window.event;
      if (gameOn) {
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
      }

      if (isMoveSuccess) {
        // Move success
        // console.log( board.playerLocation.get("x"), board.playerLocation.get("x"));
        board.removePlayerFromBoard(player);
        // TODO: Board::isMonsterOnSquare() -> start fight -> if 0 HP to player = GAME OVER || else -> print stats
        console.log();
        let monsterInPosition = board.getMonsterInSquare(
          parseInt(player.getLocation().x),
          parseInt(player.getLocation().y)
        );
        let itemInPosition = board.getItemInSquare(
          parseInt(player.getLocation().x),
          parseInt(player.getLocation().y)
        );

        if (monsterInPosition != null) {
          player.startFight(monsterInPosition);
          if (player.getHp() == 0) {
            //Player dead
            gameOn = false;
            // alert("GAME OVER - YOU LOSE!");
            document.getElementById("end-game").classList.add("active");
            document.querySelector("#end-game .text h1").innerText = "You Lose!"
          } else {
            // Player killed the monster
            player.setMonsterKilled();
            board.removeMonsterFromBoard(player.getLocation());
          }
        }

        // TODO: Board::isItemOnSquare() -> take item -> print stats
        else if (itemInPosition != null) {
          player.takeItem(itemInPosition);
          board.removeItemFromBoard(player.getLocation());
        }

        // TODO: isOnEndSquare() -> WIN! -> ask to play again
        else if (
          player.getLocation().x === 24 &&
          player.getLocation().y === 24
        ) {
          gameOn = false;
          document.getElementById("end-game").classList.add("active");
            document.querySelector("#end-game .text h1").innerText = "You Won!"
        }

        printGame(player, board);
      }
    }
  } else {
    console.log("Refresh the page to restart!");
  }
});
