const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Movie = require('../models/Movie');
const Actor = require('../models/Actor');
const Review = require('../models/Review');

const seedDB = async () => {
  await connectDB();
  await Movie.deleteMany({});
  await Actor.deleteMany({});
  await Review.deleteMany({});

  
  const actors = await Actor.insertMany([
    { name: 'Jim Carrey', age: 52, alive: true },
    { name: 'Hugh Jackman', age: 40, alive: true },
    { name: 'Ryan Reynolds', age: 50, alive: false },
    { name: 'Chris Hemsworth', age: 30, alive: true },
    { name: 'Tom Holland', age: 31, alive: true },
  ]);

  
  const movies = await Movie.insertMany([
    { title: 'Ace Ventura', runtime: 120, rating: 8, yearReleased: 1998, description: 'Hilarious Comedy starring Jim Carrey as a Pet Detective in Miami', actors: [actors[0]._id, actors[1]._id] },
    { title: 'Deadpool and Wolverine', runtime: 150, rating: 7, yearReleased: 2024, description: 'Deadpool and Wollverine Unite', actors: [actors[2]._id, actors[3]._id] },
    { title: 'Frozen', runtime: 150, rating: 9, yearReleased: 2017, description: 'Inspiring Disney Movie', actors: [actors[4]._id] },
  ]);

  
  await Review.insertMany([
    { movie: movies[0]._id, score: 8, comment: 'Great movie!' },
    { movie: movies[0]._id, score: 9, comment: 'Loved it!' },
    { movie: movies[1]._id, score: 6, comment: 'It was okay.' },
    { movie: movies[2]._id, score: 10, comment: 'Best movie ever!' },
  ]);

  console.log('Database seeded!');
  mongoose.connection.close();
};

seedDB();