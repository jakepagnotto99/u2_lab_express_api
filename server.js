const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
const actorRoutes = require('./routes/actorRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(express.json());

app.use('/api/movies', movieRoutes);
app.use('/api/actors', actorRoutes);
app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Movie Database API!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
