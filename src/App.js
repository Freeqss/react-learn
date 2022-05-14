import React from "react";
import './App.css';
import Header from "./components/header";
import Navbar from "./components/navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
