const express = require('express');
const connectDB = require('./config/db');
const Movie = require('./models/Movie');
const Actor = require('./models/Actor');
const Review = require('./models/Review');

const app = express();
const PORT = 3001;

connectDB();


app.use(express.json());


app.get('/', async (req, res) => {
  const movies = await Movie.find().populate('actors');
  res.json(movies);
});

app.get('/movies', async (req, res) => {
  const movies = await Movie.find().populate('actors');
  res.json(movies);
});

app.get('/movies/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id).populate('actors reviews');
  res.json(movie);
});

app.get('/actors', async (req, res) => {
  const actors = await Actor.find();
  res.json(actors);
});

app.get('/actors/:id', async (req, res) => {
  const actor = await Actor.findById(req.params.id);
  res.json(actor);
});

app.get('/reviews', async (req, res) => {
  const reviews = await Review.find().populate('movie');
  res.json(reviews);
});

app.get('/reviews/:id', async (req, res) => {
  const review = await Review.findById(req.params.id).populate('movie');
  res.json(review);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:$3001{PORT}`);
});