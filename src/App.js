// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const themeColors = {
    dark:"grey",
    light: "white",
    primary: "#8785a8",
    danger:"#a88585",
    success: "#86a885", 
    warning: "#a8a885", 
  };
  
  const togglemode = (theme) =>{
    setMode(theme);
      showAlert("Theme changed","success")
      document.body.style.backgroundColor = themeColors[theme]
  }
  return (
  <>
    <Router>

    <Navbar title="TextUtils" mode={mode} toggleMode={togglemode}/>
    <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<TextForm heading ="Enter a text" mode={mode} showAlert = {showAlert}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;

