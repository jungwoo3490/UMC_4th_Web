import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import KoreanPage from './pages/KoreanPage';

function App() {

  const [language, setLanguage] = useState("KOR");

  return (

    <div className="App">
      <KoreanPage />
    </div>
  );
}

export default App;
