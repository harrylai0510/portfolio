import './index.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {data} from "../../store/data";

export default function About() {
    const skills = data.skills || [];
    const skillExp = {
        0: "w-25",
        1: "w-50",
        2: "w-75",
        3: "w-100"
    }
    const skillColor = {
        0: "bg-danger",
        1: "bg-warning",
        2: "bg-primary",
        3: "bg-success"
    }

    return (
        <>
            <div className={"title"}>
                <h1>About</h1>
            </div>

            <p className="rounded lh-lg">
                I’m Harry Lai, a programmer from Hong Kong who graduated from Coventry University with writing & design
                software experience for 5+ years. I have been involved in various stages of the system, including system
                design, development, testing, and deployment. <br/><br/>

                Proficient in System Design, Coding and System Testing. <br/><br/>

                I absolutely love indulging in a hot cup of coffee, binge-watching my favourite movies and TV shows,
                playing thrilling video games, and engaging in anything related to music. Bruno Mars is, without a
                doubt, my all-time favourite singer. <br/>
            </p>

            <Row className={"g-2"}>
                <Col lg={4}>
                    <img style={{"object-position": "left"}} className={"img-fluid rounded mx-auto d-block text-center"}
                         width="350" height="350" src="./images/coding.jpeg"/>
                </Col>
                <Col lg={4}>
                    <img className={"img-fluid rounded mx-auto d-block text-center"} width="350" height="350"
                         src="./images/coffee.jpeg"/>
                </Col>
                <Col lg={4}>
                    <img style={{"object-position": '-112px'}}
                         className={"img-fluid rounded mx-auto d-block text-center"} width="350" height="350"
                         src="./images/bruno_mars.webp"/>
                </Col>
            </Row>

            <div className={"title mt-4"}>
                <h1>Skills</h1>
            </div>

            <Row>
                {
                    skills.map(skill => {
                        return (
                            <Col lg={4} className={"mb-2"}>
                                <span>{skill[0]}</span>
                                <div className="progress">
                                    <div className={"progress-bar " + skillExp[skill[1]] + " " + skillColor[skill[1]]  }></div>
                                </div>
                            </Col>
                        );
                    })

                }

                {/*<Col lg={4}>*/}
                {/*    <span>HTML, JS, CSS</span>*/}
                {/*    <div className="progress">*/}
                {/*        <div className="progress-bar w-50 bg-warning"></div>*/}
                {/*    </div>*/}
                {/*</Col>*/}
                {/*<Col lg={4}>*/}
                {/*    <span>JQuery</span>*/}
                {/*    <div className="progress">*/}
                {/*        <div className="progress-bar w-75"></div>*/}
                {/*    </div>*/}
                {/*</Col>*/}
                {/*<Col lg={4}>*/}
                {/*    <span>Laravel</span>*/}
                {/*    <div className="progress">*/}
                {/*        <div className="progress-bar w-25 bg-danger"></div>*/}
                {/*    </div>*/}
                {/*</Col>*/}
            </Row>
        </>
    );
}
