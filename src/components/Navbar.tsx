// NavBar.jsx
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';
import './../style/Navbar.css'; // Import your CSS file for styling
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { setShow, show } from '../features/sidebar/SidebarSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';


const NavBar = () => {

  const dispatch = useAppDispatch();
  const showValue = useAppSelector(show);
  // const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const setSideBar = () => {
    const setsidebar = Boolean(!showValue)
    dispatch(setShow(setsidebar));
    // setSidebarOpen(!sidebarOpen);
  }

  const handleLogout = () => {
    // Clear data from localStorage
    localStorage.removeItem('data');
    // Redirect to home page
    window.location.href = '/home';
  };

  // const navbarStyle = {
  //   backgroundColor: '#393c4d',
  //   marginLeft: sidebarOpen ? '15%' : '0', // Adjust the width as needed
  //   transition: 'margin-left 0.5s ease', // Add a smooth transition effect
  // };

  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#393c4d'}} >
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: 'white', fontSize: '20px', marginLeft: '50px' }}>Flexibeli</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{marginLeft: '35px'}}>
            <Button icon="pi pi-bars" className="p-button-rounded p-button-text" style={{color: 'white'}} onClick={() => setSideBar()}></Button>
          </Nav>
          <Nav>
            <InputText placeholder="Search" className="p-inputtext-sm" />
            <Button icon="pi pi-search" className="p-button-rounded p-button-text"></Button>
            <Button icon="pi pi-bell" className="p-button-rounded p-button-text"></Button>
            <Nav.Link style={{ color: 'white', fontSize: '20px'}} onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div className="navBar">
    //   <div className="navBar-left">
    //     <span className="navBar-logo">Flexibeli</span>
    //     <Button icon="pi pi-bars" className="p-button-rounded p-button-text"></Button>
    //   </div>
    //   <div className="navBar-right">
    //     <InputText placeholder="Search" className="p-inputtext-sm" />
    //     <Button icon="pi pi-search" className="p-button-rounded p-button-text"></Button>
    //     <Button icon="pi pi-bell" className="p-button-rounded p-button-text"></Button>
    //     <Avatar label="JW" icon="pi pi-user" shape="circle" className="p-mr-2 p-overlay-badge" />
    //   </div>
    // </div>
  );
};

export default NavBar;
