import { useState } from 'react';
// import './App.css';
import  DashBoard  from './Components/Firstpage/DashBoard';
import Login from './Components/Authenetication/login';
import Signup from './Components/Authenetication/signup';
import Create from './Components/create/upload'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/Home" element = {<DashBoard/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/upload" element={<Create />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
