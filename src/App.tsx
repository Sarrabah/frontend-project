"use client"

import type React from "react"
import { lazy, Suspense, useState} from "react"
import { ConfigProvider, theme } from "antd"
import Header from "./components/Header"
import Description from "./components/Description"
//import SignForms from "./components/SignForms"
import Footer from "./components/Footer"
import { useTheme } from "./hooks/useTheme" // Make sure this path is correct
import "./styles/App.css" // Keep this for global styles and CSS variables

const SignForms = lazy(() => import("./components/SignForms"));

const App: React.FC = () => {
  const { isDark } = useTheme()
  const [activeForm, setActiveForm] = useState<"signin" | "signup" | null>(null)

  const handleSignInClick = () => {
    setActiveForm("signin")
  }

  const handleSignUpClick = () => {
    setActiveForm("signup")
  }

  const handleCloseForm = () => {
    setActiveForm(null)
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#06b6d4", // Primary color (Ant Design's accent color)
          colorBgBase: isDark ? "#0f172a" : "#f8fafc", // Base background for components if needed
          colorTextBase: isDark ? "#ffffff" : "#0f172a", // Base text color for components
          colorBgContainer: isDark ? "#1e293b" : "#ffffff", // Background for cards/containers
          colorBorder: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(15, 23, 42, 0.2)", // Border color
        }
      }}
    >
      <div className="app"> {/* The class `app` is enough, `dark-theme` or `light-theme` is no longer needed here */}
        <Header onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} />
        <main aria-hidden={activeForm ? "true" : "false"}>
          <Description onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} /> 
          {activeForm && (
            <Suspense fallback={<div>Loading form...</div>}> {/* Provide a fallback UI */}
              <SignForms activeForm={activeForm} onFormChange={setActiveForm} onCloseForm={handleCloseForm} />
            </Suspense>
          )}
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  )
}

export default App