import React, { useState, useEffect, useReducer } from 'react'
import create from 'zustand';
import { getRandomPower } from '../lib/superPower';
import { randomPowerName } from '../lib/abilityMaker';
import BigNumber from 'bignumber.js';
import { BodyLib, LevelLib } from '../lib/level';
import { INC_PL_Train, INC_PL_Auto, UPG_BODY,UPG_RANK,GET_NEW_POWER,UPG_POWER } from './powerActions';


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
        case UPG_RANK:
            if ((!state.heroRank.top) && (state.powerLevelStore>=state.heroRank.max)) {
                return {
                    ...state, 
                    powerLevelStore: state.powerLevelStore - state.heroRank.max,
                    heroRank: state.heroRank.getNext(),
                    powerLevelPerTrain: state.heroRank.train,
                }
            } else{
                return state;
            }
        case GET_NEW_POWER:
            return null;
        case UPG_POWER:
            return null;
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
    //handle rank upgrade
    const upgRank =() =>{
        dispatch({
            type:UPG_RANK
        });
    };
    //purchase new power
    const getNewPower = () =>{
        dispatch({
            type:GET_NEW_POWER
        });
    };

    //upgrade power
    const upgPower = (powerName) =>{
        dispatch({
            type:UPG_POWER,
            payload: powerName,
        })
    };

    return <PowerAppContext.Provider value={{
        powerLevelStore: state.powerLevelStore,
        powerLevelPerTrain: state.bodyRank.train,
        powerLevelPerSecond: state.powerLevelPerSecond,
        bodyName: state.bodyRank.name,
        trainEfficiency: state.bodyRank.train,
        bodyRequire: state.bodyRank.require,
        rankName:state.heroRank.name,
        rankRequire: state.heroRank.max,
        powerCapacity: state.heroRank.capacity,
        incPowerLevelTrain,
        incPowerLevelAuto,
        upgBody,
        upgRank,
        getNewPower,
        upgPower
    }}>{props.children}</PowerAppContext.Provider>
}


export default PowerAppStore;
export { PowerAppContext };