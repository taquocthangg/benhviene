import { Link } from "react-router-dom"
import '../css/uslogin.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import iconzalo  from '../img/iconzalo.png'
import icongg  from '../img/icongg.png'
import iconfb  from '../img/iconfb.png'
const login = () => {
    return (
        <div className="container">
         <div className="left">
         <div className="header">
         <div className="icon">
           <Link to="/"><AiOutlineArrowLeft/></Link>
            </div>
            <div className="logo">
               <img src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/logoviene_55f9ba01_8791_46e7_9835_6d03ed737647.jpg" alt="" />
            </div>
         </div>
         <div className="form">
            <div className="content">
                <p class="text_sdt">Vui lòng nhập số điện thoại để tiếp tục</p>
                <div className="SDT">
                <icon class="icon-sdt"><Link to="/" ><GiEarthAfricaEurope/></Link></icon>
                <input type="tel" name="txtTelephone" id="txtTelephone"  placeholder="+84" />  
                </div>
                <button class="CONTINIU">
                    <div className="text_tieptuc">Tiếp tục</div>
                </button>
                <p class="text1">Hoặc đăng nhập bằng tài khoản</p>
                <button class="menu menu1">
                    <img src={iconzalo} alt="" />
                    <span>ĐĂNG NHẬP VỚI ZALO</span>
                </button>
                <button class="menu menu2">
                    <img src={icongg} alt="" />
                    <span>ĐĂNG NHẬP VỚI GOOGLE</span>
                </button>
                <button class="menu menu3">
                    <img src={iconfb} alt="" class="iconfb" />
                    <span>ĐĂNG NHẬP VỚI FACEBOOK</span>
                </button>
            </div>
         </div>
         </div>
         <div className="right">
            <img src="" alt="" />
         </div>
        </div>

    )
}
export default login