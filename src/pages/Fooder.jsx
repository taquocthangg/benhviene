import { Link } from "react-router-dom"
import '../css/Footer.css'
import { useLocation } from "react-router-dom";
import { footer, } from "../data";

const Fooder = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/login") return null;
  return (
    <main>
      <footer>
        <div className="footerContainers">
         <div className="wrapper">
          <div className="logo">
            <img src="https://resource.medpro.com.vn/static/images/medpro/web/footer_logo.svg?t=96194.50999701483" alt="" />
          </div>
          <div className="contents">
            <p className="content">
                Bệnh Viện E
            </p>
            <div className="title">
              Địa Chỉ: 89 Trần Cung - Nghĩa Tân - Cầu Giấy - Hà Nội
            </div>
            <div className="title">
             Email: bvetuvanonline@gmail.com
            </div>
            <div className="title">
              Điện Thoại: 0963765795
            </div>
          </div>
          <div className="contents">
            <p className="title">
              <Link to="" >
                Liên Hệ
              </Link>
            </p>
            <p className="title">
            <Link to="" >
               Điều khoản dịch vụ
              </Link>
            </p>
            <p className="title">
            <Link to="" >
            Chính sách bảo mật
              </Link>
            </p>
            <p className="title">
            <Link to="" >
            Quy định sử dụng
              </Link>
            </p>
          </div>
          <div className="listGroup">
          {footer.map((footer) => {
            return (
              <div className="listGroupicon">
                <img src={footer.img} alt="" />
              </div>
            )
          })}
          </div>
         </div>
        </div>
         <div className="footeBot">
         © 2023 des by <a href="https://www.facebook.com/tqtntnl2413">Quốc Thắng</a> &  <a href="https://www.facebook.com/khoai.vutien.9">Tiến Khoái</a>
         </div>
      </footer>
    </main>
  )
}

export default Fooder