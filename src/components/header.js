import { Button, Row,Col,Form} from 'react-bootstrap';
import React, { useState, useEffect, useCallback} from 'react';
import {usePowerAppStore} from '../store/powerAppStore';
import {useInterval} from 'react-use-timeout';

const PageHeader = (props) => {

const actions = usePowerAppStore(s => s.actions);
const powerLevel = usePowerAppStore(s => s.powerLevel);
const incAmount = usePowerAppStore(s => s.clickPL);
const incPL = useCallback(() => actions.changePL(incAmount),[actions,incAmount]);
const timeout = useInterval(incPL,1000);
useEffect(() => {
    timeout.start();
},[]);

//const [level, setLevel] = useState(0);

// increase level each second, has bugs.
// function levelBySecond(){
//     setInterval(() => {
//         setLevel(level + 1);
//     }, 1000);
// }
//levelBySecond();
return <div className="pageHeader">
    <Row>
        <Col className="d-flex justify-content-center" md={{ span: 6, offset: 3 }}>
            <Form>
                <Form.Group controlId="playerName">
                    <Form.Label>Your Hero Name:</Form.Label>
                    <Row>
                    <Form.Control type="text" placeholder="Shake Man"  />
                    <Button className="nameButton" variant="secondary" type="submit">Submit</Button>
                    </Row>
                    
                </Form.Group>
                
            </Form>
        </Col>

    </Row>
    <Row  className="justify-content-center">
        <Col className='col-4 d-flex justify-content-center'>
            <h2>Power Level: {powerLevel}</h2>
        </Col>        
    </Row>
    <Row className="justify-content-center">
        <Col className='col-4 d-flex flex-column align justify-content-center'>
            <h6>Next Level: 1000</h6>            
            <h6>Increased by 0 every second</h6>
        </Col>
    </Row>
    <Row>
        <Col className='d-flex justify-content-center align-content-around flex-wrap'>
            <h3>Village Hero</h3>
        </Col>
        <Col className=' d-flex justify-content-center'>
            <Button variant="dark" className="btn btn-dark btn-lg" onClick={()=> actions.changePL(incAmount)}>Train!</Button>
        </Col>
        <Col className='d-flex justify-content-center align-content-around flex-wrap'>
            <h3>Body Level: Farmer</h3>
            <h5>Super Power Capacity: 1</h5>            
        </Col>
    </Row>
    
</div>;
}
export default PageHeader;