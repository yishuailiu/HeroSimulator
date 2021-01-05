import React, {useState, useEffect} from 'react'

const PowerAppContext = React.createContext(null);

const PowerAppStore = (props) => {
    const [powerLevel,setPowerLevel] = useState();

    const powerStore = {
        'powerLevel' :[powerLevel,setPowerLevel]
    }

    return <PowerAppContext.Provider value = {powerStore}>{props.children}</PowerAppContext.Provider>
}


export default PowerAppStore;
export {PowerAppContext};