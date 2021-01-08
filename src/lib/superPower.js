import BigNumber from 'bignumber.js';

var SPLow = {
    //low level power
    _0: {
        id: '_0',
        top: false,
        rank: 'Apprentice',
        desc: 'Gain 10 PowerLevel per second.',
        require: 500,
        number: 10,
        getPrev: () => { return null },
        getNext: () => { return SPLow._1 },
    },
    _1: {
        id: '_1',
        top: false,
        rank: 'Journeyman',
        desc: 'Gain 30 PowerLevel per second.',
        require: 2000,
        number: 30,
        getPrev: () => { return SPLow._0 },
        getNext: () => { return SPLow._2 },
    },
    _2: {
        id: '_2',
        top: false,
        rank: 'Expert',
        desc: 'Gain 50 PowerLevel per second.',
        require: 16000,
        number:50,
        getPrev: () => { return SPLow._1 },
        getNext: () => { return SPLow._3 },
    },
    _3: {
        id: '_3',
        top: false,
        rank: 'Artisan',
        desc: 'Gain 200 PowerLevel per second.',
        require: 3500000,
        getPrev: () => { return SPLow._2 },
        getNext: () => { return SPLow._4 },
    },
    _4: {
        id: '_4',
        top: false,
        rank: 'Master',
        desc: 'Gain 2,020 PowerLevel per second.',
        require: 140000000,
        number:2020,
        getPrev: () => { return SPLow._3 },
        getNext: () => { return SPLow._5 },
    },
    _5: {
        id: '_5',
        top: false,
        rank: 'Grand Master',
        desc: 'Gain 10,080 PowerLevel per second.',
        require: 27000000000,
        number: 10080,
        getPrev: () => { return SPLow._4 },
        getNext: () => { return SPLow._6 },
    },
    _6: {
        id: '_6',
        top: false,
        rank: 'Zen Master',
        desc: 'Gain 3,100,003 PowerLevel per second.',
        require: 100000000000,
        number: 3100003,
        getPrev: () => { return SPLow._5 },
        getNext: () => { return SPLow._7 },
    },
    _7: {
        id: '_7',
        top: true,
        rank: 'Creator',
        desc: 'Gain 50,090,060 PowerLevel per second.',
        require: 1000000000000,
        number: 50090606,
        getPrev: () => { return SPLow._6 },
        getNext: () => { return null },
    },
    
}

var SPMid = {    
    //mid level power
    _0: {
        id: '_0',
        top: false,
        rank: 'Apprentice',
        desc: 'Gain 10 PowerLevel per second.',
        require: new BigNumber(1000),
        number: new BigNumber(1),
        getPrev: () => { return null },
        getNext: () => { return SPMid._1 },
    },
    _1: {
        id: '_1',
        top: false,
        rank: 'Journeyman',
        desc: 'Gain 30 PowerLevel per second.',
        require: new BigNumber(5000),
        getPrev: () => { return SPMid._0 },
        getNext: () => { return SPMid._2 },
    },
    _2: {
        id: '_2',
        top: false,
        rank: 'Expert',
        desc: 'Gain 50 PowerLevel per second.',
        require: new BigNumber(10).pow(5),
        getPrev: () => { return SPMid._1 },
        getNext: () => { return SPMid._3 },
    },
    _3: {
        id: '_3',
        top: false,
        rank: 'Artisan',
        desc: 'Gain 100 PowerLevel per second.',
        require: new BigNumber(10).pow(6).times(3),
        getPrev: () => { return SPMid._2 },
        getNext: () => { return SPMid._4 },
    },
    _4: {
        id: '_4',
        top: false,
        rank: 'Master',
        desc: 'Gain 1000 PowerLevel per second.',
        require: new BigNumber(10).pow(8).times(4),
        getPrev: () => { return SPMid._3 },
        getNext: () => { return SPMid._5 },
    },
    _5: {
        id: '_5',
        top: false,
        rank: 'Grand Master',
        desc: 'Gain 10,080 PowerLevel per second.',
        require: new BigNumber(10).pow(10).times(5),
        getPrev: () => { return SPMid._4 },
        getNext: () => { return SPMid._6 },
    },
    _6: {
        id: '_6',
        top: false,
        rank: 'Zen Master',
        desc: 'Gain 200,100 PowerLevel per second.',
        require: new BigNumber(10).pow(11),
        getPrev: () => { return SPMid._5 },
        getNext: () => { return SPMid._7 },
    },
    _7: {
        id: '_7',
        top: false,
        rank: 'Creator',
        desc: 'Gain 3,090,060 PowerLevel per second.',
        require: new BigNumber(10).pow(13),
        getPrev: () => { return SPMid._6 },
        getNext: () => { return SPMid._8 },
    },
    _8: {
        id: '_0',
        top: false,
        rank: 'Omni',
        desc: 'Gain 96,669,090,090 PowerLevel per second.',
        require: new BigNumber(10).pow(16),
        getPrev: () => { return SPMid._7 },
        getNext: () => { return null },
    },
}

