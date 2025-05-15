import React from 'react'
import {Col} from "react-bootstrap";

export default function Information_section_FA() {
  return (
    <>
        <Col xs={12} sm={7} md={7}>
          <p style={{direction:"rtl" }} className="summary">
            <h3 className="name">علی جلالی فراهانی</h3>
            <h5 className="job">برنامه نویس فرانت سایت</h5>
            <p>
              {`برنامه نویس فرانت سایت با فریم ورک React
              مسلط به تمامی مباحث پایه HTML,CSS,Javascript
              در زمینه React مسلط به مباحث اصلی و پایه و پیشرفته از جمله:`}
            </p>
            
            <ol>
              <li className="option">Hook / custom Hook</li>
              <li className="option">React Bootstrap / MUI</li>
              <li className="option">SPA and React router</li>
              <li className="option">Memoize for optimization</li>
              <li className="option">HOC (Higher order component)</li>
              <li className="option">context API</li>
            </ol>
            <br />
            <p>
              {`علاقه‌مند به یادگیری مباحث پیشرفته‌تر مثل Next.js
              `}
            </p>
          </p>  
        </Col>
    </>
  )
}
