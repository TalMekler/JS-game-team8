// //create a function that creates a random monster from the json file
// function createRandomMonster() {
//   let randomMonster =
//     monsterKeys[Math.floor(Math.random() * monsterKeys.length)];
//   return monsterList[randomMonster];
// }

// class Monster {
//   constructor(name, hp, attackDamage, armor) {
//     // location is a Location object
//     this.name = name;
//     this.hp = hp;
//     this.attackDamage = attackDamage;
//     this.armor = armor;
//   }
//   attack(target) {
//     // returns the attack damage
//     target.takeDamage(this.getAttackDamage);
//   }
//   takeDamage(damage) {
//     // takes damage and reduces health - armor
//     if (damage > armor) {
//       this.hp -= damage - armor;
//       console.log(this.name + " took " + (damage - armor) + " damage!");
//     } else {
//       console.log(this.name + " took no damage!");
//     }
//     console.log(this.name + " has " + this.hp + " health left!");
//   }
//   isAlive() {
//     // returns true if health is greater than 0
//     return this.hp > 0;
//   }

//   //setter and getter
//   setName(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
//   setHp(hp) {
//     this.hp = hp;
//   }
//   getHp() {
//     return this.hp;
//   }
//   setAttackDamage(attackDamage) {
//     this.attackDamage = attackDamage;
//   }
//   getAttackDamage() {
//     return this.attackDamage;
//   }
//   setArmor(armor) {
//     this.armor = armor;
//   }
//   getArmor() {
//     return this.armor;
//   }
//   //set x and set y location
//   setX(x) {
//     this.location.x = x;
//   }
//   getX() {
//     return this.location.x;
//   }
//   setY(y) {
//     this.location.y = y;
//   }
//   getY() {
//     return this.location.y;
//   }
// }

// const monsterList = {
//   Mike: new Monster("Mike", 42, 5, 1),
//   Pikachu: new Monster("Pikachu", 51, 10, 0),
//   Squirtle: new Monster("Squirtle", 60, 15, 0),
//   Charmander: new Monster("Charmander", 60, 15, 0),
//   Bulbasaur: new Monster("Bulbasaur", 60, 15, 0),
//   Eevee: new Monster("Eevee", 60, 15, 0),
//   Snorlax: new Monster("Snorlax", 60, 15, 0),
//   Mew: new Monster("Mew", 60, 15, 0),
//   Mewtwo: new Monster("Mewtwo", 60, 15, 0),
//   Gengar: new Monster("Gengar", 60, 15, 0),
//   Gyarados: new Monster("Gyarados", 60, 15, 0),
//   Dragonite: new Monster("Dragonite", 60, 15, 0),
//   Moltres: new Monster("Moltres", 60, 15, 0),
//   Zapdos: new Monster("Zapdos", 60, 15, 0),
//   Articuno: new Monster("Articuno", 60, 15, 0),
// };
// const monsterKeys = Object.keys(monsterList);

// class Location {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   distanceTo(otherLocation) {
//     // returns the distance between this location and the other location
//     return Math.sqrt(
//       Math.pow(this.x - otherLocation.x, 2) +
//         Math.pow(this.y - otherLocation.y, 2)
//     );
//   }
//   //setter and getter
//   setX(x) {
//     this.x = x;
//   }
//   getX() {
//     return this.x;
//   }
//   setY(y) {
//     this.y = y;
//   }
//   getY() {
//     return this.y;
//   }
// }

