import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import HomePage from '../HomePage.jsx'
import Productpage from './Productpage.jsx'
import './App.css';

export default function ReactRout() {
  return (
    <div>
      <p>ReactRout componenet</p>
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="productpage" element={<Productpage />} />
    </Routes>
    <Nav/>
</BrowserRouter>
    </div>
  )
}
