//getMonsterInPosition   , getItemInPosition

class boardSquare {
  constructor() {
    this.monserInSquare = null;
    this.itemInSquare = null;
    this.playerInSquare = null;
  }
  isEmpty(x, y) {
    return (
      this.monsterInSquare == null &&
      this.itemInSquare == null &&
      this.playerInSquare == null
    );
  }
  getMonsterInSquare() {
    return this.monserInSquare;
  }
  getItemInSquare() {
    return this.itemInSquare;
  }
}

class Board {
  constructor() {
    // this.board = new boardSquare()[25];
    // for (let i = 0; i < 25; i++) {
    //   this.board[i] = new boardSquare()[25];
    // }
    this.board = new Array(25);
  }
  generateBoard() {
    for (let i = 0; i < 25; i++) {
        this.board[i] = new Array(25);
        // for (let j = 0; j < 25; j++) {
        //     this.board[i][j] = new boardSquare();
        // }
    }

    for (let i = 0; i < 25; i++) {
        for (let j = 0; j < 25; j++) {
            this.board[i][j] = new boardSquare();
        }
    }


    let monstersCNT = 0;
    let x;
    let y;
    for (let i = 0; i < 150; i++) {
      x = Math.floor(Math.random() * 25);
      y = Math.floor(Math.random() * 25);
      // console.log("random x: " + x + ", random y: " + y);
      if (
        !(x == 0 && y == 0) &&
        !(x == 24 && y == 24) &&
        this.board[x][y].isEmpty()
      ) {
        this.board[x][y].monsterInSquare = createRandomMonster();
        monstersCNT++;
        console.log("Monster created!");
      }
    }
    let itemsCNT = 0;
    for (let i = 0; i < 150; i++) {
      let x = Math.floor(Math.random() * 25);
      let y = Math.floor(Math.random() * 25);
      if (
        (!(x == 0 && y == 0) || !(x == 24 && y == 24)) &&
        this.board[x][y].isEmpty()
      ) {
        this.board[x][y].itemInSquare = new Item();
        itemsCNT++;
        console.log("Item created!");
      }
    }
  }
  getMonsterInSquare(x, y) {
    return this.board[x][y].getMonsterInSquare();
  }
  getItemInSquare(x, y) {
    return this.board[x][y].getItemInSquare();
  }
  //printBoard to console
  printBoard() {
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        if (this.board[i][j].playerInSquare) {
          console.log("| P |");
        } else if (this.board[i][j].monsterInSquare) {
          console.log("| M |");
        } else if (this.board[i][j].itemInSquare) {
          console.log("| I |");
        } else {
          console.log("| _ |");
        }
      }
      console.log("\n");
      for (let k = 0; k < 25; k++) {
        console.log("----");
      }
      console.log("\n");
    }
  }
}
