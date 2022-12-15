// const logWrapper = document.getElementById("log-text-wrapper");
//Create Player class with HP, Armor, Ad, location
class Player {
  constructor() {
    this.hp = 100;
    this.armor = 5;
    this.attackDamage = 10;
    this.location = new Location(0, 0);
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
    if (this.location.y == 24) {
      console.log("You can't move right");
      logWrapper.innerHTML =
        "<p class='log-text' id='last'>You can't move right</p>" +
        logWrapper.innerHTML;
      return false;
    } else {
      this.location.y += 1;
      console.log("Move to: X: " + this.location.x + " Y: " + this.location.y);
      document.getElementsByClassName("active")[0].classList.remove("active");
      let xID = this.location.x;
      let yID = this.location.y;
      if (xID < 10) xID = "0" + xID;
      if (yID < 10) yID = "0" + yID;
      document.getElementById("square-" + xID + yID).classList.add("active");
      return true;
    }
  }
  moveLeft() {
    if (this.location.y == 0) {
      console.log("You can't move left");
      removeLast();
      logWrapper.innerHTML =
        "<p class='log-text' id='last'>You can't move left</p>" +
        logWrapper.innerHTML;
      return false;
    } else {
      this.location.y -= 1;
      console.log("Move to: X: " + this.location.x + " Y: " + this.location.y);
      document.getElementsByClassName("active")[0].classList.remove("active");
      let xID = this.location.x;
      let yID = this.location.y;
      if (xID < 10) xID = "0" + xID;
      if (yID < 10) yID = "0" + yID;
      document.getElementById("square-" + xID + yID).classList.add("active");
      return true;
    }
  }
  moveUp() {
    if (this.location.x == 0) {
      console.log("You can't move up");
      removeLast();
      logWrapper.innerHTML =
        "<p class='log-text' id='last'>You can't move up</p>" +
        logWrapper.innerHTML;
      return false;
    } else {
      this.location.x -= 1;
      console.log("Move to: X: " + this.location.x + " Y: " + this.location.y);
      document.getElementsByClassName("active")[0].classList.remove("active");
      let xID = this.location.x;
      let yID = this.location.y;
      if (xID < 10) xID = "0" + xID;
      if (yID < 10) yID = "0" + yID;
      document.getElementById("square-" + xID + yID).classList.add("active");
      return true;
    }
  }
  moveDown() {
    if (this.location.x == 24) {
      console.log("You can't move down");
      removeLast();
      logWrapper.innerHTML =
        "<p class='log-text' id='last'>You can't move down</p>" +
        logWrapper.innerHTML;
      return false;
    } else {
      this.location.x += 1;
      console.log("Move to: X: " + this.location.x + " Y: " + this.location.y);
      document.getElementsByClassName("active")[0].classList.remove("active");
      let xID = this.location.x;
      let yID = this.location.y;
      if (xID < 10) xID = "0" + xID;
      if (yID < 10) yID = "0" + yID;
      document.getElementById("square-" + xID + yID).classList.add("active");
      return true;
    }
  }
  //set HP method
  setHp(hp) {
    console.log("trying to change hp to: ", hp);
    if (hp >= 100) this.hp = 100;
    else if (hp <= 0) this.hp = 0;
    else this.hp = hp;
    console.log("HP: " + this.hp);
    hpElement.innerText = this.hp;
    removeLast();
    logWrapper.innerHTML =
      "<p class='log-text' id='last'>HP set to " +
      this.hp +
      "</p>" +
      logWrapper.innerHTML;
  }
  //set Armor method
  setArmor(armor) {
    if (armor > 20) this.armor = 20;
    else if (armor < 0) this.armor = 0;
    else this.armor = armor;
    console.log("Armor: " + this.armor);
    armorElement.innerText = this.armor;
    removeLast();
    logWrapper.innerHTML =
      "<p class='log-text' id='last'>Armor set to " +
      this.armor +
      "</p>" +
      logWrapper.innerHTML;
  }
  //set Ad method
  setAttackDamage(ad) {
    if (ad > 20) this.attackDamage = 20;
    else if (ad < 1) this.attackDamage = 1;
    else {
      this.attackDamage = ad;
    }
    console.log("Attack Damage: " + this.attackDamage);
    adElement.innerText = this.attackDamage;
    removeLast();
    logWrapper.innerHTML =
      "<p class='log-text' id='last'>Attack Damage set to " +
      this.attackDamage +
      "</p>" +
      logWrapper.innerHTML;
  }
  //set monster killed method
  setMonsterKilled() {
    this.monsterKilled += 1;
    let xID = player.location.x;
    let yID = player.location.y;
    if (xID < 10) xID = "0" + xID;
    if (yID < 10) yID = "0" + yID;
    document.getElementById("square-" + xID + yID).classList.remove("monster");
    console.log("Monster Killed");
    removeLast();
    logWrapper.innerHTML =
      "<p class='log-text' id='last'>You killed a monster" +
      "</p>" +
      logWrapper.innerHTML;
    if (this.monsterKilled % 3 == 0) {
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
    console.log("Armor:", this.getArmor(), "damage:", damage);
    if (this.getArmor() < damage) {
      this.setHp(this.getHp() - (damage - this.getArmor()));
      // this.setHp( 5);
      console.log("1) Damage taken: " + (damage - this.getArmor()));
      removeLast();
      logWrapper.innerHTML =
        "<p class='log-text' id='last'>Damage taken: " +
        (damage - this.getArmor()) +
        "</p>" +
        logWrapper.innerHTML;
    } else {
      console.log("2) Damage taken: 0");
      removeLast();
      logWrapper.innerHTML =
        "<p class='log-text' id='last'>Damage taken: 0</p>" +
        logWrapper.innerHTML;
    }
    console.log("HP: " + this.hp);
  }
  //take item method
  takeItem(item) {
    let xID = player.location.x;
    let yID = player.location.y;
    if (xID < 10) xID = "0" + xID;
    if (yID < 10) yID = "0" + yID;
    document.getElementById("square-" + xID + yID).classList.remove("item");
    if (item.getType() == "hp") {
      if(this.getHp() + item.getValue() > 0)
        this.setHp(this.getHp() + item.getValue());
      else
        this.setHp(1);
        
      if (item.getValue() > 0) {
        console.log("Take hp item: " + item.getValue());
        removeLast();
        logWrapper.innerHTML =
          "<p class='log-text' id='last'>Take hp item: " +
          item.getValue() +
          "</p>" +
          logWrapper.innerHTML;
      } else {
        console.log("Take hp item: +" + item.getValue());
        removeLast();
        logWrapper.innerHTML =
          "<p class='log-text' id='last'>Take hp item: " +
          item.getValue() +
          "</p>" +
          logWrapper.innerHTML;
      }
    } else if (item.getType() == "armor") {
      this.setArmor(this.getArmor() + item.getValue());
      removeLast();

      if (item.getValue() > 0) {
        console.log("Take Armor item: +" + item.getValue());
        logWrapper.innerHTML =
          "<p class='log-text' id='last'>Take Armor item: +" +
          item.getValue() +
          "</p>" +
          logWrapper.innerHTML;
      } else {
        console.log("Take Armor item: " + item.getValue());
        logWrapper.innerHTML =
          "<p class='log-text' id='last'>Take Armor item: " +
          item.getValue() +
          "</p>" +
          logWrapper.innerHTML;
      }
    } else if (item.getType() == "ad") {
      this.setAttackDamage(this.getAttackDamage() + item.getValue());
      removeLast();
      if (item.getValue() > 0) {
        console.log("Take attackDamage item: +" + item.getValue());
        logWrapper.innerHTML =
          "<p class='log-text' id='last'>Take attackDamage item: +" +
          item.getValue() +
          "</p>" +
          logWrapper.innerHTML;
      } else {
        console.log("Take attackDamage item: " + item.getValue());
        logWrapper.innerHTML =
          "<p class='log-text' id='last'>Take attackDamage item: " +
          item.getValue() +
          "</p>" +
          logWrapper.innerHTML;
      }
    }
  }
  //start fight method
  startFight(monster) {
    console.log("Fight Start againts " + monster.getName());
    removeLast();
    logWrapper.innerHTML =
      "<p class='log-text' id='last'>Fight Start againts " +
      monster.getName() +
      "</p>" +
      logWrapper.innerHTML;

    while (this.getHp() > 0 && monster.getHp() > 0) {
      this.attack(monster);

      if (monster.getHp() > 0) {
        monster.attack(this);
      }

      if (this.getHp <= 0) {
        alert("You have 0 HP");
      }
    }
  }

  printStats() {
    console.log("HP:", this.hp, "Armor:", this.armor, "AD:", this.attackDamage);
    removeLast();
    logWrapper.innerHTML =
      "<p class='log-text' id='last'>HP: " +
      this.hp +
      " Armor: " +
      this.armor +
      " AttackDamage: " +
      this.attackDamage +
      "</p>" +
      logWrapper.innerHTML;
  }
}
