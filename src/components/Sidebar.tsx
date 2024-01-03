import { useState } from 'react';
import { FaAlignJustify, FaHome, FaTruck, FaTags } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './../style/Sidebar.css';
import { useAppSelector } from '../app/hooks';
import { show } from '../features/sidebar/SidebarSlice';

const Sidebar = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const showValue = useAppSelector(show)

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };


    return (
        <>
            <div className={`sidebar-s ${showValue ? 'collapsed' : ''}`}>
                <li>
                    <FaHome className="icon" />
                    <Link to="/dashboard" className="text-content">Dashboard</Link>
                </li>
                <li>
                    <FaTags className="icon" />
                    <Link to="/produk" className="text-content">Produk</Link>
                </li>
                <li>
                    <FaTruck className="icon" />
                    <Link to="/orders" className="text-content">Orders</Link>
                </li>
            </div>
        </>
    );
}

export default Sidebar;
