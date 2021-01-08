import React, { useState, useEffect, useReducer } from 'react'
import create from 'zustand';
import { getRandomPower } from '../lib/superPower';
import { randomPowerName } from '../lib/abilityMaker';
import BigNumber from 'bignumber.js';
import { BodyLib, LevelLib } from '../lib/level';
import { INC_PL_Train, INC_PL_Auto, UPG_BODY } from './powerActions';
// const getInitialPowerLevel = () => new BigNumber(0);
// const getpowerList = () => ([]);
// const getClickPL = () => new BigNumber(1);
// const getAutoPL = () => new BigNumber(0);
// const getBody = () => {
//     return BodyLib._0;
// }

// export const [usePowerAppStore,store] = create((set,get) => ({
//     powerLevel: getInitialPowerLevel(),
//     powerList: getpowerList(),
//     body:getBody(),
//     clickPL: getClickPL(),
//     autoPL: getAutoPL(), 
//     actions:{
//         changePL(amount = new BigNumber(1)){
//             console.log(getInitialPowerLevel().minus(1));
//             set(state =>({ powerLevel: state.powerLevel.minus(1)}));
//         },
//         upgradeBody(){
//             if(!getBody.top){
//                 // set(state => ({powerLevel: state.powerLevel.minus(state.body.require)}));
//                 // set(state => ({body: state.body.getNext()}));
//                 set(state => ({clickPL: state.clickPL = state.body.train}));                
//             }            
//         },
//         getNewPower(){
//             let newPowerName = randomPowerName();
//             let newPowerDetail = getRandomPower();
//             set(state => ({powerList: state.powerList.push({
//                 name:newPowerName,
//                 object:newPowerDetail,
//             })}));
//         }
//     }
// }));

// store.setState(JSON.parse(window.localStorage.getItem("state")));
// store.subscribe(state => {
//     const stateCopy = {...state};
//     delete stateCopy["actions"];
//     window.localStorage.setItem("state",JSON.stringify(stateCopy));
// });

const PowerAppContext = React.createContext();

const powerReducer = (state, action) => {
    switch (action.type) {
        case INC_PL_Train:
            
            return {
                ...state,
                powerLevelStore: state.powerLevelStore + state.bodyRank.train,
            };
        case INC_PL_Auto:
            return {
                ...state,
                powerLevelStore: state.powerLevelStore + state.powerLevelPerSecond,
            }
        case UPG_BODY:
            if ((!state.bodyRank.top) && (state.powerLevelStore>=state.bodyRank.require)) {
                return {
                    ...state,
                    powerLevelStore: state.powerLevelStore - state.bodyRank.require,
                    bodyRank: state.bodyRank.getNext(),
                    powerLevelPerTrain: state.bodyRank.train,
                }
            } else{
                return state;
            }
        default:
            return state;
    }
};

const PowerAppStore = (props) => {

    const initiaState = {
        powerLevelStore: 0,
        heroRank: LevelLib._0,
        bodyRank: BodyLib._0,        
        powerLevelPerSecond: 0,
        powerList: [],
        playerName: 'player',
        counter: 0,

    };

    const [state, dispatch] = useReducer(powerReducer, initiaState);

    // const powerStore = {
    //     powerLevelStore :state.powerLevelStore,
    //     powerLevelPerTrain: state.powerLevelPerTrain,
    //     powerLevelPerSecond: state.powerLevelPerSecond,
    //     powerList: state.powerList,
    //     playerName: state.playerName,
    //     heroRank: state.heroRank,
    //     bodyRank: state.bodyRank,
    //     counter: state.counter,        
    // };

    //increase PL by Train
    const incPowerLevelTrain = () => {
        dispatch({
            type: INC_PL_Train
        })
    };

    //increase PL by Auto
    const incPowerLevelAuto = () => {
        dispatch({
            type: INC_PL_Auto
        })
    };

    //purchase body upgrade
    const upgBody = () => {
        
        dispatch({
            type: UPG_BODY
        });
    };

    return <PowerAppContext.Provider value={{
        powerLevelStore: state.powerLevelStore,
        powerLevelPerTrain: state.bodyRank.train,
        powerLevelPerSecond: state.powerLevelPerSecond,
        bodyname: state.bodyRank.name,
        trainEfficiency: state.bodyRank.train,
        bodyRequire: state.bodyRank.require,
        incPowerLevelTrain,
        incPowerLevelAuto,
        upgBody
    }}>{props.children}</PowerAppContext.Provider>
}


export default PowerAppStore;
export { PowerAppContext };