import {data} from "../../store/data";
import {Card, Stack} from "react-bootstrap";
import * as icons from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Education() {
    const education = data.education || [];

    return (
        <>
            <h1>Education</h1>

            <Stack className="w-100 edu">
                {/*<h2>*/}
                {/*    <icons.BookFill color="blue"></icons.BookFill>*/}
                {/*    <span>Education</span>*/}
                {/*</h2>*/}
                <Row xs={1} className="g-3">
                    {
                        education.map((edu) => {
                            return (
                                <Col>
                                    <Card className="text-white">
                                        <Card.Body className="d-flex flex-column justify-content-between">
                                            <div className="d-flex justify-content-between">
                                                <Card.Title>{edu.name}</Card.Title>
                                                <Card.Text>{edu.year}</Card.Text>
                                            </div>
                                            <div>
                                                <Card.Text>{edu.school}</Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Stack>
        </>
    );
}
