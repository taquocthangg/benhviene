import { Link } from "react-router-dom"
import './Footer.css'
import { useLocation } from "react-router-dom";
import { footer, } from "../../data";

const Fooder = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/login" || pathname === "/phong-kham-phong-mach/dang-nhap"|| pathname === "/phong-kham-phong-mach/dang-ky") return null;
  return (
    <main>
      <footer>
        <div className="footer__container">
         <div className="footer__container-wrapper">
          <div className="footer__logo">
            <img src="https://resource.medpro.com.vn/static/images/medpro/web/footer_logo.svg?t=96194.50999701483" alt="" />
          </div>
          <div className="footer__contents">
            <p className="footer__contents-content">
            MEDPRO - ĐẶT LỊCH KHÁM BỆNH
            </p>
            <div className="footer__contents-title">
              Địa Chỉ: 235 Hoàng Quốc Vịt - Hà N
            </div>
            <div className="footer__contents-title">
             Email: bvetuvanonline@gmail.com
            </div>
            <div className="footer__contents-title">
              Điện Thoại: 0963765795
            </div>
          </div>
          <div className="footer__contents">
            <p className="footer__contents-title">
              <Link to="" >
                Liên Hệ
              </Link>
            </p>
            <p className="footer__contents-title">
            <Link to="" >
               Điều khoản dịch vụ
              </Link>
            </p>
            <p className="footer__contents-title">
            <Link to="" >
            Chính sách bảo mật
              </Link>
            </p>
            <p className="footer__contents-title">
            <Link to="" >
            Quy định sử dụng
              </Link>
            </p>
          </div>
          <div className="listGroup">
          {footer.map((footer) => {
            return (
              <div className="listGroup__icon">
                <img src={footer.img} alt="" />
              </div>
            )
          })}
          </div>
         </div>
        </div>
         <div className="footer__bot">
         © 2023 design by <a href="https://www.facebook.com/tqtntnl2413">Quốc Thắng</a> &&  <a href="https://www.facebook.com/khoai.vutien.9">Tiến Khoái</a> && <a href="https://www.facebook.com/khoai.vutien.9">Lại Thị Tâm</a>
         </div>
      </footer>
    </main>
  )
}

export default Fooder