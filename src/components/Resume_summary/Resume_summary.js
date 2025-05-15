import React ,{useContext,useState,useEffect}from "react";
import "./Resume_summary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { My_context } from "../../Contexts/My_context";
import Picture_section from "./Resume_sections/Picture_section";
import Information_section_EN from "./Resume_sections/Information_section_EN";
import Information_section_FA from "./Resume_sections/Information_section_FA";

export default function Resume_summary() {
  const { changeToEnglish } = useContext(My_context);
  const { mobileSize } = useContext(My_context);
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
