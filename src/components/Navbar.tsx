// NavBar.jsx
import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';
import './../style/NavBar.css'; // Import your CSS file for styling


const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar-left">
        <span className="navBar-logo">Flexibeli</span>
        <Button icon="pi pi-bars" className="p-button-rounded p-button-text"></Button>
      </div>
      <div className="navBar-right">
        <InputText placeholder="Search" className="p-inputtext-sm" />
        <Button icon="pi pi-search" className="p-button-rounded p-button-text"></Button>
        <Button icon="pi pi-bell" className="p-button-rounded p-button-text"></Button>
        <Avatar label="JW" icon="pi pi-user" shape="circle" className="p-mr-2 p-overlay-badge" />
      </div>
    </div>
  );
};

export default NavBar;
