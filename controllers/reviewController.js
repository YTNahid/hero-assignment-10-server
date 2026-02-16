const { ObjectId } = require('mongodb');
const client = require('../config/dbConnection');

const reviewCollection = client.db('hero').collection('reviews');

exports.getAllReviews = async (req, res) => {
  try {
    const result = await reviewCollection.find().sort({ createdAt: -1 }).toArray();
    res.send(result);
  } catch (error) {
    // console.log(error);
    res.status(500).send({ message: 'Failed to fetch reviews' });
  }
};

exports.addReview = async (req, res) => {
  try {
    const coffeeData = req.body;
    const result = await reviewCollection.insertOne(coffeeData);
    res.send(result);
  } catch (error) {
    // console.log(error);
  }
};

exports.getOneReview = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await reviewCollection.findOne({ _id: new ObjectId(id) });
    res.send(result);
  } catch (error) {
    // console.log(error);
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: new ObjectId(id) };
    const result = await reviewCollection.deleteOne(query);
    res.send(result);
  } catch (error) {
    // console.log(error);
  }
};

exports.updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = { _id: new ObjectId(id) };
    const update = {
      $set: {
        coverImage: req.body.coverImage,
        title: req.body.title,
        rating: req.body.rating,
        year: req.body.year,
        genre: req.body.genre,
        description: req.body.description,
        name: req.body.name,
        email: req.body.email,
      },
    };

    const result = await reviewCollection.updateOne(filter, update);
    if (result.matchedCount === 0) {
      return res.status(404).send({ error: 'Review not found.' });
    }

    res.send(result);
  } catch (error) {
    // console.log(error);
    res.status(404).send(error);
  }
};

exports.getHighestRatedReviews = async (req, res) => {
  try {
    const result = await reviewCollection.find().sort({ rating: -1 }).limit(8).toArray();
    res.send(result);
  } catch (error) {
    // console.log(error);
    res.status(404).send(error);
  }
};

exports.getReviewsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    // console.log('🚀 ~ exports.getReviewsByEmail= ~ email:', email);
    const result = await reviewCollection.find({ email }).toArray();
    res.send(result);
  } catch (error) {
    // console.log(error);
  }
};
