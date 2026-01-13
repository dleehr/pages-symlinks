# GitHub Pages Example Site

A simple static website deployed to GitHub Pages using GitHub Actions.

## Files

- `index.html` - Main HTML page
- `styles.css` - Styling
- `script.js` - Interactive JavaScript
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow

## Deployment

This site uses GitHub Actions to automatically deploy to GitHub Pages. The workflow:

1. **Build Job**: Uploads the site as an artifact using `actions/upload-pages-artifact@v3`
2. **Deploy Job**: Deploys the artifact using `actions/deploy-pages@v4`

### Setup Instructions

1. Push this repository to GitHub
2. Go to your repository Settings > Pages
3. Under "Build and deployment", set Source to "GitHub Actions"
4. Push to the `main` branch or manually trigger the workflow from the Actions tab
5. Your site will be available at `https://<username>.github.io/<repository-name>/`

### Manual Deployment

You can manually trigger the deployment workflow from the Actions tab in your GitHub repository.

## Features

- Responsive design
- Interactive button with click counter
- Modern gradient styling
- Automated deployment pipeline
