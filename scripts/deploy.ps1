# Build and deploy to GitHub Pages

npm install
npm run build

# If using GitHub Actions, commit dist/ changes
git add dist/
git commit -m "Build site"
git push
