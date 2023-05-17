import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import KoreanPage from './pages/KoreanPage';
import LoginPage from './pages/LoginPage';
import KaKaoLoginPage from './pages/KaKaoLoginPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [language, setLanguage] = useState("KOR");

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<KoreanPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/kakaoLogin' element={<KaKaoLoginPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
