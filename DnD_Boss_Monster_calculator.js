// PARTY
// 3 >= partyLv <= 4, assuming +1 to the attackDamageMod on lv4
const partyLv = 11;
// number of PCs
const numPCs = 1;
let attackMultiplier = 1;
if (partyLv >= 5) attackMultiplier++
if (partyLv >= 11) attackMultiplier++
if (partyLv == 20) attackMultiplier++

// difficulty: theoretical maximum of dead PCs after the fight (monster focusses on one PC)
// by default 0.1 below half:
// const dprMod = numPCs * 0.5 -0.1; 
const dprMod = numPCs * 0.5 -0.1;

//expected number of rounds the fight takes
const roundsFight = 3;

// MONSTER
// number of attacks
const numAtk = 2;

const pc = {
    // assuming an average of d8 HD and +2 conMod
    hp: (partyLv * 8 + partyLv) / 2 + partyLv * 2,
    // assuming 1 attack with damage 1d8 + damageBonus
    dpr: (((1 * 8 + 1) / 2 + 3) + Math.floor(partyLv / 4)) * attackMultiplier,    
};
console.log("number of attacks:",attackMultiplier,"\npc.dpr=",pc.dpr)
const party = {
    // average Party AC between [light armor+Dex] and [heavy armor+shield]
    ac: (15 + Math.floor(partyLv / 4) + 18) / 2,
    // average attack bonus of the party assuming +3 damageMod and +2 ASI at lv4
    attackBonus: 5 + Math.floor(partyLv / 4),
    // DPR Party, reduced by to-hit-probability of 60%
    dpr: numPCs * pc.dpr * 0.6
};

let monster = {
    //target: PCs hit Monster 60% of the time
    ac: Math.floor(-(0.6 * 20 - 21 - party.attackBonus)),
    // target: Monster lasts {roundsfight} rounds
    hp: Math.floor(party.dpr * roundsFight),
    // target: Monster hits PCs 50% of the time
    attackBonus: Math.floor(0.5 * 20 - 21 + party.ac),
    dpr: Math.floor(pc.hp / roundsFight * dprMod)
    // dpr: 22
};

function findDmgDice() {
    const diceArray = [4, 6, 8, 10, 12];
    let counter = 0;
    let reverseStrModCounter = 0;
    const atkDmg = monster.dpr / numAtk;
    // strMod technically should also influence monster.attackbonus, but doesn't because magic
    let strMod = 0;
    let a = 1;
    let x = diceArray[counter]

    // loop determines number {a} & type {x} of damage dice and strength mod for {monster.dpr}
    while ((a * x + a) / 2 + strMod != atkDmg) {

        // x geht maximal bis 12, danach a++ und x = 4
        if (counter > (diceArray.length-1)) {
            counter = 0;
            a++;
            x = diceArray[0]
        }

        counter++
        x = diceArray[counter];

        if (a == 10) {
            if (reverseStrModCounter == 0) {
                strMod++
                a = 1;
                x = diceArray[0]
                if (strMod > 10)
                    reverseStrModCounter = 1;
            }
            else {
                strMod--
                a = 1;
                x = diceArray[0]
                if (strMod < -5){
                    break;
                }
            }
        }
    }
    if (strMod < -5) console.log("calculation not possible");
    else console.log(`${numAtk} attacks, each dealing ${a}d${x}+(${strMod}) points of damage = ${((a * x + a) / 2 + strMod) * numAtk} dpr`);
};

// shows possible TPK if dprMod is set to high, assuming monster goes first
if (dprMod > numPCs) console.log("dprMod higher than number of party characters, TPK likely");
else if (dprMod >= numPCs - monster.dpr / (numPCs * pc.hp)) console.log("dprMod to high, TPK likely");
else {
    console.log(
        "Average Party Level:", partyLv,
        "\nNumber of PCs :", numPCs,
        "\nExpected number of rounds for fight:", roundsFight,
        "\nDifficulty/dprMod :", dprMod,
        "\nMonster stats:", monster
    );
    findDmgDice();
};