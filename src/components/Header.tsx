"use client"

import React from "react"
import { Button, Typography, Space } from "antd"
import { SunOutlined, MoonOutlined } from "@ant-design/icons"
import { useTheme } from "../hooks/useTheme"
import "../styles/Header.css"

const { Title } = Typography

interface HeaderProps {
  onSignInClick?: () => void
  onSignUpClick?: () => void
}

const Header: React.FC<HeaderProps> = ({ onSignInClick, onSignUpClick }) => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="header">
      <div className="header-content">
        <Title level={2} className="logo">
          ART CRÉA PRO
        </Title>
        <Space size="middle">
          <Button
            type="text"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            icon={isDark ? <SunOutlined /> : <MoonOutlined />}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} 
          />
        </Space>
      </div>
    </header>
  )
}

export default React.memo(Header);

//export default Header
