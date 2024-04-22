import {data} from "../../store/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Card, Stack} from "react-bootstrap";
import * as icons from "react-bootstrap-icons";

export default function Experience() {
    const experiences = data.experiences || [];

    return (
        <>
            <h1>Experience</h1>

            <Stack className="w-100 exp">
                {/*<h2>*/}
                {/*    <span>Experience</span>*/}
                {/*    <icons.SuitcaseLg color="green"></icons.SuitcaseLg>*/}
                {/*</h2>*/}

                <Row xs={1} className="g-3">
                    {
                        experiences.map((exp) => {
                            return (
                                <Col>
                                    <Card className="text-white">
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
