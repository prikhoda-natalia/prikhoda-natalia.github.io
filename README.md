# Natalia Prikhoda

_prikhoda.natalia.webdev@gmail.com_  
_web, frontend, UI developer_  
_Sintra (Portugal), GMT +1_  
_[prikhoda-natalia.github.io](https://prikhoda-natalia.github.io/)_

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Local Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Deployment

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. The deployment process is handled through GitHub Actions.

#### Configuration

The repository is already configured with:

- GitHub Actions workflow for automated deployments
- Vite configuration for GitHub Pages base URL
- Proper routing setup for GitHub Pages

#### How it works

1. Every push to the `main` branch triggers the deployment workflow
2. The workflow:
   - Builds the project
   - Deploys to the `gh-pages` branch
   - Updates the GitHub Pages site

#### Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Your site will be available at: `https://prikhoda-natalia.github.io`
