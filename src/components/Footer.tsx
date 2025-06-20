import React from "react"
import { Typography } from "antd"
import "../styles/footer.css"

const { Text } = Typography

const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <Text className="footer-text">Art Créa Pro 2025</Text>
    </footer>
  )
}

export default React.memo(Footer);
