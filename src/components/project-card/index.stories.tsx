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
		href: '#',
	},
}

export const WithLongTitle: Story = {
	args: {
		title: 'Example Project With A Much Longer Title To Test Wrapping and Such',
		imageSrc: 'https://images-platform.99static.com/_MEKqeo-hYljM_WnyesL13chZvI=/0x0:1799x1799/500x500/top/smart/99designs-contests-attachments/157/157967/attachment_157967389',
		href: '#',
	},
}

export const WithDifferentImage: Story = {
	args: {
		title: 'Project With Different Image',
		imageSrc: 'https://www.gamers-outlet.net/image/cache/wp/lj/Product%20image/1215/1215-2.webp',
		href: '#',
	},
}