import React ,{useContext,useState,useEffect}from "react";
import "./Resume_summary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { SwitchLanguage } from "../../Contexts/Switch_language";
import Picture_section from "./Resume_sections/Picture_section";
import Information_section_EN from "./Resume_sections/Information_section_EN";
import Information_section_FA from "./Resume_sections/Information_section_FA";

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
    );
    window.innerWidth > 576 ? setMobileSize(false) : setMobileSize(true);
  }, []);

  return (
    <Container id="summery-container" className={`${mobileSize ? "mobileSize":""}`}>
      <Row>
        {changeToEnglish ? (
          <>
            {!mobileSize ?(
              <>
                <Information_section_EN/>
                <Picture_section/>
              </>
            ):(
              <>
                <Picture_section/>
                <Information_section_EN/>
              </>
            )}
          </>
        ):(
          <>
            <Picture_section/>
            <Information_section_FA/>
          </>
        )}
              
      </Row>
    </Container>
  );
}
