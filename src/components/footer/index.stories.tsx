import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Footer } from '@/components/footer'

const meta = {
	title: "Page Elements/Footer",
	component: Footer,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {

    },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}