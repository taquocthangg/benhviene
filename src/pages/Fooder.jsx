import { Link } from "react-router-dom"
import '../css/Footer.css'
import { useLocation } from "react-router-dom";

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
            <img src="https://benhviene.com/images/logoVienE101.png" alt="" />
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
            <img src="https://api.benhviene.com/data/images/198_00df28c5_28a5_4ba1_94a4_e8ea41935293.png" alt="" />
            <img src="https://api.benhviene.com/data/images/198_00df28c5_28a5_4ba1_94a4_e8ea41935293.png" alt="" />
            <img src="https://api.benhviene.com/data/images/198_00df28c5_28a5_4ba1_94a4_e8ea41935293.png" alt="" />
            <img src="https://api.benhviene.com/data/images/198_00df28c5_28a5_4ba1_94a4_e8ea41935293.png" alt="" />
          </div>
         </div>
        </div>
         <div className="footeBot">
         © 2023 des by Quoc Thang & Tien Khoai
         </div>
      </footer>
    </main>
  )
}

export default Fooder