# Natalia's Portfolio

Welcome to the **[prikhoda-natalia.github.io](https://github.com/prikhoda-natalia/prikhoda-natalia.github.io)** repository! This project showcases my resume and portfolio, including some of my front-end development projects.

The project is deployed via GitHub Pages and is accessible at **[prikhoda-natalia.github.io](https://prikhoda-natalia.github.io)**.

![React](https://img.shields.io/badge/React-v19.1.0-blue) ![React Router](https://img.shields.io/badge/React%20Router-v7.4.1-orange) ![TypeScript](https://img.shields.io/badge/TypeScript-v5.8.2-blue) ![Vite](https://img.shields.io/badge/Vite-v5.4.15-purple) ![Sass Embedded](https://img.shields.io/badge/Sass%20Embedded-v1.86.0-green)

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technologies](#️-technologies)
- [📂 Project Structure](#-project-structure)
- [📂 Build Folder Structure](#-build-folder-structure)
- [⚙️ Local Setup and Development](#-local-setup-and-development)
  - [Prerequisites](#prerequisites)
  - [Setup and Development](#setup-and-development)
- [🌐 Deployment to GitHub Pages](#-deployment-to-github-pages)
  - [Automatic Deployment](#automatic-deployment)
  - [Manual Deployment](#manual-deployment)
- [📧 Contact](#-contact)

---

## ✨ Features

- Fully responsive design for all devices
- Showcases front-end development projects
- Includes a detailed resume and skillset
- Built with modern tools like React, TypeScript, and Vite
- Deployed automatically via GitHub Actions

---

## 🛠️ Technologies

- **Framework**: [React.js](https://reactjs.org/) (leveraging [React Router Framework mode](https://reactrouter.com/start/framework/installation))
- **Languages**: TypeScript, HTML5, SCSS
- **Build Tools**: [Vite](https://vitejs.dev/)
- **Hosting**: [GitHub Pages](https://pages.github.com/) (deployed via `gh-pages` branch)
- **Package Manager**: [NPM](https://www.npmjs.com/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Version Control**: [Git](https://git-scm.com/)
- **Node.js Version Manager**: [NVM](https://github.com/nvm-sh/nvm) (for managing Node.js versions)

---

## 📂 Project Structure

```
prikhoda-natalia.github.io/
├── .github/            # GitHub Actions workflows (contains deployment workflow file)
├── .react-router/      # React Router configuration and cache
├── public/             # Static assets
├── app/                # Application components
│   ├── components/     # Reusable UI components
│   ├── data/           # Static data and assets
│   ├── pages/          # Page-level components
│   ├── routes/         # React Router route definitions
│   ├── styles/         # Global styles and SCSS mixins and variables
│   ├── root.tsx        # Root component for the app
│   └── routes.ts       # React Router routes
├── vite.config.ts      # Vite configuration
├── react-router.config.ts # React Router configuration
├── tsconfig.json       # TypeScript configuration
├── .gitignore          # Git ignore rules
├── .nojekyll           # Prevent GitHub Pages from using Jekyll
└── package.json        # Project metadata and scripts
```

---

## 📂 Build Folder Structure

After running `npm run build`, the `build` folder is generated with the following structure:

```
build/
└── client/             # Main build output
    ├── assets/         # JavaScript, CSS, and other bundled assets
    ├── favicon.ico     # Favicon for the site
    ├── index.html      # Entry point for the application
    └── .vite/          # Vite-specific metadata
```

### Notes:

- The `index.html` file is the entry point for the application and references the bundled assets in the `assets/` folder.
- The `build/client` folder is deployed to the `gh-pages` branch of this repository.
- The deployed files can be viewed live at **[https://prikhoda-natalia.github.io/](https://prikhoda-natalia.github.io/)**.
- You can also view the deployed files directly in the `gh-pages` branch of this repository.

---

## ⚙️ Local Setup and Development

### Prerequisites

In order to run the project locally, the following packages should be pre-installed on your local machine:

- [Git](https://git-scm.com/)
- [Node.js (v20)](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)

> **Note**: If you need to switch between different Node.js versions, you can use [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm). Install NVM and run the following command to use Node.js v20:
>
> ```bash
> nvm install 20
> nvm use 20
> ```

### Setup and Development

1. Clone the repository:

   ```bash
   git clone https://github.com/prikhoda-natalia/prikhoda-natalia.github.io.git
   cd prikhoda-natalia.github.io
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173` to view the app.

---

## 🌐 Deployment to GitHub Pages

### Automatic Deployment

This project is configured for **automatic deployment** to GitHub Pages using GitHub Actions.

#### How it works:

1. Every push to the `main` branch triggers the deployment workflow.
2. The workflow:
   - Builds the project
   - Deploys the build output to the `gh-pages` branch
   - Updates the live site at **[prikhoda-natalia.github.io](https://prikhoda-natalia.github.io)**

### Manual Deployment

If you need to deploy manually, follow these steps:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

---

## 📧 Contact

Feel free to reach out if you have any questions or feedback:

- **Email**: [prikhoda.natalia.webdev@gmail.com](mailto:prikhoda.natalia.webdev@gmail.com)
- **LinkedIn**: [Natalia Prikhoda](https://www.linkedin.com/in/prikhoda-natalia/)
- **GitHub**: [prikhoda-natalia](https://github.com/prikhoda-natalia)
