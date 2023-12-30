import { useState } from 'react';
import { FaAlignJustify, FaHome, FaTruck, FaTags } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './../style/Sidebar.css';

const Sidebar = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };


    return (
        <>
            <div className={`sidebar-s ${sidebarCollapsed ? 'collapsed' : ''}`}>
                <div className="toggle-icon" onClick={toggleSidebar}>
                    <FaAlignJustify />
                </div>
                <li>
                    {!sidebarCollapsed && <FaHome className="icon" />}
                    <Link to="/dashboard" className="text-content">Dashboard</Link>
                </li>
                <li>
                    {!sidebarCollapsed && <FaTags className="icon" />}
                    <Link to="/produk" className="text-content">Produk</Link>
                </li>
                <li>
                    {!sidebarCollapsed && <FaTruck className="icon" />}
                    <Link to="/orders" className="text-content">Orders</Link>
                </li>
            </div>
        </>
    );
}

export default Sidebar;
