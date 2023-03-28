import React, { useState } from 'react';
import './Header.css'
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


const Header = () => {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { pathname } = useLocation();
  if (pathname === "/login" || pathname === "/phong-kham-phong-mach/dang-nhap"|| pathname === "/phong-kham-phong-mach/dang-ky") return null;
  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <img src="https://resource.medpro.com.vn/static/images/medpro/web/header_logo.svg?t=10787.381354053212" alt="" />
          </NavLink>
          <div  className={click ? "nav-menu active" : "nav-menu"}>
              <div className="nav__top">
                <div className="download">
                 <FiSmartphone /> Tải Ứng Dụng
                </div>
                  <div className="login">
                    <NavLink
                      exact
                      to="/login"
                    >
                    <BiLogIn />  Đăng Nhập
                    </NavLink>
                  </div>
              </div>
              <div class="nav__bot">
                <ul>
                  <li className="nav-item">
                   <NavLink
                      exact
                      to="/"
                     activeClassName="active"
                     className="nav-links"
                      onClick={handleClick}
                  >
                         <i className='icon__mobile'> <AiFillHome /> </i>  Trang chủ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/gioi-thieu"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                   <i className="icon__mobile"> <AiOutlineInfoCircle/></i>  Giới Thiệu
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
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
                    exact
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
                    exact
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
                    exact
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
                    exact
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
                    exact
                    to="phong-kham-phong-mach"
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