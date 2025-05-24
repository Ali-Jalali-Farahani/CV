import React from 'react'
import {Col} from "react-bootstrap";

export default function Information_section_EN() {
  return (
    <>
        <Col xs={12} sm={7} md={7}>
          <p style={{direction:"ltr"}} className="summary">
            <h3 className="name">Ali Jalali Farahani</h3>
            <h5 className="job">Frontend Developer</h5>
            <p style={{direction:"ltr"}}>
              {
              `Front-end web developer specializing in the React framework
              Strong command of core web technologies: HTML, CSS, and JavaScript
              Learning TypeScript in full.
              Proficient in React, including both foundational and advanced concepts such as:
              `}
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
          </p>  
        </Col>
    </>
  )
}
