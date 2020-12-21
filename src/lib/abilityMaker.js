var attr1 = [
    "Sense","Siren","Tracking","Enhanced","Season","Fire","Water","Force Field","Superhuman","Freeze","Heat","Light","Healing","Energy","Astral","Intangibility","Electrical"
];

var attr2 = [
    "Organisms","Song","Evasion","Craftsmanship","Manipulation","Invulnerability","Breathing","Generation","Speed","Vision","Factor","Conversion","Medicine","Trapping","Transportation"
];

var attr3 =[
    "Premonitions","Rebirth","Invisibility","Hydrokinesis","Clairolfactance","Disintegration","Telekinesis","Precognition","Resurrection","Telesthesia","Animation","Essokinesis","Psychometry"
];

var quest1 = [
    "Within the","Before","The Sorrow from","The Strong","The Son of","Sorcerer of the","The Vile Eye of","The Key of","Wyvern of the","Across the"
];

var quest2 = [
    "Hungering Festival","Moradin's Cave","Above","Corpse Legacy","Torog","Mind","Nentir River","Gold Barter","Battlements","House"
];

export const randomPowerName = () =>{
    var a1 = attr1[Math.floor(Math.random() * attr1.length)];
    var a2 = attr2[Math.floor(Math.random() * attr2.length)];
    var a3 = attr3[Math.floor(Math.random() * attr3.length)];

    var rand = Math.random();
    if(rand < 0.33){
        return a1+" "+a2;
    } else if(rand < 0.66){
        return a3;
    }  else {
        return a1+" "+a3;
    }
}

export const randomQuestName = () =>{
    var q1 = quest1[Math.floor(Math.random() * quest1.length)];
    var q2 = quest2[Math.floor(Math.random() * quest2.length)];       
    return q1+" "+q2;    
}

export const randomNewPower= (randPower) => {
    var rand = Math.random();
    if(rand < 0.2) {
        return "Discovered an alien artifact! Obtained the power of " + randPower;
    } else if (rand <0.4 ){
        return "Got bitten by a radioactive animal! Got the power of " + randPower;
    } else if (rand < 0.6){
        return "Sucked in to a worm hole to another universe! Learned the power of " + randPower;
    } else if (rand <0.8){
        return "Sony Ttark sent you a super gift! Opened box and got the power of " + randPower;
    } else{
        return "Became an avatar to an extra-demensional old god! Obtained the power of " + randPower;
    }
}