# Project Overview

Hello! This is my (Harry Ellis) portfolio website! I created this website to show off what projects I've worked on that can't be captured on a CV.

Feel free to use the code from this website.
If you do, I’d appreciate a small credit somewhere — thank you!


## Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Language:** TypeScript
* **UI Components:** (shadcn/ui, custom components)
* **Other:** (Framer Motion, Resend)


## Screenshots / Demo

![Screenshot from Main Page](/public/project-images/portfolio-site/home.png "Screenshot from Main Page")

[Here is the site in production!](https://www.harryellis.dev/)


## Features

* Home Page with particle effect and typewriter text
* Projects page with dynamically rendered cards and slug-based pages 
* About page with CV viewer
* Contact form using resend


## Getting Started

### Prerequisites

* Node.js (version v24.12.0 or higher)
* npm / pnpm / yarn / bun

### Installation

```bash
bun i
```

### Development

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Environment Variables

Create a `.env.local` file in the root:

```env
EMAIL=YOUR_EMAIL_HERE
RESEND_API_KEY=YOUR_API_KEY_HERE
```

* The email is the destination of the message from the contact page
* Resend is a email service platform for building, testing, and sending transactional and marketing emails, I've used it here to avoid creating additional server instances to handle email requests and so on.


## Scripts

```bash
bun run dev      # Start dev server
bun run build    # Build for production
bun run start    # Run production build
bun run lint     # Lint code
```


## Roadmap

* Find a way to link and style in the paragraphs
* Add series, ie. game dev series, Robot series etc
* Filter projects by technology used
* Add videos to the gallery


## Author

* Portfolio: [https://www.harryellis.dev/](https://www.harryellis.dev/)
* GitHub: [https://github.com/Hazinex](https://github.com/Hazinex)

## License

This project is open-source. You are free to use and modify the code.
Attribution is appreciated but not required.
