import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import './../style/DefaultLayout.css';
import Sidebar from '../components/Sidebar';

const DefaultLayout = () => {
    return (
        <>
            <div className="app-container">
                <div className="app-navbar">
                    <Navbar/>
                </div>
                <div className="app-sidebar">
                    <Sidebar/>
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;