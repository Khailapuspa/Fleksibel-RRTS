import { Card } from "react-bootstrap";
import HeadBar from "../components/HeadBar";
import Sidebar from "../components/Sidebar";
import './../style/Orders.css';

const Orders = () => {
    return (
        <>
        <HeadBar />
        <Sidebar />
        <Card className="card-orders">
            <p>ORDERS DISINI AJA YA SLUR </p>
        </Card>
        </>
    )
}

export default Orders;