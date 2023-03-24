
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
import TinTuc  from "./pages/TinTuc.jsx";
import { ThacMac } from "./pages/ThacMac.jsx";
import LienHe from "./pages/LienHe.jsx";
import Err404 from "./pages/Err404.jsx";
import LoginPhongKham from "./pages/LoginPhongKham.jsx";
import DangKy from "./pages/DangKy.jsx";
import ScrollToTop from "./componnets/ScrollToTop.js";
function App() {
  return (

    <div className="App">
      <Router>
        <Header />
        <ScrollToTop >
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='login' element = {<Login />} />
          <Route path='phong-kham-phong-mach/dang-nhap' element = {<LoginPhongKham />} />
          <Route path='phong-kham-phong-mach/dang-ky' element = {<DangKy />} />
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
      </ScrollToTop>
      <Fooder />  
      </Router>
    </div>
  );
}

export default App;
