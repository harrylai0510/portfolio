import {data} from "../../store/data";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Project() {
    const projects = data.projects || [];

    return (
        <>
            <div className={"title"}>
                <h1>Project</h1>
            </div>

            <Row xs={1} sm={2} lg={1} className="g-4">
                {
                    projects.map((project) => {
                        return (
                            <Col>
                                <Card>
                                    <Card.Body className="d-flex flex-column justify-content-between">
                                        <div className="d-flex justify-content-between">
                                            <Card.Title>{project.name}</Card.Title>
                                            <Card.Subtitle>{project.company}</Card.Subtitle>
                                        </div>
                                        <hr className="m-0 p-0"/>
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
