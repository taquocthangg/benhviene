
import '../css/uslogin.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import Iconzalo  from '../img/iconzalo.png'
import Icongg  from '../img/icongg.png'
import Iconfb  from '../img/iconfb.png'
import logo  from '../img/logo/logo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const history = useNavigate();
    return (
        <div className="container">
         <div className="left">
         <div className="header">
         <div onClick={() => {history(-1)}} className="icon">
           <Link><AiOutlineArrowLeft/></Link>
            </div>
            <div className="logo">
               <img src={logo} alt="" />
            </div>
         </div>
         <div className="form">
            <div className="content">
                <p className="text_sdt text-color">Vui lòng nhập số điện thoại để tiếp tục</p>
                <div className="SDT">
                <icon className="icon-sdt"><Link to="/" ><GiEarthAfricaEurope/></Link></icon>
                <input type="tel" name="txtTelephone" id="txtTelephone"  placeholder="+84" />  
                </div>
                <button className="CONTINIU">
                    <div className="text_tieptuc">Tiếp tục</div>
                </button>
                <p className="text1 text-color">Hoặc đăng nhập bằng tài khoản</p>
                <button className="menu menu1">
                    <img src={Iconzalo} alt="" />
                    <p>ĐĂNG NHẬP VỚI ZALO</p>
                </button>
                <button className="menu menu2">
                    <img src={Icongg} alt="" />
                    <p>ĐĂNG NHẬP VỚI GOOGLE</p>
                </button>
                <button className="menu menu3">
                    <img src={Iconfb} alt="" className="iconfb" />
                    <p>ĐĂNG NHẬP VỚI FACEBOOK</p>
                </button>
            </div>
         </div>
         </div>
         <div className="right">
            <div className="cheo">
                
            </div>
         </div>
        </div>

    )
}
export default Login