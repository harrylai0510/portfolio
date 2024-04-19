import {Card, Stack} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import * as icons from "react-bootstrap-icons";

import './index.css';

export default function Resume() {
    const education = [
        {time: "2014 - 2016", name: "111222333"},
        {time: "2012 - 2014", name: "333222111"},
    ];
    const experience = [
        {time: "2014 - 2016", company: "CCC", jobTitle: "Programmer"},
        {time: "2012 - 2014", company: "FFF", jobTitle: "BA"},
    ];
    const skills = ["Docker", "MongoDB", "SQL"];

    return (
        <>
            <>
                <span className="h1 m-3">Resume</span>
            </>
            <Stack direction="horizontal" gap={2}>
                <Stack className="w-100 p-2 edu">
                    <h2>
                        <icons.BookFill color="blue"></icons.BookFill>
                        <span>Education</span>
                    </h2>
                    <Row xs={1} className="g-3">
                        {
                            education.map((edu) => {
                                return (
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{edu.time}</Card.Title>
                                                <Card.Text>{edu.name}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Stack>
                <Stack className="w-100 p-2 exp">
                    <h2>
                        <icons.SuitcaseLg color="green"></icons.SuitcaseLg>
                        <span>Experience</span>
                    </h2>

                    <Row xs={1} className="g-3">
                        {
                            experience.map((exp) => {
                                return (
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{exp.time}</Card.Title>
                                                <Card.Text>
                                                    {exp.company} <br/>
                                                    {exp.jobTitle}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Stack>
            </Stack>

            <div className="mt-4 rounded">
                <h1 className="pb-2">Knowledge</h1>
                {
                    skills.map((skill, index) => {
                        return (
                            <span className="mt-4 me-2 px-3 py-2 bg-primary text-light skill">{skill}</span>
                        );
                    })
                }
            </div>
        </>
    );
}