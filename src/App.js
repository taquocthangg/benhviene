
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Header from './pages/Header';
import Fooder from './pages/Fooder';
import Layout from './pages/Layout';
import PhongKham from './pages/PhongKham';



function App() {
  return (

    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='login' element = {<Login />} />
          <Route path='layout' element = {<Layout />} />
          <Route path='phongkham' element = {<PhongKham />} />
          <Route/>
        </Routes>
      <Fooder />
      </Router>
    </div>
  );
}

export default App;
