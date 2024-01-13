import { Card, Container, Row } from "react-bootstrap";
import HeadBar from "../components/HeadBar";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { show, setShow } from "../features/sidebar/SidebarSlice";
import { Image } from 'primereact/image';
import './../style/Produk.css';
import './../style/Dashboard.css';

const Produk = () => {

    const dispatch = useAppDispatch();
    const showValue = useAppSelector(show);

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const setSideBar = () => {
        const setsidebar = Boolean(!showValue)
        dispatch(setShow(setsidebar));
        setSidebarOpen(!sidebarOpen);
    }

    const contentStyle = {
        marginLeft: showValue ? '0' : '212px',
        transition: 'margin-left 0.3s ease',
    };

    return (
        <>
        <NavBar />
            <div className="conti">
                <div className="sidebar-p" style={{ width: showValue ? '0' : '212px', transition: 'width 0.3s ease' }} >
                    <Sidebar />
                </div>
                <div className="content-p" style={contentStyle}>
                    <h1>dashboard</h1>
                    <div className="produk-p">
                        <a href="/produk">
                            <Image src="/produk1.jpeg" width="600" height="400" />
                        </a>
                        <div className="desc-p">Shampo</div>
                    </div>
                    <div className="produk-p">
                        <a href="/produk">
                            <Image src="/produk1.jpeg" width="600" height="400" />
                        </a>
                        <div className="desc-p">Shampo</div>
                    </div>
                    <div className="produk-p">
                        <a href="/produk">
                            <Image src="/produk1.jpeg" width="600" height="400" />
                        </a>
                        <div className="desc-p">Shampo</div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Produk;