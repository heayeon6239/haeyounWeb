import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home.jsx'
import DetailPage from './detailPage.jsx'
import OttPage from './ottPage.jsx'
import Mega from './mega.jsx'

import Header from './common/header.jsx'
import Footer from './common/footer.jsx'


// import 'bootstrap-icons/font/bootstrap-icons.css';


export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/charang' element={<DetailPage />} />
        <Route path='/ott' element={<OttPage />} />
        <Route path='/mega' element={<Mega />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}
