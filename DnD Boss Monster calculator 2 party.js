/** Berechnung Monster benötigt:
 * party.attackbonus = summe aller atkboni / numberCharacters
 * party.dpr = summe aller dprs / numberCharacters
 * party.ac = Summe aller ACs / numberCharacters
 * pc.hp = Summe aller HPs / numberCharacters
 */



function proficiencyBonus() {
    // proficiencyBonus rises as per level (5, 9, 13, 17)
    proficiencyBonus = 2 + Math.floor((characterLevel - 1) / 4);
    return proficiencyBonus;
}

function attackBonus(characterClass, characterLevel){
    // Math.floor assumes +2 ASI to main attackstat at lvs dividable by 4
    attackBonus = 3 + proficiencyBonus(characterLevel) + Math.floor(characterLevel / 4);
    if (characterClass == fighter && characterLevel >= 6) attackBonus++
    if (characterClass == fighter && characterLevel >= 14) attackBonus++
    if (attackBonus > 5) attackBonus = 5;
    return attackBonus;
}

function characterDPR(characterClass, characterLevel){
    // Math.floor assumes +2 ASI to main attackstat at lvs dividable by 4
    damageBonus = 3 + Math.floor(characterLevel / 4);
    if (damageBonus > 5) damageBonus = 5;
    numberAttacks = 1;
    if (characterClass == barbarian || fighter || monk || paladin || ranger && characterLevel >= 5) numberAttacks++
    if (characterClass == fighter && characterLevel >= 11) numberAttacks++
    if (characterClass == fighter && characterLevel >= 20) numberAttacks++
    characterDPR = numberAttacks * (weaponDamage + damageBonus)
    return characterDPR
}

function hitPoints(characterClass, characterLevel){
    hp = characterClass.HD + (characterLevel-1)*(playerCharacter.characterClass.HD-1)/2 + characterLevel * playerCharacter.characterClass.conMod
    return hp;
}

function playerCharacter(characterClass, characterLevel){
    attackBonus(characterClass, characterLevel);
    characterDPR(characterClass, characterLevel);
    hitPoints(characterClass, characterLevel);
    numberCharacters++    
}


function partyStats() {
    numberCharacters = 0;
    partyHP = 0;
    partyDPR = 0;
        
    // playercharacter(class, characterLevel)
    playerCharacter(fighter, 1);
};
console.log(partyStats());