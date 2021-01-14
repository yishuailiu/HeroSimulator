import { Button, Row,Col,Form} from 'react-bootstrap';
import React, { useState, useEffect, useCallback,useContext} from 'react';

import {useInterval} from 'react-use-timeout';
import {PowerAppContext} from '../store/powerAppStore';

const PageHeader = (props) => {

const {powerLevelStore,
    incPowerLevelTrain,
    incPowerLevelAuto,
    powerLevelPerSecond,
    bodyName,
    rankName,
    rankRequire,
    powerCapacity,
    trainEfficiency,
    upgRank
} = useContext(PowerAppContext);

//handle increase per second
const incPLPerSecond = useCallback(() => incPowerLevelAuto,[powerLevelPerSecond]);
const timeout = useInterval(incPLPerSecond,1000);
useEffect(() => {
    timeout.start();
},[]);

useEffect(() => {
    if(powerLevelStore>=rankRequire){
        upgRank();
    }
},[powerLevelStore]);


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
            <h2>Power Level: {powerLevelStore}</h2>
        </Col>        
    </Row>
    <Row className="justify-content-center">
        <Col className='col-4 d-flex flex-column align justify-content-center'>
                        
            <h6>Increased by 0 every second</h6>
        </Col>
    </Row>
    <Row>
        <Col className='d-flex justify-content-center align-content-around flex-wrap'>
            <h3>Rank:{rankName}</h3>
            <h6>Next Level: {rankRequire}</h6>
            <h5>Super Power Capacity: {powerCapacity}</h5>    
        </Col>
        <Col className=' d-flex justify-content-center'>
            <Button variant="dark" className="btn btn-dark btn-lg" onClick={()=> incPowerLevelTrain()}>Train!</Button>
        </Col>
        <Col className='d-flex justify-content-center align-content-around flex-wrap'>
            <h3>Body Level: {bodyName}</h3>
            <h5>Training Efficiency: {trainEfficiency}</h5>           
        </Col>
    </Row>
    
</div>;
}
export default PageHeader;