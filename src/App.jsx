import { useState } from 'react';
// import './App.css';
import  DashBoard  from './Components/Firstpage/DashBoard';
import Login from './Components/Authenetication/login';
import Signup from './Components/Authenetication/signup';
import Create from './Components/create/upload'
import Forget from './Components/Authenetication/forget';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="*" element={<Login/>} />
                <Route path="/Home" element = {<DashBoard/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/upload" element={<Create />} />
                <Route path="/forget" element={<Forget />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
