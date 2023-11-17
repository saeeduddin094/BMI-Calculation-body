// import logo from './logo.svg';
// import './App.css';
import Acco from './components/Acco';
import Getvalue from './components/Getvalue';
import Navbar from './components/Navbar';
// import React from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";
function App() {
  return (
    <>
    {/* <Router> */}
        <Navbar/>
        <div className="container">
        {/* <Routes>
          <Route path="/Acco" element={<Acco />} />
          <Route path="/" element={<Getvalue/>} />
        </Routes> */}
        <Getvalue/>
        <Acco/>
        </div>
    {/* </Router> */}
      </>
  );
}

export default App;









