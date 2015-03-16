//human konstruktormetod
function Human(name, age){
  this.name = name;
  this.age = Math.floor(Math.random()*(70-20)+20); //en ålder mellan 20 till 70
}

//Viking konstruktormetod
function Viking(name, strength, weapon){
  Human.call(this, name);
  this.health = 100; //alla börjar med 100 liv
  this.strength = strength;
  this.weapon = weapon;
}

//Ärver från human
Viking.prototype = Object.create(Human.prototype);

//Lägger till metoden hit till vikingprototyp
Viking.prototype.hit = function(enemy){
  var damage = 0;
  
  if(enemy.health <= 0){
    return "Enough! He's dead..";
  }else if(this.strength >= 20){
    damage = Math.floor(Math.random()*(35-25)+25);  
  }else{
    damage = Math.floor(Math.random()*(20-10)+10);
  }
  //tar bort liv för varje slag 
  enemy.health -= damage;
  return this.name + " hit " + enemy.name + " for " + damage + " damage";
};


function Jarl(name){
  Viking.call(this);
  this.name = "Jarl " + name;
}

//Ärver från viking
Jarl.prototype = Object.create(Viking.prototype);

//Ger Jarlen en kommandometod
Jarl.prototype.command = function(){
  return "PLUNDER!!";
};


var orvar = new Viking("Orvar", 20, "Svärd");
var halvdan = new Viking("Halvdan", 10, "Svärd");

var byvar = new Jarl("Byvar");