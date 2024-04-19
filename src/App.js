import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Intro from "./components/Intro";
import Navigater from "./components/Navigater";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";


function App() {

    return (
        <BrowserRouter>
            <div className="App w-100 h-100 bg-blue-grad">

                <Container className="p-4">
                    <Row>
                        <Intro/>

                        <Col xs={12} lg className="border rounded bg-white m-1 p-4">
                            {/*<About />*/}
                            {/*<Resume />*/}
                            {/*<Skills />*/}
                            {/*<Contact />*/}

                            <Routes>
                                <Route path='/' Component={About}/>
                                <Route path='/resume' Component={Resume}/>
                                <Route path='/skills' Component={Skills}/>
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
