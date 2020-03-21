import Character from "./Character"
import Wizard from "./Wizard"
import Warrior from "./Warrior"

var gandalf : Wizard = new Wizard ('Gandalf',50, 50, 'magic',30, "foudre")
var frodon : Warrior = new Warrior('Frodon', 60, 60, 'guerrier',20, "épée longue", "grand bouclier")

frodon.attack(gandalf)
gandalf.attack(frodon)
frodon.attack(gandalf)
gandalf.attack(frodon)
//frodon.isAlive() // true or false