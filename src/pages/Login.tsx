import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Container, Card, Button } from "react-bootstrap";

const Login = () => {
    return (
        <Container fluid className="container">
      <Card>
      <Card.Body>
        <Card.Title className="button">Sign In</Card.Title>
        <div className="card-form">
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                    <i className="pi pi-envelope"></i>
                </span>
                <InputText placeholder="Email" />
            </div>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                    <i className="pi pi-lock"></i>
                </span>
                <InputText placeholder="Password" />
            </div>
        </div>
        <Button className="button" variant="primary">Login Say</Button>
      </Card.Body>
    </Card>
    </Container>
    )

};

export default Login;