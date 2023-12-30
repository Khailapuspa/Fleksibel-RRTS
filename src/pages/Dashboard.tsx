import { Button, Card, Container } from "react-bootstrap";
import { useState } from "react";
import './../style/Dashboard.css';
import HeadBar from "../components/HeadBar";
import { Image } from 'primereact/image';
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";

const Dashboard = () => {

    return (
        <>
        
        <NavBar />
        <div className="conti">
        <div className="sidebar-db">
        <Sidebar />
        </div>
        <div className="content-db">
            <h1>dashboard</h1>
            <div className="produk-db">
                <a href="/produk">
                <Image src="/produk1.jpeg" width="600" height="400" />
                </a>
            <div className="desc-db">Shampo</div>
            </div>
            <div className="produk-db">
                <a href="/produk">
                <Image src="/produk1.jpeg" width="600" height="400" />
                </a>
            <div className="desc-db">Shampo</div>
            </div>
            <div className="produk-db">
                <a href="/produk">
                <Image src="/produk1.jpeg" width="600" height="400" />
                </a>
            <div className="desc-db">Shampo</div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Dashboard;