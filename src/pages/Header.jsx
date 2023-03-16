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
        <div className="thanheader">

</div>
            <ul>
              <li>
                <Link class="menuba">
                Trang chủ
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link class="menuba">
                Giới thiệu
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link class="menuba">
                Quy trình
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link class="menuba">
                Hướng dẫn
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link class="menuba" to="">
                Tin tức
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link class="menuba" to="">
                Thắc Mắc
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link class="menuba" to="">
                Liên Hệ
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link class="menuba" to="phongkham">
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