// //Create Player class with HP, Armor, Ad, location
// class Player {
//   constructor() {
//     this.hp = 100;
//     this.armor = 5;
//     this.attackDamage = 10;
//     this.location = new Location(0, 0);
//     this.monsterKilled = 0;
//   }
//   //get location method
//   getLocation() {
//     return this.location;
//   }
//   //get HP method
//   getHp() {
//     return this.hp;
//   }
//   //get Armor method
//   getArmor() {
//     return this.armor;
//   }
//   //get Ad method
//   getAttackDamage() {
//     return this.attackDamage;
//   }
//   //get monster killed method
//   getMonsterKilled() {
//     return this.monsterKilled;
//   }
//   moveRight() {
//     if (this.location.y == 24) {
//       console.log("You can't move right");
//       return false;
//     } else {
//       this.location.y += 1;
//       console.log("Move to: X: " + this.location.x + " Y: " + this.location.y);
//       return true;
//     }
//   }
//   moveLeft() {
//     if (this.location.y == 0) {
//       console.log("You can't move left");
//       return false;
//     } else {
//       this.location.y -= 1;
//       console.log("Move to: X: " + this.location.x + " Y: " + this.location.y);
//       return true;
//     }
//   }
//   moveUp() {
//     if (this.location.x == 0) {
//       console.log("You can't move up");
//       return false;
//     } else {
//       this.location.x -= 1;
//       console.log("Move to: X: " + this.location.x + " Y: " + this.location.y);
//       return true;
//     }
//   }
//   moveDown() {
//     if (this.location.x == 24) {
//       console.log("You can't move down");
//       return false;
//     } else {
//       this.location.x += 1;
//       console.log("Move to: X: " + this.location.x + " Y: " + this.location.y);
//       return true;
//     }
//   }
//   //set HP method
//   setHp(hp) {
//     if (hp > 100) this.hp = 100;
//     else if (hp < 0) this.hp = 0;
//     else this.hp = hp;
//     console.log("HP: " + this.hp);
//   }
//   //set Armor method
//   setArmor(armor) {
//     if (armor > 20) this.armor = 20;
//     else if (armor < 0) this.armor = 0;
//     else this.armor = armor;
//     console.log("Armor: " + this.armor);
//   }
//   //set Ad method
//   setAttackDamage(ad) {
//     if (ad > 20) this.attackDamage = 20;
//     else if (ad < 1) this.attackDamage = 1;
//     else {
//       this.attackDamage = ad;
//     }
//     console.log("Attack Damage: " + this.attackDamage);
//   }
//   //set monster killed method
//   setMonsterKilled() {
//     this.monsterKilled += 1;
//     console.log("Monster Killed");
//     if (this.monsterKilled % 3 == 0) {
//       console.log("Level up");
//       this.setHp(this.getHp() + 20);
//       this.setAttackDamage(this.getAttackDamage() + 5);
//       this.setArmor(this.getArmor() + 5);
//     }
//   }
//   //attack method
//   attack(target) {
//     target.takeDamage(this.getAttackDamage());
//   }
//   //takeDamage method
//   takeDamage(damage) {
//     if (armor < damage) {
//       this.setHp(this.hp - (damage - this.getArmor()));
//       console.log("Damage taken: " + damage - this.getArmor());
//     } else {
//       console.log("Damage taken: 0");
//     }
//     console.log("HP: " + this.hp);
//   }
//   //take item method
//   takeItem(item) {
//     if (item.getType() == "hp") {
//       this.setHp(this.getHp() + item.getValue());
//       if (item.getValue() > 0) console.log("Take hp item: +" + item.getValue());
//       else {
//         console.log("Take hp item: +" + item.getValue());
//       }
//     } else if (item.getType() == "armor") {
//       this.setArmor(this.getArmor() + item.getValue());
//       if (item.getValue() > 0)
//         console.log("Take Armor item: +" + item.getValue());
//       else {
//         console.log("Take Armor item: +" + item.getValue());
//       }
//     } else if (item.getType() == "ad") {
//       this.setAttackDamage(this.getAttackDamage() + item.getValue());
//       if (item.getValue() > 0)
//         console.log("Take attackDamage item: +" + item.getValue());
//       else {
//         console.log("Take attackDamage item: +" + item.getValue());
//       }
//     }
//   }
//   //start fight method
//   startFight(monster) {
//     console.log("Fight Start againts " + monster.getName());
//     while (this.getHp() > 0 && monster.getHp() > 0) {
//       this.attack(monster);
//       if (monster.getHp() > 0) monster.attack(this);
//     }
//   }
// }

