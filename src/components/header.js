import { Button, Row,Col,Form} from 'react-bootstrap';


const Header = () => {
return <div>
    <Row>
        <Col className="d-flex justify-content-center" md={{ span: 6, offset: 3 }}>
            <Form>
                <Form.Group controlId="playerName">
                    <Form.Label>Your Hero Name:</Form.Label>
                    <Form.Control type="text" placeholder="Shake Man"  />
                </Form.Group>
                <Button variant="secondary" type="submit">Submit</Button>
            </Form>
        </Col>

    </Row>
    <Row>
        <h2>Power Level: 0</h2>
    </Row>
    <Row>
        <Col>
            <h3>Village Hero</h3>
        </Col>
        <Col>
            <Button variant="dark" className="btn btn-dark btn-lg">Train!</Button>
        </Col>
        <Col>
            <h3>Body Level: Farmer</h3>
            <p>Next Level: 1000</p>
            <p>Increased by 0 every second</p>
        </Col>
    </Row>
</div>
}
export default {Header};