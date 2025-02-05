## eShop - React App

An fake online shop with the following features:
✅ Redux for state management (even if the app is small)
✅ Dark mode toggle
✅ Graph data visualization
✅ React Router for navigation (Main page, Login, Dashboard)
✅ Lazy loading images on the Main page
✅ Reusable Product & Order cards
✅ API for product images (consistent size)

## API Suggestions for Graphs & Product Images

1. Graphs API:

-   CoinGecko API (for crypto price trends)
-   OpenWeather API (for temperature graphs)
-   Random Data API

2. Product Images (Same Size):

-   Unsplash API (?w=300&h=300 for fixed-size images)
-   Lorem Picsum (https://picsum.photos/300/300)

## Project Structure

```sh
/e-shop
│── /public
│── /src
│   ├── /assets             # Static assets (icons, themes, etc.)
│   ├── /components         # UI Components (ProductCard, OrderCard, Graphs)
│   ├── /features           # Feature-based components (Authentication, Shop)
│   ├── /hooks              # Custom Hooks (useDarkMode, useFetch)
│   ├── /contexts           # Context API (if needed)
│   ├── /redux              # Redux Store, Slices (authSlice, productsSlice)
│   ├── /services           # API calls (fetchProducts, fetchGraphs)
│   ├── /pages              # Pages (MainPage, LoginPage, Dashboard)
│   ├── /routes             # React Router Configuration
│   ├── /styles             # Global & Theming styles
│   ├── App.tsx             # Root component
│   ├── index.tsx           # Entry point
│── package.json            # Dependencies
│── .eslintrc.js            # Linter rules
│── .prettierrc             # Code formatting rules
│── tsconfig.json           # TypeScript config
```

## Dependencies

To set up the project, install these:

```sh
npm create vite@latest my-shop --template react-ts
cd my-shop
npm install redux react-redux @reduxjs/toolkit react-router-dom axios recharts
```

## Run the Development Server

```sh
npm run dev
```

## 3. Features

✅ Dark Mode Toggle

-   Controlled by Redux
-   Saves preference in localStorage

✅ Graphs (Charts)

-   Uses Recharts for visualization
-   Fetches live data from CoinGecko API

✅ Redux Store

-   themeSlice.ts → Dark mode state
-   productsSlice.ts → Fetches and stores product data

✅ Lazy Loaded Images

-   Improves performance with React.lazy & Suspense
-   Uses images from Lorem Picsum

✅ Routing

-   Main Page → Lazy-loaded product images
-   Login Page → Dummy login form
-   Dashboard → Displays graphs & product data

## API Sources

1. Graphs API

-   CoinGecko API (Crypto price trends)
-   OpenWeather API (Weather graphs)

2. Product Images

-   Lorem Picsum (https://picsum.photos/300/300)
