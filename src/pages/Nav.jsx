import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Err400.css";
import { AiOutlineAlignRight } from "react-icons/ai"
function Navbar() {

	return (
		<header>
			<div className="main">
				<div className="navbar">
					<label for="check" class="checkbtn">
						<AiOutlineAlignRight />
					</label>
					<div className="nav__logo">
						<label for="" class="logo">
							<img src="https://resource.medpro.com.vn/static/images/medpro/web/header_logo.svg?t=10787.381354053212" alt="" />
						</label>
					</div>
					<input type="checkbox" id="check" />
					<div className="nav">
						<div className="nav__top">
							Tải Ứng Dụng
						</div>
					<div className="nav__bot">
				
							<div>
								<Link to='/'>Trang Chủ</Link>
							</div>
							<div>
								<Link to='gioi-thieu'>Giới Thiệu</Link>
							</div><div>
								<Link to='quy-trinh'>Quy Trình</Link>
							</div><div>
								<Link to='huong-dan'>Hướng Dẫn</Link>
							</div>
							<div>
								<Link to='tin-tuc'>Tin Tức</Link>
							</div>
							<div>
								<Link to='thac-mac'>Thắc Mắc</Link>
							</div><div>
								<Link to='-lien-he'>Liên Hệ</Link>
							</div><div>
								<Link to='phong-kham-phong-mach'>Phòng Khám</Link>
							</div>
				
					</div>
					</div>
				</div>
			</div>

		</header>
	);
}

export default Navbar;
