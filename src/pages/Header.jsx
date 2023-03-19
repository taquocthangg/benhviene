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
          <img src="https://resource.medpro.com.vn/static/images/medpro/web/header_logo.svg?t=48463.12747413823" alt="" className="icon_logobenhvien" />
          </Link>
        </div>
        <div className="menuFix">
        <div className="menuFixTop">
          <div className="menuLogin menu_taiungdung">
            <icon className="hone"><FiSmartphone/></icon>
            <Link  to="tai-ung-dung" spy={true} smooth={true} offset={50} duration={500}>
         Tai
        </Link>
          </div>
          <div className="menuLogin menu_dangnhap">   
          <icon className="header_login"><BiLogIn/></icon>
            <Link to="login" className="dangnhap">Đăng nhập</Link>
          </div>

        </div>
        <div className="menuFixBot">
        <div className="thanheader">

</div>
            <ul>
              <li>
                <Link to="/" className="menuba ">
                Trang chủ
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="gioi-thieu" className="menuba">
                Giới thiệu
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="quy-trinh" className="menuba">
                Quy trình
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="huong-dan" className="menuba">
                Hướng dẫn
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to='tin-tuc' className="menuba" >
                Tin tức
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to='thac-mac' className="menuba" >
                Thắc Mắc
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to='lien-he' className="menuba" >
                Liên Hệ
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to='phong-kham-phong-mach' className="menuba">
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