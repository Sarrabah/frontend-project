import type React from "react"
import { Input as AntInput } from "antd"
import type { InputProps as AntInputProps, PasswordProps } from "antd/es/input"
import "./Input.module.css"

export interface InputProps extends AntInputProps {
  label?: string
  error?: string
  helperText?: string
}

export interface InputPasswordProps extends PasswordProps {
  label?: string
  error?: string
  helperText?: string
}

const InputComponent: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = "",
  ...props
}) => {
  const getInputClass = () => {
    const baseClass = "custom-input"
    const errorClass = error ? "custom-input--error" : ""

    return `${baseClass} ${errorClass} ${className}`.trim()
  }

  return (
    <div className="custom-input-wrapper">
      {label && <label className={`custom-input-label custom-input-label`}>{label}</label>}
      <AntInput className={getInputClass()} status={error ? "error" : undefined} {...props} />
      {error && <div className="custom-input-error">{error}</div>}
      {helperText && !error && <div className={`custom-input-helper custom-input-helper`}>{helperText}</div>}
    </div>
  )
}

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  error,
  helperText,
  className = "",
  ...props
}) => {
  const getInputClass = () => {
    const baseClass = "custom-input"
    const errorClass = error ? "custom-input--error" : ""

    return `${baseClass} ${errorClass} ${className}`.trim()
  }

  return (
    <div className="custom-input-wrapper">
      {label && <label className={`custom-input-label custom-input-label`}>{label}</label>}
      <AntInput.Password className={getInputClass()} status={error ? "error" : undefined} {...props} />
      {error && <div className="custom-input-error">{error}</div>}
      {helperText && !error && <div className={`custom-input-helper custom-input-helper`}>{helperText}</div>}
    </div>
  )
}

export const Input = Object.assign(InputComponent, {
  Password: InputPassword,
})

export default Input
