import React from 'react'
import { uudiem } from '../data'
import { VscCheckAll } from "react-icons/vsc";


const Why = () => {
  return (
    <div className="phongkham__noidung">
      <div className="containers">
        <div className="noidung__uudiem">
        ƯU ĐIỂM PHẦN MỀM MEDPRO CLINIC
        </div>
        <div className="uudiem__container">
          <div className="uudiem__logo">
            <img src="https://medpro.vn/static/media/Laptop.52d7041f.svg" alt="" />
          </div>
          <div className="uudiem__name">
            {uudiem.map((uudiem) => {
              return (
                  <div className="name__title" key={uudiem.id}>
                    <p>
                      <VscCheckAll />  {uudiem.name}
                    </p>
                  </div>
              )
            })}
          </div>
        </div>
        <div className="btn__test">
          Đăng kí dùng thử
        </div>
      </div>
    </div>
  )
}

export default Why