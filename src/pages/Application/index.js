import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button, Card} from "react-bootstrap";
import {Link, redirect} from "react-router-dom";
import './index.css';

function handleButtonClick() {
    window.location.href = 'https://book.harrylai.com';
}

export default function Application() {
    return (
        <>
            <div className={"title"}>
                <h1>Application</h1>
            </div>

            <div className={"apps"}>
                <Row className={"g-2"}>
                    <Col lg={4}>
                        <Link to={'https://book.harrylai.com'} style={{ textDecoration: 'none' }}>
                            <Card style={{width: '18rem', boxShadow: '1px 1px 1px'}}>
                                <Card.Img variant="top" src="images/book.harrylai.com.png"/>
                                <Card.Body>
                                    <Card.Title>Book System</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Borrow Book*/}
                                    {/*</Card.Text>*/}
                                    {/*<Button variant="primary" onClick={handleButtonClick}>Demo</Button>*/}
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        </>
    );
}