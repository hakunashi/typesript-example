import Character from "./Character"

class Warrior extends Character
{
    private sword : string
    private shield : string

    constructor (name : string, actualLP:number, lifePoints : number, style : string, statAttack : number, sword : string, shield : string)
    {
        super (name, actualLP, lifePoints, style, statAttack)
        this.sword = sword
        this.shield = shield
    }

    public attack(attackedCharacter: Character) : number
    {
        var damages = this.statAttack * 1.3
        console.log("Je suis", this.name, "j'ai actuellement", this.actualLP,"points de vie et j'attaque avec",this.sword,"sur",attackedCharacter.getName())
        attackedCharacter.defense(damages)
        return damages
    }
}

export default Warrior