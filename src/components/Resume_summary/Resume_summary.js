import React ,{useContext,useState,useEffect}from "react";
import "./Resume_summary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { SwitchLanguage } from "../../Contexts/Switch_language";



export default function Resume_summary() {
  const { changeToEnglish } = useContext(SwitchLanguage);
  const [mobileSize, setMobileSize] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 576) {
        setMobileSize(false);
      } else {
        setMobileSize(true);
      }
    }
  )
  
  }, []);
  return (
    <Container id="summery-container">
      <Row>
        {changeToEnglish ? (
          <>
            {!mobileSize ?(
              <>
                {console.log(window.innerWidth)}
                <Col xs={12} sm={7} md={7}>
                  <p style={{ paddingLeft: "40px",direction:"ltr"}} className="summary">
                    <h3 className="name">Ali Jalali Farahani</h3>
                    <h5 className="job">Frontend Developer</h5>
                    <p style={{ whiteSpace: 'pre-line',direction:"ltr"}}>
                      {
                      `Front-end web developer specializing in the React framework
                      Strong command of core web technologies: HTML, CSS, and JavaScript
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
                    <p style={{ whiteSpace: 'pre-line',direction:"ltr" }}>
                      {`
                      Interested in learning more advanced topics such as Next.js
                      After mastering front-end development, I quickly transitioned to learning a back-end framework (both personal interest and company requirement).
                      `}
                    </p>
                  </p>  
                </Col>
                <Col xs={12} sm={5} md={5} className="image">
                  <img style={{ borderRadius: "82px" }} src="Images/personality (Custom).jpg" />
                </Col>
              </>
            ):(
              <>
                {console.log(window.innerWidth)}
                <Col xs={12} sm={5} md={5} className="image">
                  <img style={{ borderRadius: "82px" }} src="Images/personality (Custom).jpg" />
                </Col>
                <Col xs={12} sm={7} md={7}>
                  <p style={{ paddingLeft: "40px",direction:"ltr"}} className="summary">
                    <h3 className="name">Ali Jalali Farahani</h3>
                    <h5 className="job">Frontend Developer</h5>
                    <p style={{ whiteSpace: 'pre-line',direction:"ltr"}}>
                      {
                      `Front-end web developer specializing in the React framework
                      Strong command of core web technologies: HTML, CSS, and JavaScript
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
                    <p style={{ whiteSpace: 'pre-line',direction:"ltr" }}>
                      {`
                      Interested in learning more advanced topics such as Next.js
                      After mastering front-end development, I quickly transitioned to learning a back-end framework (both personal interest and company requirement).
                      `}
                    </p>
                  </p>  
                </Col>
              </>
            )}
          </>
        ):(
          <>
            <Col xs={12} sm={5} md={5} className="image">
              <img style={{ borderRadius: "82px" }} src="Images/personality (Custom).jpg" />
            </Col>
            <Col xs={12} sm={7} md={7}>
              <p style={{ paddingRight: "40px",direction:"rtl" }} className="summary">
                <h3 className="name">علی جلالی فراهانی</h3>
                <h5 className="job">برنامه نویس فرانت سایت</h5>
                <p style={{ whiteSpace: 'pre-line' }}>
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
                <p style={{ whiteSpace: 'pre-line' }}>
                  {`علاقه‌مند به یادگیری مباحث پیشرفته‌تر مثل Next.js
                  پس از مسلط شدن به frontend در کوتاه ترین زمان(حدود دو ماه) شروع به یادگیری یک backend framework(هم علاقه شخصی هم نیاز شرکت)`}
                </p>
              </p>  
            </Col>
          </>
        )}
        
      </Row>
    </Container>
  );
}
