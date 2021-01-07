import { Button } from 'react-bootstrap';

const TableRow = (props) => {

    const rowName = props.rowName;
    const rowEffect = props.rowEffect;
    const rowRequire = props.rowRequire;
    const levelUpButton = () => {
        return null;
    };

    return <tr>
            <th scope="row">{rowName}</th>
            <td>{rowEffect}</td>
            <td>{rowRequire}</td>
            <td>
                <Button disabled="true" className="btn btn-outline-secondary" onClick={levelUpButton}>Level Up!</Button>
            </td>
        </tr>;
};

export default TableRow;