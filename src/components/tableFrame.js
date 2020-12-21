import TableSection from './tableSection';
import {Row,Col} from 'react-bootstrap';

const TableFrame = (props) => {
    return <div>
        <Row className='justify-content-center'>
            <Col className='col-10'>
            <table className="table table-bordered">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Impact</th>
                        <th scope="col">LvLUp Requirement</th>
                        <th scope="col">Level Up</th>
                    </tr>

                </thead>
                <TableSection sectionName="Physical Body"></TableSection>
                <TableSection sectionName="Super Powers"></TableSection>
            </table>
            </Col>
        </Row>
    </div>;
}

export default TableFrame;