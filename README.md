# MixBistro

MixBistro is a modern, responsive single-page application built with React, Vite, and Tailwind CSS. It features a stunning UI for a bistro, including sections for the menu, catering services, and a landing page.

## Features

- **Modern UI/UX**: Built with Tailwind CSS and custom fonts (Nohemi, Mont).
- **Responsive Design**: Mobile-friendly layout.
- **Smooth Animations**: powered by Framer Motion.
- **Routing**: Client-side routing with React Router v7.
- **Image Optimization**: Images are optimized for performance.

## Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/)

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd mixbistro
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To build the application for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # Reusable UI components (Nav, Footer, etc.)
├── pages/          # Page components (Landing, Menu, Catering)
└── App.jsx         # Main application component and routing
```

## License

[MIT](LICENSE)
