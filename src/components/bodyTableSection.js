import TableRow from "./tableRow"
import { Row, Button } from 'react-bootstrap';

// import { usePowerAppStore } from '../store/powerAppStore';
import { useCallback } from "react";
import { act } from "react-dom/test-utils";

const BodyTableSection = (props) => {
    const sectionName = props.sectionName;
    // const actions = usePowerAppStore(s => s.actions);
    // const bodyDetail = usePowerAppStore(s => s.body);
    // const powerLevel = usePowerAppStore(s => s.powerLevel);
    // const bodyLevelUp = actions.upgradeBody();


    


    return <tbody>
        <tr className='trSection '>
            <td className='tdSectionName' scope='col'>{sectionName}</td>
        </tr>

        <tr>
            {/* <th scope="row">{bodyDetail.name}</th> */}
            {/* <td>{bodyDetail.train}</td> */}
            {/* <td>{bodyDetail.require}</td> */}
            <td>
                {/* <Button disabled={useCallback(() => powerLevel > bodyDetail.require ? "true" : "false"),[powerLevel]} className="btn btn-outline-secondary" onClick={bodyLevelUp}>Level Up!</Button> */}
            </td>
        </tr>;

    </tbody>;
};

export default BodyTableSection;