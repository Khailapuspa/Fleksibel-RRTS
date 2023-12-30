import { Navbar, Container, Nav, NavDropdown, Button, Col, Form, FormControl } from "react-bootstrap";
import './../style/HeadBar.css';
import { Link } from "react-router-dom";

const HeadBar = () => {
    return (
        <Navbar expand="lg" className="home-headbar">
        <Container fluid>
            <Navbar.Brand href="/"><b>Fleksibeli</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>
            <Form className="d-flex">
            <Link to="/login">
                <Button variant="success" className="me-2">Login</Button>
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