var SPHigh = {    
    //high level power
    _0: {
        id: '_0',
        top: false,
        rank: 'Apprentice',
        desc: 'Gain 10 PowerLevel per second.',
        require: new BigNumber(500),
        number: new BigNumber(1),
        getPrev: () => { return null },
        getNext: () => { return SPMid._1 },
    },
    _1: {
        id: '_1',
        top: false,
        rank: 'Journeyman',
        desc: 'Gain 50 PowerLevel per second.',
        require: new BigNumber(5000),
        getPrev: () => { return SPMid._0 },
        getNext: () => { return SPMid._2 },
    },
    _2: {
        id: '_2',
        top: false,
        rank: 'Expert',
        desc: 'Gain 300 PowerLevel per second.',
        require: new BigNumber(10).pow(4).times(4),
        getPrev: () => { return SPMid._1 },
        getNext: () => { return SPMid._3 },
    },
    _3: {
        id: '_3',
        top: false,
        rank: 'Artisan',
        desc: 'Gain 1,000 PowerLevel per second.',
        require: new BigNumber(10).pow(5).times(6),
        getPrev: () => { return SPMid._2 },
        getNext: () => { return SPMid._4 },
    },
    _4: {
        id: '_4',
        top: false,
        rank: 'Master',
        desc: 'Gain 7,000 PowerLevel per second.',
        require: new BigNumber(10).pow(10).times(7),
        getPrev: () => { return SPMid._3 },
        getNext: () => { return SPMid._5 },
    },
    _5: {
        id: '_5',
        top: false,
        rank: 'Grand Master',
        desc: 'Gain 90,080 PowerLevel per second.',
        require: new BigNumber(10).pow(8).times(2),
        getPrev: () => { return SPMid._4 },
        getNext: () => { return SPMid._6 },
    },
    _6: {
        id: '_6',
        top: false,
        rank: 'Zen Master',
        desc: 'Gain 100,100 PowerLevel per second.',
        require: new BigNumber(10).pow(10),
        getPrev: () => { return SPMid._5 },
        getNext: () => { return SPMid._7 },
    },
    _7: {
        id: '_7',
        top: false,
        rank: 'Creator',
        desc: 'Gain 3,090,060 PowerLevel per second.',
        require: new BigNumber(10).pow(11),
        getPrev: () => { return SPMid._6 },
        getNext: () => { return SPMid._8 },
    },
    _8: {
        id: '_0',
        top: false,
        rank: 'Omni',
        desc: 'Gain 569,090,090 PowerLevel per second.',
        require: new BigNumber(10).pow(16),
        getPrev: () => { return SPMid._7 },
        getNext: () => { return null },
    },



}
const getRandomPower = () => {
    return SPLow;
    var rand = Math.random();
    // if(rand < 0.2){
    //     return SPLow;
    // } else if (rand <0.5){
    //     return SPMid;
    // } else {
    //     return SPHigh;
    // }

}

export { getRandomPower };