// import { Link } from "react-router-dom"
import '../css/main.css'
import '../css/Header.css'
import '../css/Home.css'
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { CHONDICHVU, quytrinh } from '../data';
const Home = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="home">
      <div className="silder">
        <Slider {...settings}>
          <div className='bg-img'>
            <img src="https://graphicsfamily.com/wp-content/uploads/edd/2022/01/Abstract-Corporate-Banner-Template-1536x816.jpg" alt="" />
          </div>
          <div className='bg-img'>
            <img src="https://graphicsfamily.com/wp-content/uploads/edd/2022/01/Abstract-Corporate-Banner-Template-1536x816.jpg" alt="" />
          </div>
          <div className='bg-img'>
            <img src="https://graphicsfamily.com/wp-content/uploads/edd/2020/11/Tasty-Food-Web-Banner-Design-1536x864.jpg" alt="" />
          </div>
        </Slider>
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

      <div className="gioithieu">
        <div className="backgroud">
          <img className='' src="https://medpro.vn/static/media/bg_new.9578e7c5.jpg" alt="" />
        </div>
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
              {quytrinh.map(( quytrinh) => {
                return(
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

      </div>
    </div>
  )
}

export default Home