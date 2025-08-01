const mongoose = require('mongoose');
const Movie = require('../models/Movie');
require('dotenv').config();

// Sample movie data
const sampleMovies = [
  {
    title: "Stranger Things",
    description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    genre: ["Drama", "Fantasy", "Horror"],
    releaseYear: 2016,
    duration: "51m",
    rating: "TV-14",
    imdbRating: 8.7,
    posterUrl: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    isTrending: true,
    isPopular: true,
    cast: [
      { name: "Millie Bobby Brown", character: "Eleven" },
      { name: "Finn Wolfhard", character: "Mike Wheeler" }
    ],
    director: "The Duffer Brothers"
  },
  {
    title: "The Witcher",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    genre: ["Action", "Adventure", "Drama"],
    releaseYear: 2019,
    duration: "60m",
    rating: "TV-MA",
    imdbRating: 8.2,
    posterUrl: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/wmN4vw1PJJJGEqjAz7ym0q8y4V7.jpg",
    isTrending: true,
    isPopular: true,
    cast: [
      { name: "Henry Cavill", character: "Geralt of Rivia" },
      { name: "Anya Chalotra", character: "Yennefer" }
    ],
    director: "Lauren Schmidt Hissrich"
  },
  {
    title: "Wednesday",
    description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    genre: ["Comedy", "Crime", "Fantasy"],
    releaseYear: 2022,
    duration: "50m",
    rating: "TV-14",
    imdbRating: 8.1,
    posterUrl: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    isTrending: true,
    isNewRelease: true,
    cast: [
      { name: "Jenna Ortega", character: "Wednesday Addams" },
      { name: "Emma Myers", character: "Enid Sinclair" }
    ],
    director: "Alfred Gough"
  },
  {
    title: "Money Heist",
    description: "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose.",
    genre: ["Action", "Crime", "Mystery"],
    releaseYear: 2017,
    duration: "70m",
    rating: "TV-MA",
    imdbRating: 8.3,
    posterUrl: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/xGexTKCJJVSKTdBFOXvOgqmgc6j.jpg",
    isTrending: true,
    isPopular: true,
    cast: [
      { name: "Álvaro Morte", character: "The Professor" },
      { name: "Úrsula Corberó", character: "Tokyo" }
    ],
    director: "Álex Pina"
  },
  {
    title: "Dark",
    description: "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
    genre: ["Crime", "Drama", "Mystery"],
    releaseYear: 2017,
    duration: "60m",
    rating: "TV-MA",
    imdbRating: 8.8,
    posterUrl: "https://image.tmdb.org/t/p/w500/rrGK9ct3PB2UVEwXLBktXpjMYQG.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/bHjz2Ue09pFr7YKjN8DQGr6vqGU.jpg",
    isTrending: true,
    isPopular: true,
    cast: [
      { name: "Louis Hofmann", character: "Jonas Kahnwald" },
      { name: "Oliver Masucci", character: "Ulrich Nielsen" }
    ],
    director: "Baran bo Odar"
  },
  {
    title: "Squid Game",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    genre: ["Action", "Drama", "Mystery"],
    releaseYear: 2021,
    duration: "60m",
    rating: "TV-MA",
    imdbRating: 8.0,
    posterUrl: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/qw3J9cNeLioOLoR68WX7z79aCdK.jpg",
    isTrending: true,
    isPopular: true,
    isNewRelease: true,
    cast: [
      { name: "Lee Jung-jae", character: "Seong Gi-hun" },
      { name: "Park Hae-soo", character: "Cho Sang-woo" }
    ],
    director: "Hwang Dong-hyuk"
  },
  {
    title: "The Crown",
    description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    genre: ["Biography", "Drama", "History"],
    releaseYear: 2016,
    duration: "58m",
    rating: "TV-MA",
    imdbRating: 8.6,
    posterUrl: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
    isTrending: false,
    isPopular: true,
    cast: [
      { name: "Claire Foy", character: "Queen Elizabeth II" },
      { name: "Matt Smith", character: "Prince Philip" }
    ],
    director: "Peter Morgan"
  },
  {
    title: "Ozark",
    description: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    genre: ["Crime", "Drama", "Thriller"],
    releaseYear: 2017,
    duration: "60m",
    rating: "TV-MA",
    imdbRating: 8.4,
    posterUrl: "https://image.tmdb.org/t/p/w500/m73QiJJ5VEiMA4tRa2JJx1Qe8Xc.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/cnmd1xLnXOGXp8GNhZoXj9hTFRt.jpg",
    isTrending: false,
    isPopular: true,
    cast: [
      { name: "Jason Bateman", character: "Martin 'Marty' Byrde" },
      { name: "Laura Linney", character: "Wendy Byrde" }
    ],
    director: "Bill Dubuque"
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/netflix-clone', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing movies
    await Movie.deleteMany({});
    console.log('Cleared existing movies');

    // Insert sample movies
    await Movie.insertMany(sampleMovies);
    console.log(`Successfully seeded ${sampleMovies.length} movies`);

    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();