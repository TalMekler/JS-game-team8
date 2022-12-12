//getMonsterInPosition   , getItemInPosition


class boardSquare {
    constructor() {
        this.monserInSquare = null;
        this.itemInSquare = null;
        this.playerInSquare = null;
    }  
    isEmpty(x, y) {
        return this.monsterInSquare == null && this.itemInSquare == null && this.playerInSquare == null;
    }
}

class Board {

    constructor(player) {
        this.board = new boardSquare[25][25];
        this.monsters = [];
        this.items = [];
        this.player = player;
    }
    generateBoard() {
        for (let i = 0; i < 25; i++) {
            for (let j = 0; j < 25; j++) {
                this.board[i][j] = new boardSquare();
            }
        }
        let monstersCNT = 0;
        while(monstersCNT<150){
            let x = Math.floor(Math.random() * 25);
            let y = Math.floor(Math.random() * 25);
            if((!(x==0 && y ==0) || !(x==24 && y ==24)) && this.board[x][y].isEmpty()){
                this.board[x][y].monsterInSquare = createRandomMonster();
                monstersCNT++;
            }
        }
        let itemsCNT = 0;
        while(itemsCNT<150){
            let x = Math.floor(Math.random() * 25);
            let y = Math.floor(Math.random() * 25);
            if((!(x==0 && y ==0) || !(x==24 && y ==24)) && this.board[x][y].isEmpty()){
                this.board[x][y].itemInSquare = new Item();
                itemsCNT++;
            }
        }
    }
    getMonsterInPosition(x, y) {
        return this.board[x][y].monsterInSquare;
    }
    getItemInPosition(x, y) {
        return this.board[x][y].itemInSquare;
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
            for(let k=0;k<25;k++){
                console.log("----");
            }
            console.log("\n");
        }
    }
}