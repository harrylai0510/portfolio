import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button, Card} from "react-bootstrap";
import {Link, redirect} from "react-router-dom";
import './index.css';

export default function Application() {
    return (
        <>
            <div className={"title"}>
                <h1>Application</h1>
            </div>

            <div className={"apps"}>
                <Row className={"g-5"}>
                    <Col lg={6} className="d-flex justify-content-between text-center">
                        <Link to={'https://book.harrylai.com'} style={{ textDecoration: 'none' }}>
                            <Card style={{width: '18rem', boxShadow: '1px 1px 1px'}}>
                                <Card.Img variant="top" src="images/book.harrylai.com.png"/>
                                <Card.Body>
                                    <Card.Title>Book System</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={6}>
                        <Link to={'https://todolist.harrylai.com'} style={{ textDecoration: 'none' }}>
                            <Card style={{width: '18rem', boxShadow: '1px 1px 1px'}}>
                                <Card.Img variant="top" src="images/todolist.harrylai.com.png"/>
                                <Card.Body>
                                    <Card.Title>To-Do List</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        </>
    );
}