import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      name: "Variant",
      description: "Visual button style",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: { type: "select" },
    },
    size: {
      name: "Size",
      description: "Button size",
      options: ["default", "sm", "lg", "icon"],
      control: { type: "inline-radio" },
    },
    children: {
      name: "Children",
      description: "Button content",
    },
    asChild: {
      name: "As Child",
      description: "Render as a child element",
    },
  },
  args: {
    variant: "default",
    size: "default",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
  args: {
    children: "I am a default styled button.",
    variant: "default",
  },
};

export const Destructive: Story = {
  args: {
    children: "I am a destructive button.",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "I am an outline button.",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "I am a secondary button.",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "I am a ghost button.",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "I am a link button.",
    variant: "link",
  },
};

export const DefaultSize: Story = {
  args: {
    children: "I am a default sized button.",
    size: "default",
  },
};

export const Small: Story = {
  args: {
    children: "I am a small button.",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "I am a large button.",
    size: "lg",
  },
};

export const Icon: Story = {
  args: {
    children: "I am an icon button.",
    size: "icon",
  },
};
