# 📍 MapLink-Profiles

A responsive profile management application built with React and Vite.


# 🌐 Live Demo:- [MapLinkProfiles](https://maplinkprofiles.netlify.app/)

# 📹 Video Demo:- [Watch the video](https://www.youtube.com/watch?v=MzmUsGqmy0M)
---

## 🧩 Overview

**MapLink-Profiles** is a profile management application built using **React** and **Vite**, styled with **Tailwind CSS**, and powered by **React Router** and **Context API** for navigation and state handling. It supports full CRUD operations and features optional **Google Maps integration** for geolocation tagging.

🎨 The UI was designed and built entirely from scratch, focusing on clean layout, responsive design, and intuitive user interactions.

---

## 🚀 Features

- 🔍 Search profiles by name or location  
- ➕ Add new profiles  
- ✏️ Edit existing profiles  
- 🗑️ Delete profiles  
- 📱 Fully responsive (mobile-first)  
- 🗺️ Optional integration with Google Maps for location display  

---

## 🛠️ Tech Stack

- **Frontend**: React (with Hooks & Context)
- **Build Tool**: Vite (with HMR)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Maps**: Google Maps API *(optional)*

## 📦 Installation

### ✅ Prerequisites
- Node.js (v16 or later)
- npm (v7 or later)

### 🔧 Setup

```bash
# Clone the repo
git clone https://github.com/Amanc77/MapLink-Profiles.git
cd MapLink-Profiles



#### Install dependencies:
```bash
npm install
```

#### Start the development server:
```bash
npm run dev
```

Visit: http://localhost:5173

---

## 📚 Dependencies

These are already included in package.json, but you can install them individually if needed.

### React and React DOM:
```bash
npm install react react-dom
```

### Vite (Build tool with HMR):
```bash
npm install vite --save-dev
```

### Vite Plugin for React:
```bash
npm install @vitejs/plugin-react --save-dev
```

### React Router DOM:
```bash
npm install react-router-dom
```

### Tailwind CSS (Utility-first CSS framework):
```bash
npm install tailwindcss postcss autoprefixer --save-dev
```

#### Initialize Tailwind CSS:
```bash
npx tailwindcss init -p
```

### ESLint (Linting and Code Quality):
```bash
npm install eslint --save-dev
```

#### Initialize ESLint:
```bash
npx eslint --init
```

---

## 🌍 Optional: Google Maps

If using the GoogleMap.jsx component for location mapping:
```bash
npm install @googlemaps/js-api-loader
```

> Note: You'll need a **Google Maps API key**. Add it to your environment variables or directly in GoogleMap.jsx.

---

## 📜 Available Scripts

```bash
npm run dev      # Starts the development server with HMR
npm run build    # Builds the app for production
npm run lint     # Runs ESLint for code quality checks
npm run preview  # Previews the production build locally
```

---

## 📂 Project Structure

```bash
src/
├── assets/            # Static assets like images
├── components/        # Reusable components (ProfileCard.jsx, ProfileList.jsx, etc.)
├── context/           # React Context for state (ProfileContext.jsx)
├── pages/             # Page components (AddProfile.jsx, ProfileDetails.jsx, etc.)
├── App.jsx            # Main app component
├── main.jsx           # Entry point
```

---

## 👤 Contact

**Author**: Aman ([@Amanc77](https://github.com/Amanc77))  
📧 **Email**: amankrc7@gmail.com  
🌐 **Portfolio**: https://amanc77.github.io/Amanc7/  
