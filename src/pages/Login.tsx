import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { FormEvent, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { userRegisAsync } from "../action/Auth";
import { useAppDispatch } from "../app/hooks";
import { userLoginAsync } from "../action/AuthLog";
import { usertokenAsync } from "../action/AuthValidate";


const Login = () => {

  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginHandle = async () => {
    // const tokenResponse = await dispatch(usertokenAsync());
    // if (!tokenResponse.payload.success) {
    //   alert("Token is not valid. Please login again.");
    //     window.location.href = '/login';
    // } else {
      dispatch(userLoginAsync({ email, password })).then((action) => {
        if (action.payload.success == true ) {
          const token = action.payload.data.token
          localStorage.setItem('data', token)
          window.location.reload()
          window.location.href = '/dashboard';
        } else {
          alert(action.payload.message)
          console.log(action.payload.message)
        }
      })
    // }
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