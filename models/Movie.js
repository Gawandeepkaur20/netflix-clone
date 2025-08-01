const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  genre: [{
    type: String,
    required: true
  }],
  releaseYear: {
    type: Number,
    required: true
  },
  duration: {
    type: String, // e.g., "2h 30m" or "45m"
    required: true
  },
  rating: {
    type: String, // e.g., "PG-13", "R", "TV-MA"
    required: true
  },
  imdbRating: {
    type: Number,
    min: 0,
    max: 10
  },
  posterUrl: {
    type: String,
    required: true
  },
  backdropUrl: {
    type: String
  },
  trailerUrl: {
    type: String
  },
  isTrending: {
    type: Boolean,
    default: false
  },
  isPopular: {
    type: Boolean,
    default: false
  },
  isNewRelease: {
    type: Boolean,
    default: false
  },
  cast: [{
    name: String,
    character: String
  }],
  director: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
movieSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Movie', movieSchema);