import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Skill from '../Skill/Skill';

export default function Skills_container() {
  return (
    <Container className='skills'>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Skill name="HTML" value={80}/>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Skill name="CSS" value={80}/>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Skill name="Javascript" value={80}/>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Skill name="React" value={60}/>
          </Col>
        </Row>
      </Container>
  )
}
