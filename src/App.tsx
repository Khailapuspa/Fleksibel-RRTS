import { Provider} from 'react-redux';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import Home from './pages/Home';
import Register from './pages/Register';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
	</BrowserRouter>  
    </Provider>
  );
}

export default App;
