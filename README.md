# 🎬 MovieVerse — Discover Trending Movies & TV Shows

**MovieVerse** is a modern web application that allows users to explore trending and top-rated movies or TV series.  
Users can view detailed information such as cast, description, and even access watch options — all with a clean, responsive, and cinematic design.

---

## 🚀 Features

- 🔥 **Trending & Top Content**
  - See what’s trending or most popular in movies and TV shows.
- 🎥 **Detailed Movie & TV Pages**
  - View posters, descriptions, release dates, ratings, and more.
- 👥 **Cast Information**
  - Explore full cast details for each movie or series.
- 🖼️ **Dynamic Image Loading**
  - Optimized image rendering using Next.js `<Image />` with blur placeholders.
- ⚡ **API Integration**
  - Powered by [TMDB API](https://www.themoviedb.org/documentation/api) for real-time movie data.
- 📱 **Responsive Design**
  - Optimized for mobile, tablet, and desktop.
- 🧱 **Skeleton & Fallback States**
  - Smooth loading experience for slower connections.

---

## 🧭 Pages Overview

| Page          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| `/`           | Home page showing trending and top-rated movies & TV series.  |
| `/movies`     | All movies, sorted by popularity and rating.                  |
| `/tv`         | All TV shows, sorted by popularity and rating.                |
| `/movie/[id]` | Movie detail page (description, cast, and watch options).     |
| `/tv/[id]`    | TV series detail page (description, cast, and watch options). |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15.5](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Charting / Slider (if used):** Keen Slider / Recharts _(optional mention if in project)_
- **Data Source:** [TMDB API](https://www.themoviedb.org/documentation/api)
- **Hosting:** Vercel _(recommended)_

---

## ⚙️ Environment Variables

Before running the project, create a `.env.local` file and add the following:

```bash
BASE_URL=http://localhost:3000

TMDB_API_KEY=your_tmdb_api_key
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_POSTER_IMAGE_URL=https://image.tmdb.org/t/p/w500
TMDB_BACKDROP_IMAGE_URL=https://image.tmdb.org/t/p/original



```

---

## 🧩 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/movieverse.git
   cd movieverse
   ```
2. **Run the command below**

```bash
npm install
npm run dev
```
