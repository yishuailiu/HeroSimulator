import React, {useState, useEffect} from 'react'
import create from 'zustand';
import {getRandomPower} from '../lib/superPower';
import {randomPowerName} from '../lib/abilityMaker';

const getInitialPowerLevel = () => 0;
const getpowerList = () => ([]);

export const [usePowerAppStore,store] = create((set,get) => ({
    powerLevel: getInitialPowerLevel(),
    powerList: getpowerList(),
    clickPL: 1,
    autoPL:0, 
    actions:{
        changePL(amount = 1){
            set(state =>({ powerLevel: state.powerLevel + amount }));
        },
        getNewPower(){
            let newPowerName = randomPowerName();
            let newPowerDetail = getRandomPower();
            set(state => ({powerList: state.powerList.push({
                name:newPowerName,
                object:newPowerDetail,
            })}));
        }
    }
}));

store.setState(JSON.parse(window.localStorage.getItem("state")));
store.subscribe(state => {
    const stateCopy = {...state};
    delete stateCopy["actions"];
    window.localStorage.setItem("state",JSON.stringify(stateCopy));
});


// const PowerAppStore = (props) => {
//     const [powerLevel,setPowerLevel] = useState({});
//     const [powerLevelPerSecond,setPowerLevelPerSecond] = useState({});
//     const [powerList,setPowerList] = useState({});
//     const [playerName,setPlayerName] = useState({});
//     const [heroRank,setHeroRank] = useState({});
//     const [bodyRank,setBodyRank] = useState({});
//     const [counter,setCounter] = useState({});

//     const Start = () => {

//     }

//     const powerStore = {
//         'powerLevel' :[powerLevel,setPowerLevel],
//         'powerLevelPerSecond':[powerLevelPerSecond,setPowerLevelPerSecond],
//         'powerList':[powerList,setPowerList] ,
//         'playerName':[playerName,setPlayerName],
//         'heroRank':[heroRank,setHeroRank] ,
//         'bodyRank':[bodyRank,setBodyRank] ,
//         'counter':[counter,setCounter],
//     }

//     return <PowerAppContext.Provider value = {powerStore}>{props.children}</PowerAppContext.Provider>
// }


// export default PowerAppStore;
// export {PowerAppContext};