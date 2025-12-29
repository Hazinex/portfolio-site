import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ContactForm } from '@/components/contact-form'

const meta = {
	title: "Page Elements/ContactForm",
	component: ContactForm,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {

    },
} satisfies Meta<typeof ContactForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}