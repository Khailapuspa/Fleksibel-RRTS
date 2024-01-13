import { Button, Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import './../style/Dashboard.css';
import HeadBar from "../components/HeadBar";
import { Image } from 'primereact/image';
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { show, setShow } from "../features/sidebar/SidebarSlice";
import { usertokenAsync } from "../action/AuthValidate";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const dispatch = useAppDispatch();
    const showValue = useAppSelector(show);
    const navigate = useNavigate();


    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const setSideBar = () => {
        const setsidebar = Boolean(!showValue)
        dispatch(setShow(setsidebar));
        setSidebarOpen(!sidebarOpen);
    }

    useEffect(() => {
        const checkTokenValidity = async () => {
        //   try {
            const tokenResponse = await dispatch(usertokenAsync());
      
            if (!tokenResponse.payload) {
                alert("Token is not valid or has expired. Please login again.")
                localStorage.removeItem('data');
                window.location.reload()
                window.location.href = '/login';
              } else {
                // Handle other errors, show a different alert, or redirect to an error page.
              }
            // }
          } 
        //   catch (error) {
        //     console.error("Error validating token:", error);
            // Handle fetch error, show alert, or redirect to an error page.
        //   }
      
        checkTokenValidity();
      }, [dispatch]);

    const contentStyle = {
        marginLeft: showValue ? '0' : '212px',
        transition: 'margin-left 0.3s ease',
    };

    return (
        <>
            <NavBar />
            <div className="conti">
                <div className="sidebar-db" style={{ width: showValue ? '0' : '212px', transition: 'width 0.3s ease' }} >
                    <Sidebar />
                </div>
                <div className="content-db" style={contentStyle}>
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