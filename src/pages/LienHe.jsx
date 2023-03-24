import '../css/LienHe.css'
import { FaLongArrowAltRight } from 'react-icons/fa';
import Iframe from 'react-iframe'
import Map from '../componnets/Map';
const LienHe = () => {
    return (
        <main>
            <div class="background_lh">

            </div>
            <div class="container_lh">
                <div class="content_lh">
                    <div class="haeder_lh">
                        <div class="text_header">
                            <h1 class="tieude_lh1">LIÊN HỆ VỚI CHÚNG TÔI</h1>
                            <p >Bạn đang quan tâm đến các dịch vụ của chúng tôi hoặc cần tư vấn!</p>
                            <p>Chúng tôi luôn sẵn sàng giúp đỡ bạn</p>
                        </div>
                    </div>
                    <div class="slider_lh">
                        <div class="slider_list">
                            <div class="item_lh">
                                <h2>Hỏi đáp nhanh</h2>
                                <p>Danh sách các câu hỏi đã được hệ thống hóa, bạn có thể tham khảo nhanh</p>
                                <div class="icon_lh">
                                    <img src="https://medpro.vn/static/media/message.a36cfe22.svg" alt="" />
                                </div>
                                <div className="text_itemlh">
                                    <p>Tham khảo  < FaLongArrowAltRight /></p>
                                </div>

                            </div>
                            <div class="item_lh">
                                <h2>Các kênh hỗ trợ</h2>
                                <p>Liên hệ trực tiếp với chúng tôi qua các kênh hỗ trợ sau</p>
                                <div className="icon_lh item_iconlh">
                                    <div className="iconzalo_lh">
                                        <img src="https://medpro.vn/static/media/zalo.0f80f1db.svg" alt="" srcset="" />
                                    </div>
                                    <div className="icon_lhfb">
                                        <img src="https://medpro.vn/static/media/facebook.c30b46e6.svg" alt="" srcset="" />
                                    </div>
                                </div>
                                <div class="sdt_lh"> <p>1900-2115</p></div>
                            </div>
                            <div class="item_lh">
                                <h2>Thời gian làm việc</h2>
                                <p >Thời gian làm việc từ thứ 2 đến thứ 7</p>
                                <p>7:30 - 16:30</p>
                                <div className="icon_lh">
                                    <div className="icon_imglh">
                                        <img src="https://medpro.vn/static/media/time.918f5c7f.svg" alt="" srcset="" />
                                        <p>Ngoài giờ hành chính</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container_pagelh">
                        <div className="content_pagelh">
                            <div className="pagelh_left">
                                <p class="pagelh_text">THÔNG TIN CHI TIẾT</p>
                                <ul>
                                    <li>
                                        <img class="icon_pageleft1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwzBzzfMu7ZRUynYKuqV7FVuVUgVX2-Bqsg&usqp=CAU" alt="" />
                                        <div class="text_left1lh">
                                            <p class="left1lh_mota01">Medpro - Đặt lịch khám bệnh®</p>
                                            <p class="left1lh_mota02">97 Trần Quang Diệu, phường 14, quận 3, Tp Hồ Chí Minh.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img class="icon_pageleft2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaMbvOS5ia8HYZoInq2jZJSMsFtVGlc5rtNMED_k&s" alt="" />
                                        <div class="text_left1lh">
                                            <p class="left1lh_mota01">HỖ TRỢ ĐẶT KHÁM</p>
                                            <p class="left1lh_mota01">1900.2115</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="pagelh_right">
                                <div className="pagelh_right1">
                                    <div className="pagelh_input">
                                        <p class="input_hotro">Họ và tên
                                            <sup>*</sup>
                                        </p>
                                        <input type="text" name="" class="hoten" placeholder="Vui lòng nhập họ và tên (có dấu)..." />
                                    </div>
                                    <div className="pagelh_input">
                                        <p class="input_hotro">Địa chỉ Email
                                            <sup>*</sup>
                                        </p>
                                        <input type="email" name="" class="hoten" placeholder="Vui lòng nhập email..." />
                                    </div>
                                    <div className="pagelh_input">
                                        <p class="input_hotro">Số điện thoại
                                            <sup>*</sup>
                                        </p>
                                        <input type="tel" name="" class="hoten" placeholder="Vui lòng nhập số điện thoại" />
                                    </div>
                                    <div className="pagelh_input">
                                        <p class="input_hotro">Vấn đề của bạn
                                            <sup>*</sup>
                                        </p>
                                        <select name="" class="hoten chonvande" >
                                            <option value="1">Chọn vấn đề</option>
                                            <option value="2">Vấn đề chuyên môn</option>
                                            <option value="3">Vấn đề kĩ thuật</option>
                                            <option value="4">Vấn đề khác</option>
                                        </select>
                                    </div>
                                    <div className="pagelh_input1">
                                        <p class="input_hotro">Nhập nội dung cần trợ giúp
                                            <sup>*</sup>
                                        </p>
                                        <textarea class="hotroo" type="textarea" placeholder="Vui lòng nhập nội dung cần hỗ trợ..." rows="5"></textarea>
                                    </div>
                                </div>
                                <div className="button_hotro">
                                    <button class="buttonhotro">
                                        <div className="text_buttonhotro">
                                            GỬI HỖ TRỢ
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content_map">
                        <div className="map">
                            <Map/>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    )
}

export default LienHe