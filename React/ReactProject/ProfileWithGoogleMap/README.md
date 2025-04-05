# Bynry Case Study

A responsive profile management application built with React and Vite.

# Video: [Screencast from 03-04-25 01:09:22 PM IST.webm](https://github.com/user-attachments/assets/e3a69b46-1b2a-4d72-837e-cc5c581d8782)

This project is a profile management application built with React and Vite, featuring a responsive design with Tailwind CSS and navigation via React Router. It allows users to view, add, edit, and delete profiles, with state management handled by React Context API.

## Features

- View a list of profiles with search functionality
- Add, edit, and delete profiles with detailed fields (name, email, image, etc.)
- Responsive design for mobile, tablet, and desktop
- Optional location mapping with Google Maps (requires API key)

## Tech Stack

- **Frontend:** React
- **Build Tool:** Vite with HMR (Hot Module Replacement)
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **State Management:** React Context API

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Amanc77/bynry-CaseStudy.git
   cd bynry-CaseStudy
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser to view the app.

## Available Scripts

- `npm run dev`: Starts the development server with HMR
- `npm run build`: Builds the app for production
- `npm run lint`: Runs ESLint to check for code quality issues
- `npm run preview`: Previews the production build locally

## Project Structure

- `src/components/`: Reusable components (e.g., `ProfileCard.jsx`, `ProfileList.jsx`)
- `src/pages/`: Page components (e.g., `AddProfile.jsx`, `ProfileDetails.jsx`)
- `src/context/`: React Context for state management (`ProfileContext.jsx`)
- `src/assets/`: Static assets (e.g., images)
- `src/App.jsx`: Main app component
- `src/main.jsx`: Entry point


## Contact

- **Author:** Aman (Amanc77)
- **GitHub:** [https://github.com/Amanc77](https://github.com/Amanc77)
