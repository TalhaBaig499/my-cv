import logo from './logo.svg';
import './App.css';
import './css/bootstrap-grid.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import ContactUs from './Component/ContactUs';
import Work from './Component/Work';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container px-0'>
        <div className="row mx-0">
          <div className='col-12 float-right'>
            <Navbar />
          </div>
          <div className='col-md-4'>
            <Home />
          </div>
          <div className='col-md-8 mt-md-0 mt-4 contact-us-container'>
            <Routes>
              <Route path="/" element={<ContactUs/>} />
              <Route path="/contactus" element={<ContactUs/>} />
              <Route path="/work" element={<Work/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
