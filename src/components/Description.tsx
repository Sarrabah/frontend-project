"use client"

import React from "react"
import { Typography, Row, Col, Space } from "antd"
import { Button } from "./ui/Button"
import "../styles/Description.css"

const { Title, Paragraph } = Typography

interface DescriptionProps {
  onSignInClick?: () => void
  onSignUpClick?: () => void
}

const Description: React.FC<DescriptionProps> = ({ onSignInClick, onSignUpClick }) => {
  return (
    <section className={`description-section`}>
      <Row gutter={[48, 48]} align="middle">
        <Col xs={24} lg={12}>
          <div className="description-content">
            <Title level={1} className="description-title">
              Simplify Quote Management for Interior Architects
            </Title>
            <Paragraph className="description-text">
              Art Crea Pro is a platform for building and construction professionals, streamlining the management of
              quotes and quote requests between interior architects and hardware stores or craftsmen.
            </Paragraph>
            <Space size="large" className="description-actions">
              <Button  variant="primary" size="large" onClick={onSignInClick}>
                Sign in
              </Button>
              <Button variant="primary" size="large" onClick={onSignUpClick}>
                Sign up
              </Button>
            </Space>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="description-illustration">
            <picture>
              <source srcSet="/building.svg" type="image/svg" />
              <img
                src="/building.svg"
                alt="Building and construction professionals platform illustration"
                width="800"
                height="400"
                loading="lazy"
                decoding="async"
                className="description-image"
              />
            </picture>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default React.memo(Description)
