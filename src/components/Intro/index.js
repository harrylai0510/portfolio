import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

import './index.css';
import {ListGroup} from "react-bootstrap";
import * as icons from "react-bootstrap-icons";

export default function Intro() {
    return (
        <Col xs={12} lg={3} className="border rounded bg-white m-1 d-flex flex-column align-items-center order-sm-1 order-lg-1">
            <div className="wrapper w-100">

                <div className="photo d-flex justify-content-center">
                    <Image src="/images/profile_pic.png" alt="profile_pic" roundedCircle fluid />
                </div>

                <div className="m-3 d-flex flex-column justify-content-center align-items-center">
                    <div className="fw-bold">Harry Lai</div>
                    <div className="badge text-bg-secondary">Programmer</div>
                </div>

                <div className="m-3">
                    <ListGroup>
                        <ListGroup.Item variant="secondary">
                            <div className="contact-box">
                                <div className="bg-light p-1 rounded">
                                    <icons.Telephone size={16}></icons.Telephone>
                                </div>

                                <div className="d-flex flex-column">
                                    <small className="contact-name">Phone</small>
                                    <span className="contact-info">+852 6748 8719</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item variant="secondary">
                            <div className="contact-box">
                                <div className="bg-light p-1 rounded">
                                    <icons.Envelope size={16}></icons.Envelope>
                                </div>

                                <div className="d-flex flex-column">
                                    <small className="contact-name">eMail</small>
                                    <span className="contact-info">harrylai0510@gmail.com</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item variant="secondary">
                            <div className="contact-box">
                                <div className="bg-light p-1 rounded">
                                    <icons.Envelope size={16}></icons.Envelope>
                                </div>

                                <div className="d-flex flex-column">
                                    <small className="contact-name">Github</small>
                                    <span className="contact-info"><a href={"https://github.com/harrylai0510"} target={"_blank"}>harrylai0510</a></span>
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </Col>
    );
}
