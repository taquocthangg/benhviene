import React, { useEffect, useState} from 'react';
import axios from 'axios'
import { choosehopital } from '../data'
import './Choose.css'

import './api'
import { Link , useNavigate} from 'react-router-dom';

const Choose = () => {
  useEffect(() => {
    const getTinhThanh = async () => {
      try {
        const res = await axios.get(
          'https:vn-public-apis.fpo.vn/provinces/getAll?limit=-1'
        )
        console.log(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getTinhThanh()
  })
  const [query, setQuery] = useState("");
  const history = useNavigate()
  return (

    <main>
      <div className="format__header">
            <p onClick={() =>{history(-1)}}>Trang Chủ </p> >  Chọn Bệnh Viện
      </div>
      <div className="select__hopital">
        <div className="select__hopital-search">
          <input
            className=""
            placeholder="Tìm nhanh bệnh viện..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>
        <ul className="select__hopital-list">
          {choosehopital.filter((asd) =>
            asd.name.toLowerCase().includes(query)
          ).map((choosehopital) => (
            <li className="listItem box_shawdown" key={choosehopital.id}>
              <Link to='chon-hinh-thuc'>
                <div className="hopotal__box">
                  <div className="hopotal__box-img">
                    <img src={choosehopital.icon} alt="" />
                  </div>
                  <div className="hopotal__box-content">
                    <div className="hopotal__box-content-name name_text">
                      {choosehopital.name}
                      </div>
                      <div className="hopotal__box-content-addres description">
                      {choosehopital.content}
                      </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>

  )
}

export default Choose