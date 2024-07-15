import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";
import {Stack} from "react-bootstrap";
import * as icons from "react-bootstrap-icons"
import './index.css';

export default function Navigater() {
    return (
        <Col xs={12} lg={1} className="border rounded bg-white m-1 p-3 order-sm-2 order-lg-3">

            <Stack gap={3}>
                <NavLink to="/" className="Link rounded">
                    <div className="p-2 d-flex flex-column align-items-center justify-content-center">
                        <icons.FilePerson size={36}></icons.FilePerson>
                        <text>About</text>
                    </div>
                </NavLink>
                <NavLink to="/edu_exp" className="Link rounded">
                    <div className="p-2 d-flex flex-column align-items-center justify-content-center">
                        <icons.Briefcase size={36}></icons.Briefcase>
                        <text>Edu&Exp</text>
                    </div>
                </NavLink>
                <NavLink to="/project" className="Link rounded">
                    <div className="p-2 d-flex flex-column align-items-center justify-content-center">
                        <icons.Tools size={36}></icons.Tools>
                        <text>Project</text>
                    </div>
                </NavLink>
                <NavLink to="/application" className="Link rounded">
                    <div className="p-2 d-flex flex-column align-items-center justify-content-center">
                        <icons.Window size={36}></icons.Window>
                        <text>Application</text>
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
