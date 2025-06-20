import type React from "react"
import { Button as AntButton } from "antd"
import type { ButtonProps as AntButtonProps } from "antd"
import "./Button.module.css"

export interface ButtonProps extends Omit<AntButtonProps, "type" | "variant"> {
  variant?: "primary" | "outline" | "ghost"
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const getButtonClass = () => {
    const baseClass = "custom-button"
    const variantClass = `custom-button--${variant}`

    return `${baseClass} ${variantClass} ${className}`.trim()
  }

  const getAntType = (): AntButtonProps["type"] => {
    switch (variant) {
      case "primary":
        return "primary"
      case "outline":
        return "default"
      case "ghost":
        return "text"
      default:
        return "primary"
    }
  }

  return (
    <AntButton type={getAntType()} className={getButtonClass()} {...props}>
      {children}
    </AntButton>
  )
}

export default Button
