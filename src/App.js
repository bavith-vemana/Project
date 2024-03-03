import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LstPage from './EmpListPage/LstPage.js';
import HomePage from './HomePage/Homepage.js';
import Loginpage from './LoginPage/Loginpage.js';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage/>}/>
        <Route path="/List" element={<LstPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
