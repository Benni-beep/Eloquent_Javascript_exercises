const STRENGTH = 16;
const DEXTERITY = 12;

const abilityMod = (ability) => Math.floor((ability - 10) / 2);

const weaponDamage = (diceNumber, dieSize) => ((diceNumber*dieSize+diceNumber)/2);

function damage(weaponDamage){
    return weaponDamage + (STRENGTH > DEXTERITY ? abilityMod(STRENGTH) : abilityMod(DEXTERITY));
}

console.log(damage(weaponDamage(1,8)));