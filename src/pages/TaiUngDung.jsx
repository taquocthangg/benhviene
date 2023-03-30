/*
========================= Trang Chủ =========================
=                           Author                          =
=                         Quốc Thắng                        =
=============================================================
*/

import React from 'react'
import { logo, taiungdung, taiungdung2 } from '../data'

export const TaiUngDung = () => {
  return (
    <div>
                  <div id="tai" className="downtop">
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
                <div className="downbot_icon" key={taiungdung.id}>
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
          {taiungdung2.map((taiungdung)=>{
              return(
                <div className="downbot_iconr" key={taiungdung.id}>
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
  )
}
