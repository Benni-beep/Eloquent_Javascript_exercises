// influences proficiencyBonus
const characterLevel = 1;
/** Origin(originSubtype1, originSubtype2,...) {string}
 * Synth(Houston, Visser, Shenzen)
 */
const origin = "Synth";
const originSubtype = "Visser";
const characterClass = "Enforcer";
// standard array = [16, 14, 13, 12, 10, 9]
const strength = 13;
const dexterity = 16;
const constitution = 12;
const intelligence = 14;
const technology = 10;
const people = 9;

/** To Do
 * add misc racial boni
 * need a way of selecting only a certain {number} of skills (defined by characterClass) from array [classSkillList]
 * -> add proficiencyBonus only to those skills
 */

function main() {
  const ability = [
    (STR = {
      name: "Str",
      value: strength,
    }),
    (DEX = {
      name: "Dex",
      value: dexterity,
    }),
    (CON = {
      name: "Con",
      value: constitution,
    }),
    (INT = {
      name: "Int",
      value: intelligence,
    }),
    (TEC = {
      name: "Tec",
      value: technology,
    }),
    (PEO = {
      name: "Peo",
      value: people,
    }),
  ];

  function abilityModifier(ability) {
    abilityMod = Math.floor((ability - 10) / 2);
    return abilityMod;
  }

  function originAbilityAjustment() {
    switch (origin.toLowerCase()) {
      case "synth":
        ability[ability.indexOf(CON)].value += 2;
        switch (originSubtype.toLowerCase()) {
          case "houston":
            ability[ability.indexOf(DEX)].value += 1;
            break;
          case "shenzen":
            ability[ability.indexOf(PEO)].value += 1;
            break;
          case "visser":
            ability[ability.indexOf(STR)].value += 1;
            break;
        }
        break;
    }
  }

  originAbilityAjustment(origin, originSubtype);

  // lists abilities with ability modifiers {string}
  function finalAbilityStats() {
    let fas = "";
    for (let counter = 0; counter < ability.length; counter++) {
      (fas += `\n${ability[counter].name}: `),
        (fas += `${ability[counter].value} (`);
      let mod = abilityModifier(ability[counter].value);
      if (mod >= 0) fas += "+";
      fas += `${mod})`;
    }
    return fas;
  }

  function proficiencyBonus() {
    profB = 2 + Math.floor((characterLevel - 1) / 4);
    return profB;
  }

  const skillList = [
    (ACROBATICS = {
      name: "Acrobatics",
      value: abilityModifier(ability[ability.indexOf(DEX)].value),
      classSkill: false,
    }),
    (ATHLETICS = {
      name: "Athletics",
      value: abilityModifier(ability[ability.indexOf(STR)].value),
      classSkill: false,
    }),
    (BUREAUCRACY = {
      name: "Bureaucracy",
      value: abilityModifier(ability[ability.indexOf(PEO)].value),
      classSkill: false,
    }),
    (COMPUTING = {
      name: "Computing",
      value: abilityModifier(ability[ability.indexOf(TEC)].value),
      classSkill: false,
    }),
    (DECEPTION = {
      name: "Deception",
      value: abilityModifier(ability[ability.indexOf(PEO)].value),
      classSkill: false,
    }),
    (ENGINEERING = {
      name: "Engineering",
      value: abilityModifier(ability[ability.indexOf(INT)].value),
      classSkill: false,
    }),
    (GAMBLING = {
      name: "Gambling",
      value: abilityModifier(ability[ability.indexOf(INT)].value),
      classSkill: false,
    }),
    (HACKING = {
      name: "Hacking",
      value: abilityModifier(ability[ability.indexOf(TEC)].value),
      classSkill: false,
    }),
    (HISTORY = {
      name: "History",
      value: abilityModifier(ability[ability.indexOf(INT)].value),
      classSkill: false,
    }),
    (Intimidation = {
      name: "Intimidation",
      value: abilityModifier(ability[ability.indexOf(STR)].value),
      classSkill: false,
    }),
    (INVESTIGATION = {
      name: "Investigation",
      value: abilityModifier(ability[ability.indexOf(INT)].value),
      classSkill: false,
    }),
    (MECHANICS = {
      name: "Mechanics",
      value: abilityModifier(ability[ability.indexOf(TEC)].value),
      classSkill: false,
    }),
    (MEDICINE = {
      name: "Medicine",
      value: abilityModifier(ability[ability.indexOf(TEC)].value),
      classSkill: false,
    }),
    (NAVIGATION = {
      name: "Navigation",
      value: abilityModifier(ability[ability.indexOf(INT)].value),
      classSkill: false,
    }),
    (PERCEPTION = {
      name: "Perception",
      value: abilityModifier(ability[ability.indexOf(INT)].value),
      classSkill: false,
    }),
    (PERFORMANCE = {
      name: "Performance",
      value: abilityModifier(ability[ability.indexOf(PEO)].value),
      classSkill: false,
    }),
    (PERSUASION = {
      name: "Persuasion",
      value: abilityModifier(ability[ability.indexOf(PEO)].value),
      classSkill: false,
    }),
    (PRESENCE = {
      name: "Presence",
      value: abilityModifier(ability[ability.indexOf(PEO)].value),
      classSkill: false,
    }),
    (RELIGION = {
      name: "Religion",
      value: abilityModifier(ability[ability.indexOf(INT)].value),
      classSkill: false,
    }),
    (ROBOTICS = {
      name: "Robotics",
      value: abilityModifier(ability[ability.indexOf(TEC)].value),
      classSkill: false,
    }),
    (SENSE_MOTIVE = {
      name: "Sense Motive",
      value: abilityModifier(ability[ability.indexOf(PEO)].value),
      classSkill: false,
    }),
    (SLEIGHT_OF_HAND = {
      name: "Sleight of Hand",
      value: abilityModifier(ability[ability.indexOf(DEX)].value),
      classSkill: false,
    }),
    (STEALTH = {
      name: "Stealth",
      value: abilityModifier(ability[ability.indexOf(DEX)].value),
      classSkill: false,
    }),
    (STREETWISE = {
      name: "Streetwise",
      value: abilityModifier(ability[ability.indexOf(INT)].value),
      classSkill: false,
    }),
    (TRACKING = {
      name: "Tracking",
      value: abilityModifier(ability[ability.indexOf(INT)].value),
      classSkill: false,
    }),
    (VEHICLES_AIRCRAFT = {
      name: "Vehicles (Aircraft)",
      value: abilityModifier(ability[ability.indexOf(TEC)].value),
      classSkill: false,
    }),
    (VEHICLES_LAND = {
      name: "Vehicles (Land)",
      value: abilityModifier(ability[ability.indexOf(DEX)].value),
      classSkill: false,
    }),
  ];

  function characterClassSkillList() {
    const csl = [];
    switch (characterClass.toLowerCase()) {
      case "enforcer":
        csl.push(
          "Acrobatics",
          "Athletics",
          "Intimidation",
          "Navigation",
          "Perception",
          "Sense Motive",
          "Vehicles (Land)"
        );
        break;
    }
    return csl;
  }

  const classSkillList = characterClassSkillList();

  // lists skillnames and values including proficiency bonus from class skills {string}
  function finalCharacterSkillList() {
    const charSkills = [];
    let charSkillsPretty = "\n[Skills]:";

    for (let index = 0; index < skillList.length; index++) {
      charSkills.push(skillList[index]);

      if (classSkillList.includes(skillList[index].name) == true) {
        charSkills[index].value += proficiencyBonus();
      }
    }

    for (let index = 0; index < charSkills.length; index++) {
      charSkillsPretty += `\n${charSkills[index].name}: ${charSkills[index].value}`;
    }
    return charSkillsPretty;
  }

  console.log(
    `Origin: ${origin} (${originSubtype})\nLevel`,
    characterLevel,
    characterClass,
    "\n",
    finalAbilityStats(),
    "\n",
    finalCharacterSkillList()
  );
}

main();