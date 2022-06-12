import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import StartPage from './pages/StartPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ToDoPage from './pages/ToDoPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/to-do" element={<ToDoPage />} />
      </Routes>
    </div>
  );
}

export default App;

