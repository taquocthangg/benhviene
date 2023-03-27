import React from 'react'
import { uudiem } from '../data'
import { VscCheckAll } from "react-icons/vsc";


const Why = () => {
  return (
    <div className="containers">
       {uudiem.map((uudiem)=>{
        return(
            <div className="noidung">
                <p>
                  <VscCheckAll />  {uudiem.name}
                </p>
            </div>
        )
       })}
    </div>
  )
}

export default Why