// //getMonsterInPosition   , getItemInPosition

// class boardSquare {
//   constructor() {
//     this.monserInSquare = null;
//     this.itemInSquare = null;
//     this.playerInSquare = null;
//   }
//   isEmpty(x, y) {
//     return (
//       this.monsterInSquare == null &&
//       this.itemInSquare == null &&
//       this.playerInSquare == null
//     );
//   }
//   getMonsterInSquare() {
//     return this.monsterInSquare;
//   }
//   getItemInSquare() {
//     return this.itemInSquare;
//   }
// }

// class Board {
//   constructor() {
//     this.board = boardSquare[25];
//     for(let i = 0; i < 25; i++) {
//       board[i] = boardSquare[25];
//     }
//   }
//   generateBoard() {
//     // for (let i = 0; i < 25; i++) {
//     //     for (let j = 0; j < 25; j++) {
//     //         this.board[i][j] = new boardSquare();
//     //     }
//     // }
//     let monstersCNT = 0;
//     let x;
//     let y;
//     // for (let i = 0; i < 150; i++) {
//       x = Math.floor(Number(Math.random() * 25));
//       y = Math.floor(Number(Math.random() * 25));
//       console.log("random x: " + x + ", random y: " + y);
//       // if (!(x === 0 && y === 0) && !(x === 24 && y === 24) && this.board[x][y].isEmpty()) {
//       //   // this.board[x][y].monsterInSquare = createRandomMonster();
//         console.log("1 -> " + this.board[x][y].monserInSquare);
//         this.board[x][y] = 1;
//         console.log("2 -> " + this.board[x][y].monserInSquare);
//       //   monstersCNT++;
//       //   console.log("Monster created!");
//       //   console.log(this.board[x][y].getMonsterInSquare());
//         console.log("3 -> " + this.board[4][4].monserInSquare);
//       // }
//     // }
//     // let itemsCNT = 0;
//     // // for (let i = 0; i < 150; i++) {
//     //   x = Math.floor(Math.random() * 25);
//     //   y = Math.floor(Math.random() * 25);
//     //   if (!(x == 0 && y == 0) && !(x == 24 && y == 24) && this.board[x][y].isEmpty()) {
//     //     this.board[x][y].itemInSquare = new Item();
//     //     itemsCNT++;
//     //     console.log("Item created!");
//     //   }
//     // }
//   }
//   getMonsterInSquare(x, y) {
//     return this.board[x][y].getMonsterInSquare();
//   }
//   getItemInSquare(x, y) {
//     return this.board[x][y].getItemInSquare();
//   }
//   //printBoard to console
//   printBoard() {
//     for (let i = 0; i < 25; i++) {
//       let st = "";
//       for (let j = 0; j < 25; j++) {
//         if (this.board[i][j].playerInSquare) {
//           // console.log("| P |");
//           st += " | P |";
//         } else if (this.board[i][j].getMonsterInSquare() !== null) {
//           st += " | M |";
//         } else if (this.board[i][j].getItemInSquare() !== null) {
//           st += " | I |";
//         } else {
//           st += " | _ |";
//         }
//       }
//       console.log(st);
//       st = "";
//       for (let k = 0; k < 25; k++) {
//         st += " -----";
//       }
//       console.log(st);
//     }
//   }
// }

function printGame(player, board) {
  // TODO: print player stat
  board.print();
}

const player = new Player();
const board = new Board();

console.log("Start generate");
// board.printBoard();
board.generateBoard();
// board.printBoard();
let gameOn = true;
console.log(player.getLocation());

document.addEventListener("keypress", () => {

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
      const monsterInPosition = board.getMonsterInSquare(
        player.getLocation.x,
        player.getLocation.y
      );
      const itemInPosition = board.getItemInSquare(
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
} else {
  console.log("Press on keyboard to restart");
}})
