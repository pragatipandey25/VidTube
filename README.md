<div align="center">

# 🎬 Streamify

### A Modern YouTube-Inspired Video Streaming Platform

Built with **React.js**, **Vite**, and the **YouTube Data API v3**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**A responsive YouTube clone that lets users discover trending videos, search content, watch videos, and explore channels through the YouTube Data API v3.**

---

### 🌐 Live Demo

**https://your-vercel-app.vercel.app**

### 📂 Repository

**https://github.com/pragatipandey25/Streamify**

</div>

---

# 📸 Preview

> Add screenshots after deployment.

| Home                      | Video Player               |
| ------------------------- | -------------------------- |
| ![](screenshots/home.png) | ![](screenshots/video.png) |

---

# ✨ Features

- 🎥 Browse trending YouTube videos
- 🔍 Search videos instantly
- 📺 Embedded YouTube video player
- 📂 Browse videos by category
- 👤 View channel information
- 👍 Display views, likes, and publish date
- 📱 Fully responsive UI
- ⚡ Fast loading with Vite
- 🎨 Modern Streamify branding
- 🧭 Dynamic routing with React Router
- 📡 Fetches live data using the YouTube Data API v3

---

# 🛠 Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- CSS3

### API

- YouTube Data API v3

### Tools

- Git
- GitHub
- VS Code
- Vercel

---

# 📂 Project Structure

```text
Streamify/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Feed/
│   │   ├── Navbar/
│   │   ├── PlayVideo/
│   │   ├── Recommended/
│   │   └── Sidebar/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Search/
│   │   └── Video/
│   │
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/pragatipandey25/Streamify.git
```

## Navigate to the project

```bash
cd Streamify
```

## Install dependencies

```bash
npm install
```

## Create a `.env` file

```env
VITE_API_KEY=YOUR_YOUTUBE_API_KEY
```

## Run the development server

```bash
npm run dev
```

Visit:

```
http://localhost:5173
```

---

# 🔑 YouTube API Setup

1. Open Google Cloud Console.
2. Create a project.
3. Enable **YouTube Data API v3**.
4. Create an API key.
5. Add the key to your `.env` file.

```env
VITE_API_KEY=YOUR_API_KEY
```

---

# 📜 Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

# 📱 Responsive Design

Optimized for:

- 💻 Desktop
- 💼 Laptop
- 📱 Tablet
- 📲 Mobile

---

# 🎯 Core Functionalities

## Home Page

- Trending videos
- Category sidebar
- Responsive grid layout

## Search

- Search YouTube videos
- Dynamic search results
- Responsive interface

## Video Player

- Embedded player
- Channel information
- Like count
- View count
- Publish date
- Recommended videos

---

# 🌟 Upcoming Features

- 🔐 Firebase Authentication
- 🌙 Dark Mode
- ❤️ Watch Later
- 📂 Playlists
- 🔔 Notifications
- 💬 Comments
- 🎙 Voice Search
- 📈 Infinite Scroll
- 👤 User Profiles

---

# 🚀 Deployment

This project is deployed using **Vercel**.

To deploy:

```bash
npm run build
```

Import the repository into Vercel and add:

```
VITE_API_KEY=YOUR_YOUTUBE_API_KEY
```

as an environment variable.

---

# 🤝 Contributing

Contributions are welcome.

```bash
git checkout -b feature/new-feature
git commit -m "Add new feature"
git push origin feature/new-feature
```

Then open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👩‍💻 Author

**Pragati Pandey**

- GitHub: https://github.com/pragatipandey25
- Repository: https://github.com/pragatipandey25/Streamify

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star!

**Made with ❤️ using React, Vite, and the YouTube Data API**

</div>
