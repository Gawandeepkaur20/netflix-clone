const Movie = require('../models/Movie');

// @desc    Get trending movies
// @route   GET /api/movies/trending
// @access  Public
const getTrendingMovies = async (req, res) => {
  try {
    const trendingMovies = await Movie.find({ isTrending: true })
      .sort({ createdAt: -1 })
      .limit(20);

    res.json({
      success: true,
      count: trendingMovies.length,
      data: trendingMovies
    });
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Get all movies
// @route   GET /api/movies
// @access  Public
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find()
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: movies.length,
      data: movies
    });
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Get popular movies
// @route   GET /api/movies/popular
// @access  Public
const getPopularMovies = async (req, res) => {
  try {
    const popularMovies = await Movie.find({ isPopular: true })
      .sort({ imdbRating: -1 })
      .limit(20);

    res.json({
      success: true,
      count: popularMovies.length,
      data: popularMovies
    });
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Get new releases
// @route   GET /api/movies/new-releases
// @access  Public
const getNewReleases = async (req, res) => {
  try {
    const newReleases = await Movie.find({ isNewRelease: true })
      .sort({ releaseYear: -1 })
      .limit(20);

    res.json({
      success: true,
      count: newReleases.length,
      data: newReleases
    });
  } catch (error) {
    console.error('Error fetching new releases:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Get movie by ID
// @route   GET /api/movies/:id
// @access  Public
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: 'Movie not found'
      });
    }

    res.json({
      success: true,
      data: movie
    });
  } catch (error) {
    console.error('Error fetching movie:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Search movies
// @route   GET /api/movies/search
// @access  Public
const searchMovies = async (req, res) => {
  try {
    const { q, genre } = req.query;
    
    let query = {};
    
    if (q) {
      query.$or = [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { director: { $regex: q, $options: 'i' } },
        { 'cast.name': { $regex: q, $options: 'i' } }
      ];
    }
    
    if (genre) {
      query.genre = { $in: [genre] };
    }

    const movies = await Movie.find(query)
      .sort({ imdbRating: -1 })
      .limit(50);

    res.json({
      success: true,
      count: movies.length,
      data: movies
    });
  } catch (error) {
    console.error('Error searching movies:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

module.exports = {
  getTrendingMovies,
  getAllMovies,
  getPopularMovies,
  getNewReleases,
  getMovieById,
  searchMovies
};