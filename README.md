# 🎬 Streamify

A modern **YouTube-inspired video streaming platform** built with **React.js**, **Vite**, and the **YouTube Data API v3**. Streamify allows users to browse trending videos, search for content, watch videos, and explore different categories through a clean, responsive, and intuitive interface.

---

## 🚀 Features

- 🔥 Browse trending YouTube videos
- 🔍 Search videos in real time
- 📺 Watch videos with an embedded YouTube player
- 📂 Explore videos by category
- 👤 View channel information
- 👍 Display likes, views, and publish date
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎨 Modern YouTube-inspired UI
- 🧭 React Router for seamless navigation

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- CSS3

### API

- YouTube Data API v3

### Development Tools

- Git
- GitHub
- VS Code

---

## 📁 Project Structure

```text
streamify/
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
│   ├── data.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/streamify.git
```

### 2. Navigate to the project

```bash
cd streamify
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
VITE_API_KEY=YOUR_YOUTUBE_API_KEY
```

### 5. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🔑 Getting a YouTube API Key

1. Go to **Google Cloud Console**
2. Create a new project.
3. Enable **YouTube Data API v3**.
4. Create an API Key.
5. Add it to your `.env` file.

Example:

```env
VITE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXX
```

---

## 📜 Available Scripts

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 📱 Responsive Design

The application is optimized for:

- 💻 Desktop
- 💼 Laptop
- 📱 Tablet
- 📲 Mobile

---

## 📸 Screenshots

### Home Page

> Add your screenshot here.

```text
screenshots/home.png
```

### Video Player

> Add your screenshot here.

```text
screenshots/video.png
```

### Search Results

> Add your screenshot here.

```text
screenshots/search.png
```

---

## 🌟 Future Enhancements

- 🌙 Dark Mode
- 🔐 User Authentication
- ❤️ Watch Later
- 📃 Playlists
- 🎙 Voice Search
- 🔔 Notifications
- 💬 Comment System
- 📈 Infinite Scrolling
- 👥 User Subscriptions

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.

2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push your branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Your Name**

- GitHub: https://github.com/yourusername
- LinkedIn: https://linkedin.com/in/yourprofile
- Email: your@email.com

---

## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub!

---

<p align="center">
Made with ❤️ using React, Vite, and the YouTube Data API
</p>
