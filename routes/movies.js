const express = require('express');
const router = express.Router();
const {
  getTrendingMovies,
  getAllMovies,
  getPopularMovies,
  getNewReleases,
  getMovieById,
  searchMovies
} = require('../controllers/movieController');

// @route   GET /api/movies/trending
// @desc    Get trending movies
// @access  Public
router.get('/trending', getTrendingMovies);

// @route   GET /api/movies/popular
// @desc    Get popular movies
// @access  Public
router.get('/popular', getPopularMovies);

// @route   GET /api/movies/new-releases
// @desc    Get new releases
// @access  Public
router.get('/new-releases', getNewReleases);

// @route   GET /api/movies/search
// @desc    Search movies
// @access  Public
router.get('/search', searchMovies);

// @route   GET /api/movies/:id
// @desc    Get movie by ID
// @access  Public
router.get('/:id', getMovieById);

// @route   GET /api/movies
// @desc    Get all movies
// @access  Public
router.get('/', getAllMovies);

module.exports = router;