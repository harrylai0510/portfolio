import {data} from "../../store/data";

import './index.css';
import {Stack} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Skills() {
    const skills = data.skills || [];

    return (
        <>
            <h1>Skills</h1>

            <Row>
                {/*<Stack direction="horizontal" gap={2}>*/}
                    {
                        skills.map((skill, index) => {
                            return (
                                <Col lg={2} className="m-2 p-2 lh-lg bg-primary text-light text-center skill">
                                    <span>{skill}</span>
                                </Col>
                            );
                        })
                    }
                {/*</Stack>*/}
            </Row>
        </>
    );
}
