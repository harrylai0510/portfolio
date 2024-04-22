import {data} from "../../store/data";
import {Card, CardGroup} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Project() {
    const projects = data.projects || [];

    return (
        <>
            <h1>Project</h1>

            <Row xs={1} sm={2} lg={1} className="g-4">
                {
                    projects.map((project) => {
                        return (
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{project.name}</Card.Title>
                                        <Card.Subtitle>{project.company}</Card.Subtitle>
                                        <Card.Text>
                                            {
                                                project.description.map((desc) => {
                                                    return (
                                                        <li>{desc}</li>
                                                    );
                                                })
                                            }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                }

            </Row>
        </>
    );
}
