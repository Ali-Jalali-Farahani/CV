import React from "react";
import "./Resume_summary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";



export default function Resume_summary() {
  
  return (
    <>
      <Container id="summery-container">
        <Row>
          <Col xs={12} sm={5} md={5} className="image">
            <img
              style={{ borderRadius: "82px" }}
              src="Images/personality (Custom).jpg"
            />
          </Col>

          <Col xs={12} sm={7} md={7}>
            <p style={{paddingRight:"40px"}} className="summary">
              <h3 className="name">علی جلالی فراهانی</h3>
              <h5 className="job">برنامه نویس فرانت سایت</h5>
              برنامه نویس فرانت سایت با فریم ورک React <br />
              مسلط به تمامی مباحث پایه HTML,CSS,Javascript <br />
              در زمینه React مسلط به مباحث اصلی و پایه و پیشرفته از جمله: <br />
              <ol>
                <li className="option">Hook / custom Hook</li>
                <li className="option">React Bootstrap / MUI</li>
                <li className="option">SPA and React router</li>
                <li className="option">Memoize for optimization</li>
                <li className="option">HOC (Higher order component)</li>
                <li className="option">context API</li>
              </ol>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
