import { Provider} from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
import * as FaIcons from 'react-icons/fa' ;
import Produk from './pages/Produk';
import Orders from './pages/Orders';
import Belajar from './pages/Belajar';
import { DefaultContext } from 'react-icons';
import DefaultLayout from './layout/DefaultLayout';



function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/belajar" element={<Belajar />} />
          <Route path="/default" element={<DefaultLayout />} />
        </Routes>
	</BrowserRouter>  
    </Provider>
  );
}

export default App;
