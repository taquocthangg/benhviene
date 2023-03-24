import { Link } from "react-router-dom"
import '../css/main.css'
import '../css/Header.css'
import '../css/Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { banner, CHONDICHVU, hethongbenhvien, hotro, quytrinh, tintuc } from '../data'; //Thêm dữ liệu
import { TaiUngDung } from "./TaiUngDung";
const Home = () => {


  // Thiết lập silder home page
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  
  // Thiết lập sider hệ thống bệnh viện
  const hethongsldesk = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const trienkhaimobile = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="home"
    >
      {/* Silder Home */}
      <div className="silder">
        <div className="banners">
          <Slider {...settings}>
            {banner.map((banner, i) => {
              return (
                <div className="banner_img" key={banner.id}>
                  <img src={banner.img} alt="" />
                </div>
              )
            })}
          </Slider>
        </div>
        <div className="box">
          <div className="box_service">
            <h4>Chọn Dịch Vụ</h4>
            <div className="service_style">
              {CHONDICHVU.map((chondichvu, i) => {
                return (
                  <div className="chondichvu" key={chondichvu.id}>
                    <img src={chondichvu.img} alt="" />
                    <p>{chondichvu.name}</p>
                  </div>
                )
              }
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Back group phần giới thiệu */}
      <div className="backgroud">
        {/* <img className='' src="https://medpro.vn/static/media/bg_new.9578e7c5.jpg" alt="" /> */}
          <div className="text">
            <div className="text_gioithieu">
              <p className='gioithieu'>
                Giới Thiệu
              </p>
              <h3>MEDPRO <br />
                Đặt lịch khám bệnh</h3>
            </div>
            <div className="text_title">
              <p>Medpro là giải pháp đặt lịch khám bệnh, chăm sóc sức khỏe trực tuyến cho cả gia đình. Người dùng chủ động trong việc khám chữa bệnh, được lựa chọn dịch vụ, chuyên khoa, bác sĩ tại các bệnh viện và phòng khám hàng đầu Việt Nam như Bệnh viện Đại học Y Dược TP.HCM, Bệnh viện Chợ Rẫy, Bệnh viện Nhi Đồng Thành Phố.</p>
            </div>
          </div>
      </div>


      {/* Wrapper */}
      <div className="wrappers">



        {/* Giới thiệu về quy trình */}
        <div className="home_gioithieu">
          <div className="home_quytrinh">
            <div className="quytrinh_img">
              {quytrinh.map((quytrinh, i) => {
                return (
                  <div className="quytrinh_container" key={quytrinh.id}>
                    <div className="quytrinh_container_contents">
                      <img src={quytrinh.img} alt="" />
                    </div>
                    <div className="quytrinh_container_contents_title">
                      <p className='content_text'>{quytrinh.tilte}</p>
                      <p>{quytrinh.des}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <span className='timhieu'>Tìm hiểu thêm về quy trình <Link to='' className="quytrinh_dki">đăng ký khám bệnh</Link></span>
        </div>


        {/* Nội dung triển khai */}
        <div className="home_trienkhais">
          <div className="home_trienkhai">
            <p className="home_trienkhai_content">HỆ THỐNG BỆNH VIỆN TRIỂN KHAI</p>
          </div>
            <div className="home_trienkhai_page">
              <Slider {...hethongsldesk}>
                {hethongbenhvien.map((hethongbenhvien) => {
                  return (
                    <div className="home_trienkhai-sl">
                      <img src={hethongbenhvien.img} alt="" />
                      <p className="tenbenhvien">{hethongbenhvien.name}</p>
                    </div>
                  )
                })}
              </Slider>
            </div>
        </div>
        <div className="trienkhaimobile">
          <div className="home_trienkhai">
            <h1>HỆ THỐNG BỆNH VIỆN TRIỂN KHAI</h1>
          </div>
            <div className="home_trienkhai_page">
              <Slider {...trienkhaimobile}>
                {hethongbenhvien.map((hethongbenhvien) => {
                  return (
                    <div className="home_trienkhai-sl">
                      <img src={hethongbenhvien.img} alt="" />
                      <span>{hethongbenhvien.name}</span>
                    </div>
                  )
                })}
              </Slider>
            </div>
        </div>      
      </div>


      <div className="content_bot">
        {/* Tải Ứng Dụng */}
        <TaiUngDung />
      </div>
      <div className="tintuc">
        <div className="wrappers">
          <p className="content_tintucsk">Tin Tức && Sự Kiện</p>
          <div className="tintuc_contents">
            {tintuc.map((tintuc) => {
              return (
                <div className="tintuc_content">
                  <img src={tintuc.img} alt="" />
                  <h5>{tintuc.content}</h5>
                  <p>{tintuc.tilte}</p>
                  <p>{tintuc.dec}</p>
                </div>
              )
            })}
          </div>
                  <div className="more">
            <Link to='tin-tuc'>Xem Thêm</Link>
                  </div>
        </div>
      </div>

      {/* Nội dung Hỗ Trợ */}
      <div className="hotro">
        <div className="downtop_text">
          <div className="downtop_text_top">
            Hỗ Trợ
          </div>
        </div>
        <div className="hotro_text">
          CÁC HÌNH THỨC HỖ TRỢ
        </div>
        <div className="hotro_lienhes">
          {hotro.map((hotro) => {
            return (
              <div className="hotro_lienhe">
                <Link href="#"><img src={hotro.icon} alt="" /></Link>
                <p>{hotro.content}</p>
                <Link href="#"><p>{hotro.tilte}</p></Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home