import { Button } from 'react-bootstrap';

const tableRow = (props) => {

    const rowName = props.rowName;
    const rowEffect = props.rowEffect;
    const rowRequire = props.rowRequire;

    return <div>
        <tr>
            <th scope="row">{rowName}</th>
            <td>{rowEffect}</td>
            <td>{rowRequire}</td>
            <td>
                <Button disabled="true" className="btn btn-outline-secondary">Level Up!</Button>
            </td>
        </tr>
    </div>;
};

export default tableRow;