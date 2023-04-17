/*
========================= Trang Chủ =========================
=                           Author                          =
=                         Quốc Thắng                        =
=                            And                            =
=                         Tiến Khoái                        =
=============================================================
*/
import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-scroll';
import { useLocation } from "react-router-dom";
import { FiSmartphone } from 'react-icons/fi';
import { BiLogIn } from 'react-icons/bi';
import { AiFillHome } from "react-icons/ai"
import { AiOutlineInfoCircle } from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import {HiOutlineBookOpen} from "react-icons/hi"
import {HiOutlineNewspaper} from "react-icons/hi"
import {BsPatchQuestion} from "react-icons/bs"
import {MdContactMail} from "react-icons/md"
import {MdComputer} from "react-icons/md"
import { NavLink } from "react-router-dom";
const Header = (props) => {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { pathname } = useLocation();
  if (pathname === "/login" || pathname === "/phong-kham-phong-mach/dang-nhap"|| pathname === "/phong-kham-phong-mach/dang-ky") return null;
  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <NavLink  to="/" className="nav-logo">
          <img src="https://resource.medpro.com.vn/static/images/medpro/web/header_logo.svg?t=10787.381354053212" alt="" />
          </NavLink>
          <div  className={click ? "nav-menu active" : "nav-menu"}>
              <div className="nav__top">
                <Link to="download">
                <div className="download item_header hvr-bounce-to-top">
                 <i className="hone"><FiSmartphone /></i>
                  Tải ứng dụng
                </div>
                </Link>
                  <div className="login item_header">
                    <NavLink
                      
                      to="/login"
                    >
                    <i className="header_login"><BiLogIn /></i>
                      Đăng Nhập
                    </NavLink>
                  </div>
              </div>
              <div className="nav__bot">
                <ul>
                  <li className="nav-item">
                   <NavLink
                      
                      to="/"
                     activeClassName="active"
                     className="nav-links"
                      onClick={handleClick}
                  >
                         <i className='icon__mobile'> <AiFillHome /> </i>  Trang chủ
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink
                    
                    to="/gioi-thieu"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                   <i className="icon__mobile"> <AiOutlineInfoCircle/></i>  Giới Thiệu
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink
                    
                    to="quy-trinh"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                  <i className="icon__mobile"> <FiSettings/> </i>  Quy trình
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    
                    to="huong-dan"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <i className="icon__mobile"><HiOutlineBookOpen/></i> Hướng Dẫn
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    
                    to="tin-tuc"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                   <i className="icon__mobile"><HiOutlineNewspaper/></i>  Tin Tức
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    
                    to="thac-mac"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                   <i className="icon__mobile"><BsPatchQuestion/></i>  Thắc Mắc
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    
                    to="lien-he"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                   <i className="icon__mobile"><MdContactMail/></i> Liên Hệ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    
                    to="phong-kham"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                   <i className="icon__mobile"><MdComputer/></i>  Phòng Khám
                  </NavLink>
                </li>
              </ul>
              </div>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header