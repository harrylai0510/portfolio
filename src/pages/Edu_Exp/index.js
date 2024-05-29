import {data} from "../../store/data";
import {Card, Stack} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './index.css';

export default function EduExp() {
    const education = data.education || [];
    const experiences = data.experiences || [];

    return (
        <>
            <div className={"title"}>
                <h1>Education</h1>
            </div>

            <Stack className="w-100 edu">
                <Row xs={1} className="g-3">
                    {
                        education.map((edu) => {
                            return (
                                <Col>
                                    <Card className={"border-0"}>
                                        <Card.Body className="d-flex flex-column justify-content-between">
                                            <div className="d-flex justify-content-between">
                                                <Card.Title>{edu.name}</Card.Title>
                                                <Card.Text>{edu.year}</Card.Text>
                                            </div>
                                            <hr className="m-0 p-0"/>
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

            <div className={"title mt-4"}>
                <h1>Experience</h1>
            </div>

            <Stack className="w-100 exp">
                <Row xs={1} className="g-3">
                    {
                        experiences.map((exp) => {
                            return (
                                <Col>
                                    <Card className={"border-0"}>
                                        <Card.Body className="d-flex flex-column justify-content-between">
                                            <div className="d-flex justify-content-between">
                                                <Card.Title>{exp.jobTitle} ({exp.company})</Card.Title>
                                                <Card.Text>{exp.time}</Card.Text>
                                            </div>

                                            <hr className="mt-1 p-0"/>

                                            <div>
                                                {
                                                    exp.description.map((desc) => {
                                                        return (
                                                            <li>{desc}</li>
                                                        );
                                                    })
                                                }
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
