import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Intro from "./components/Intro";
import Navigater from "./components/Navigater";

import About from "./pages/About";
import EduExp from "./pages/Edu_Exp";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {

    return (
        <BrowserRouter>
            <div className="App w-100 h-100 bg-blue-grad">

                <Container className="p-4">
                    <Row>
                        <Intro/>

                        <Col xs={12} lg className="border rounded bg-white m-1 p-4 order-sm-3 order-lg-2">
                            <Routes>
                                <Route path='/' Component={About}/>
                                <Route path='/edu_exp' Component={EduExp}/>
                                <Route path='/project' Component={Project}/>
                                <Route path='/contact' Component={Contact}/>
                            </Routes>
                        </Col>

                        <Navigater />
                    </Row>
                </Container>


            </div>
        </BrowserRouter>
    );
}

export default App;
