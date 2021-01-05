import BigNumber from 'bignumber.js';

const LevelLib = {
    _0 : {
        id:'_0',
        name:'Villager',
        max: new BigNumber(10).pow(3),
        top:false,
        getNext: ()=>{
            return LevelLib._1;
        },
    },
    _1 : {
        id:'_1',
        name:'Hero Candidate',
        max: new BigNumber(10).pow(4),
        top:false,
        getNext: ()=>{
            return LevelLib._2;
        },
    },
    _2 : {
        id:'_2',
        name:'Novice Hero',
        max: new BigNumber(10).pow(5),
        top:false,
        getNext: ()=>{
            return LevelLib._3;
        },
    },
    _3 : {
        id:'_3',
        name:'Town Hero',
        max: new BigNumber(10).pow(6),
        top:false,
        getNext: ()=>{
            return LevelLib._4;
        },
    },
    _4 : {
        id:'_4',
        name:'City Hero',
        max: new BigNumber(10).pow(7),
        top:false,
        getNext: ()=>{
            return LevelLib._5;
        },
    },
    _5 : {
        id:'_5',
        name:'Planet Hero',
        max: new BigNumber(10).pow(8),
        top:false,
        getNext: ()=>{
            return LevelLib._6;
        },
    },
    _6 : {
        id:'_6',
        name:'Galaxy Hero',
        max: new BigNumber(10).pow(9),
        top:false,
        getNext: ()=>{
            return LevelLib._7;
        },
    },
    _7 : {
        id:'_7',
        name:'Universe Hero',
        max: new BigNumber(10).pow(10),
        top:false,
        getNext: ()=>{
            return LevelLib._8;
        },
    },

}

const BodyLib ={
    _0 : {
        id:'_0',
        name:'Farmer',
        train: new BigNumber(1),
        require: new BigNumber(10),
        top:false,
        getNext: ()=>{
            return BodyLib._1;
        },
    },
    _1 : {
        id:'_1',
        name:'Athlete',
        train: new BigNumber(5),
        require: new BigNumber(400),
        top:false,
        getNext: ()=>{
            return BodyLib._2;
        },
    },
    _2 : {
        id:'_2',
        name:'Body Builder',
        train: new BigNumber(10),
        require: new BigNumber(2000),
        top:false,
        getNext: ()=>{
            return BodyLib._3;
        },
    },
    _3 : {
        id:'_3',
        name:'Elite Soldier',
        train: new BigNumber(50),
        require: new BigNumber(10).pow(4),
        top:false,
        getNext: ()=>{
            return BodyLib._4;
        },
    },
    _4 : {
        id:'_4',
        name:'Cyborg',
        train: new BigNumber(200),
        require: new BigNumber(10).pow(4).times(8),
        top:false,
        getNext: ()=>{
            return BodyLib._5;
        },
    },
    _5 : {
        id:'_5',
        name:'Dragon Blood',
        train: new BigNumber(1000),
        require: new BigNumber(10).pow(6),
        top:false,
        getNext: ()=>{
            return BodyLib._6;
        },
    },
    _6 : {
        id:'_6',
        name:'Asgardian',
        train: new BigNumber(10).pow(4),
        require: new BigNumber(10).pow(7),
        top:false,
        getNext: ()=>{
            return BodyLib._7;
        },
    },
    _7 : {
        id:'_7',
        name:'Hulk',
        train: new BigNumber(10).pow(5),
        require: new BigNumber(10).pow(9),
        top:false,
        getNext: ()=>{
            return BodyLib._8;
        },
    },
    _8 : {
        id:'_8',
        name:'Saiyan',
        train: new BigNumber(10).pow(7),
        require: new BigNumber(10).pow(12),
        top:false,
        getNext: ()=>{
            return BodyLib._9;
        },
    },
    _8 : {
        id:'_9',
        name:'Saitama',
        train: new BigNumber(10).pow(10),
        require: new BigNumber(10).pow(16),
        top:true,
        getNext: ()=>{
            return null;
        },
    },
}


export {LevelLib,BodyLib};