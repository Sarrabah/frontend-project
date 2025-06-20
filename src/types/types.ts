export interface SignInFormData {
  email: string
  password: string
}

export interface SignUpFormData {
  name: string
  email: string
  password: string
}
export interface SignFormsProps {
  activeForm: "signin" | "signup"
  onFormChange: (form: "signin" | "signup" | null) => void
  onCloseForm: () => void
}

