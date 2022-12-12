
//Create Player class with HP, Armor, Ad, location
class Player {
    constructor() {
        this.hp = 100;
        this.armor = 5;
        this.attackDamage = 10;
        this.location = new Location(0,0);
        this.monsterKilled = 0;
    }
    //get location method
    getLocation() {
        return this.location;
    }
    //get HP method
    getHp() {
        return this.hp;
    }
    //get Armor method
    getArmor() {
        return this.armor;
    }
    //get Ad method
    getAttackDamage() {
        return this.attackDamage;
    }
    //get monster killed method
    getMonsterKilled() {
        return this.monsterKilled;
    }
    moveRight() {
        if(this.location.y==24){
            console.log("You can't move right");
            return false;
        }
        else{
            this.location.y += 1
            console.log("Move to: X: " + this.location.x + " Y: " + this.location.y);
            return true;
        }
    }
    moveLeft() {
        if(this.location.y==0){
            console.log("You can't move left");
            return false;
        }
        else{
            this.location.y -= 1
            console.log("Move to: X: " + this.location.x + " Y: " + this.location.y);
            return true;
        }
    }
    moveUp() {
        if(this.location.x==0){
            console.log("You can't move up");
            return false;
        }
        else{
            this.location.x -=1;
            console.log("Move to: X: " + this.location.x + " Y: " + this.location.y);
            return true;
        }
    }
    moveDown() {
        if(this.location.x==24){
            console.log("You can't move down");
            return false;
        }
        else{
            this.location.x +=1;
            console.log("Move to: X: " + this.location.x + " Y: " + this.location.y);
            return true;
        }
    }
    //set HP method
    setHp(hp) {
        if(hp > 100)
            this.hp = 100;
        else if (hp<0)
            this.hp = 0;
        else
            this.hp = hp;
        console.log("HP: " + this.hp);
    }
    //set Armor method
    setArmor(armor) {
        if(armor > 20)
            this.armor = 20;
        else if (armor<0)
            this.armor = 0;
        else
            this.armor = armor;
        console.log("Armor: " + this.armor);
    }
    //set Ad method
    setAttackDamage(ad) {
        if(ad > 20)
           this.attackDamage = 20;
        else if(ad < 1)
           this.attackDamage = 1;
        else{
            this.attackDamage = ad;
        }
     console.log("Attack Damage: " + this.attackDamage);
    }
    //set monster killed method
    setMonsterKilled() {
        this.monsterKilled += 1;
        console.log("Monster Killed");
        if(this.monsterKilled %3 == 0){
            console.log("Level up");
            this.setHp(this.getHp() + 20);
            this.setAttackDamage(this.getAttackDamage() + 5);
            this.setArmor(this.getArmor() + 5);
        }
    }
    //attack method
    attack(target) {
        target.takeDamage(this.getAttackDamage());
    }
    //takeDamage method
    takeDamage(damage) {
        if(armor < damage){
            this.setHp( this.hp - (damage - this.getArmor()));
            console.log("Damage taken: " + damage - this.getArmor());
        }
        else{
            console.log("Damage taken: 0");
        }
        console.log("HP: " + this.hp);
    }
    //take item method
    takeItem(item) {
        if(item.getType() == "hp"){
            this.setHp(this.getHp() + item.getValue());
            if(item.getValue() > 0)
                console.log("Take hp item: +" + item.getValue());
            else{
                console.log("Take hp item: +" + item.getValue());
             }
        }
        else if(item.getType() == "armor"){
            this.setArmor(this.getArmor() + item.getValue());
            if(item.getValue() > 0)
                console.log("Take Armor item: +" + item.getValue());
            else{
                console.log("Take Armor item: +" + item.getValue());
             }
        }
        else if(item.getType() == "ad"){
            this.setAttackDamage(this.getAttackDamage() + item.getValue());
            if(item.getValue() > 0)
                console.log("Take attackDamage item: +" + item.getValue());
            else{
                console.log("Take attackDamage item: +" + item.getValue());
             }
        }
    }
    //start fight method
    startFight(monster) {
        console.log("Fight Start againts " + monster.getName());
        while(this.getHp() > 0 && monster.getHp() > 0){
            this.attack(monster);
            if(monster.getHp() > 0)
                monster.attack(this);
        }
    }
}