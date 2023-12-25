import { Container, Navbar } from "react-bootstrap";
import './../style/Navbar.css';

const Navbarni = () => {
    return (
        <Navbar className="App-navbar">
            <Container>
            <Navbar.Brand>Copy Right - Fleksibeli</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navbarni;