import { Link } from 'react-router-dom';
import { FaAlignJustify, FaHome, FaTruck, FaTags } from 'react-icons/fa';
import './../style/Belajar.css';
import { useState } from 'react';

const Belajar = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <>
      <div className={`conti ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="side-b">
          <div className="toggle-icon" onClick={toggleSidebar}>
            <FaAlignJustify />
          </div>
          {!sidebarCollapsed && (
            <ul>
              <li>
                <FaHome className="icon" />
                <Link to="/dashboard" className="text-content">
                  Dashboard
                </Link>
              </li>
              <li>
                <FaTags className="icon" />
                <Link to="/produk" className="text-content">
                  Produk
                </Link>
              </li>
              <li>
                <FaTruck className="icon" />
                <Link to="/orders" className="text-content">
                  Orders
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="tent">
          <h1>CONTENTNYA</h1>
        </div>
      </div>
    </>
  );
};

export default Belajar;
