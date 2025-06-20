import type { Meta, StoryObj } from "@storybook/react-webpack5"
import { Button } from "./Button"

// Mock function pour remplacer @storybook/test
const fn = () => () => console.log("Button clicked")

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Composant Button personnalisé basé sur Ant Design avec support des thèmes clair/sombre.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "outline", "ghost"],
      description: "Style du bouton",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "Thème du bouton",
    },
    size: {
      control: "select",
      options: ["small", "middle", "large"],
      description: "Taille du bouton",
    },
    disabled: {
      control: "boolean",
      description: "Bouton désactivé",
    },
    loading: {
      control: "boolean",
      description: "État de chargement",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
    theme: "dark",
    children: "Sign up",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    theme: "dark",
    children: "Sign in",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    theme: "dark",
    children: "Cancel",
  },
}

export const LightTheme: Story = {
  args: {
    variant: "outline",
    theme: "light",
    children: "Light Button",
  },
  parameters: {
    backgrounds: { default: "light" },
  },
}

export const Loading: Story = {
  args: {
    variant: "primary",
    theme: "dark",
    loading: true,
    children: "Loading...",
  },
}

export const Disabled: Story = {
  args: {
    variant: "primary",
    theme: "dark",
    disabled: true,
    children: "Disabled",
  },
}

export const Sizes: Story = {
  args: {
    variant: "primary",
    theme: "dark",
    children: "Button",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="middle">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
    </div>
  ),
}

export const AllVariants: Story = {
  args: {
    theme: "dark",
    children: "Button",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
    </div>
  ),
}
