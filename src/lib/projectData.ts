export type ProjectType = {
	id: number;
	title: string;
	thumbnailSrc: string;
	thumbnailAlt: string;
	shortDescription: string;
	Company: "Personal" | "TVS" | "VEC";
	gallery: {
		src: string
		alt: string
	}[]
	paragraphs: {
		number: number
		header: string
		content: string
	}[]
	technologies: string[]
}

export const ProjectsData: ProjectType[] = [
	{
		id: 1,
		title: "Hela",
		thumbnailSrc: "/project-images/hela/lvl2.png",
		thumbnailAlt: "Zombie jumping towards the camera in a dimly lit room.",
		shortDescription: "5 Level Game made in Unity using C#.",
		Company: "Personal",
		gallery: [
			{ src: "/project-images/hela/lvl2.png", alt: "Zombie jumping towards the camera in a dimly lit room." },
			{ src: "/project-images/hela/lvl3.png", alt: "Troll silhouette in a cave." },
			{ src: "/project-images/hela/lvl5.png", alt: "Large hooded and cloaked figure holding a wooden staff casting a spell." },
			{ src: "/project-images/hela/mainmenu.png", alt: "Main menu showing a tree and mountain range with menu options." },
		],
		paragraphs: [
			{ number: 1, header: "Introduction", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula interdum turpis vel suscipit. Curabitur rutrum erat arcu. In quis vehicula magna. Mauris a fringilla tortor. Etiam accumsan sem ut felis imperdiet, ac molestie ante laoreet. Integer pretium enim ac erat porttitor aliquet. Nulla facilisi. Praesent tincidunt arcu eleifend, ultrices risus non, suscipit nisl. In semper nunc arcu, sit amet blandit dolor varius vel. Nunc ornare nec nulla quis venenatis. Suspendisse a ultricies dolor. Vestibulum nec nisl quis ex viverra blandit et quis sem. Sed eu justo turpis." },
			{ number: 2, header: "Technology", content: "Suspendisse potenti. Quisque tortor quam, bibendum nec odio a, eleifend dapibus arcu. Donec at augue eu ante porta vestibulum ut vel mauris. Maecenas lacinia, lorem eu commodo egestas, orci tellus mattis arcu, eu tincidunt metus neque a justo. Fusce id augue eget mi imperdiet luctus eget id velit. Aenean commodo et massa id sodales. Morbi quam velit, volutpat ac lacus sit amet, consequat porttitor lorem. Praesent lacinia est augue, quis rhoncus nulla efficitur congue. Phasellus rhoncus, dolor ac ornare dapibus, dui diam luctus elit, nec rhoncus est ligula sed tellus. Phasellus consequat, lectus sed placerat fringilla, quam metus dapibus nisi, ac viverra massa urna non lectus." },
			{ number: 3, header: "Conclusion", content: "Fusce facilisis malesuada tortor quis imperdiet. Phasellus congue odio eu mattis malesuada. In quis consectetur felis. Donec id tellus euismod, cursus dolor ac, ornare nunc. Nulla vitae consectetur nisl. Mauris nibh metus, mollis nec vulputate quis, commodo quis tortor. Ut luctus lacinia lacus, eget rhoncus orci porttitor ut. Curabitur maximus rhoncus arcu quis feugiat. Donec congue vestibulum ligula, quis auctor orci commodo sit amet. Donec porta pharetra tristique. Etiam aliquam imperdiet nulla, quis viverra sapien consectetur tempus. Suspendisse venenatis vestibulum nulla, sagittis pretium augue pellentesque efficitur. Nunc et mauris ultricies, scelerisque nisi gravida, iaculis ante." },
		],
		technologies: ["Unity", "C#"]
	},
	{
		id: 2,
		title: "Bouncy Platforms",
		thumbnailSrc: "/project-images/bouncy-platforms/fail.jpg",
		thumbnailAlt: "A ball bouncing around the screen",
		shortDescription: "Hyper-casual mobile game made in Unity using C#.",
		Company: "Personal",
		gallery: [],
		paragraphs: [],
		technologies: []
	},
	{
		id: 3,
		title: "Untitled Horror Game",
		thumbnailSrc: "/project-images/horror-game/in-game.jpg",
		thumbnailAlt: "A dark and eerie road with flickering lights.",
		shortDescription: "A first-person horror game prototype made in the Godot Engine and GDScript.",
		Company: "Personal",
		gallery: [],
		paragraphs: [],
		technologies: []
	},
	{
		id: 4,
		title: "Computer Vision Damage Detection",
		thumbnailSrc: "/project-images/smart-meters/cnnarchitecture.png",
		thumbnailAlt: "A diagram showing a branched CNN architecture.",
		shortDescription: "Smart meter damage detection using OpenCV and a branched CNN model.",
		Company: "TVS",
		gallery: [],
		paragraphs: [],
		technologies: []
	},
	{
		id: 5,
		title: "VR Training Simulator",
		thumbnailSrc: "/project-images/vr-training/training-sim.png",
		thumbnailAlt: "A 'White-box' style VR training environment game screenshot",
		shortDescription: "A VR training simulator for smart meter triage using the Godot Engine and GDScript.",
		Company: "TVS",
		gallery: [],
		paragraphs: [],
		technologies: []
	},
	{
		id: 6,
		title: "AR4 Robotic Arm",
		thumbnailSrc: "/project-images/ar4/shot.jpg",
		thumbnailAlt: "A robotic arm picking up an object.",
		shortDescription: "Pick and place robotic arm controlled using computer vision object detection and classification.",
		Company: "TVS",
		gallery: [],
		paragraphs: [],
		technologies: []
	},
	{
		id: 7,
		title: "Part Identification App",
		thumbnailSrc: "/project-images/parts-app/main.jpg",
		thumbnailAlt: "A mobile app interface showing placeholder with prompts to enter an image or take a photo.",
		shortDescription: "Computer vision based part identification mobile app created using the Godot Engine.",
		Company: "TVS",
		gallery: [],
		paragraphs: [],
		technologies: []
	},
	{
		id: 8,
		title: "CesiumJS Bermuda & Liverpool",
		thumbnailSrc: "/project-images/cesiumjs/hamilton.png",
		thumbnailAlt: "A 3D map of Bermuda using CesiumJS.",
		shortDescription: "Interactive 3D map of Bermuda and Liverpool using CesiumJS.",
		Company: "VEC",
		gallery: [],
		paragraphs: [],
		technologies: []
	},
	{
		id: 9,
		title: "MagnifyB Website",
		thumbnailSrc: "/project-images/magnifyb/home.png",
		thumbnailAlt: "A screenshot of the MagnifyB website homepage.",
		shortDescription: "Website built with Next.js and Tailwind CSS.",
		Company: "VEC",
		gallery: [],
		paragraphs: [],
		technologies: []
	},
	{
		id: 10,
		title: "Portfolio Site",
		thumbnailSrc: "/project-images/portfolio-site/placeholder.png",
		thumbnailAlt: "A screenshot of the portfolio website homepage.",
		shortDescription: "The website you are currently on, built with Next.js and Tailwind CSS.",
		Company: "Personal",
		gallery: [],
		paragraphs: [],
		technologies: []
	}
]