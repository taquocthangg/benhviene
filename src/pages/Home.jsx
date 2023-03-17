import { Link } from "react-router-dom"
import '../css/main.css'
import '../css/Header.css'
import '../css/Home.css'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

import { banner, CHONDICHVU, hethongbenhvien, logo, quytrinh, taiungdung } from '../data'; //Thêm dữ liệu
const Home = () => {
  // Thiết lập silder home page
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  // Thiết lập sider hệ thống bệnh viện
  const hethongsl = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="home">
      {/* Silder Home */}
      <div className="silder">
          <div className="banners">
        <Slider {...settings}>
            {banner.map((banner)=>{
              return(
                <div className="banner_img">
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
              {CHONDICHVU.map((chondichvu) => {
                return (
                  <div className="test" key={chondichvu.id}>
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
        <img className='' src="https://medpro.vn/static/media/bg_new.9578e7c5.jpg" alt="" />
      </div>
      {/* Wrapper */}
      <div className="wrappers">
        {/* Giới thiệu về quy trình */}
        <div className="home_gioithieu">
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
          <div className="home_quytrinh">
            <div className="quytrinh_img">
              {quytrinh.map((quytrinh) => {
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
        <div className="home_trienkhai">
          <h1>HỆ THỐNG BỆNH VIỆN TRIỂN KHAI</h1>
          <Slider {...hethongsl}>
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
        {/* Tải Ứng Dụng */}
        <div className="download">
          <div className="downtop">
            <div className="downtop_text">
            <span className="downtop_text_top">DOWNLOAD</span>
            </div>
            <div className="downtop_bot">
              <div className="downtop_bot_content">
                Tải Ứng Dụng <span>MEDPRO</span>
              </div>
              <div className="downtop_bot_contents">
                {logo.map((logo)=> {
                  return(
                    <div className="downtop_bot_content" key={logo.id}>
                        <img src={logo.img} alt="" />
                    </div>
                  )
                })}
              </div>
            </div>
        </div>
        <div className="downbot">
          <div className="downbot_content">
            {taiungdung.map((taiungdung)=>{
              return(
                <div className="downbot_icon">
                  <img src={taiungdung.icon} alt="" />
                  <p>{taiungdung.chucnang}</p>
                  <p>{taiungdung.chucnang1}</p>
                  <p>{taiungdung.chucnang2}</p>
                </div>
              )
            })}
          </div>
          <div className="downbot_content">
            <img src="https://resource.medpro.com.vn/static/images/medpro/web/slide.png?t=42565.989343452224" alt="" />
          </div>
          <div className="downbot_content">
          {taiungdung.map((taiungdung)=>{
              return(
                <div className="downbot_iconr">
                  <img src={taiungdung.icon} alt="" />
                  <p>{taiungdung.chucnang}</p>
                  <p>{taiungdung.chucnang1}</p>
                  <p>{taiungdung.chucnang2}</p>
                </div>
              )
            })}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home