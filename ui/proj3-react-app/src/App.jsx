import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import WorkoutsPage from './components/WorkoutsPage';
import UserLogsPage from './components/UserLogsPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/workouts" element={<WorkoutsPage/>}/>
        <Route path="/log_workout" element={<UserLogsPage/>}/>
      </Routes>
    </div>
)
};

export default App;
