"use client"

import React from "react"
import {Typography, Row, Col, Space, Button} from "antd"
import "../styles/Description.css"

const { Title, Paragraph } = Typography

interface DescriptionProps {
  onSignInClick?: () => void
  onSignUpClick?: () => void
}

const Description: React.FC<DescriptionProps> = ({ onSignInClick, onSignUpClick }) => {
  return (
    <section className="description-section">
      <Row gutter={[48, 48]} align="middle">
        <Col xs={24} lg={12}>
          <div className="description-content">
            <Title level={1} className="description-title">
              Simplify Quote Management for Interior Architects
            </Title>
            <Paragraph className="description-description">
              Art Crea Pro is a platform for building and construction professionals, streamlining the management of
              quotes and quote requests between interior architects and hardware stores or craftsmen.
            </Paragraph>
            <Space size="large">
              <Button size="large" className="cta-btn-outline" onClick={onSignInClick}>
                Sign in
              </Button>
              <Button type="primary" size="large" className="cta-btn-primary" onClick={onSignUpClick}>
                Sign up
              </Button>
            </Space>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="description-illustration">
            <img src="/building.svg" alt="building logo" width="800" height="400" loading="eager"/>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default React.memo(Description);

//export default Description
