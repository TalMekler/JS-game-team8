
const monsterList = {
    "Mike": Monster("Mike", 42, 5, 1),
    "Pikachu": Monster("Pikachu", 51, 10, 0),
    "Squirtle": Monster("Squirtle", 60, 15, 0),
    "Charmander": Monster("Charmander", 60, 15, 0),
    "Bulbasaur": Monster("Bulbasaur", 60, 15, 0),
    "Eevee": Monster("Eevee", 60, 15, 0 ),
    "Snorlax": Monster("Snorlax", 60, 15, 0),
    "Mew": Monster("Mew", 60, 15, 0),
    "Mewtwo": Monster("Mewtwo", 60, 15, 0),
    "Gengar": Monster("Gengar", 60, 15, 0),
    "Gyarados": Monster("Gyarados", 60, 15, 0),
    "Dragonite": Monster("Dragonite", 60, 15, 0),
    "Moltres": Monster("Moltres", 60, 15, 0),
    "Zapdos": Monster("Zapdos", 60, 15, 0),
    "Articuno": Monster("Articuno", 60, 15, 0),
}
const monsterKeys = Object.keys(monsterList);
//create a function that creates a random monster from the json file
function createRandomMonster(){
    let randomMonster = monsterKeys[Math.floor(Math.random() * monsterKeys.length)];
    return monsterList[randomMonster];
}


class Monster{
    constructor(name, hp, attackDamage, armor){ // location is a Location object
        this.name = name;
        this.hp = hp; 
        this.attackDamage = attackDamage; 
        this.armor = armor;  
    }
    attack(){ // returns the attack damage
        return this.attackDamage;
    }
    takeDamage(damage){ // takes damage and reduces health - armor
        if(damage > armor)
            this.hp -= (damage-armor);
    }
    isAlive(){ // returns true if health is greater than 0
        return this.hp > 0;
    }

    //setter and getter
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setHp(hp){
        this.hp = hp;
    }
    getHp(){
        return this.hp;
    }
    setAttackDamage(attackDamage){
        this.attackDamage = attackDamage;
    }
    getAttackDamage(){
        return this.attackDamage;
    }
    setArmor(armor){
        this.armor = armor;
    }
    getArmor(){
        return this.armor;
    }
    //set x and set y location
    setX(x){
        this.location.x = x;
    }
    getX(){
        return this.location.x;
    }
    setY(y){
        this.location.y = y;
    }
    getY(){
        return this.location.y;
    }
    

}
