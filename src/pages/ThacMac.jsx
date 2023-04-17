import '../css/ThacMac.css'
import { IoMdArrowDropright } from 'react-icons/io';
import { accordionData } from '../data';
import Accordion from '../componnets/Accordion';
export const ThacMac = () => {
  return (

    <main>
      <div className="container_tm">
        <div className="header_tm">
          <div className="tieudett">
            <div className="tieudett1">
              <h1>THẮC MẮC</h1>
              <div className="mota">Giải đáp các câu hỏi nhanh giúp quý khách hiểu rõ hơn về sản phẩm, dịch vụ của chúng tôi.</div>
            </div>
          </div>
        </div>

        <div className="contenr_tm">
          <div className="warper">
            <div className="left3">
              <ul>
                <li className="left_item left_itemc"><h2>Giải đáp nhanh câu hỏi</h2></li>
                <li className="left_item left_itemd"><IoMdArrowDropright /><a href="#">Vấn đề chung</a></li>
                <li className="left_item left_itemd"><IoMdArrowDropright /><a href="#">Vẫn đề tài khoản</a></li>
                <li className="left_item left_itemd"><IoMdArrowDropright /><a href="#">Vẫn đề về quy trình đặt khám</a></li>
                <li className="left_item left_itemd"><IoMdArrowDropright /><a href="#">Vấn đề về thanh toán</a></li>
              </ul>
            </div>
            <div className="accordion">
              {accordionData.map(({ title, content,content1,content2,content3 }) => (
                <Accordion title={title} content={content}  content1={content1} content2={content2} content3={content3}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
