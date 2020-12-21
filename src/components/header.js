import { Button, Row,Col,Form} from 'react-bootstrap';


const PageHeader = (props) => {
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
            <h2>Power Level: 0</h2>
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
            <Button variant="dark" className="btn btn-dark btn-lg">Train!</Button>
        </Col>
        <Col className='d-flex justify-content-center align-content-around flex-wrap'>
            <h3>Body Level: Farmer</h3>
            <h5>Super Power Capacity: 1</h5>            
        </Col>
    </Row>
    
</div>;
}
export default PageHeader;