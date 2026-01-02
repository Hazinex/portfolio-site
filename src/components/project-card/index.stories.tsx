import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ProjectCard } from '@/components/project-card'

const meta = {
	title: "Page Elements/ProjectCard",
	component: ProjectCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		title: { control: 'text' },
		imageSrc: { control: 'text' },
		href: { control: 'text' },
	},
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		title: 'Example Project',
		imageSrc: 'https://miro.medium.com/1*MJG1FlvpjDdaeH8eQ0r1Dw.png',
		imageAlt: 'An example project image showing a generic placeholder design.',
		shortDescription: 'This is a short description of the example project to showcase the ProjectCard component in Storybook.',
		href: '#',
		Company: 'Personal',
    delay: 1
	},
}

export const WithLongTitle: Story = {
	args: {
		title: 'Example Project With A Much Longer Title To Test Wrapping and Such',
		imageSrc: 'https://images-platform.99static.com/_MEKqeo-hYljM_WnyesL13chZvI=/0x0:1799x1799/500x500/top/smart/99designs-contests-attachments/157/157967/attachment_157967389',
		imageAlt: 'An example project image showing a generic placeholder design.',
		shortDescription: 'This is a short description of the example project to showcase the ProjectCard component in Storybook.',
		href: '#',
		Company: 'TVS',
    delay: 1
	},
}