import { Provider} from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './app/store';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Produk from './pages/Produk';
import Orders from './pages/Orders';
import Belajar from './pages/Belajar';
import './App.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
import * as FaIcons from 'react-icons/fa' ;




function App() {

  const isAuthenticated = !!localStorage.getItem('data');

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/produk" 
            element={isAuthenticated ? <Produk /> : <Navigate to="/login" />} 
          />
          <Route path="/orders" 
            element={isAuthenticated ? <Orders /> : <Navigate to="/login" />} 
          />
          <Route path="/belajar" element={<Belajar />} />
        </Routes>
	</BrowserRouter>  
    </Provider>
  );
}

export default App;
