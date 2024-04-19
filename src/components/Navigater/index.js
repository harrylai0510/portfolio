import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";
import {Stack} from "react-bootstrap";
import * as icons from "react-bootstrap-icons"
import './index.css';

export default function Navigater() {
    return (
        <Col xs={12} lg={1} className="border rounded bg-white m-1 p-3">

            <Stack gap={3}>
                <NavLink to="/" className="Link rounded">
                    <div className="p-2 d-flex flex-column align-items-center justify-content-center">
                        <icons.FilePerson size={36}></icons.FilePerson>
                        <text>About</text>
                    </div>
                </NavLink>
                <NavLink to="/resume" className="Link rounded">
                    <div className="p-2 d-flex flex-column align-items-center justify-content-center">
                        <icons.FileEarmarkSpreadsheet size={36}></icons.FileEarmarkSpreadsheet>
                        <text>Resume</text>
                    </div>
                </NavLink>
                <NavLink to="/skills" className="Link rounded">
                    <div className="p-2 d-flex flex-column align-items-center justify-content-center">
                        <icons.Tools size={36}></icons.Tools>
                        <text>Skills</text>
                    </div>
                </NavLink>
                <NavLink to="/contact" className="Link rounded">
                    <div className="p-2 d-flex flex-column align-items-center justify-content-center">
                        <icons.PersonLinesFill size={36}></icons.PersonLinesFill>
                        <text>Contact</text>
                    </div>
                </NavLink>
            </Stack>

        </Col>
    );
}