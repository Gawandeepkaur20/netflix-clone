# 🎬 Netflix Clone Backend - TODO Checklist

This markdown file lists all the backend features I want to build for my Netflix clone.  
I'll check them off ✅ one by one as I complete them.

---

## 🔥 Trending Section API (First Feature)

### ✅ Goal:
Fetch trending movie/show cards from backend via API.

### 📌 What to do:
- [x] Create MongoDB collection for movies (trending included)  
- [x] Build a Mongoose model: `Movie.js`  
- [x] Add a field `isTrending: true/false` in movie schema  
- [x] Create controller function: `getTrendingMovies()`  
- [x] Set up Express route: `/api/movies/trending`  
- [x] Test the route using Postman or browser  
- [x] Fetch from frontend using `fetch()`  

---

## 🚧 Future Features (Coming Soon)

### 🎞️ Movie Management
- [ ] Add new movies (admin only)  
- [ ] Delete movie by ID  
- [ ] Update movie info  

### ❤️ Watchlist
- [ ] Create user watchlist schema  
- [ ] Add/remove movies to user's watchlist  
- [ ] Fetch user's watchlist  

### 👤 Auth (Login/Register)
- [ ] User signup with email/password  
- [ ] User login (JWT-based)  
- [ ] Protect routes (auth middleware)  

### 🔎 Search Feature
- [ ] Search API: `/api/movies/search?q=dark`  
- [ ] Support fuzzy matching and genre filtering  

---

## 🚀 Deployment
- [ ] Push backend to GitHub  
- [ ] Host API using Render / Railway  
- [ ] Connect hosted backend to frontend  

