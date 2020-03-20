// Your code here!
class Pokemon {
    constructor(name, attack, defense, health, type){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.type = type;
        this.initial_health = health;
    }
  
    takeDamage = function(amt_of_damage) {
         this.health -= amt_of_damage;
         if (this.health < 1)
         {
             this.health = 0;
         }
         
    }
   
    attackOppenent = function(pokemon) {
        let damage = 0
        if (this.attack > pokemon.defense)
        {
            damage = this.attack - pokemon.defense;
            pokemon.takeDamage(damage);
        }
        else
        {
            damage = pokemon.defense-this.attack;
            this.takeDamage(damage);
        }
    }
   
    display = function() {
        let health_str = this.health.toString();
        let initial_health_str = this.initial_health.toString();
        return (this.name.toUpperCase() + " " + "(" + this.type + ")" + " " +  health_str + "/" + initial_health_str);
  
    }       
 }
 /* test code
 const charmander = new Pokemon("charmander", 12,8,30,"fire");
 const bulbasaur = new Pokemon("bulbasaur", 7, 9, 35, "grass/poison");
 charmander.takeDamage(5);
 console.log(charmander.health)
 console.log(bulbasaur.health)
 charmander.attackOppenent(bulbasaur);
 console.log(bulbasaur.health)
 bulbasaur.display();
  
 */

// Don't edit this line!
module.exports = Pokemon;
