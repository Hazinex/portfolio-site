import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Navbar } from '@/components/navbar'

const meta = {
	title: "Page Elements/Navbar",
	component: Navbar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {

    },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}