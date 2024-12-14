
import './App.css';

import Home from './components/Home';
import Services from './components/Services';
import Navbar from './components/Navbar';
import {  Routes, Route } from 'react-router-dom';
function App() {
  

  return (
    <div className='App'>
 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
   
    </div>
  );
}

export default App;
