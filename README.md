# 🎬 Netflix Clone Backend

A complete backend API for a Netflix clone application built with Node.js, Express.js, and MongoDB.

## ✨ Features

### ✅ Implemented Features
- **Trending Movies API** - Fetch trending movies from `/api/movies/trending`
- **Movie Management** - Complete CRUD operations for movies
- **Search Functionality** - Search movies by title, description, director, or cast
- **Category Filtering** - Get popular movies, new releases, and trending content
- **CORS Support** - Configured for frontend integration
- **RESTful API Design** - Clean and consistent API endpoints

### 🚧 Future Features (Planned)
- **User Authentication** - JWT-based login/register system
- **Watchlist Management** - Personal movie watchlists
- **Admin Panel** - Movie management for administrators
- **Rating System** - User ratings and reviews

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd netflix-clone-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/netflix-clone
   JWT_SECRET=your-secret-key-here
   ```

4. **Seed the database** (optional)
   ```bash
   npm run seed
   ```

5. **Start the server**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   npm start
   ```

## 📡 API Endpoints

### Movies

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/movies` | Get all movies |
| GET | `/api/movies/trending` | Get trending movies |
| GET | `/api/movies/popular` | Get popular movies |
| GET | `/api/movies/new-releases` | Get new releases |
| GET | `/api/movies/search?q=query&genre=action` | Search movies |
| GET | `/api/movies/:id` | Get movie by ID |

### Example Response

```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "64f7b1c2e1b4a5d6c7e8f9a0",
      "title": "Stranger Things",
      "description": "When a young boy disappears...",
      "genre": ["Drama", "Fantasy", "Horror"],
      "releaseYear": 2016,
      "duration": "51m",
      "rating": "TV-14",
      "imdbRating": 8.7,
      "posterUrl": "https://image.tmdb.org/t/p/w500/...",
      "backdropUrl": "https://image.tmdb.org/t/p/w1280/...",
      "isTrending": true,
      "isPopular": true,
      "cast": [
        {
          "name": "Millie Bobby Brown",
          "character": "Eleven"
        }
      ],
      "director": "The Duffer Brothers"
    }
  ]
}
```

## 🗃️ Database Schema

### Movie Model

```javascript
{
  title: String (required),
  description: String (required),
  genre: [String] (required),
  releaseYear: Number (required),
  duration: String (required),
  rating: String (required), // PG-13, R, TV-MA, etc.
  imdbRating: Number (0-10),
  posterUrl: String (required),
  backdropUrl: String,
  trailerUrl: String,
  isTrending: Boolean (default: false),
  isPopular: Boolean (default: false),
  isNewRelease: Boolean (default: false),
  cast: [{
    name: String,
    character: String
  }],
  director: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🧪 Testing

### Test the API endpoints

1. **Start the server**
   ```bash
   npm run dev
   ```

2. **Test with curl**
   ```bash
   # Get trending movies
   curl http://localhost:5000/api/movies/trending
   
   # Search movies
   curl "http://localhost:5000/api/movies/search?q=stranger"
   
   # Get all movies
   curl http://localhost:5000/api/movies
   ```

3. **Test with a browser**
   - Open `http://localhost:5000/api/movies/trending` in your browser

### Using with Frontend

To connect this backend with your frontend application:

```javascript
// Example: Fetch trending movies
const fetchTrendingMovies = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/movies/trending');
    const data = await response.json();
    
    if (data.success) {
      console.log('Trending movies:', data.data);
      return data.data;
    }
  } catch (error) {
    console.error('Error fetching trending movies:', error);
  }
};
```

## 📁 Project Structure

```
netflix-clone-backend/
├── controllers/
│   └── movieController.js    # Movie-related business logic
├── models/
│   └── Movie.js             # MongoDB movie schema
├── routes/
│   └── movies.js            # Movie API routes
├── scripts/
│   └── seedData.js          # Database seeding script
├── .env                     # Environment variables
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies and scripts
├── server.js               # Main server file
└── README.md               # This file
```

## 🔧 Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run seed       # Seed database with sample data
```

## 🌍 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/netflix-clone |
| `JWT_SECRET` | JWT signing secret | your-secret-key-here |

## 🚀 Deployment

### Deploy to Render/Railway

1. Push your code to GitHub
2. Connect your repository to Render/Railway
3. Set environment variables in the deployment platform
4. Your API will be available at the provided URL

### Deploy to Heroku

```bash
# Install Heroku CLI and login
heroku login

# Create a new app
heroku create your-netflix-backend

# Set environment variables
heroku config:set MONGODB_URI=your-mongodb-atlas-uri
heroku config:set JWT_SECRET=your-secret-key

# Deploy
git push heroku main
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Issues & Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Happy Coding! 🎬✨**