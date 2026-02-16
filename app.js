const express = require('express');
const cors = require('cors');
// const client = require('./config/dbConnection');

const app = express();

const reviewRouter = require('./routes/reviewRoutes');
const userRouter = require('./routes/userRoutes');

// ----- MIDDLEWARE
app.use(cors());
app.use(express.json());

// ----- DATABASE
// async function run() {
//   try {
//     await client.connect();
//     await client.db('admin').command({ ping: 1 });
//     console.log('Successfully connected to MongoDB... 📑');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }
// run().catch(console.dir);

// ----- ROUTES
app.get('/', (req, res) => {
  res.send(`<h1>Hero Assignment 10</h1>`);
});

app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
