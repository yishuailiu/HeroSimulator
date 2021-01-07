import TableRow from "./tableRow"
import {Row,Button} from 'react-bootstrap';


const SPTableSection = (props) => {
    const sectionName = props.sectionName;
    var trSection = <div></div>;

    if(sectionName == 'Super Powers'){
        trSection = <tr className='trSection '>            
        <td className='tdSectionName' scope='col'>{sectionName}</td>
        <td scope='col'><Button variant="secondary">Get New Power</Button></td>
        <td scope='col' colspan="2" >This will cost half of current capacity</td>        
    </tr>;
    } else{
        trSection = <tr className='trSection '>            
            <td className='tdSectionName' scope='col'>{sectionName}</td>
        </tr>;
    }

    return <tbody>        
        {trSection}

        <TableRow rowName="Farmer Body" rowEffect="Gain 1 PL for each Training" rowRequire="10 PL"></TableRow>

    </tbody>;
};

export default SPTableSection;