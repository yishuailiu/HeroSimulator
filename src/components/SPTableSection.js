import TableRow from "./tableRow"
import { Row, Button } from 'react-bootstrap';
import { PowerAppContext } from '../store/powerAppStore';
import React, { useState, useEffect, useCallback, useContext } from 'react';
const SPTableSection = (props) => {
    const sectionName = props.sectionName;


    const { getNewPower,
        powerCapacity,
        powerLevelPerSecond,
        rankRequire,
        powerList,
        upgPower,
        upgPLPerSecond
    } = useContext(PowerAppContext);


    useEffect(() => {
        renderTableRows();        
    }, [powerList]);

    const renderTableRows = ()=>{
        if (powerList) {
            return powerList.map((powerDetail,index) =>{
                const {name,object} = powerDetail;                
                return <tr>
                <th scope="row">{name}</th>
                <td>{object.rank}</td>
                <td>Gain {object.number}PL per second</td>
                <td>{object.require}PL to next Level</td>
                <td>
                    <Button variant="secondary" className="btn" onClick={()=>{upgPower(index,powerDetail);upgPLPerSecond(object.require);}}>Level Up!</Button>
                </td>
            </tr>;
            })
        }
    }


    return <tbody>
        <tr className='trSection '>
            <td className='tdSectionName' scope='col'>{sectionName}</td>
            <td scope='col'><Button variant="secondary" onClick={() => getNewPower()}>Get New Power</Button></td>
            <td scope='col' colspan="2" >This will cost {rankRequire / 2} PL</td>
        </tr>       
        {renderTableRows()}

    </tbody>
};

export default SPTableSection;