import TableRow from "./tableRow"
import { Row, Button } from 'react-bootstrap';
import {PowerAppContext} from '../store/powerAppStore';
// import { usePowerAppStore } from '../store/powerAppStore';
import React,{ useCallback,useContext } from "react";
import { act } from "react-dom/test-utils";

const BodyTableSection = (props) => {
    const sectionName = props.sectionName;
    const {powerLevelStore,bodyRequire,bodyname,trainEfficiency,upgBody} = useContext(PowerAppContext);



    


    return <tbody>
        <tr className='trSection '>
            <td className='tdSectionName' scope='col'>{sectionName}</td>
        </tr>

        <tr>
            <th scope="row">{bodyname}</th> 
            <td>Gain {trainEfficiency} PL for each training.</td>
            <td>{bodyRequire} PL</td>
            <td>
                <Button variant="secondary" disabled={false} className="btn" onClick={() => upgBody()}>Level Up!</Button>
            </td>
        </tr>;

    </tbody>;
};

export default BodyTableSection;