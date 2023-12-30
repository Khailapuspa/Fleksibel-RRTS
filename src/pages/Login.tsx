import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { userRegisAsync } from "../action/Auth";
import { useAppDispatch } from "../app/hooks";
import { userLoginAsync } from "../action/AuthLog";

const Login = () => {
  const dispatch = useAppDispatch();
    // const user = useAppSelector(selectUser);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

  // const { name, age, email, password } = user;

  const loginHandle = () => {
    dispatch(userLoginAsync({ email, password }));
  };
  
    return (
        <Container className="container-regis-login">
      <Card className="cardnih">
      <Card.Body>
        <Card.Title className="button">Sign In</Card.Title>
        <div className="card-form">
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                    <i className="pi pi-envelope"></i>
                </span>
                <InputText type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                    <i className="pi pi-lock"></i>
                </span>
                <InputText type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
        <p className="login-text"><a href="/register">Daftar</a></p>
        <Button className="button" variant="primary" onClick={loginHandle}>Login Say</Button>
      </Card.Body>
    </Card>
    </Container>
    )

};

export default Login;