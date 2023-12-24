  import React, { useState } from 'react';
  import { useAppDispatch, useAppSelector } from '../app/hooks';
  import { Button, Container, Row, Card } from "react-bootstrap";
  import { InputText } from 'primereact/inputtext';
  import { InputNumber } from 'primereact/inputnumber';
  import './../color/Register.css';
  import { userRegisAsync } from '../action/Auth';
  import { setName, setAge, setEmail, setPassword, selectUser } from '../features/auth/userSlice';


  const Register = () => {
    const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const { name, age, email, password } = user;

  const registerHandle = () => {
    dispatch(userRegisAsync(user));
  };

    return (
      <Container>
        <Card>
          <Card.Body>
            <Card.Title className="button">Sign Up</Card.Title>
            <div className="card-form">
              <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-user"></i>
                </span>
                <InputText type="text" placeholder="name" value={name} onChange={(e) => dispatch(setName(e.target.value))} />
              </div>
              <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-calendar"></i>
                </span>
                <InputNumber placeholder="Age" value={age} onChange={(e) => dispatch(setAge(e.value === null ? 0 : e.value))} />
              </div>
              <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-envelope"></i>
                </span>
                <InputText type="email" placeholder="Email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
              </div>
              <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-lock"></i>
                </span>
                <InputText type="password" placeholder="Password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
              </div>
            </div>
            <Button className="button" variant="primary" onClick={registerHandle}>Sign Up</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  };

  export default Register;
