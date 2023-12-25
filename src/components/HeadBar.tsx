import { Navbar, Container, Nav, NavDropdown, Button, Col, Form, FormControl } from "react-bootstrap";
import './../style/HeadBar.css';
import { Link } from "react-router-dom";

const HeadBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" >
        <Container fluid>
            <Navbar.Brand href="#">Fleksibeli</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                Link
                </Nav.Link>
            </Nav>
            <Form className="d-flex">
            <Link to="/login">
                <Button variant="outline-success" className="me-2">Login</Button>
            </Link>
            <Link to="/register">
                <Button variant="outline-primary">Register</Button>
            </Link>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default HeadBar;