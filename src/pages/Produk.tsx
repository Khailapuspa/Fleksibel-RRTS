import { Card, Container, Row } from "react-bootstrap";
import HeadBar from "../components/HeadBar";
import Sidebar from "../components/Sidebar";
import './../style/Produk.css';
import './../style/Dashboard.css';
import NavBar from "../components/Navbar";

const Produk = () => {
    return (
        <>
        <NavBar />
        <Sidebar />
            {/* <Card className="card-produk">
                <p>PRODUK NANTI DISINI </p>
            </Card> */}

        {/* <Container className="container-db">
            <div className="card-db">
            <Card className="card-produk">
                <p>PRODUK NANTI DISINI </p>
            </Card>
            <Card className="card-produk">
                <p>PRODUK NANTI DISINI </p>
            </Card>
            <Card className="card-produk">
                <p>PRODUK NANTI DISINI </p>
            </Card>
            </div>
        </Container> */}

            <div className="content">
            <Row>
            <Card className="card-produk">
                <p>PRODUK 1 </p>
            </Card>
            <Card className="card-produk" style={{margin: '20px'}}>
                <p>PRODUK 2 </p>
            </Card>
            <Card className="card-produk" style={{margin: '20px'}}>
                <p>PRODUK 3 </p>
            </Card>
            <Card className="card-produk" style={{margin: '20px'}}>
                <p>PRODUK 4 </p>
            </Card>
            </Row>

            <Row>
            <Card className="card-produk" style={{margin: '20px'}}>
                <p>PRODUK 5 </p>
            </Card>
            <Card className="card-produk" style={{margin: '20px'}}>
                <p>PRODUK 6 </p>
            </Card>
            <Card className="card-produk" style={{margin: '20px'}}>
                <p>PRODUK 7 </p>
            </Card>
            <Card className="card-produk" style={{margin: '20px'}}>
                <p>PRODUK 8 </p>
            </Card>
            </Row>
            </div>

        </>
    );
}

export default Produk;