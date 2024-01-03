import { Button, Card, Container } from "react-bootstrap";
import { useState } from "react";
import './../style/Dashboard.css';
import HeadBar from "../components/HeadBar";
import { Image } from 'primereact/image';
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { show, setShow } from "../features/sidebar/SidebarSlice";

const Dashboard = () => {

    const dispatch = useAppDispatch();
    const showValue = useAppSelector(show);

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    // const [sidebarClose, setSidebarClose] = useState<boolean>(false);

    const setSideBar = () => {
        const setsidebar = Boolean(!showValue)
        dispatch(setShow(setsidebar));
        setSidebarOpen(!sidebarOpen);
    }

    const contentStyle = {
        marginLeft: showValue ? '0' : '212px',
        transition: 'margin-left 0.3s ease',
    };

    // const sidebarStyle = {
    //     marginLeft: sidebarOpen ? '0' : '5%', // Adjust the width as needed
    //     transition: 'margin-left 0.5s ease', // Add a smooth transition effect
    // };


    // const sidebarStyle = {
    //     width: sidebarOpen ? '0' : '', // Adjust the width as needed
    //     transition: 'width 0.5s ease', // Add a smooth transition effect
    // };

    // console.log('showValue:', showValue);

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


// const DContainer : React.FC = (show: boolean) => {
//     return(
//         <>

//         </>
//     )
// }
export default Dashboard;