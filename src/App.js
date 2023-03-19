
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
import PhongKham from './pages/PhongKham';
import GioiThieu from './pages/GioiThieu';
import HuongDan from './pages/HuongDan';
import QuyTrinh from './pages/QuyTrinh';
import { TinTuc } from "./pages/TinTuc.jsx";
import { ThacMac } from "./pages/ThacMac.jsx";
import LienHe from "./pages/LienHe.jsx";
// import { TaiUngDung } from "./pages/TaiUngDung.jsx";
import Err404 from "./pages/Err404.jsx";

function App() {
  return (

    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='login' element = {<Login />} />
          {/* <Route path='tai-ung-dung' element = {<TaiUngDung />} /> */}
          <Route path='gioi-thieu' element = {<GioiThieu/>} />
          <Route path='quy-trinh' element = {<QuyTrinh/>} />
          <Route path='huong-dan' element = {<HuongDan/>} />
          <Route path='tin-tuc' element = {<TinTuc/>} />
          <Route path='thac-mac' element = {<ThacMac/>} />
          <Route path='lien-he' element = {<LienHe/>} />
          <Route path='phong-kham-phong-mach' element = {<PhongKham />} />
          <Route path='/*' element = {<Err404 />} />
          <Route/>
        </Routes>
      <Fooder />
      </Router>
    </div>
  );
}

export default App;
