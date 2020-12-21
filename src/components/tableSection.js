import tableRow from "./tableRow"
import Row from 'react-bootstrap';


const tableSection = (props) => {
    const sectionName = props.sectionName;

    return <div>
        <tr>{sectionName}</tr>

        <tableRow rowName="Farmer Body" rowEffect="Gain 1 PL for each Training" rowRequire="10 PL"></tableRow>

    </div>;
};

export default tableSection;