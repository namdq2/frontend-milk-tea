# LuxBoba - Premium Bubble Tea Shop

A modern, responsive frontend for a premium bubble tea shop built with React, TypeScript, and Tailwind CSS.

## Project Summary

LuxBoba is a React-based web application for a premium bubble tea shop. The site features a clean, modern design with full e-commerce capabilities including product browsing, shopping cart functionality, user profiles, and location information.

## Features

- Responsive design that works on mobile and desktop
- Product catalog with filtering by categories
- Shopping cart with Zustand state management
- User authentication interface
- Store locations with map integration
- Product search functionality
- Customizable bubble tea options (size, sugar level, ice level, toppings)

## Tech Stack

- React 18.3.1
- TypeScript
- Vite for fast development and building
- React Router for navigation
- Zustand for state management
- Tailwind CSS for styling
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js (v16 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at http://localhost:5173 (or another port if 5173 is in use).

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

This will generate optimized files in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Deployment

The project can be deployed to various platforms:

### Static Hosting (Netlify, Vercel, GitHub Pages)

1. Build the project
2. Deploy the `dist` directory to your preferred static hosting provider.

### Docker Deployment

Create a Dockerfile in the project root:

```dockerfile
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run the Docker container:

```bash
docker build -t luxboba-frontend .
docker run -p 8080:80 luxboba-frontend
```

## Project Structure
```
luxboba/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── store/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```