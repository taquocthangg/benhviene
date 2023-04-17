import React, { useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

const Accordion = ({ title, content ,content1,content2,content3}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div><IoMdArrowDropright/>{title}</div>
        <div>{isActive}</div>
      </div>
      {isActive && <div className="accordion-content">{content} <br/>{content1}<br/>{content2}<br/>{content3}</div>}
    </div>
  );
};

export default Accordion;