# CountryPeek

CountryPeek is a React app for searching, exploring, and saving country information from the RestCountries API.

## Live Demo
Add your deployed URL here once the app is live.

## Features
- Search countries by name with live filtering
- Filter by region and sort results by name or population
- View detailed country pages with languages, currencies, and borders
- Dark/light theme toggle for easy reading
- Save favourite countries with persistent localStorage storage
- Mobile-friendly layout and improved accessibility

## Tech Stack
- React
- Vite
- React Router
- CSS custom properties
- Context API and useReducer
- RestCountries API

## Run Locally
```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Deploy
This project is configured for GitHub Pages.

```bash
npm install
npm run deploy
```

Then enable GitHub Pages in your repository settings and set the source to the `gh-pages` branch.

## Notes
- If you deploy to GitHub Pages, the app base path is configured for `/country-peek/`.
- The favourites list is stored in localStorage and persists across refreshes.
