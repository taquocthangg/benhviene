import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { FiSmartphone } from 'react-icons/fi';
import { BiLogIn } from 'react-icons/bi';

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/login") return null;
  return (
    <header>
      <div className="containers">  
      <div className="menubar">
        <div className="menuLogo">
          <Link to='/'> 
          <img src="https://resource.medpro.com.vn/static/images/medpro/web/header_logo.svg?t=48463.12747413823" alt="" class="icon_logobenhvien" />
          </Link>
        </div>
        <div className="menuFix">
        <div className="menuFixTop">
          <div className="menuLogin menu_taiungdung">
            <icon class="phone"><FiSmartphone/></icon>
           Tải ứng dụng
          </div>
          <div className="menuLogin menu_dangnhap">   
          <icon class="header_login"><BiLogIn/></icon>
            <Link to="login" className="dangnhap">Đăng nhập</Link>
          </div>

        </div>
        <div className="menuFixBot">
            <ul>
              <li class="menubot">
                <Link to="/" class="menuba ">
                Trang chủ
                </Link>
              </li>
              <li class="menubot">
                <Link to="gioi-thieu" class="menuba">
                Giới thiệu
                </Link>
              </li>
              <li class="menubot">
                <Link to="quy-trinh" class="menuba">
                Quy trình
                </Link>
              </li>
              <li class="menubot">
                <Link to="huong-dan" class="menuba">
                Hướng dẫn
                </Link>
              </li>
              <li class="menubot">
                <Link class="menuba" to="tin-tuc">
                Tin tức
                </Link>
              </li>
              <li class="menubot">
                <Link class="menuba" to="thac-mac">
                Thắc Mắc
                </Link>
              </li>
              <li class="menubot">
                <Link class="menuba" to="lien-he">
                Liên Hệ
                </Link>
              </li>
              <li class="menubot">
                <Link class="menuba" to="phong-kham-phong-mach">
                Phòng khám/Phòng mạch
                </Link>
                </li>
              </ul>
          </div>
        </div>

      </div>

    </div>
    </header>
  )
}

export default Header