import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import KoreanPage from './pages/KoreanPage';
import LoginPage from './pages/LoginPage';

function App() {

  const [language, setLanguage] = useState("KOR");

  return (

    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
