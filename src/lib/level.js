import BigNumber from 'bignumber.js';

const LevelLib = {
    _0 : {
        id:'_0',
        name:'Villager',
        max: 1000,
        top:false,
        capacity:1,
        getNext: ()=>{
            return LevelLib._1;
        },
    },
    _1 : {
        id:'_1',
        name:'Hero Candidate',
        max: 10000,
        top:false,
        capacity:2,
        getNext: ()=>{
            return LevelLib._2;
        },
    },
    _2 : {
        id:'_2',
        name:'Novice Hero',
        max: 100000,
        top:false,
        capacity:3,
        getNext: ()=>{
            return LevelLib._3;
        },
    },
    _3 : {
        id:'_3',
        name:'Town Hero',
        max: 1000000,
        top:false,
        capacity:4,
        getNext: ()=>{
            return LevelLib._4;
        },
    },
    _4 : {
        id:'_4',
        name:'City Hero',
        max: 10000000,
        top:false,
        capacity:6,
        getNext: ()=>{
            return LevelLib._5;
        },
    },
    _5 : {
        id:'_5',
        name:'Planet Hero',
        max: 100000000,
        top:false,
        capacity:8,
        getNext: ()=>{
            return LevelLib._6;
        },
    },
    _6 : {
        id:'_6',
        name:'Galaxy Hero',
        max: 1000000000,
        top:false,
        capacity:10,
        getNext: ()=>{
            return LevelLib._7;
        },
    },
    _7 : {
        id:'_7',
        name:'Universe Hero',
        max: 10000000000,
        top:false,
        capacity:13,
        getNext: ()=>{
            return LevelLib._8;
        },
    },
    _8 : {
        id:'_8',
        name:'Omniverse Hero',
        max: 1000000000000,
        top:true,
        capacity:15,
        getNext: ()=>{
            return null;
        },
    },

}

const BodyLib ={
    _0 : {
        id:'_0',
        name:'Farmer',
        train: 1,
        require:10,
        top:false,
        getNext: ()=>{
            return BodyLib._1;
        },
    },
    _1 : {
        id:'_1',
        name:'Athlete',
        train: 5,
        require: 400,
        top:false,
        getNext: ()=>{
            return BodyLib._2;
        },
    },
    _2 : {
        id:'_2',
        name:'Body Builder',
        train: 10,
        require: 2000,
        top:false,
        getNext: ()=>{
            return BodyLib._3;
        },
    },
    _3 : {
        id:'_3',
        name:'Elite Soldier',
        train: 50,
        require: 4000,
        top:false,
        getNext: ()=>{
            return BodyLib._4;
        },
    },
    _4 : {
        id:'_4',
        name:'Cyborg',
        train: 200,
        require: 32000,
        top:false,
        getNext: ()=>{
            return BodyLib._5;
        },
    },
    _5 : {
        id:'_5',
        name:'Dragon Blood',
        train: 1000,
        require: 6000000,
        top:false,
        getNext: ()=>{
            return BodyLib._6;
        },
    },
    _6 : {
        id:'_6',
        name:'Asgardian',
        train:4000,
        require: 10000000,
        top:false,
        getNext: ()=>{
            return BodyLib._7;
        },
    },
    _7 : {
        id:'_7',
        name:'Hulk',
        train: 100000,
        require: 1000000000,
        top:false,
        getNext: ()=>{
            return BodyLib._8;
        },
    },
    _8 : {
        id:'_8',
        name:'Saiyan',
        train: 10000000,
        require: 1000000000000,
        top:true,
        getNext: ()=>{
            return null;
        },
    }
}


export {LevelLib,BodyLib};