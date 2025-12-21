import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "."

const meta = {
	title: "Primitives/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
			],
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
		},
		asChild: { control: "boolean" },
		onClick: { action: "clicked" },
	},
	args: {
		children: "Button",
	},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Destructive: Story = {
	args: { variant: "destructive" },
}

export const Outline: Story = {
	args: { variant: "outline" },
}

export const Secondary: Story = {
	args: { variant: "secondary" },
}

export const Ghost: Story = {
	args: { variant: "ghost" },
}

export const Link: Story = {
	args: { variant: "link", children: "Link" },
}

export const Small: Story = {
	args: { size: "sm" },
}

export const Large: Story = {
	args: { size: "lg" },
}

export const Icon: Story = {
	args: { size: "icon", children: "🔔" },
}

export const AsChildLink: Story = {
	args: { asChild: true, variant: "link" },
	render: (args) => (
		<Button {...args}>
			<a href="#" style={{ textDecoration: "none" }}>
				Link Button
			</a>
		</Button>
	),
}

