class Character
{
    protected name : string
    protected actualLP : number
    protected lifePoints : number
    protected style : string
    protected statAttack : number

    constructor (name : string, actualLP:number, lifePoints : number, style : string, statAttack : number)
    {
        this.name = name
        this.actualLP = actualLP
        this.lifePoints = lifePoints
        this.style = style
        this.statAttack = statAttack
    }

    public getName()
    {
        return this.name
    }

    public attack(attackedCharacter: Character)
    {
        var damages = this.statAttack
        console.log("Je suis", this.name, "j'ai actuellement", this.actualLP,"points de vie et j'attaque",attackedCharacter.getName())
        attackedCharacter.defense(damages)
        return damages
    }

    public defense(damages : number)
    {
        var actualLP = this.actualLP - damages
        this.actualLP = actualLP
        return this.isAlive()
    }

    private isAlive()
    {
        if (this.actualLP > 0)
        {
            console.log("Il reste à",this.name,this.actualLP,"points de vie et reste vivant!")
            return true
        }
        else
        {
            console.log(this.name,"est mort.")
            return false
        }
    }
}

export default Character