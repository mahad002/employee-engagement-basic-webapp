import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeListPage from './pages/employeeListPage';
import ProfilePage from './pages/profilePage';
import PostPage from './pages/postPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeListPage/>} />
        <Route path="/profile/:id" element={<ProfilePage/>} />
        <Route path="/post/:id" element={<PostPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
