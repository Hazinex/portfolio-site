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
  delay: number
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
    technologies: ["Unity", "C#"],
    delay: 0.1
  },
	{
    id: 2,
    title: "Bouncy Platforms",
    thumbnailSrc: "/project-images/bouncy-platforms/fail.jpg",
    thumbnailAlt: "A ball bouncing around the screen",
    shortDescription: "Hyper-casual mobile game made in Unity using C#.",
    Company: "Personal",
    gallery: [
      { src: "/project-images/bouncy-platforms/menu.jpg", alt: "Main menu of bouncy platforms" },
      { src: "/project-images/bouncy-platforms/game.jpg", alt: "gameplay of bouncy platforms" },
      { src: "/project-images/bouncy-platforms/fail.jpg", alt: "game over screen of bouncy platforms" },
      { src: "/project-images/bouncy-platforms/banner.png", alt: "Banner from APK index website for the game" },
    ],
    paragraphs: [
      { number: 1, header: "Introduction", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula interdum turpis vel suscipit. Curabitur rutrum erat arcu. In quis vehicula magna. Mauris a fringilla tortor. Etiam accumsan sem ut felis imperdiet, ac molestie ante laoreet. Integer pretium enim ac erat porttitor aliquet. Nulla facilisi. Praesent tincidunt arcu eleifend, ultrices risus non, suscipit nisl. In semper nunc arcu, sit amet blandit dolor varius vel. Nunc ornare nec nulla quis venenatis. Suspendisse a ultricies dolor. Vestibulum nec nisl quis ex viverra blandit et quis sem. Sed eu justo turpis." },
      { number: 2, header: "Technology", content: "Suspendisse potenti. Quisque tortor quam, bibendum nec odio a, eleifend dapibus arcu. Donec at augue eu ante porta vestibulum ut vel mauris. Maecenas lacinia, lorem eu commodo egestas, orci tellus mattis arcu, eu tincidunt metus neque a justo. Fusce id augue eget mi imperdiet luctus eget id velit. Aenean commodo et massa id sodales. Morbi quam velit, volutpat ac lacus sit amet, consequat porttitor lorem. Praesent lacinia est augue, quis rhoncus nulla efficitur congue. Phasellus rhoncus, dolor ac ornare dapibus, dui diam luctus elit, nec rhoncus est ligula sed tellus. Phasellus consequat, lectus sed placerat fringilla, quam metus dapibus nisi, ac viverra massa urna non lectus." },
      { number: 3, header: "Conclusion", content: "Fusce facilisis malesuada tortor quis imperdiet. Phasellus congue odio eu mattis malesuada. In quis consectetur felis. Donec id tellus euismod, cursus dolor ac, ornare nunc. Nulla vitae consectetur nisl. Mauris nibh metus, mollis nec vulputate quis, commodo quis tortor. Ut luctus lacinia lacus, eget rhoncus orci porttitor ut. Curabitur maximus rhoncus arcu quis feugiat. Donec congue vestibulum ligula, quis auctor orci commodo sit amet. Donec porta pharetra tristique. Etiam aliquam imperdiet nulla, quis viverra sapien consectetur tempus. Suspendisse venenatis vestibulum nulla, sagittis pretium augue pellentesque efficitur. Nunc et mauris ultricies, scelerisque nisi gravida, iaculis ante." },
    ],
    technologies: ["Unity", "C#"],
    delay: 0.2
  },
	{
    id: 3,
    title: "Untitled Horror Game",
    thumbnailSrc: "/project-images/horror-game/in-game.jpg",
    thumbnailAlt: "A dark and eerie road with flickering lights.",
    shortDescription: "A first-person horror game prototype made in the Godot Engine and GDScript.",
    Company: "Personal",
    gallery: [
      { src: "/project-images/horror-game/start.png", alt: "Mock camera UI over a dimly lit street" },
      { src: "/project-images/horror-game/bins.png", alt: "Mock camera UI over an image of some bins" },
      { src: "/project-images/horror-game/in-game.jpg", alt: "Mock camera UI over another in-game shot" },
      { src: "/project-images/horror-game/lights-out.png", alt: "Mock camera UI over a section of the game in which the lights suddenly cut out" },
    ],
    paragraphs: [
      { number: 1, header: "Introduction", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula interdum turpis vel suscipit. Curabitur rutrum erat arcu. In quis vehicula magna. Mauris a fringilla tortor. Etiam accumsan sem ut felis imperdiet, ac molestie ante laoreet. Integer pretium enim ac erat porttitor aliquet. Nulla facilisi. Praesent tincidunt arcu eleifend, ultrices risus non, suscipit nisl. In semper nunc arcu, sit amet blandit dolor varius vel. Nunc ornare nec nulla quis venenatis. Suspendisse a ultricies dolor. Vestibulum nec nisl quis ex viverra blandit et quis sem. Sed eu justo turpis." },
      { number: 2, header: "Technology", content: "Suspendisse potenti. Quisque tortor quam, bibendum nec odio a, eleifend dapibus arcu. Donec at augue eu ante porta vestibulum ut vel mauris. Maecenas lacinia, lorem eu commodo egestas, orci tellus mattis arcu, eu tincidunt metus neque a justo. Fusce id augue eget mi imperdiet luctus eget id velit. Aenean commodo et massa id sodales. Morbi quam velit, volutpat ac lacus sit amet, consequat porttitor lorem. Praesent lacinia est augue, quis rhoncus nulla efficitur congue. Phasellus rhoncus, dolor ac ornare dapibus, dui diam luctus elit, nec rhoncus est ligula sed tellus. Phasellus consequat, lectus sed placerat fringilla, quam metus dapibus nisi, ac viverra massa urna non lectus." },
      { number: 3, header: "Conclusion", content: "Fusce facilisis malesuada tortor quis imperdiet. Phasellus congue odio eu mattis malesuada. In quis consectetur felis. Donec id tellus euismod, cursus dolor ac, ornare nunc. Nulla vitae consectetur nisl. Mauris nibh metus, mollis nec vulputate quis, commodo quis tortor. Ut luctus lacinia lacus, eget rhoncus orci porttitor ut. Curabitur maximus rhoncus arcu quis feugiat. Donec congue vestibulum ligula, quis auctor orci commodo sit amet. Donec porta pharetra tristique. Etiam aliquam imperdiet nulla, quis viverra sapien consectetur tempus. Suspendisse venenatis vestibulum nulla, sagittis pretium augue pellentesque efficitur. Nunc et mauris ultricies, scelerisque nisi gravida, iaculis ante." },
    ],
    technologies: ["Unity", "C#"],
    delay: 0.3
  },
	{
    id: 4,
    title: "Computer Vision Damage Detection",
    thumbnailSrc: "/project-images/smart-meters/cnnarchitecture.png",
    thumbnailAlt: "A diagram showing a branched CNN architecture.",
    shortDescription: "Smart meter damage detection using OpenCV and a branched CNN model.",
    Company: "TVS",
    gallery: [
      { src: "/project-images/smart-meters/cnnarchitecture.png", alt: "A diagram showing a branched CNN architecture" },
      { src: "/project-images/blanks/no-image-2.png", alt: "This project has less than 4 images, this is a filler image" },
      { src: "/project-images/blanks/no-image-3.png", alt: "This project has less than 4 images, this is a filler image" },
      { src: "/project-images/blanks/no-image-4.png", alt: "This project has less than 4 images, this is a filler image" },
    ],
    paragraphs: [
      { number: 1, header: "Introduction", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula interdum turpis vel suscipit. Curabitur rutrum erat arcu. In quis vehicula magna. Mauris a fringilla tortor. Etiam accumsan sem ut felis imperdiet, ac molestie ante laoreet. Integer pretium enim ac erat porttitor aliquet. Nulla facilisi. Praesent tincidunt arcu eleifend, ultrices risus non, suscipit nisl. In semper nunc arcu, sit amet blandit dolor varius vel. Nunc ornare nec nulla quis venenatis. Suspendisse a ultricies dolor. Vestibulum nec nisl quis ex viverra blandit et quis sem. Sed eu justo turpis." },
      { number: 2, header: "Technology", content: "Suspendisse potenti. Quisque tortor quam, bibendum nec odio a, eleifend dapibus arcu. Donec at augue eu ante porta vestibulum ut vel mauris. Maecenas lacinia, lorem eu commodo egestas, orci tellus mattis arcu, eu tincidunt metus neque a justo. Fusce id augue eget mi imperdiet luctus eget id velit. Aenean commodo et massa id sodales. Morbi quam velit, volutpat ac lacus sit amet, consequat porttitor lorem. Praesent lacinia est augue, quis rhoncus nulla efficitur congue. Phasellus rhoncus, dolor ac ornare dapibus, dui diam luctus elit, nec rhoncus est ligula sed tellus. Phasellus consequat, lectus sed placerat fringilla, quam metus dapibus nisi, ac viverra massa urna non lectus." },
      { number: 3, header: "Conclusion", content: "Fusce facilisis malesuada tortor quis imperdiet. Phasellus congue odio eu mattis malesuada. In quis consectetur felis. Donec id tellus euismod, cursus dolor ac, ornare nunc. Nulla vitae consectetur nisl. Mauris nibh metus, mollis nec vulputate quis, commodo quis tortor. Ut luctus lacinia lacus, eget rhoncus orci porttitor ut. Curabitur maximus rhoncus arcu quis feugiat. Donec congue vestibulum ligula, quis auctor orci commodo sit amet. Donec porta pharetra tristique. Etiam aliquam imperdiet nulla, quis viverra sapien consectetur tempus. Suspendisse venenatis vestibulum nulla, sagittis pretium augue pellentesque efficitur. Nunc et mauris ultricies, scelerisque nisi gravida, iaculis ante." },
    ],
    technologies: ["Python", "Pytorch", "Convolutional Neural Networks", "Flask"],
    delay: 0.4
  },
	{
    id: 5,
    title: "VR Training Simulator",
    thumbnailSrc: "/project-images/vr-training/training-sim.png",
    thumbnailAlt: "A 'White-box' style VR training environment game screenshot",
    shortDescription: "A VR training simulator for smart meter triage using the Godot Engine and GDScript.",
    Company: "TVS",
    gallery: [
      { src: "/project-images/vr-training/training-sim.png", alt: "A VR hand reaching for a handle on a box" },
      { src: "/project-images/vr-training/open-box.png", alt: "The user putting a smart meter in the now open box" },
      { src: "/project-images/vr-training/result.png", alt: "The mock result of the damage detector" },
      { src: "/project-images/blanks/no-image-4.png", alt: "This project has less than 4 images, this is a filler image" },
    ],
    paragraphs: [
      { number: 1, header: "Introduction", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula interdum turpis vel suscipit. Curabitur rutrum erat arcu. In quis vehicula magna. Mauris a fringilla tortor. Etiam accumsan sem ut felis imperdiet, ac molestie ante laoreet. Integer pretium enim ac erat porttitor aliquet. Nulla facilisi. Praesent tincidunt arcu eleifend, ultrices risus non, suscipit nisl. In semper nunc arcu, sit amet blandit dolor varius vel. Nunc ornare nec nulla quis venenatis. Suspendisse a ultricies dolor. Vestibulum nec nisl quis ex viverra blandit et quis sem. Sed eu justo turpis." },
      { number: 2, header: "Technology", content: "Suspendisse potenti. Quisque tortor quam, bibendum nec odio a, eleifend dapibus arcu. Donec at augue eu ante porta vestibulum ut vel mauris. Maecenas lacinia, lorem eu commodo egestas, orci tellus mattis arcu, eu tincidunt metus neque a justo. Fusce id augue eget mi imperdiet luctus eget id velit. Aenean commodo et massa id sodales. Morbi quam velit, volutpat ac lacus sit amet, consequat porttitor lorem. Praesent lacinia est augue, quis rhoncus nulla efficitur congue. Phasellus rhoncus, dolor ac ornare dapibus, dui diam luctus elit, nec rhoncus est ligula sed tellus. Phasellus consequat, lectus sed placerat fringilla, quam metus dapibus nisi, ac viverra massa urna non lectus." },
      { number: 3, header: "Conclusion", content: "Fusce facilisis malesuada tortor quis imperdiet. Phasellus congue odio eu mattis malesuada. In quis consectetur felis. Donec id tellus euismod, cursus dolor ac, ornare nunc. Nulla vitae consectetur nisl. Mauris nibh metus, mollis nec vulputate quis, commodo quis tortor. Ut luctus lacinia lacus, eget rhoncus orci porttitor ut. Curabitur maximus rhoncus arcu quis feugiat. Donec congue vestibulum ligula, quis auctor orci commodo sit amet. Donec porta pharetra tristique. Etiam aliquam imperdiet nulla, quis viverra sapien consectetur tempus. Suspendisse venenatis vestibulum nulla, sagittis pretium augue pellentesque efficitur. Nunc et mauris ultricies, scelerisque nisi gravida, iaculis ante." },
    ],
    technologies: ["Godot", "GDScript", "Virtual Reality"],
    delay: 0.5
  },
	{
    id: 6,
    title: "AR4 Robotic Arm",
    thumbnailSrc: "/project-images/ar4/shot.jpg",
    thumbnailAlt: "A robotic arm picking up an object.",
    shortDescription: "Pick and place robotic arm controlled using computer vision object detection and classification.",
    Company: "TVS",
    gallery: [
      { src: "/project-images/ar4/shot.jpg", alt: "Pick and place robotic arm controlled using computer vision object detection and classification." },
      { src: "/project-images/ar4/warehouse.jpg", alt: "Robotic arm sorting items in a warehouse" },
      { src: "/project-images/blanks/no-image-3.png", alt: "This project has less than 4 images, this is a filler image" },
      { src: "/project-images/blanks/no-image-4.png", alt: "This project has less than 4 images, this is a filler image" },
    ],
    paragraphs: [
      { number: 1, header: "Introduction", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula interdum turpis vel suscipit. Curabitur rutrum erat arcu. In quis vehicula magna. Mauris a fringilla tortor. Etiam accumsan sem ut felis imperdiet, ac molestie ante laoreet. Integer pretium enim ac erat porttitor aliquet. Nulla facilisi. Praesent tincidunt arcu eleifend, ultrices risus non, suscipit nisl. In semper nunc arcu, sit amet blandit dolor varius vel. Nunc ornare nec nulla quis venenatis. Suspendisse a ultricies dolor. Vestibulum nec nisl quis ex viverra blandit et quis sem. Sed eu justo turpis." },
      { number: 2, header: "Technology", content: "Suspendisse potenti. Quisque tortor quam, bibendum nec odio a, eleifend dapibus arcu. Donec at augue eu ante porta vestibulum ut vel mauris. Maecenas lacinia, lorem eu commodo egestas, orci tellus mattis arcu, eu tincidunt metus neque a justo. Fusce id augue eget mi imperdiet luctus eget id velit. Aenean commodo et massa id sodales. Morbi quam velit, volutpat ac lacus sit amet, consequat porttitor lorem. Praesent lacinia est augue, quis rhoncus nulla efficitur congue. Phasellus rhoncus, dolor ac ornare dapibus, dui diam luctus elit, nec rhoncus est ligula sed tellus. Phasellus consequat, lectus sed placerat fringilla, quam metus dapibus nisi, ac viverra massa urna non lectus." },
      { number: 3, header: "Conclusion", content: "Fusce facilisis malesuada tortor quis imperdiet. Phasellus congue odio eu mattis malesuada. In quis consectetur felis. Donec id tellus euismod, cursus dolor ac, ornare nunc. Nulla vitae consectetur nisl. Mauris nibh metus, mollis nec vulputate quis, commodo quis tortor. Ut luctus lacinia lacus, eget rhoncus orci porttitor ut. Curabitur maximus rhoncus arcu quis feugiat. Donec congue vestibulum ligula, quis auctor orci commodo sit amet. Donec porta pharetra tristique. Etiam aliquam imperdiet nulla, quis viverra sapien consectetur tempus. Suspendisse venenatis vestibulum nulla, sagittis pretium augue pellentesque efficitur. Nunc et mauris ultricies, scelerisque nisi gravida, iaculis ante." },
    ],
    technologies: ["Robotics", "OpenCV", "Linux", "ROS2"],
    delay: 0.6
  },
	{
    id: 7,
    title: "Part Identification App",
    thumbnailSrc: "/project-images/parts-app/main.jpg",
    thumbnailAlt: "A mobile app interface showing placeholder with prompts to enter an image or take a photo.",
    shortDescription: "Computer vision based part identification mobile app created using the Godot Engine.",
    Company: "TVS",
    gallery: [
      { src: "/project-images/parts-app/main.jpg", alt: "A mobile app interface showing placeholder with prompts to enter an image or take a photo." },
      { src: "/project-images/parts-app/godot-engine.png", alt: "A screenshot of the mobile app being built in the Godot engine" },
      { src: "/project-images/parts-app/settings.jpg", alt: "Settings page allowing the user to change the IP and port of the API" },
      { src: "/project-images/parts-app/error.jpg", alt: "Error page displayed when the API is unreachable" },
    ],
    paragraphs: [
      { number: 1, header: "Introduction", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula interdum turpis vel suscipit. Curabitur rutrum erat arcu. In quis vehicula magna. Mauris a fringilla tortor. Etiam accumsan sem ut felis imperdiet, ac molestie ante laoreet. Integer pretium enim ac erat porttitor aliquet. Nulla facilisi. Praesent tincidunt arcu eleifend, ultrices risus non, suscipit nisl. In semper nunc arcu, sit amet blandit dolor varius vel. Nunc ornare nec nulla quis venenatis. Suspendisse a ultricies dolor. Vestibulum nec nisl quis ex viverra blandit et quis sem. Sed eu justo turpis." },
      { number: 2, header: "Technology", content: "Suspendisse potenti. Quisque tortor quam, bibendum nec odio a, eleifend dapibus arcu. Donec at augue eu ante porta vestibulum ut vel mauris. Maecenas lacinia, lorem eu commodo egestas, orci tellus mattis arcu, eu tincidunt metus neque a justo. Fusce id augue eget mi imperdiet luctus eget id velit. Aenean commodo et massa id sodales. Morbi quam velit, volutpat ac lacus sit amet, consequat porttitor lorem. Praesent lacinia est augue, quis rhoncus nulla efficitur congue. Phasellus rhoncus, dolor ac ornare dapibus, dui diam luctus elit, nec rhoncus est ligula sed tellus. Phasellus consequat, lectus sed placerat fringilla, quam metus dapibus nisi, ac viverra massa urna non lectus." },
      { number: 3, header: "Conclusion", content: "Fusce facilisis malesuada tortor quis imperdiet. Phasellus congue odio eu mattis malesuada. In quis consectetur felis. Donec id tellus euismod, cursus dolor ac, ornare nunc. Nulla vitae consectetur nisl. Mauris nibh metus, mollis nec vulputate quis, commodo quis tortor. Ut luctus lacinia lacus, eget rhoncus orci porttitor ut. Curabitur maximus rhoncus arcu quis feugiat. Donec congue vestibulum ligula, quis auctor orci commodo sit amet. Donec porta pharetra tristique. Etiam aliquam imperdiet nulla, quis viverra sapien consectetur tempus. Suspendisse venenatis vestibulum nulla, sagittis pretium augue pellentesque efficitur. Nunc et mauris ultricies, scelerisque nisi gravida, iaculis ante." },
    ],
    technologies: ["Godot", "GDScript", "Flask", "FastAI"],
    delay: 0.7
  },
	{
    id: 8,
    title: "CesiumJS Bermuda & Liverpool",
    thumbnailSrc: "/project-images/cesiumjs/hamilton.png",
    thumbnailAlt: "A 3D map of Bermuda using CesiumJS.",
    shortDescription: "Interactive 3D map of Bermuda and Liverpool using CesiumJS.",
    Company: "VEC",
    gallery: [
      { src: "/project-images/cesiumjs/hamilton.png", alt: "A 3D map of Bermuda using CesiumJS" },
      { src: "/project-images/blanks/no-image-2.png", alt: "This project has less than 4 images, this is a filler image" },
      { src: "/project-images/blanks/no-image-3.png", alt: "This project has less than 4 images, this is a filler image" },
      { src: "/project-images/blanks/no-image-4.png", alt: "This project has less than 4 images, this is a filler image" },
    ],
    paragraphs: [
      { number: 1, header: "Introduction", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula interdum turpis vel suscipit. Curabitur rutrum erat arcu. In quis vehicula magna. Mauris a fringilla tortor. Etiam accumsan sem ut felis imperdiet, ac molestie ante laoreet. Integer pretium enim ac erat porttitor aliquet. Nulla facilisi. Praesent tincidunt arcu eleifend, ultrices risus non, suscipit nisl. In semper nunc arcu, sit amet blandit dolor varius vel. Nunc ornare nec nulla quis venenatis. Suspendisse a ultricies dolor. Vestibulum nec nisl quis ex viverra blandit et quis sem. Sed eu justo turpis." },
      { number: 2, header: "Technology", content: "Suspendisse potenti. Quisque tortor quam, bibendum nec odio a, eleifend dapibus arcu. Donec at augue eu ante porta vestibulum ut vel mauris. Maecenas lacinia, lorem eu commodo egestas, orci tellus mattis arcu, eu tincidunt metus neque a justo. Fusce id augue eget mi imperdiet luctus eget id velit. Aenean commodo et massa id sodales. Morbi quam velit, volutpat ac lacus sit amet, consequat porttitor lorem. Praesent lacinia est augue, quis rhoncus nulla efficitur congue. Phasellus rhoncus, dolor ac ornare dapibus, dui diam luctus elit, nec rhoncus est ligula sed tellus. Phasellus consequat, lectus sed placerat fringilla, quam metus dapibus nisi, ac viverra massa urna non lectus." },
      { number: 3, header: "Conclusion", content: "Fusce facilisis malesuada tortor quis imperdiet. Phasellus congue odio eu mattis malesuada. In quis consectetur felis. Donec id tellus euismod, cursus dolor ac, ornare nunc. Nulla vitae consectetur nisl. Mauris nibh metus, mollis nec vulputate quis, commodo quis tortor. Ut luctus lacinia lacus, eget rhoncus orci porttitor ut. Curabitur maximus rhoncus arcu quis feugiat. Donec congue vestibulum ligula, quis auctor orci commodo sit amet. Donec porta pharetra tristique. Etiam aliquam imperdiet nulla, quis viverra sapien consectetur tempus. Suspendisse venenatis vestibulum nulla, sagittis pretium augue pellentesque efficitur. Nunc et mauris ultricies, scelerisque nisi gravida, iaculis ante." },
    ],
    technologies: ["JavaScript", "CesiumJS", "Aerial Scanning"],
    delay: 0.8
  },
	{
    id: 9,
    title: "MagnifyB Website",
    thumbnailSrc: "/project-images/magnifyb/home.png",
    thumbnailAlt: "A screenshot of the MagnifyB website homepage.",
    shortDescription: "Website built with Next.js and Tailwind CSS.",
    Company: "VEC",
    gallery: [
      { src: "/project-images/magnifyb/home.png", alt: "A screenshot of the MagnifyB website homepage" },
      { src: "/project-images/magnifyb/signup.png", alt: "signup form for the MagnifyB website" },
      { src: "/project-images/magnifyb/dashboardTemp.png", alt: "Dashboard page of the new site" },
      { src: "/project-images/blanks/no-image-4.png", alt: "This project has less than 4 images, this is a filler image" },
    ],
    paragraphs: [
      { number: 1, header: "Introduction", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula interdum turpis vel suscipit. Curabitur rutrum erat arcu. In quis vehicula magna. Mauris a fringilla tortor. Etiam accumsan sem ut felis imperdiet, ac molestie ante laoreet. Integer pretium enim ac erat porttitor aliquet. Nulla facilisi. Praesent tincidunt arcu eleifend, ultrices risus non, suscipit nisl. In semper nunc arcu, sit amet blandit dolor varius vel. Nunc ornare nec nulla quis venenatis. Suspendisse a ultricies dolor. Vestibulum nec nisl quis ex viverra blandit et quis sem. Sed eu justo turpis." },
      { number: 2, header: "Technology", content: "Suspendisse potenti. Quisque tortor quam, bibendum nec odio a, eleifend dapibus arcu. Donec at augue eu ante porta vestibulum ut vel mauris. Maecenas lacinia, lorem eu commodo egestas, orci tellus mattis arcu, eu tincidunt metus neque a justo. Fusce id augue eget mi imperdiet luctus eget id velit. Aenean commodo et massa id sodales. Morbi quam velit, volutpat ac lacus sit amet, consequat porttitor lorem. Praesent lacinia est augue, quis rhoncus nulla efficitur congue. Phasellus rhoncus, dolor ac ornare dapibus, dui diam luctus elit, nec rhoncus est ligula sed tellus. Phasellus consequat, lectus sed placerat fringilla, quam metus dapibus nisi, ac viverra massa urna non lectus." },
      { number: 3, header: "Conclusion", content: "Fusce facilisis malesuada tortor quis imperdiet. Phasellus congue odio eu mattis malesuada. In quis consectetur felis. Donec id tellus euismod, cursus dolor ac, ornare nunc. Nulla vitae consectetur nisl. Mauris nibh metus, mollis nec vulputate quis, commodo quis tortor. Ut luctus lacinia lacus, eget rhoncus orci porttitor ut. Curabitur maximus rhoncus arcu quis feugiat. Donec congue vestibulum ligula, quis auctor orci commodo sit amet. Donec porta pharetra tristique. Etiam aliquam imperdiet nulla, quis viverra sapien consectetur tempus. Suspendisse venenatis vestibulum nulla, sagittis pretium augue pellentesque efficitur. Nunc et mauris ultricies, scelerisque nisi gravida, iaculis ante." },
    ],
    technologies: ["NextJS", "Tailwind", "Git", "TypeScript"],
    delay: 0.9
  },
	{
    id: 10,
    title: "Portfolio Site",
    thumbnailSrc: "/project-images/portfolio-site/home.png",
    thumbnailAlt: "A screenshot of the portfolio website homepage.",
    shortDescription: "The website you are currently on, built with Next.js and Tailwind CSS.",
    Company: "Personal",
    gallery: [
      { src: "/project-images/portfolio-site/home.png", alt: "The home page of this website" },
      { src: "/project-images/portfolio-site/about.png", alt: "The about page of this website" },
      { src: "/project-images/portfolio-site/placeholder.png", alt: "An early version of the projects page" },
      { src: "/project-images/portfolio-site/structure.png", alt: "The folder structure of the source code" },
      { src: "/project-images/portfolio-site/testing-email.png", alt: "My email inbox filled with emails from me testing the contact form" },
      { src: "/project-images/portfolio-site/vercel.png", alt: "This websites deployment on Vercel" },
    ],
    paragraphs: [
      { number: 1, header: "Introduction", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula interdum turpis vel suscipit. Curabitur rutrum erat arcu. In quis vehicula magna. Mauris a fringilla tortor. Etiam accumsan sem ut felis imperdiet, ac molestie ante laoreet. Integer pretium enim ac erat porttitor aliquet. Nulla facilisi. Praesent tincidunt arcu eleifend, ultrices risus non, suscipit nisl. In semper nunc arcu, sit amet blandit dolor varius vel. Nunc ornare nec nulla quis venenatis. Suspendisse a ultricies dolor. Vestibulum nec nisl quis ex viverra blandit et quis sem. Sed eu justo turpis." },
      { number: 2, header: "Technology", content: "Suspendisse potenti. Quisque tortor quam, bibendum nec odio a, eleifend dapibus arcu. Donec at augue eu ante porta vestibulum ut vel mauris. Maecenas lacinia, lorem eu commodo egestas, orci tellus mattis arcu, eu tincidunt metus neque a justo. Fusce id augue eget mi imperdiet luctus eget id velit. Aenean commodo et massa id sodales. Morbi quam velit, volutpat ac lacus sit amet, consequat porttitor lorem. Praesent lacinia est augue, quis rhoncus nulla efficitur congue. Phasellus rhoncus, dolor ac ornare dapibus, dui diam luctus elit, nec rhoncus est ligula sed tellus. Phasellus consequat, lectus sed placerat fringilla, quam metus dapibus nisi, ac viverra massa urna non lectus." },
      { number: 3, header: "Conclusion", content: "Fusce facilisis malesuada tortor quis imperdiet. Phasellus congue odio eu mattis malesuada. In quis consectetur felis. Donec id tellus euismod, cursus dolor ac, ornare nunc. Nulla vitae consectetur nisl. Mauris nibh metus, mollis nec vulputate quis, commodo quis tortor. Ut luctus lacinia lacus, eget rhoncus orci porttitor ut. Curabitur maximus rhoncus arcu quis feugiat. Donec congue vestibulum ligula, quis auctor orci commodo sit amet. Donec porta pharetra tristique. Etiam aliquam imperdiet nulla, quis viverra sapien consectetur tempus. Suspendisse venenatis vestibulum nulla, sagittis pretium augue pellentesque efficitur. Nunc et mauris ultricies, scelerisque nisi gravida, iaculis ante." },
    ],
    technologies: ["NextJS", "Tailwind", "Git", "TypeScript"],
    delay: 1
  }
]