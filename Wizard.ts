import Character from "./Character"

class Wizard extends Character
{
    private scrolls : string

    constructor (name : string, actualLP:number, lifePoints : number, style : string, statAttack : number, scrolls : string)
    {
      super (name, actualLP, lifePoints, style, statAttack)
      this.scrolls = scrolls
    }

    public attack(attackedCharacter: Character) : number
    {
        var damages = this.statAttack * 1.5
        console.log("Je suis", this.name, "j'ai actuellement", this.actualLP,"points de vie et j'utilise",this.scrolls,"sur",attackedCharacter.getName())
        attackedCharacter.defense(damages)
        return damages
    }

}

export default Wizard