import {Button, FloatingLabel, Form} from "react-bootstrap";

export default function Contact() {
    return (
        <>
            <div className="title">
                <h1>Contact</h1>
            </div>

            <>
                <Form className="bg-light p-3 rounded">
                    <FloatingLabel className="mb-3" controlId="name" label="Name">
                        <Form.Control type="text"/>
                    </FloatingLabel>

                    <FloatingLabel className="mb-3" controlId="email" label="Email">
                        <Form.Control type="text"/>
                    </FloatingLabel>

                    <FloatingLabel className="mb-3" controlId="message" label="Message">
                        <Form.Control as="textarea" rows={3} style={{height: '100px', resize: 'none'}}/>
                    </FloatingLabel>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>

        </>
    );
}
