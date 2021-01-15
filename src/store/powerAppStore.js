import React, { useState, useEffect, useReducer } from 'react'
import { getRandomPower } from '../lib/superPower';
import { randomPowerName } from '../lib/abilityMaker';
import { BodyLib, LevelLib } from '../lib/level';
import { INC_PL_Train, INC_PL_Auto, UPG_BODY, UPG_RANK, GET_NEW_POWER, UPG_POWER,UPG_PL_AUTO } from './powerActions';


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
            if ((!state.bodyRank.top) && (state.powerLevelStore >= state.bodyRank.require)) {
                return {
                    ...state,
                    powerLevelStore: state.powerLevelStore - state.bodyRank.require,
                    bodyRank: state.bodyRank.getNext(),
                    powerLevelPerTrain: state.bodyRank.train,
                }
            } else {
                return state;
            }
        case UPG_RANK:
            if ((!state.heroRank.top) && (state.powerLevelStore >= state.heroRank.max)) {
                return {
                    ...state,
                    powerLevelStore: state.powerLevelStore - state.heroRank.max,
                    heroRank: state.heroRank.getNext(),
                    powerLevelPerTrain: state.heroRank.train,
                }
            } else {
                return state;
            }
        case GET_NEW_POWER:

            if ((state.powerList.length < state.heroRank.capacity) && (state.powerLevelStore >= (state.heroRank.max / 2))) {

                let newPower = ({
                    name: randomPowerName(),
                    object: getRandomPower()
                });
                return {
                    ...state,
                    powerLevelStore: state.powerLevelStore - (state.heroRank.max / 2),
                    powerLevelPerSecond: state.powerLevelPerSecond + newPower.object.number,
                    powerList: [...state.powerList, newPower],

                }
            } else {
                return state;
            }
        case UPG_POWER:
            if (state.powerLevelStore >= state.powerList[action.payload].object.require) {
                const newList = [...state.powerList];
                const currentNumber = newList[action.payload].object.number;
                newList[action.payload].object = newList[action.payload].object.getNext();
                const newNumber = newList[action.payload].object.number;                
                return {                                       
                    ...state,                                        
                    powerLevelStore: state.powerLevelStore - state.powerList[action.payload].object.require,
                    powerLevelPerSecond: state.powerLevelPerSecond +10,
                    powerList: newList, 
                }
            } else {
                return state;
            }
        case UPG_PL_AUTO:
            const newPLAUTO = 0;

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
    const upgRank = () => {
        dispatch({
            type: UPG_RANK
        });
    };
    //purchase new power
    const getNewPower = () => {
        dispatch({
            type: GET_NEW_POWER
        });
    };

    //upgrade power
    const upgPower = (powerIndex) => {
        dispatch({
            type: UPG_POWER,
            payload: powerIndex,
        })
    };

    //upgrade power per second
    const upgPLPerSecond = () =>{
        dispatch({
            type:UPG_PL_AUTO,
        })
    }

    return <PowerAppContext.Provider value={{
        powerLevelStore: state.powerLevelStore,
        powerLevelPerTrain: state.bodyRank.train,
        powerLevelPerSecond: state.powerLevelPerSecond,
        bodyName: state.bodyRank.name,
        trainEfficiency: state.bodyRank.train,
        bodyRequire: state.bodyRank.require,
        rankName: state.heroRank.name,
        rankRequire: state.heroRank.max,
        powerCapacity: state.heroRank.capacity,
        powerList: state.powerList,
        incPowerLevelTrain,
        incPowerLevelAuto,
        upgBody,
        upgRank,
        getNewPower,
        upgPower,
        upgPLPerSecond
    }}>{props.children}</PowerAppContext.Provider>
}


export default PowerAppStore;
export { PowerAppContext };