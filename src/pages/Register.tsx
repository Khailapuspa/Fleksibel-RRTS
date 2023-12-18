import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Button, Container, Row, Card } from "react-bootstrap";
import { userjuAsync } from '../action/Auth';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import './../color/Register.css';

const Register = () => {


//   const dispatch = useAppDispatch();
//   //INI BUAT AMBIL DATA DI SLICE
//   const nameUser = useAppSelector(name);
//   const ageUser = useAppSelector(age);
//   const emailUser = useAppSelector(email);
//   const passwordlUser = useAppSelector(password);
//   // SAMPE SINI

//   const HandleButton = () => {
//     dispatch(userjuAsync({ name: nameUser, age: ageUser, email: emailUser, password: passwordlUser }));
// }

  return (
    <Container className="container">
      <div className="card">
      <Card title="KHAILA">
        <p>NFJDSFNUSDBFUISDIUFDJKNDGJVBJFDNGKFDNGKFJGN</p>
      {/* <Row>
      <div className="p-inputgroup flex-1">
          <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
          </span>
          <InputText placeholder="Username" />
      </div>
      </Row>
      <Row>
      <div className="p-inputgroup flex-1">
          <span className="p-inputgroup-addon">$</span>
          <InputNumber placeholder="Price" />
      </div>
      </Row>
      <Row>
      <div className="p-inputgroup flex-1">
          <span className="p-inputgroup-addon">www</span>
          <InputText placeholder="Website" />
      </div>
      </Row>      */}
      </Card>
      </div>
    </Container>
    
  );
};


export default Register;
