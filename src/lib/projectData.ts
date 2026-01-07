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
  released: boolean
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
      { number: 1, header: "What is Hela?", content: "Hela is the first 'real' game I created. I had, of course, made games previously, but they were either not in a proper game engine, or I was just following simple tutorials to create the same as someone else. Hela is a simple 5 level game with a boss fight at the end, which was completed sometime during the covid lockdowns in 2020. The player has a first-person view of a character who can summon and throw swords to defeat enemies. The aim of the game is to just make it to the end door of each level with a new monster, with various abilities and attributes, being on each of the 5 levels." },
      { number: 2, header: "My Introduction to Game Creation", content: "This goes allllll the way back to primary school; we used to have 1 hour a week focussed on computer skills. Naturally, we have scratch, how to use the file explorer, etc. But my most favourite topic we covered was Kodu Game Lab. For those unaware, it's a game engine of sorts that uses blocks to create game logic, similar to scratch! I remember going home, making new games in it, and bringing them in on a USB to show my teacher. Looking back, I feel very lucky to have had a computer class this early, especially on this topic which really fostered my passion. Moving on to high school the next instance of me dipping my toe into game creation was simply playing around in unity for the first time following tutorials from the legendary Asbjørn 'Brackeys' Thirslund, this set me up to make my final year project for my A-level Computer Science qualification, an evolution simulator in unity (The files have unfortunately been lost). All of this leads us to this project, the first real game!" },
      { number: 3, header: "The game", content: "I believe the games name comes from the main antagonist of the 'Thor: Ragnarok' Film, as cringey as that is. Hela is a god who can summon and throw swords, so the name is a bit on the nose. There is no real story to the game visible to the user, but the idea was that a town was taken over by a dark wizard, who features as the final boss. This project was quite difficult, as I had no modelling experience, finding and fitting random assets from the Unity Asset Store was time consuming and frustrating, leading to a lot of compromises in the final build. I also had no individual C# experience, only python at the time. However, I LOVE learning new technologies, and excel at rapid progression, making this project ideal to garnering motivation in me."},
      { number: 4, header: "Conclusion & Reflection", content: "As you can tell from the screenshots, the game is very obviously unpolished but considering I had not made anything like it before, I am proud of it. Since the completion of the game, I have made more projects in unity, which you can see on the other projects featured on this website, as of the time of writing this, I'm currently working on learning blender so that I can make my own assets may be homogenous. I have however switched my focus to Godot for personal projects after the Unity pricing controversy of 2023." },
    ],
    technologies: ["Unity", "C#"],
    released: true
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
      { number: 1, header: "Getting into mobile game development", content: "Bouncy Platforms was my first taste of mobile development of any kind. Granted I did have some experience in game development (see Hela project for this) mobile development came with a whole host of new challenges. I wanted to create this game in an attempt to emulate the feel of hyper-casual games, mainly flappy bird, instilling determination in players to break high scores." },
      { number: 2, header: "Gameplay", content: "The aim of the game is to keep the ball within the bounds of the screen by pressing to create platforms that are created perpendicular to the centre, one point is awarded per bounce on a platform. Herin lies my main pain point for mobile game development, especially one in which a there is potential for a competitive aspect. When there are so many mobile devices so how do we handle different aspect ratios, screen-sizes, etc. to keep the game fair? This problem only reared its head once the game was fully developed as I did not have the option to see the game on other phones other than my own during development." },
      { number: 3, header: "Publication", content: "I wanted to publish the game on the two major app stores (iOS App Store and Google Play Store) so that others could play without me sending dodgy zip files and telling them to install an APK. Frustratingly, apple charged $99 per year for a developer license. This seemed exorbitant, especially when I was a student just wanting to publish a silly game I made for fun. Googles pricing was much more reasonable. $15 one off registration fee! " },
      { number: 4, header: "Conclusion & Reflection", content: "The game expectedly had very few downloads from the public, likely because the game did have accessibility issues, and no marketing or prior work. The game was however well received when I showed family and friends, with them competing to get the highest score, exactly what I had hoped for! Because of this, I considered my project successful. Unfortunately, the original unity files have been lost so I cannot go back and fix issues that I previously mentioned." },
    ],
    technologies: ["Unity", "C#"],
    released: true
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
      { number: 1, header: "Stepping Into a New Genre", content: "Having now made some games before (See Hela and Bouncy Platforms projects) I wanted to tackle a new genre. To me, horror games seem to require comparatively less game mechanics in order to 'work'. I focussed more on the visual style of this game than gameplay, unlike Hela." },
      { number: 2, header: "Graphics & Gameplay", content: "Instead of heavily lighting the scene like previous games, exposing my lack of cohesive assets, I obscured them with dim lighting, volumetric fog, and a custom pixelization render on top inspired by Puppet Combos style. The game has a found footage feel with mock camera UI overlayed on top at all times. As the user walks down the road, the lights suddenly turn off and is chased by a 'NextBot' created by valve as a new technology with smart pathfinding and memefied by the internet. The user can escape by running away or die by coming into contact with the NextBot." },
      { number: 3, header: "Conclusion & Reflection", content: "Although the visual changes I made were effective there were still some difficulties in finding suitable assets. I did like the overall feel of the game and planned on making another longer, more fleshed out horror game. Unfortunately, this would be the last game I made for a while due to university and professional work occupying more time." },
    ],
    technologies: ["Unity", "C#"],
    released: true
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
      { number: 1, header: "First Professional Job and Project", content: "Working at TVS Supply Chain Solutions (TVS SCS) was my first professional job after university. I was excited to apply what I had learned at university to this setting. I think this role, and even more so this first project, was very fitting to a graduate, it allowed me to handle projects end-end without diving head-first into a messy ancient code-base getting overwhelmed and not learning much." },
      { number: 2, header: "The Scenario", content: "Near the start of my tenure, we had a tour of one of the warehouses. There was a very large section dedicated to smart meter triage; Damaged smart-meters would come in and it was the responsibility of the worker to assess the damage and manually log in the machine the way in which the smart meter was damaged, it could be for a variety of reasons, such as: cracked screen, burnt parts, missing components, etc. The purpose of the role was to investigate potential improvements possible with AI as an emerging technology, this seemed like a prime use case." },
      { number: 3, header: "Developing the Solution", content: "This manual imputation could clearly be accelerated by some computer vision. The smart meter triage line was already using a large white camera box to take pictures of the meters and send them back to the manufacturer. If I could use these images to train a model, I could predict the damages in a simple classification model. Each side of the box had a camera (6 total), I opted to a 'Branched Convolutional Neural Network' to train and predict incoming images. Each image passes through convolutional and batching layers until they have a single dimension, at which point the six feature sets are concatenated into one and passed through a Multi-layer Perceptron (MLP) to obtain a classification. " },
      { number: 4, header: "Outcome", content: "The images and result were passed through to each other using an API, as well as logged on the server the model ran on. This showed both office and warehouse staff the results in real time. This project massively improved warehouse efficiency allowing staff to parallelise the meter triage process. The project also became the basis of future  machine vision classification tasks." },
    ],
    technologies: ["Python", "Pytorch", "Convolutional Neural Networks", "Flask"],
    released: true
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
      { number: 1, header: "Rationale", content: "The project previous to this one tells you how I tackled my first project. This project was made to further improve upon the processes of the last one, that being smart meter triage. Training staff to work on the triage line would halt the line for some time, reducing the team's efficiency. The idea behind this project is to use VR to train staff before affecting the real warehouse line." },
      { number: 2, header: "Technology & Development", content: "While not the first-time using Godot, this was my first time making a VR experience and my first time creating a production ready project in it. Previously I had just watched tutorials to learn the Engine. However, the choice to use Godot over other Game engines for this project was sound. Godot makes VR development incredibly easy, as simple as clicking 1-2 buttons and exporting to an APK, massively contrasting the pain of trying to set up VR in unity." },
      { number: 3, header: "Outcome", content: "The whole project took less than a week to complete thanks to Godot simplicity. Unfortunately, while management showed interest in the project it never came to fruition due to the required investment into VR technology, the additional training required to have a staff member train another in VR, and health and safety requirements compared to the current process." },
    ],
    technologies: ["Godot", "GDScript", "Virtual Reality"],
    released: true
  },
  {
    id: 6,
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
      { number: 1, header: "The Scenario", content: "This project was a case of improving upon an existing project. There was a large conveyer belt in the corner of one of the warehouses. The conveyor belt was very useful for the staff as oftentimes items will come into the warehouse untagged with their ID. Staff could place the unknown item on the belt and an AI model would predict the ID, which the staff member could verify and tag. However, the problem with this approach was twofold. The conveyer is very large and had to be lugged out each time an unknown item came in, this took up time, manpower, and space. The conveyor also took substantial time for the item to go down the belt, have images taken, and come back out. This problem is exacerbated by their only being one of these machines, and the potential for hundreds of unknown items." },
      { number: 2, header: "Adapting Prior Projects", content: "Noticing potential improvements, I suggested a mobile app connected to the same API as the existing solution. This way a worker could take a top-down photo anywhere in the warehouse speeding up the results over the conveyor solution. This solution also allowed multiple people to identify items at once time. For a rapid prototype I made the app in Godot. I created a barebones UI that let the user take a photo or upload a photo from their own devices, then see the results of the model." },
      { number: 3, header: "Outcome", content: "This solution vastly improved upon the old system speeding the recognition of unknown items as described, freeing up time, and manpower. Unfortunately, a better version of the app could not be developed due to the AR4 project which you can also see on this site. " },
    ],
    technologies: ["Godot", "GDScript", "Flask", "FastAI"],
    released: true
  },
	{
    id: 7,
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
      { number: 1, header: "Project Origin", content: "Unlike the other projects I worked on at TVS, this was not my idea. Two other colleagues who had a background in robotics suggest the idea of a pick and place robot, that would sort items coming in on a conveyor belt. The robot we chose was very affordable as a proof of concept (PoC) with plans to scale up upon its success. " },
      { number: 2, header: "Default Software", content: "Once the arm was built it was handed off to me to develop the software that would compete the pick and place. The arms schematics were created by Annin Robotics, who kindly includes some useful, albeit limited software for pick and place already. While simple it would be more than sufficient for a PoC, which you can see in the gallery. " },
      { number: 3, header: "The Idea for Improvement", content: "The Arm has more than proved good enough for a proof of concept! However, I discovered the speed of the arm, and its visual processing were limited by the default software, so I looked into potential improvements. I discovered somebody had made a Driver that allowed the arm to be used with the Robot Operating System (ROS2). I wanted to use this for the robot's locomotion, and a custom CNN for object detection as the default one used simple greyscale pattern matching, so was very easily confused if shapes were similar. " },
      { number: 4, header: "End of My Time at TVS SCS", content: "I made some simple scripts that allowed me to control the arm with ROS2 and was making headway in developing a model to recognise a variety of objects in the warehouse. Unfortunately, this work would never make it to a finished PoC stage. TVS SCS did not meet the profit quota for the quarter, this meant that some budget cuts had to take place. As the team I worked on was R&D focussed, the team was to be cut from 8 people to 3. Having started sooner than the others, with less knowledge of the business, I was made redundant." },
    ],
    technologies: ["Robotics", "OpenCV", "Linux", "ROS2"],
    released: true
  },
	{
    id: 8,
    title: "Finance Website",
    thumbnailSrc: "/project-images/finance-website/dash.png",
    thumbnailAlt: "Screenshot of the finance website's homepage.",
    shortDescription: "Website built with Next.js and Tailwind CSS.",
    Company: "VEC",
    gallery: [
      { src: "/project-images/finance-website/dash.png", alt: "Screenshot of the financial dashboard showing key figures" },
      { src: "/project-images/blanks/no-image-2.png", alt: "This project has less than 4 images, this is a filler image" },
      { src: "/project-images/blanks/no-image-3.png", alt: "This project has less than 4 images, this is a filler image" },
      { src: "/project-images/blanks/no-image-4.png", alt: "This project has less than 4 images, this is a filler image" },
    ],
    paragraphs: [
      { number: 1, header: "First Project at VEC", content: "I was thrilled to have landed this job after working for TVS for a year, switching focus from a very corporate job in transport to one with exciting new technologies more aligned with my interests was a welcome change. The Virtual Engineering Centre focusses on using emerging technologies to help small-medium sized enterprises in the UK. My first project while working here was to improve the design of an existing website for one of our clients (Unfortunately, the name cannot be posted here). When I first heard that I will be working on websites during my time here, to be honest, I was sceptical. My only exposure to web development was in my first year of university, which had me using technologies that hadn't been used in industry for years. Needless to say, it was quite frustrating. My only respite was that a friend had mentioned he uses the same tech stack and that I should learn it to because it's quite fun." },
      { number: 2, header: "Learning Something Completely New & AI Guided Learning", content: "Learning a new programming language is hard in and of itself, learning a completely new field of programming is harder. While I wasn't thrown straight into a new codebase, I was expected to start creating components out the gate with no formal learning time. This trial by fire approach ended up being quite beneficial as oftentimes learning a skill in an isolated environment doesn't reflect what you do in the real world. Something I didn't expect was how useful AI code generation is for learning (That doesn't mean I vibe coded the whole website by the way!). I found AI generated code lets me understand small pieces of a larger code block bit by bit. Comparatively to traditional learning I'd have to write a whole block of code to see any result, by which time I would have no idea what each bit does, just that I had to write it to get it to work." },
      { number: 3, header: "The Project Itself", content: "While I had not been there from the beginning of the project, this iteration of work for me was focussed on rebuilding the front-end design of a finance website. The company targeted small personal companies, such as local tradesmen, or restaurateurs, to help improve their finances and knowledge around it. For them I had to produce a variety of pages as a part of a small team of 3 people, with me focussing on front-end and them the back-end. This was also a big shift in workflow for me from my previous job. Having people developing alongside me and then having to present that to a client, was daunting but exciting. These were really people's business, so the work I did has an impact, previously unseen in my last role." },
    ],
    technologies: ["NextJS", "Tailwind", "Storybook", "Git", "TypeScript"],
    released: true
  },
  {
    id: 9,
    title: "CesiumJS Bermuda & Liverpool",
    thumbnailSrc: "/project-images/cesiumjs/hamilton.png",
    thumbnailAlt: "A 3D map of Bermuda using CesiumJS.",
    shortDescription: "Interactive 3D map of Bermuda and Liverpool using CesiumJS.",
    Company: "VEC",
    gallery: [
      { src: "/project-images/cesiumjs/prom.png", alt: "A 3D map of Bermuda using CesiumJS" },
      { src: "/project-images/cesiumjs/hamilton.png", alt: "This project has less than 4 images, this is a filler image" },
      { src: "/project-images/cesiumjs/sheil.png", alt: "This project has less than 4 images, this is a filler image" },
      { src: "/project-images/blanks/no-image-4.png", alt: "This project has less than 4 images, this is a filler image" },
    ],
    paragraphs: [
      { number: 1, header: "First Bit of Visualisation work", content: "This project involved using CesiumJS to make a 3D explorable representation of Bermuda. While I could've stopped at just adding OSM (OpenStreetMap) Buildings. I thought it worthwhile to add some additional toggleable layers that showed entities like waterways, road conditions, historical storms paths etc. This is still an on-going project, with better ariels scans in the works to increase fidelity." },
      { number: 2, header: "Adapting Meta Liverpool", content: "The VEC also has an ongoing project called 'Meta Liverpool', a digital twin inside of unreal engine that uses pixel streaming. This can be used for areas such as town planning by looking at traffic simulation or solar panel placement. I decided to make a version of this in CesiumJS that is runnable in a browser, this way it was more distributable to clients. " },
    ],
    technologies: ["JavaScript", "CesiumJS"],
    released: true
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
      { number: 1, header: "Why I Made This Website", content: "This project is for the website you are looking at right now! Thank you for taking the time to read these projects and visit my site! My contract at the time of writing only has 3 months left until it expires, from what I can gather it is likely to be renewed, but I thought I should be on the safe side and finally make a portfolio that can capture what I do unlike a CV.  " },
      { number: 2, header: "Why I Didn't Have One in the Past", content: "While web development isn't my biggest passion I love learning new technologies. My only prior web development experience prior to working at the VEC was in 2021 at university, we used an ancient version of jQuery to recreate a website to nebulous standards. In contrast, here at the VEC I'm working on real projects and learning something useful. Making this website before I started seemed impossible, but now I know I could make something serviceable for myself, and I've had a great time doing so. " },
      { number: 3, header: "What's Next? (Dev Log)", content: "(03/01/25) As of writing I'm nearing the final commit for a V1.0 version of this website, just a few text edits to go! I made this website within the two-week university closure, so development will slow down as I return to work, but I still have a few plans on my Todo list: Find a way to link and style in the paragraphs | Add series, i.e. game dev series, Robot series etc. | Filter projects by technology used | Add videos to the gallery. Thank you for taking the time to visit my website and read some projects, it means a lot this effort has not gone to waste :)" },
    ],
    technologies: ["NextJS", "Tailwind", "Storybook", "Git", "TypeScript"],
    released: true
  }
]