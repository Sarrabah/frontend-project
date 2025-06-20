import type { Meta, StoryObj } from "@storybook/react-webpack5"
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons"
import { Input } from "./Input"

// Mock function pour remplacer @storybook/test
const fn = () => () => console.log("Input changed")

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Composant Input personnalisé basé sur Ant Design avec support des thèmes clair/sombre.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "middle", "large"],
      description: "Taille de l'input",
    },
    disabled: {
      control: "boolean",
      description: "Input désactivé",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
      description: "Type d'input",
    },
  },
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter your name",
  },
}

export const WithLabel: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
}

export const WithIcon: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    prefix: <UserOutlined />,
  },
}

export const Email: Story = {
  args: {
    label: "Email address",
    placeholder: "Enter your email",
    prefix: <MailOutlined />,
    type: "email",
  },
}

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    prefix: <LockOutlined />,
  },
  render: (args) => <Input.Password {...args} />,
}

export const WithError: Story = {
  args: {
    label: "Email address",
    placeholder: "Enter your email",
    prefix: <MailOutlined />,
    error: "Please enter a valid email address",
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    prefix: <LockOutlined />,
    helperText: "Password must be at least 8 characters",
  },
}

export const Disabled: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    disabled: true,
  },
}

export const Sizes: Story = {
  args: {
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "300px" }}>
      <Input {...args} label="Small" placeholder="Small input" size="small" />
      <Input {...args} label="Medium" placeholder="Medium input" size="middle" />
      <Input {...args} label="Large" placeholder="Large input" size="large" />
    </div>
  ),
}

